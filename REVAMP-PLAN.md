# Dazzle Divas — Revamp Plan

**Status as of 26 Sep 2026:** Phase 1 complete and live in production. **Phase 0 complete** — GA4,
Vercel Web Analytics and Speed Insights all verified firing. Google Business Profile live with 3
five-star reviews. The morning baseline found **the site was not in Google's or Bing's index at
all**; the owner verified Search Console and Bing Webmaster Tools and submitted the sitemap the same
day, and both now report the site indexed (data appears within ~48 h). Rank snapshot captured
(0 of 12 — see "Baseline"); Lighthouse still pending an API key. **Phase 2 engineering is done and
Phase 3 content is built** on branch `phase2-3/local-seo-and-content` (10 → 27 pages), awaiting
review and deploy. Phase 4 not started.

Three documents, three jobs:

| File | Job |
|---|---|
| `handoff.json` | Machine-readable state for the next team — status, invariants, gotchas, prioritized next actions |
| `REVAMP-PLAN.md` (this file) | The **what and when** — phases, reasoning, open questions |
| `AGENTS.md` | The **how** — architecture, conventions, and decisions you must not undo |

Start with `handoff.json` if you are picking this up cold.

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
- [x] **GA4 confirmed firing in production** (21 Aug 2026): `gtag/js?id=G-XGRTEKNYKZ` loads and
      `config` is called on page load. Realtime should now show traffic.
- [x] **Vercel Web Analytics + Speed Insights confirmed live** (2 Sep 2026). `window.va` and
      `window.si` are both present and both scripts load.
      **Note for anyone verifying this later:** Vercel serves these under randomized anti-adblock
      paths (e.g. `/a2b11d4b727bed90/script.js`), **not** under `/_vercel/`. Grepping script `src`
      for `_vercel` finds nothing and looks like the feature is off. It isn't — check `window.va`.
- [x] Google Search Console verified, sitemap submitted (owner, 26 Sep 2026). Site reported indexed
      the same day; reports populate within ~48 h. Re-submit the sitemap after the Phase 2–3 branch
      deploys so the 17 new URLs are picked up promptly.
- [x] Bing Webmaster Tools verified, sitemap submitted (owner, 26 Sep 2026)
- [~] Record the baseline: Lighthouse on the four templates, GSC impressions and average position,
      current rank for ~12 target terms. **Do this before Phase 4 or the revamp is unmeasurable.**
      **Partially done 26 Sep 2026** — rank snapshot captured; Lighthouse (PSI API quota), GSC and
      GA4 still pending. See **Baseline (captured 26 Sep 2026)** at the bottom of this file.

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

## Phase 2 — Local SEO · ACTIVE PHASE

Mostly not code. Longest lead time of anything in this plan, so it starts regardless of build
progress. This is where the traffic actually is.

- [x] Google Business Profile set up (owner, 2 Sep 2026). Live 26 Sep 2026 with a 5.0 rating on 3
      reviews. Place ID `ChIJI7fTrsScs64RTY0NoDuFenI`; direct review link
      `https://g.page/r/CU2NDaA7hXpyEBM/review`.
- [ ] Confirm the profile is *fully populated* ← **owner**. Seen on 26 Sep 2026: primary category
      is the generic **"Cleaners"** (change to "House cleaning service" and add a vacation-rental
      secondary if offered); hours show **"Opens 7 AM"** while the site says 8 AM (reconcile); the
      Website button points at the apex domain (set it to `https://www.dazzledivascleaning.com/`).
      Still to check: service list, service area, 20+ photos, seeded Q&A. Checklist in
      `docs/review-engine.md`.
- [x] Review engine, engineering half (26 Sep 2026): `/review` 302s to the write-a-review link,
      `/reviews` to the profile; `review_click` analytics event; playbook with SMS/email templates
      in `docs/review-engine.md`. **Business half** ← owner: ask at handoff, send the link within
      24 h, one reminder at day 5, steady weekly trickle, reply to every review within 48 h.
- [ ] Citations with identical NAP: Bing Places, Apple Business Connect, Yelp, Nextdoor, Thumbtack
      ← **owner**
- [x] ~~Add a street/mailing address to the LocalBusiness schema.~~ **Decided against** (owner,
      26 Sep 2026): the business is a service-area business with the address hidden on GBP, so the
      schema stays locality-only to match. `hasMap` and the Maps URL in `sameAs` were added instead.
- [x] Review markup re-sourced from Google (26 Sep 2026): the three `Review` objects in
      `app/layout.js` are now the three real Google reviews with `datePublished`, and
      `aggregateRating` mirrors the profile (5.0 / 3). Keep both in sync as reviews arrive. Note
      this markup will never earn review stars in search — Google treats a business marking up
      reviews of itself as self-serving — so its value is for AI crawlers, not rich results.
- [ ] Airbnb/VRBO host Facebook groups for Volusia County — where the actual buyers are ← **owner**

**Done when:** profile verified and complete; reviews arriving at a predictable weekly rate without
anyone having to remember to ask.

---

## Phase 3 — Content & GEO expansion (3–4 weeks)

Built 26 Sep 2026 on branch `phase2-3/local-seo-and-content` (not yet deployed as of this note):

- [x] City pages: `/cleaning/port-orange`, `/cleaning/ponce-inlet`, `/cleaning/daytona-beach-shores`,
      `/cleaning/ormond-by-the-sea`. Verified local detail (parks, corridors, gated communities,
      condo logistics); each shares ≤ 6.5% of three-word phrases with any other city page.
- [x] The three service pages the schema already promises: `/services/residential-house-cleaning`,
      `/services/deep-cleaning`, `/services/eco-friendly-cleaning`. No invented prices — each has a
      "how pricing works" block instead of a price grid.
- [x] `/pricing` — publishes only numbers already on the site (turnover tiers, PM volume tiers,
      emergency policy) with `priceSpecification` schema for the turnover tiers.
- [~] `/about` — built around the business (2018, standards, how we work, service area, two Google
      reviews). **Owner still owes** names, faces and the founding story; a marked JSX comment
      reserves the "Meet the team" slot. No placeholders render.
- [x] Seven guides under `/guides` (checklist, cleaning fee, Volusia STR rules with official
      sources, race weeks, hurricanes, snowbird season, how to hire), each with a `lastReviewed`
      date, Article schema and FAQ. Registry: `app/components/guides/guides.js`.
- [x] Answer-first structure throughout.
- [x] Every new route wired into the 5 places (sitemap imports the guides registry).
- [ ] After deploy: re-submit the sitemap in GSC and Bing; rerun the rank snapshot in ~2 weeks.

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
4. ~~Do we have current photos of real jobs?~~ Yes — the job photos already in `public/images` are
   real, and the owner has more on their phone (26 Sep 2026). Still needed: before/after pairs and
   team photos for Phase 4 and the About page.
5. Where do leads go after the form — CRM, spreadsheet, or inbox? *(Determines whether
   `LEAD_WEBHOOK_URL` is worth wiring.)*
6. Sustainable writing cadence per month? *(Guides now exist; this sizes what gets added.)*
7. **Pricing and terms contradictions found while building `/pricing` (owner must resolve before
   or shortly after deploy):**
   - `TermsOfService.js` lists a **50% surcharge** on same-day/next-day emergencies, a $50 late
     cancellation fee, a $75 trip charge, a 3% card fee and a $25 / 1.5% late fee, and lists PayPal
     but not Zelle. The emergency page, `/faq` and `llms.txt` say **no rush fees**, with only a
     **$25 priority dispatch fee** on the 2-hour tier.
   - The home "Compare Services" modal (`CompetitiveServices.js`) says deep cleaning is **"Starting
     at $180"** and takes "4–6 hours". Nothing else on the site publishes a deep-clean price.
   - The turnover FAQ bills excess-condition time at **$40/hour**; `/pricing` says extra time is
     billed only with approval.
   - Payment methods differ: `/faq` says cards, ACH, Zelle, check and net-15; `layout.js` and the
     home FAQ say cash, check, credit card, Venmo, Zelle; Terms adds PayPal.
   - The PM page says volume discounts go "up to 20%"; the published tiers are 10% / 15% / custom.
   - Hours: GBP says opens 7 AM; site says 8 AM.
8. Owner-supplied claims written into the new pages that nothing in the repo backs (reasonable, but
   confirm): certificate of insurance on request for condo associations; NSB crews as Ponce Inlet
   backup; owner-away visits clearing perishables; written preference notes per home; repair
   issues flagged with a photo; fragrance-conscious products available; a client's own product
   brand can be used on request.

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

---

## Baseline (captured 26 Sep 2026)

The pre-revamp snapshot Phases 2–4 are measured against. Taken against the live site, before the
`phase2-3/local-seo-and-content` branch deploys.

**Lighthouse — not captured.** The keyless PageSpeed Insights API returned `429 RESOURCE_EXHAUSTED`
(daily quota of **0** for anonymous callers) on all 8 calls and on each retry after 60 s; the
pagespeed.web.dev UI never rendered a result in the automated browser. No numbers were estimated.

| Template | Path | Strategy | Perf / A11y / BP / SEO | LCP / CLS / TBT / SI | Page weight | CrUX p75 (LCP / INP / CLS) |
|---|---|---|---|---|---|---|
| Home | `/` | Mobile | not captured | not captured | not captured | not captured |
| Home | `/` | Desktop | not captured | not captured | not captured | not captured |
| Service | `/services/vacation-rental-turnover` | Mobile | not captured | not captured | not captured | not captured |
| Service | `/services/vacation-rental-turnover` | Desktop | not captured | not captured | not captured | not captured |
| City | `/cleaning/ormond-beach` | Mobile | not captured | not captured | not captured | not captured |
| City | `/cleaning/ormond-beach` | Desktop | not captured | not captured | not captured | not captured |
| FAQ | `/faq` | Mobile | not captured | not captured | not captured | not captured |
| FAQ | `/faq` | Desktop | not captured | not captured | not captured | not captured |

To fill it: enable the PageSpeed Insights API in a Google Cloud project, create a key, and append
`&key=…` to `runPagespeed?url=<URL>&strategy=<mobile|desktop>&category=performance&category=accessibility&category=best-practices&category=seo`
— or run each URL at pagespeed.web.dev in an ordinary browser. Do it **before** the Phase 2–3
branch deploys; it changes the shared header and footer on every template.

**Google rank — 12 target terms.** Signed-out, `hl=en`, page 1 only. Google localised to
**"32114, Daytona Beach, FL — From your IP address"**. No CAPTCHA was hit.

| # | Term | Organic (page 1) | In map pack? | Map pack shown (top 3) |
|---|---|---|---|---|
| 1 | vacation rental cleaning daytona beach | not on page 1 | No | Sunny Side Clean Team · Broom In Hand · M.O.R. Clean Daytona |
| 2 | airbnb cleaning daytona beach | not on page 1 | No | Sunny Side Clean Team · M.O.R. Clean Daytona · Broom In Hand |
| 3 | airbnb cleaning ormond beach | not on page 1 | No | M.O.R. Clean Daytona · Sunny Side Clean Team · Sunny Side (Ormond) |
| 4 | vacation rental cleaning new smyrna beach | not on page 1 | No | Mop and Bucket · Sunny Side Clean Team · Sunny Side (NSB) |
| 5 | airbnb turnover cleaning volusia county | not on page 1 | No pack shown | — |
| 6 | vacation rental cleaning port orange | not on page 1 | No | Sunny Side Clean Team · Broom In Hand · HostReadyLLC |
| 7 | cleaning service ponce inlet | not on page 1 | No pack shown | — |
| 8 | vrbo cleaning daytona beach shores | not on page 1 | No | Sunny Side Clean Team · Broom In Hand · HostReadyLLC |
| 9 | short term rental cleaning daytona | not on page 1 | No | Sunny Side Clean Team · Broom In Hand · Empire Cleaning of Volusia |
| 10 | emergency cleaning daytona beach | not on page 1 | No | Sunny Side Clean Team · Broom In Hand · Johnson's Cleaning Service |
| 11 | property management cleaning volusia county | not on page 1 | No | Empire Cleaning of Volusia · Blue Palm Property Mgmt · Sunny Side Clean Team |
| 12 | house cleaning ormond beach | not on page 1 | No | Sunny Side (Ormond) · Seaside Maid Cleaning · Sunny Side Clean Team |

**0 of 12 organic, 0 of 12 map pack.** Sunny Side Clean Team's Daytona listing is in all 10 packs
Google showed; Broom In Hand in 6.

**Why the zeros — the site does not appear to be indexed.**
- `site:dazzledivascleaning.com` returns *"did not match any documents"*. A brand search
  ("dazzle divas cleaning") shows the GBP knowledge panel, but no dazzledivascleaning.com URL in
  the page-1 organic results.
- Nothing blocks crawling from the outside: apex 308 → www, www 200,
  `<meta name="robots" content="index, follow">`, canonical set, robots.txt `Allow: /` for every
  agent, sitemap declared. Whether Cloudflare challenges *verified* Googlebot is only visible in
  GSC → URL Inspection. **GSC access is now the most urgent open item** — rank tracking is moot
  until the site is in the index.
- The GBP "Website" button points to `https://dazzledivascleaning.com/` (apex, one redirect hop),
  not the canonical `https://www.dazzledivascleaning.com/`. Owner fix, in the GBP dashboard.

**Still pending**
- [ ] GA4 60-day call + form conversion rate (`call_click`, `quote_submit`) — **pending owner
      dashboard access.** GA4 has been live since 21 Aug 2026, so the first full 60-day window
      closes ~20 Oct 2026.
- [ ] Search Console impressions and average position — **pending owner dashboard access.**
- [ ] Lighthouse, all 8 cells above — needs a PSI API key or a manual pagespeed.web.dev run.
