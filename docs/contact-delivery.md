# Quote protection and delivery

The browser posts only to `/api/quote`. The server validates the request, rejects honeypots,
applies limits and optional Turnstile verification, then dispatches to one destination.
It clears the visitor's form only when that destination returns a successful HTTP response.
This is acceptance, not proof of inbox delivery or permanent storage. No customer data is
retained in application logs; failures log an opaque request ID.

## Delivery configuration

Choose one destination in Vercel's environment settings:

- **EmailJS:** `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`, and
  `EMAILJS_PRIVATE_KEY` where required by account security settings. Existing
  `NEXT_PUBLIC_EMAILJS_*` equivalents remain fallback configuration for the first three.
  Enable non-browser/server API requests in EmailJS. Confirm private-key authorization and
  account restrictions so old public credentials cannot bypass the website protections.
  Moving sending to the server alone does not revoke previously exposed credentials.
- **Webhook:** set `LEAD_WEBHOOK_URL` to a CRM or other trusted receiver that saves requests
  before acknowledging them. This takes precedence over EmailJS; it must also provide any
  desired owner notifications. Payload: name, email, phone, message, serviceType, id,
  receivedAt. Header: `Idempotency-Key` with the request ID.

Set `LEAD_WEBHOOK_IDEMPOTENT=true` only when the receiving system actually deduplicates
that header. It permits one retry after HTTP 429/502/503/504. Ambiguous network timeouts
are not automatically retried. A later manual retry can still duplicate an accepted request.
The app has no durable outbox or automatic recovery queue.

## Cloudflare Turnstile

Create a managed Turnstile widget for the website's hostnames and configure:

```text
NEXT_PUBLIC_TURNSTILE_SITE_KEY=<public widget site key>
TURNSTILE_SECRET_KEY=<private server verification key>
TURNSTILE_HOSTNAMES=www.dazzledivascleaning.com,dazzledivascleaning.com
TURNSTILE_ENABLED=true
```

Add preview hostnames only when deliberately testing that deployment. Both the Cloudflare
widget's hostname settings and the server allowlist must permit the host. Keep the secret
server-side. Public environment variables are bundled at build time, so rebuild after setting
the site key. The widget submits action `quote`; the server validates action and hostname.

Absent enablement preserves the base protections; **Turnstile is not active until configured**.
When enabled, missing keys, failed verification and unavailable verification services reject
the request. Do not set enablement alone on production. The compact widget fits narrow forms.

## Verification before deployment

1. Run `node --test app/lib/quote-handler.test.mjs`, lint and production build.
2. Configure credentials through private environment settings, never repository files.
3. Verify EmailJS server access or webhook persistence and owner notifications in a preview.
   Use an explicitly authorized test inquiry; automated tests mock all destinations.
4. Test Turnstile success, expiry, and failed challenge, plus ordinary prose containing
   “description,” accented/non-Latin names, and a filled honeypot (must send nothing).
5. Confirm data stays in the form when delivery fails. Confirm successful requests appear
   in the intended inbox/CRM before publishing the change.

## Limits

The per-IP limit (10 attempts/hour) and 10-minute duplicate suppression are instance-local.
Use platform/edge limits for distributed protection. Honeypots stop basic form fillers;
Turnstile adds a challenge against more capable automation, but cannot eliminate all spam.
No language-based detector can reliably establish whether a message was written by AI.

References: [EmailJS send API](https://www.emailjs.com/docs/rest-api/send/),
[Turnstile server validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).
