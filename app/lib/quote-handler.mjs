import { createHash, randomUUID } from 'node:crypto';

// Instance-local bounds only. Use edge/distributed limits for a global deployment.
export function createQuoteHandler({ env = process.env, fetcher = fetch, now = Date.now, timeoutMs = 5000 } = {}) {
  const hits = new Map(), deliveries = new Map();
  const reply = (body, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });
  const failure = (status, error) => reply({ ok: false, error }, status);
  async function post(url, body, headers = {}) {
    return fetcher(url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body), signal: AbortSignal.timeout(timeoutMs), redirect: 'error' });
  }
  async function deliver(data, id) {
    // Choose one destination: never send to both or fall back after an ambiguous failure.
    if (env.LEAD_WEBHOOK_URL) {
      for (let attempt = 0; attempt < 2; attempt++) {
        const res = await post(env.LEAD_WEBHOOK_URL, { ...data, id, receivedAt: new Date(now()).toISOString() }, { 'Idempotency-Key': id });
        if (res.ok) return;
        // Retry only a definitive transient rejection, and only with receiver dedup support.
        if (!env.LEAD_WEBHOOK_IDEMPOTENT || env.LEAD_WEBHOOK_IDEMPOTENT !== 'true' || attempt || ![429, 502, 503, 504].includes(res.status)) throw Error('delivery');
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    } else {
      const service = env.EMAILJS_SERVICE_ID || env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const template = env.EMAILJS_TEMPLATE_ID || env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const key = env.EMAILJS_PUBLIC_KEY || env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!service || !template || !key) throw Error('unconfigured');
      const escape = s => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
      const res = await post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: service, template_id: template, user_id: key,
        ...(env.EMAILJS_PRIVATE_KEY ? { accessToken: env.EMAILJS_PRIVATE_KEY } : {}),
        template_params: { from_name: escape(data.name), from_email: escape(data.email), to_name: 'Dazzle Divas', phone: escape(data.phone || 'Not provided'), message: escape(data.message), service_type: data.serviceType, timestamp: new Date(now()).toISOString(), lead_id: id },
      });
      if (!res.ok) throw Error('delivery');
    }
  }
  return async function POST(request) {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) return failure(403, 'Please submit from our website.');
    const ip = (request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || 'unknown').trim().slice(0, 128);
    const time = now();
    for (const [key, value] of hits) if (time - value.start >= 3600000) hits.delete(key);
    const bucket = hits.get(ip) || { start: time, count: 0 };
    if (bucket.count >= 10 || (!hits.has(ip) && hits.size >= 5000)) return failure(429, 'Too many attempts. Please call (386) 301-5775.');
    bucket.count++; hits.set(ip, bucket);
    if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return failure(415, 'JSON is required.');
    let body;
    try {
      if (Number(request.headers.get('content-length')) > 16384) return failure(413, 'Request too large.');
      const reader = request.body?.getReader();
      if (!reader) return failure(400, 'Malformed request.');
      let size = 0; const chunks = [];
      while (true) {
        const { done, value } = await reader.read(); if (done) break;
        size += value.byteLength;
        if (size > 16384) { await reader.cancel(); return failure(413, 'Request too large.'); }
        chunks.push(Buffer.from(value));
      }
      body = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { return failure(400, 'Malformed request.'); }
    if (!body || typeof body !== 'object' || Array.isArray(body)) return failure(400, 'Malformed request.');
    if (typeof body.company === 'string' && body.company.trim()) return reply({ ok: false, ignored: true }, 202);
    if (body.company != null && typeof body.company !== 'string') return failure(422, 'Invalid form data.');
    const limits = { name: 100, email: 254, phone: 40, message: 1000, serviceType: 40 };
    const data = {}, errors = {};
    for (const [field, max] of Object.entries(limits)) {
      if (typeof body[field] !== 'string' || body[field].length > max || /[\u0000-\u0008\u000b\u000c\u000e-\u001f]/u.test(body[field])) errors[field] = 'Please check this field.';
      data[field] = typeof body[field] === 'string' ? body[field].trim() : '';
    }
    if (!data.name) errors.name = 'Please enter your name.';
    if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/u.test(data.email)) errors.email = 'Please enter a valid email address.';
    if (data.phone && (!/^[\d\s+().xX#-]+$/u.test(data.phone) || data.phone.replace(/\D/g, '').length < 7)) errors.phone = 'Please check your phone number.';
    if (data.message.length < 10) errors.message = 'Please tell us a little more (at least 10 characters).';
    if (!['vacationTurnover', 'residential', 'commercial', 'joinTeam'].includes(data.serviceType)) errors.serviceType = 'Please choose a service.';
    if (Object.keys(errors).length) return reply({ ok: false, errors }, 422);
    // Narrow structural spam controls; prose keywords and language are not bot signals.
    if ((data.message.match(/https?:\/\//gi) || []).length > 5 || /<\s*(script|iframe|object|embed)\b/i.test(data.message)) return failure(422, 'Please remove embedded code or excessive links.');
    for (const [key, value] of deliveries) if (time - value.time > 600000) deliveries.delete(key);
    const fingerprint = createHash('sha256').update(JSON.stringify(data)).digest('hex');
    const existing = deliveries.get(fingerprint);
    if (existing) return (await existing.promise).clone();
    const enabled = env.TURNSTILE_ENABLED === 'true';
    if (enabled) {
      const hosts = (env.TURNSTILE_HOSTNAMES || '').split(',').map(h => h.trim()).filter(Boolean);
      if (!env.TURNSTILE_SECRET_KEY || !env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || !hosts.length) return failure(503, 'Verification is unavailable. Please call (386) 301-5775.');
      if (typeof body.turnstileToken !== 'string' || !body.turnstileToken || body.turnstileToken.length > 2048) return failure(422, 'Please complete the verification.');
      try {
        const res = await post('https://challenges.cloudflare.com/turnstile/v0/siteverify', { secret: env.TURNSTILE_SECRET_KEY, response: body.turnstileToken });
        if (!res.ok) throw Error('verification');
        const result = await res.json();
        if (result.success !== true || result.action !== 'quote' || !hosts.includes(result.hostname)) return failure(422, 'Verification expired or failed. Please try again.');
      } catch { return failure(503, 'Verification is unavailable. Please try again or call (386) 301-5775.'); }
    }
    const verifiedExisting = deliveries.get(fingerprint);
    if (verifiedExisting) return (await verifiedExisting.promise).clone();
    if (deliveries.size >= 5000) return failure(503, 'Please try again shortly or call (386) 301-5775.');
    const id = randomUUID();
    const promise = (async () => {
      try { await deliver(data, id); return reply({ ok: true, delivered: true, id }); }
      catch { deliveries.delete(fingerprint); console.error('[quote] destination did not confirm acceptance', id); return failure(502, 'We could not confirm delivery. Your details are still here. Please try again or call (386) 301-5775.'); }
    })();
    deliveries.set(fingerprint, { time, promise });
    return (await promise).clone();
  };
}
