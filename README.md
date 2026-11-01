# Dazzle Divas Cleaning

Marketing site for **Dazzle Divas Cleaning LLC**, a vacation-rental turnover and residential
cleaning company in Volusia County, Florida. Live at https://www.dazzledivascleaning.com.

## Read these first

| File | What it's for |
|---|---|
| [`handoff.json`](handoff.json) | Current state, invariants that must not be undone, gotchas, and prioritized next actions |
| [`REVAMP-PLAN.md`](REVAMP-PLAN.md) | The phase plan, baseline measurements, and open questions |
| [`AGENTS.md`](AGENTS.md) | Architecture, conventions, and copy decisions |
| [`docs/review-engine.md`](docs/review-engine.md) | Owner playbook for collecting Google reviews |

## Stack

- Next.js 16.4.3 / React 19.3.1 (App Router), JavaScript, Tailwind CSS, framer-motion, lucide-react
- Hosted on Vercel behind Cloudflare. **Pushing to `master` deploys to production.**
- Node.js 24 (pinned in `package.json` `engines` and `.nvmrc`)

## Commands

```bash
npm install
npm run dev     # local dev server on http://localhost:3000
npm run lint    # ESLint 9 flat config
npm run build   # production build; run before pushing to master
npm start       # serve the production build locally
```

Builds and development explicitly use Webpack because Turbopack rejects the existing favicon
encoding. The framework upgrade is local until deployed.

## Environment

Set in Vercel; see `handoff.json` → `environment` for the full list.

- Delivery configuration and Turnstile setup: [`docs/contact-delivery.md`](docs/contact-delivery.md).
- Prefer server-only `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and optional `EMAILJS_PRIVATE_KEY`; legacy `NEXT_PUBLIC_EMAILJS_*` values remain fallback configuration.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (GA4 loads only when set)
- `NEXT_PUBLIC_SITE_URL` (sitemap and canonicals; defaults to production)
- `LEAD_WEBHOOK_URL` (optional alternative to EmailJS; receiver must persist leads and handle desired notifications).
- Turnstile is optional until configured; enable it with all four settings documented in the setup guide.
- Contact regression tests: `node --test app/lib/quote-handler.test.mjs`.

## Adding a page

Every new route updates five places: `app/sitemap.js`, `public/llms.txt`, the relevant array in
`app/components/testSite.js`, the dropdowns in `app/components/shell/SiteHeader.js`, and the arrays
in `app/components/Footer.js`. A new guide only needs an entry in
`app/components/guides/guides.js` plus an `llms.txt` line. Details in `AGENTS.md`.
