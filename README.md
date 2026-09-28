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

- Next.js 14 (App Router), JavaScript, Tailwind CSS, framer-motion, lucide-react
- Hosted on Vercel behind Cloudflare. **Pushing to `master` deploys to production.**
- Node.js 24 (pinned in `package.json` `engines` and `.nvmrc`)

## Commands

```bash
npm install
npm run dev     # local dev server on http://localhost:3000
npm run lint
npm run build   # production build; run before pushing to master
npm start       # serve the production build locally
```

## Environment

Set in Vercel; see `handoff.json` → `environment` for the full list.

- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`, `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (GA4 loads only when set)
- `NEXT_PUBLIC_SITE_URL` (sitemap and canonicals; defaults to production)
- `LEAD_WEBHOOK_URL` (optional; forwards quote submissions to a durable destination)

## Adding a page

Every new route updates five places: `app/sitemap.js`, `public/llms.txt`, the relevant array in
`app/components/testSite.js`, the dropdowns in `app/components/shell/SiteHeader.js`, and the arrays
in `app/components/Footer.js`. A new guide only needs an entry in
`app/components/guides/guides.js` plus an `llms.txt` line. Details in `AGENTS.md`.
