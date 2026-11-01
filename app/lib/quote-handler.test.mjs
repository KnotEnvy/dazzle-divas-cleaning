import test from 'node:test';
import assert from 'node:assert/strict';
import { createQuoteHandler } from './quote-handler.mjs';
const valid = { name: '李 O’Connor', email: 'person@example.com', phone: '+44 1234 567890', message: 'Here is a description of the cleaning needed.', serviceType: 'residential' };
const request = (body = valid, headers = {}) => new Request('https://example.com/api/quote', { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
const env = { LEAD_WEBHOOK_URL: 'https://destination.test' };
test('valid international name/prose delivers, duplicates coalesce', async () => {
  let calls = 0;
  const handler = createQuoteHandler({ env, fetcher: async () => { calls++; return new Response('', { status: 200 }); } });
  const results = await Promise.all([handler(request()), handler(request())]);
  for (const result of results) assert.equal((await result.json()).delivered, true);
  assert.equal(calls, 1);
});
test('honeypot and structural spam never notify', async () => {
  let calls = 0; const handler = createQuoteHandler({ env, fetcher: async () => { calls++; } });
  assert.equal((await handler(request({ ...valid, company: 'bot' }))).status, 202);
  assert.equal((await handler(request({ ...valid, message: '<script>alert(1)</script>' }))).status, 422);
  assert.equal(calls, 0);
});
test('null, primitive, array, invalid fields and oversized bodies', async () => {
  const handler = createQuoteHandler({ env, fetcher: () => assert.fail('notification') });
  for (const body of [null, 1, 'text', []]) assert.equal((await handler(request(body))).status, 400);
  for (const body of [{}, { ...valid, message: 'short' }, { ...valid, name: 'a'.repeat(101) }]) assert.equal((await handler(request(body))).status, 422);
  assert.equal((await handler(request({ message: 'a'.repeat(17000) }))).status, 413);
});
test('non-2xx and network/timeout failures never report success or retry ambiguously', async () => {
  for (const failure of [400, 429, 500, 'network', 'timeout']) {
    let calls = 0;
    const handler = createQuoteHandler({ env, fetcher: async () => { calls++; if (typeof failure === 'string') throw new DOMException(failure, failure === 'timeout' ? 'TimeoutError' : 'NetworkError'); return new Response('', { status: failure }); } });
    assert.equal((await handler(request())).status, 502); assert.equal(calls, 1);
  }
  assert.equal((await createQuoteHandler({ env: {} })(request())).status, 502);
});
test('bounded abort signal is passed to delivery', async () => {
  const handler = createQuoteHandler({ env, timeoutMs: 5, fetcher: async (_url, { signal }) => new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 100);
    signal.addEventListener('abort', () => { clearTimeout(timer); reject(signal.reason); });
  }) });
  assert.equal((await handler(request())).status, 502);
});
test('Turnstile disabled and partial inactive config preserve delivery', async () => {
  const handler = createQuoteHandler({ env: { ...env, TURNSTILE_SECRET_KEY: 'test-only' }, fetcher: async url => { assert.equal(url, env.LEAD_WEBHOOK_URL); return new Response(''); } });
  assert.equal((await handler(request())).status, 200);
});
test('enabled challenge misconfiguration, token, hostname/action and service failures fail closed', async () => {
  const configured = { ...env, TURNSTILE_ENABLED: 'true', TURNSTILE_SECRET_KEY: 'test-only', NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test-only', TURNSTILE_HOSTNAMES: 'example.com' };
  assert.equal((await createQuoteHandler({ env: { ...env, TURNSTILE_ENABLED: 'true' } })(request())).status, 503);
  assert.equal((await createQuoteHandler({ env: configured })(request())).status, 422);
  for (const result of [{ success: false }, { success: true, hostname: 'evil.test', action: 'quote' }, { success: true, hostname: 'example.com', action: 'wrong' }, null]) {
    const handler = createQuoteHandler({ env: configured, fetcher: async url => { assert.match(url, /siteverify/); if (!result) throw Error('offline'); return Response.json(result); } });
    assert.ok([422, 503].includes((await handler(request({ ...valid, turnstileToken: 'token' }))).status));
  }
  let calls = 0;
  const handler = createQuoteHandler({ env: configured, fetcher: async url => { calls++; return url.includes('siteverify') ? Response.json({ success: true, hostname: 'example.com', action: 'quote' }) : new Response(''); } });
  assert.equal((await handler(request({ ...valid, turnstileToken: 'token' }))).status, 200); assert.equal(calls, 2);
});
test('rate limiting bounds repeated invalid attempts', async () => {
  const handler = createQuoteHandler({ env });
  for (let i = 0; i < 10; i++) assert.equal((await handler(request(null))).status, 400);
  assert.equal((await handler(request())).status, 429);
});
test('EmailJS REST uses server config, private key and checks status', async () => {
  const handler = createQuoteHandler({ env: { EMAILJS_SERVICE_ID: 'service', EMAILJS_TEMPLATE_ID: 'template', EMAILJS_PUBLIC_KEY: 'public', EMAILJS_PRIVATE_KEY: 'private-test' }, fetcher: async (url, options) => { assert.match(url, /emailjs/); const body = JSON.parse(options.body); assert.equal(body.accessToken, 'private-test'); assert.equal(body.template_params.from_name, valid.name); return new Response('OK'); } });
  assert.equal((await handler(request())).status, 200);
});

test('foreign origins, non-JSON requests and malformed JSON never notify', async () => {
  const handler = createQuoteHandler({ env, fetcher: () => assert.fail('notification') });
  assert.equal((await handler(request(valid, { origin: 'https://untrusted.test' }))).status, 403);
  assert.equal((await handler(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  const malformed = new Request('https://example.com/api/quote', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{' });
  assert.equal((await handler(malformed)).status, 400);
});

test('idempotent webhook retries transient responses with the same key, never permanent errors', async () => {
  const keys = [];
  const handler = createQuoteHandler({ env: { ...env, LEAD_WEBHOOK_IDEMPOTENT: 'true' }, fetcher: async (_url, options) => {
    keys.push(options.headers['Idempotency-Key']);
    return new Response('', { status: keys.length === 1 ? 503 : 200 });
  } });
  assert.equal((await handler(request())).status, 200);
  assert.equal(keys.length, 2);
  assert.equal(keys[0], keys[1]);
  let permanentCalls = 0;
  const rejected = createQuoteHandler({ env: { ...env, LEAD_WEBHOOK_IDEMPOTENT: 'true' }, fetcher: async () => { permanentCalls++; return new Response('', { status: 400 }); } });
  assert.equal((await rejected(request())).status, 502);
  assert.equal(permanentCalls, 1);
});

test('delivery rejection allows a later retry and successful deduplication expires', async () => {
  let calls = 0, time = 0;
  const handler = createQuoteHandler({ env, now: () => time, fetcher: async () => new Response('', { status: ++calls === 1 ? 503 : 200 }) });
  assert.equal((await handler(request())).status, 502);
  assert.equal((await handler(request())).status, 200);
  assert.equal((await handler(request())).status, 200);
  assert.equal(calls, 2);
  time = 600001;
  assert.equal((await handler(request())).status, 200);
  assert.equal(calls, 3);
});
