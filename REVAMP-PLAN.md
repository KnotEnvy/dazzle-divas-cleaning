# Dazzle Divas — Revamp Plan

Working checklist for the 2026 revamp. Audit performed 19 Aug 2026 against the live site
(`https://www.dazzledivascleaning.com`) and the repo at commit `2eb8154`.

Read this together with `AGENTS.md` (architecture + conventions). This file is the *what and when*;
AGENTS.md is the *how*.

---

## Strategic framing

On-page SEO here is already above average for the vertical (schema, `llms.txt`, AI-crawler robots policy,
7 landing pages). The gap between "good scaffolding" and "gets traffic" is:

1. **No measurement.** Nothing is instrumented, so nothing is provable.
2. **Local SEO is untouched.** Map-pack ranking is won on Google Business Profile signals and review
   volume, not site design. For this business that is likely the largest single traffic gap.
3. **Content depth.** 10 pages, 355–964 words each. No blog. Schema promises 5 services (3 have pages);
   copy claims 7+ cities (3 have pages).
4. **Bugs that undo the good work** — see Phase 1.

A redesign multiplies conversion on traffic you already have. It does not create traffic. Sequence accordingly.

---

## Phase 0 — Instrument first (~½ day) · BLOCKS EVERYTHING

- [x] Vercel Analytics + Speed Insights installed and wired (`app/components/Analytics.js`)
- [x] `track()` helper + delegated call/email click tracking (`app/lib/analytics.js`)
- [x] GA4 component built — **activates the moment you set `NEXT_PUBLIC_GA_MEASUREMENT_ID`**
- [ ] Create the GA4 property and set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel  ← NEEDS YOU
- [ ] Google Search Console verified, sitemap submitted  ← NEEDS YOU
- [ ] Bing Webmaster Tools verified  ← NEEDS YOU
- [x] Conversion events: `call_click`, `email_click`, `quote_submit`, `quote_submit_failed`
- [ ] Baseline snapshot recorded: Lighthouse (home / service / city / faq), GSC impressions + avg position,
      current rank for ~12 target terms

**Done when:** 7 consecutive days of clean GA4 data, GSC reporting, baseline numbers written down.

---

## Phase 1 — Fix what's actively costing us · ✅ COMPLETE (19 Aug 2026)

### Critical

- [x] **Hero renders at 4.5× upscale.** `app/components/testSite.js:219` —
      `sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"` on a full-bleed `fill` image.
      Measured at 1600×900 DPR 1.5: displayed 1585×900 CSS px, downloaded 528×396. Change to `sizes="100vw"`.
      Also fixes the `<link rel=preload>` which inherits the same value.
- [x] **FAQ answers are not in the DOM.** `app/components/faq/FAQAccordion.js` and `app/components/FAQ.js`
      render answers only behind `{isOpen && …}`. `/faq` = 20 questions, 20 `acceptedAnswer` in JSON-LD,
      **0 answers in visible HTML**, 355 visible words. Keep answers mounted (animate height) or use
      `<details>/<summary>`. Highest-leverage single edit for agentic search.
- [x] **Header background never applies.** `testSite.js:150` uses `bg-slate/85` — not a valid Tailwind class,
      0 matches in the compiled CSS. Nav renders `rgb(244,114,182)` on white = **2.65:1** (WCAG AA needs 4.5:1).
      Use a real token and darken the link colour.
- [x] **Doubled brand suffix in titles.** Root template is `%s | Dazzle Divas Cleaning` but all 7 Phase-1 pages
      already end with the brand → 81–89 char titles, e.g.
      `Vacation Rental Turnover Cleaning | Dazzle Divas Cleaning | Dazzle Divas Cleaning`.
      Drop the brand from each page's own `metadata.title`.
- [x] **Meta descriptions 185–208 chars** on the same 7 pages. Trim to ≤155.

### High

- [x] **Two `<h1>` on home** — logo wordmark (`testSite.js:157`) + hero. Demote the wordmark to `<span>`.
- [x] **Headings concatenate without spaces** (`<span className="block">` with no whitespace). Actual text content:
      - `Volusia County's#1 Vacation RentalCleaning Service`
      - `Services Designed forVacation Rental Success`
      - `What Vacation Rental OwnersSay About Us`
      - `Ready to Transform YourVacation Rental?`
      - `Why Dazzle Divas BeatsEvery Other Cleaning Service`
      - `Cleaning Questions,Answered`
- [x] **Re-encode `public/images`** — 85 MB total, 22 JPEGs at 3–6.5 MB. Max 2560 px, q82. Expect ~85 MB → ~6 MB.
- [x] **Mobile sticky call/quote bar on home.** `StickyQuotePill` is in the marketing route group only; home
      (all the traffic) has no persistent CTA below the hero.
- [x] **Contact form has no server route.** Client-only EmailJS: no server-side spam filtering, no lead
      persistence, no conversion event. A failed send loses the lead silently. Move behind a route handler,
      persist, add honeypot/Turnstile.

### Medium

- [x] **25 tap targets < 44×44 px** on mobile; testimonial dots are 12×12 (below WCAG 2.2 AA 24×24 floor).
- [x] **4 buttons with no accessible name**, incl. scroll-to-top — which is also visible at scroll 0.
      Add `aria-label`s + a scroll threshold.
- [x] **Icon set.** Favicon is a 147 KB JPEG served as `/favicon.ico`. No PNG set, no apple-touch-icon,
      no manifest (`/manifest.json` → 404).
- [x] **404 page** is a bare centred sentence — no header, footer, or links back in.
- [x] **Dead Tailwind classes:** `square-full` (`testSite.js:154`, meant `rounded-full`), `text-white-700`
      (mobile menu — currently white only via inheritance, fragile).
- [x] **`bg-diva-blue` defined twice:** `#082f49` in `tailwind.config.js`, `#000080` in `globals.css`
      (globals wins by source order). Pick one.
- [x] **Dead modules** — imported nowhere: `app/components/CustomCursor.js`, `app/hooks/useInView.js`,
      `app/hooks/useParallax.js`, `app/hooks/useRateLimit.js`. Plus ~100 lines of commented-out footer in
      `testSite.js`.
- [x] **Canonical inconsistency:** home canonical is `https://www.dazzledivascleaning.com` (no trailing slash),
      sitemap emits `.../`. Normalise. (Apex → www 308 redirect is correct and working.)

**Done when:** Lighthouse mobile ≥ 90 on Performance / Accessibility / Best Practices / SEO across all four templates.

---

## ⚠ Blocking external issue — Cloudflare is cancelling your AI-crawler policy

`app/robots.js` allows GPTBot, ClaudeBot, PerplexityBot and others. Cloudflare's **Managed robots.txt**
prepends a block to the live file that disallows them:

```
Content-Signal: search=yes,ai-train=no,use=reference
User-agent: ClaudeBot            Disallow: /
User-agent: GPTBot               Disallow: /
User-agent: CCBot                Disallow: /
User-agent: Google-Extended      Disallow: /
User-agent: Applebot-Extended    Disallow: /
User-agent: Amazonbot            Disallow: /
User-agent: Bytespider           Disallow: /
User-agent: meta-externalagent   Disallow: /
```

The bots are **not** network-blocked (all return HTTP 200), but compliant crawlers read robots.txt and
self-restrict. Every hour spent on AI discoverability is being undone at the edge.

**Fix (you, in the Cloudflare dashboard — not code):** the site's zone → look for AI Crawl Control /
"Managed robots.txt" / "Block AI bots" and turn the managed block off. Then re-check
`https://www.dazzledivascleaning.com/robots.txt` — the Cloudflare section should be gone.

---

## Phase 2 — Local SEO (start week 1, runs continuously)

Mostly not code. Longest lead time of anything here, so it starts regardless of build progress.

- [~] Google Business Profile created — **verification pending with Google as of 19 Aug 2026**. Once live: full categories, services, service area, hours, 20+ photos, seeded Q&A
- [ ] Review engine: automated post-job follow-up with a direct review link. Steady trickle, not a burst
- [ ] Citations with identical NAP: Bing Places, Apple Business Connect, Yelp, Nextdoor, Thumbtack
- [ ] **Add a street/mailing address to the LocalBusiness schema.** `app/layout.js` currently has locality only,
      which limits local eligibility
- [ ] **Migrate the review markup to Google reviews.** The 3 `Review` objects in `app/layout.js` are real
      client reviews (owner-confirmed; photos are stock for client privacy), so they stay on the page. But
      Google does not surface review rich results for a business marking up reviews about *itself*, so the
      markup earns nothing where it is. Once the GBP has real reviews, source them from there instead.
- [ ] Airbnb/VRBO host Facebook groups for Volusia County

**Done when:** profile verified and complete; reviews arriving at a predictable weekly rate unprompted.

---

## Phase 3 — Content & GEO expansion (3–4 weeks)

- [ ] City pages: Port Orange, Ponce Inlet, Daytona Beach Shores, Ormond-by-the-Sea
      (real local detail — current 3 share ~25% of phrasing, which is fine; keep it that way)
- [ ] Service pages the schema already promises: Residential House Cleaning, Deep Cleaning, Eco-Friendly Cleaning
- [ ] Transparent pricing page — LLMs cite specific numbers; competitors mostly hide theirs
- [ ] About page: real names, faces, 2018 founding story (E-E-A-T for a local business)
- [ ] 6–8 guides on how hosts actually phrase things: turnover checklists, what cleaning fee to charge,
      Volusia short-term rental rules, race-week prep, hurricane prep
- [ ] Answer-first structure throughout: lead with the answer in one sentence, then support it
- [ ] Keep `sitemap.js`, `llms.txt`, home arrays, `SiteHeader`, footer in sync

**Done when:** 20+ pages, every schema claim has a page behind it, GSC shows impressions on unplanned terms.

---

## Phase 4 — Visual revamp (2–3 weeks; design exploration can start immediately)

- [ ] Consolidate the design system — one colour source of truth, one type scale; retire the legacy CSS vars
      in `globals.css` and the duplicate `diva-blue`
- [ ] Decompose `testSite.js` (1,049 lines, one client component) into section components
- [ ] Convert static sections to server components — currently ~203 KB compressed JS for a brochure page
- [ ] Real photography: before/after pairs from actual turnovers, plus the team. Current portfolio is 2024
      decor shots, not evidence of cleaning
- [ ] Motion discipline; honour `prefers-reduced-motion` throughout
- [ ] Rebuild home around one question: does a host understand in 5 seconds what we do and how to book

**Done when:** live, and GA4 shows a higher call+form conversion rate than the Phase 0 baseline.

---

## Guardrails

| Rule | Detail |
|---|---|
| Phone | Office line is voice-only. Never write "call or text" anywhere. |
| Turnaround | Quote turnaround is **24 hours**, not 2 minutes. |
| Founded | **2018.** (AGENTS.md's "since 2004" note is stale — `layout.js` already says 2018. Prune it.) |
| Claims | Every stat needs a source we could show someone, or it comes off. Includes 500+, 98%, $2,400. |
| Stale copy | "Zero negative cleanliness reviews in 2024" is two years old. Date-stamped claims need an owner. |
| Structure | One `<h1>` per page, describing the page — not the company. |
| Content | Answers live in the DOM. Never behind a click, never only in JSON-LD. |
| RSC boundary | Server page passing a lucide icon as a prop → receiving component must stay a server component. |
| New routes | Update 5 places: `sitemap.js`, `llms.txt`, home page array, `SiteHeader`, footer. |
| Images | `next/image` only; `sizes` must describe the **rendered** width. |

---

## Open questions

1. ~~Is there a Google Business Profile?~~ **Answered:** yes, in verification with Google as of 19 Aug 2026.
2. ~~Are the testimonials real?~~ **Answered:** yes, real clients; photos are stock for privacy.
3. ~~Substantiate the stats?~~ **Partly answered:** 550+/year for 3 years (now sitewide); revenue claim is
   now "~20%". **Still unsourced: "98% guest satisfaction", "78% industry average", "#1", "15+ cities".**
4. Do we have current photos of real jobs?
5. Where do leads go after the form — CRM, spreadsheet, or inbox?
6. Sustainable writing cadence per month? *(Sizes Phase 3.)*

---

## Measured: before → after Phase 1 (19 Aug 2026)

| Metric | Before | After |
|---|---|---|
| Hero srcset candidate selected @1600px | `w=640` (528×396 delivered) | `w=3840` (2560×1920 AVIF, 247 KB) |
| Hero `sizes` | `33vw` on a 100vw image | `100vw` |
| Nav contrast on white | 2.65:1 (FAIL AA) | 13.88:1 (PASS AA/AAA) |
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
| Favicon | 147 KB JPEG named `.ico` | 8.6 KB real multi-size ICO + PNG set |
| Web manifest | 404 | served |
| Analytics | none | Vercel Analytics + Speed Insights + GA4-ready |
| Lead persistence | none (email only) | server route, logged + optional webhook |
| Spam protection | localStorage only | honeypot + server validation + IP rate limit |
| ESLint | 3 warnings | clean |
| Dead modules | 4 files + ~100 commented lines | removed |

Lighthouse re-run and the GSC/GA4 baseline still need to happen once Phase 0's account setup is done.
