// app/api/quote/route.js
//
// Server-side capture for quote requests.
//
// Why this exists: the form used to post straight from the browser to EmailJS.
// If that call failed — service down, template misconfigured, mail filtered —
// the enquiry vanished and nobody knew it had happened. Every submission now
// lands here first, so the lead is recorded before delivery is attempted.
//
// Capture targets, in order of durability:
//   1. Structured console log  — always on, searchable in the Vercel dashboard
//   2. LEAD_WEBHOOK_URL        — optional; point it at Zapier/Make/Sheets/CRM
//
// Set LEAD_WEBHOOK_URL in the Vercel project to get leads somewhere durable.

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const MAX = { name: 50, email: 120, phone: 25, message: 1000, serviceType: 40 };

// Must match the <option value> list in ContactForm.js
const SERVICE_TYPES = new Set([
  'vacationTurnover',
  'residential',
  'commercial',
  'joinTeam',
]);

// Per-instance rate limiting. Serverless means this is best-effort rather than
// global, but it stops the naive floods that the old localStorage check could
// not even see.
const RATE_WINDOW_MS = 60 * 60 * 1000;
const RATE_MAX = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude memory ceiling
  return false;
}

function clean(value, limit) {
  if (typeof value !== 'string') return '';
  return value.replace(/[<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, limit);
}

function validate(body) {
  const errors = {};
  const data = {
    name: clean(body.name, MAX.name),
    email: clean(body.email, MAX.email),
    phone: clean(body.phone, MAX.phone),
    message: clean(body.message, MAX.message),
    serviceType: clean(body.serviceType, MAX.serviceType),
  };

  if (data.name.length < 2) errors.name = 'Please enter your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email))
    errors.email = 'Please enter a valid email address.';
  if (data.phone && !/^[\d\s\-+()]{7,}$/.test(data.phone))
    errors.phone = 'Please enter a valid phone number.';
  if (data.message.length < 10)
    errors.message = 'Please tell us a little more (at least 10 characters).';
  if (!SERVICE_TYPES.has(data.serviceType)) data.serviceType = 'residential';

  return { data, errors };
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Malformed request.' }, { status: 400 });
  }

  // Honeypot: a real person never fills a hidden field.
  if (body.company) {
    return Response.json({ ok: true, id: 'ignored' });
  }

  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    request.headers.get('x-real-ip') ||
    'unknown';

  if (rateLimited(ip)) {
    return Response.json(
      { ok: false, error: 'Too many requests. Please call (386) 301-5775.' },
      { status: 429 }
    );
  }

  const { data, errors } = validate(body);
  if (Object.keys(errors).length > 0) {
    return Response.json({ ok: false, errors }, { status: 422 });
  }

  const lead = {
    ...data,
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
    source: clean(body.source || 'website', 60),
    ip,
  };

  // 1. Always log. Vercel retains these and they are searchable.
  console.log('[LEAD]', JSON.stringify(lead));

  // 2. Forward to a durable destination when one is configured.
  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
        signal: AbortSignal.timeout(5000),
      });
    } catch (err) {
      // Never fail the visitor's submission because a downstream tool is down.
      console.error('[LEAD] webhook delivery failed', lead.id, err?.message);
    }
  }

  return Response.json({ ok: true, id: lead.id });
}
