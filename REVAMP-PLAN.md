# Dazzle Divas — Revamp Plan

**Status as of 21 Aug 2026:** Phase 1 complete and merged to `master`. Phase 0 complete in code,
waiting on account setup and a baseline. Phases 2–4 not started.

Read alongside `AGENTS.md`. This file is the **what and when**; AGENTS.md is the **how**
(architecture, conventions, and the decisions you must not undo).

---

## Start here (new to this project?)

1. Next.js 14 App Router on Vercel. `master` auto-deploys to production.
2. On-page SEO is already strong — schema on every page, `llms.txt`, an AI-crawler robots policy,
   and 7 purpose-built landing pages. **Don't rebuild it. Extend it.**
3. The single biggest lever on traffic is *not* the website. See "Strategic framing".
4. Before changing anything visual or copy-related, read **Guardrails** below and the
   **Header treatment** section of AGENTS.md. Several things that look like bugs are decisions.

---

## Strategic framing

The gap between "good scaffolding" and "gets traffic", in priority order:

1. **Measurement.** Instrumented in code but not yet producing data. Until a baseline exists,
   nothing below is provable.
2. **Local SEO.** Map-pack ranking is won on Google Business Profile signals and review volume, not
   site design. Very likely the largest single traffic gap. Phase 2.
3. **Content depth.** 10 pages, no blog. Schema promises 5 services but only 3 have pages; copy
   claims 7+ cities but only 3 have pages. Phase 3.
4. **Visual revamp.** Phase 4. It multiplies conversion on traffic you already have — it does not
   create traffic. Sequenced last on purpose.

---

## Phase 0 — Instrumentation · code complete, needs accounts

Everything in code is done and verified against a production build. What remains is account setup
only the owner can do.

- [x] Vercel Analytics + Speed Insights wired in `app/components/Analytics.js`, importing from
      `@vercel/analytics/next` and `@vercel/speed-insights/next`. The `/next` entrypoints hook
      `next/navigation` so client-side route changes register as pageviews; `/react` does not.
- [x] `track()` helper and `EVENTS` map in `app/lib/analytics.js`. No-ops when no provider is
      present, so it is safe to call from anywhere.
- [x] GA4 loads only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set — local and preview stay clean.
- [x] Measurement ID created and set in Vercel (owner, 21 Aug 2026).
- [x] Conversion events: `call_click`, `email_click`, `quote_submit`, `quote_submit_failed`.
      Phone/email clicks use one delegated listener in `Analytics.js` — **do not add per-link
      handlers.**
- [x] Merged to `master` and deployed (21 Aug 2026).
- [ ] Confirm GA4 Realtime shows traffic  ← **owner**
- [ ] Enable Analytics + Speed Insights in the Vercel project's Analytics tab (the npm package is
      only half of it)  ← **owner**
- [ ] Google Search Console verified, sitemap submitted  ← **owner**
- [ ] Bing Webmaster Tools verified  ← **owner**
- [ ] Record the baseline: Lighthouse on the four templates, GSC impressions and average position,
      current rank for ~12 target terms. **Do this before Phase 4 or the revamp is unmeasurable.**

**On GA4's "install the Google tag" prompt:** skip it. `Analytics.js` already loads `gtag.js` and
calls `config`. Take the Measurement ID (`G-XXXXXXXXXX`) only, then confirm via Realtime.

**Optional:** set `LEAD_WEBHOOK_URL` in Vercel to forward quote submissions somewhere durable
(Zapier / Make / Sheets / CRM). Without it, leads live only in the Vercel runtime logs.

**Done when:** 7 consecutive days of clean GA4 data, GSC reporting, baseline written down.

---

## Phase 1 — Defect fixes · ✅ COMPLETE (merged 21 Aug 2026)

Five issues were quietly cancelling out the existing SEO work, plus a total absence of analytics.
All fixed and verified — see the before/after table at the bottom.

**Critical**
- [x] Hero rendered at 4.5× upscale — `sizes="33vw"` on a full-bleed `fill` image
- [x] Root LocalBusiness/Organization/WebSite JSON-LD was injected by JS, absent from served HTML
- [x] Every FAQ answer was gated behind `{isOpen && …}` — crawlable questions, invisible answers
- [x] Scrolled header applied `bg-slate/85`, not a real Tailwind class, so it compiled to nothing
- [x] Seven pages shipped a doubled brand suffix in the title at 81–89 chars

**High**
- [x] Two `<h1>` on home; six headings concatenated without word spaces
- [x] `public/images` 85 MB → 14 MB (originals archived at `../_image_backup_20260819/`)
- [x] Mobile sticky call/quote bar on home, which had no persistent CTA
- [x] Contact form had no server route — a failed EmailJS send lost the lead silently
- [x] Copy: 550+/year sitewide, computed "last year", "~20%" instead of a dollar figure

**Medium**
- [x] 25 mobile tap targets under 44×44; 4 buttons with no accessible name
- [x] Real multi-size `favicon.ico` (was a 147 KB JPEG renamed `.ico`), PNG set, web manifest
- [x] Real 404 page with navigation
- [x] Dead Tailwind classes, duplicate `bg-diva-blue`, 4 dead modules, duplicate BreadcrumbList
- [x] ESLint clean

---

## Phase 2 — Local SEO · START HERE NEXT

Mostly not code. Longest lead time of anything in this plan, so it starts regardless of build
progress. This is where the traffic actually is.

- [~] Google Business Profile created — **verification pending with Google** as of 19 Aug 2026.
      Once verified: full categories, services, service area, hours, 20+ photos, seeded Q&A
- [ ] Review engine: automated post-job follow-up with a direct review link. Steady trickle, not a
      burst
- [ ] Citations with identical NAP: Bing Places, Apple Business Connect, Yelp, Nextdoor, Thumbtack
- [ ] **Add a street/mailing address to the LocalBusiness schema.** `app/layout.js` has locality
      only, which limits local-pack eligibility
- [ ] **Migrate review markup to Google reviews.** The 3 `Review` objects in `app/layout.js` are
      real client reviews (owner-confirmed; photos are stock for client privacy) so they stay on the
      page. But Google does not surface review rich results for a business marking up reviews about
      *itself*, so the markup earns nothing where it sits. Re-source from GBP once reviews land.
- [ ] Airbnb/VRBO host Facebook groups for Volusia County — where the actual buyers are

**Done when:** profile verified and complete; reviews arriving at a predictable weekly rate without
anyone having to remember to ask.

---

## Phase 3 — Content & GEO expansion (3–4 weeks)

- [ ] City pages: Port Orange, Ponce Inlet, Daytona Beach Shores, Ormond-by-the-Sea. Real local
      detail, not swapped nouns — the existing three share ~25% of phrasing; keep new ones at or
      below that
- [ ] The three service pages the schema already promises: Residential House Cleaning, Deep
      Cleaning, Eco-Friendly Cleaning
- [ ] Transparent pricing page — LLMs cite specific numbers and competitors mostly hide theirs
- [ ] About page: real names, faces, the 2018 founding story. This is what E-E-A-T means for a local
      business
- [ ] 6–8 guides phrased the way hosts actually search: turnover checklists, what cleaning fee to
      charge, Volusia short-term rental rules, race-week prep, hurricane prep
- [ ] Answer-first structure throughout: lead each section with the answer in one sentence, then
      support it
- [ ] Every new route updates 5 places — see Guardrails

**Done when:** 20+ pages, every schema claim has a page behind it, GSC shows impressions on terms we
never explicitly targeted.

---

## Phase 4 — Visual revamp (2–3 weeks; design exploration can start any time)

- [ ] Consolidate the design system — one colour source of truth, one type scale; retire the legacy
      CSS variables in `globals.css`
- [ ] Decompose `testSite.js` (~1,040 lines, one client component) into section components
- [ ] Convert static sections to server components — currently ~200 KB compressed JS to render what
      is mostly a brochure
- [ ] Real photography: before/after pairs from actual turnovers, plus the team. Current portfolio
      is 2024 decor shots, not evidence of cleaning
- [ ] Motion discipline; honour `prefers-reduced-motion` throughout
- [ ] Rebuild home around one question: does a host understand in 5 seconds what we do and how to
      book it
- [ ] **Do not** restyle the home header without reading AGENTS.md → Header treatment first

**Done when:** live, and GA4 shows a higher call+form conversion rate than the Phase 0 baseline.

---

## Guardrails

| Rule | Detail |
|---|---|
| Phone | Office line is voice-only. Never write "call or text" anywhere. |
| Turnaround | Quote turnaround is **24 hours**, not 2 minutes. |
| Founded | **2018.** |
| Claims | Owner-confirmed defensible (21 Aug 2026): 550+/year, 98% guest satisfaction, 78% industry average, "#1", 15+ cities, ~20% revenue lift. Any **new** stat needs a source before it ships. |
| Date-stamped copy | Never hardcode a year. "Zero negative cleanliness reviews in {lastYear}" takes `lastYear` from `app/page.js` (server) with `revalidate = 86400`. |
| Header | Untinted glass, pink-400 links, 2.65:1 — a tested owner decision, not a bug. See AGENTS.md. |
| Structure | One `<h1>` per page, describing the page — not the company. |
| Content | Answers live in the DOM. Never behind a click, never only in JSON-LD. |
| JSON-LD | Plain `<script>` from a server component. Never `next/script` — it injects client-side and the schema vanishes from the served HTML. |
| Titles | Page `metadata.title` must **not** include the brand; the root template appends it. ≤70 chars title, ≤160 chars description, measured after the template. |
| RSC boundary | A server page passing a lucide icon as a prop needs the receiving component to stay a server component. |
| New routes | Update 5 places: `sitemap.js`, `llms.txt`, the home page array, `SiteHeader`, the footer. |
| Images | `next/image` only; `sizes` must describe the **rendered** width. Source images capped at 2560px. |

---

## Open questions

1. ~~Google Business Profile?~~ Yes — in verification with Google as of 19 Aug 2026.
2. ~~Testimonials real?~~ Yes — real clients, stock photos for privacy.
3. ~~Stats defensible?~~ Yes — all owner-confirmed 21 Aug 2026.
4. Do we have current photos of real jobs? *(Blocks the Phase 4 photography item.)*
5. Where do leads go after the form — CRM, spreadsheet, or inbox? *(Determines whether
   `LEAD_WEBHOOK_URL` is worth wiring.)*
6. Sustainable writing cadence per month? *(Sizes Phase 3 — match it to what will actually be
   sustained, not what looks good on a plan.)*

---

## Resolved issues worth remembering

**Cloudflare robots.txt override (fixed 20 Aug 2026).** Cloudflare's Managed robots.txt was
prepending `Disallow: /` for ClaudeBot, GPTBot, CCBot, Google-Extended, Applebot-Extended,
Amazonbot, Bytespider and meta-externalagent, plus `Content-Signal: ai-train=no` — directly
contradicting `app/robots.js`. Turned off in the Cloudflare dashboard; the live file now has zero
`Disallow` rules. **If AI crawlers ever stop appearing, check this first.**

---

## Measured: before → after Phase 1

| Metric | Before | After |
|---|---|---|
| Hero srcset candidate @1600px | `w=640` (528×396 delivered) | `w=3840` (2560×1920 AVIF, 247 KB) |
| Hero `sizes` | `33vw` on a 100vw image | `100vw` |
| FAQ answers in crawlable HTML | 0 of 20 | 20 of 20 |
| `/faq` visible words | 355 | 1,117 (+215%) |
| Home visible words | 964 | 1,208 (+25%) |
| Service pages visible words | 712–778 | 871–927 (+19–22%) |
| City pages visible words | 605–633 | 745–800 (+23–26%) |
| Business schema in raw HTML | 0 blocks (JS-injected) | 3 blocks on every page |
| Total JSON-LD in raw HTML (home) | 1 block | 4 blocks |
| Page titles over 70 chars | 7 of 10 | 0 of 10 |
| Meta descriptions over 160 chars | 6 of 10 | 0 of 10 |
| Doubled brand suffix | 7 pages | 0 pages |
| `<h1>` on home | 2 | 1 |
| Headings with missing word spaces | 6 | 0 |
| Buttons with no accessible name | 4 | 0 |
| Mobile tap targets under 44×44 | 25 | 0 |
| `public/images` | 85 MB | 14 MB |
| Favicon | 147 KB JPEG named `.ico` | 8.6 KB multi-size ICO + PNG set |
| Web manifest | 404 | served |
| Analytics | none | Vercel Analytics + Speed Insights + GA4 |
| Lead persistence | none (email only) | server route, logged + optional webhook |
| Spam protection | localStorage only | honeypot + server validation + IP rate limit |
| ESLint | 3 warnings | clean |
| Dead modules | 4 files + ~100 commented lines | removed |

**Not improved, by choice:** nav contrast stays at 2.65:1. Three header treatments were built and
tested on real devices; the owner chose the untinted one. Documented in AGENTS.md so it does not get
"fixed" by a later pass.

**Still outstanding:** a post-deploy Lighthouse run and the GSC/GA4 baseline. Both are Phase 0 items
gated on account setup.
