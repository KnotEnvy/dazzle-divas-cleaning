# Dazzle Divas Cleaning — Agent Guide

Purpose: Give LLM agents enough context to safely modify and extend this Next.js app without breaking deployment, linting, or UX.

## Project Summary
- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS (custom brand colors), globals in `app/globals.css`
- UI libs: `framer-motion`, `lucide-react`
- Hosting: Vercel (auto-deploy on GitHub push)
- Path: Project root is `dazzle-divas-cleaning/`

## Active Entry Points
- Home route: `app/page.js` → `app/components/Main.js` → renders `testSite.js` inside `Layout`.
- Layout (client): `app/components/Layout.js` wraps pages with `Footer` and the smooth-scroll hook. Slim by design — no header (each top-level page owns its own header).
- Marketing pages route group: `app/(marketing)/layout.jsx` wraps Phase 1 pages in `PageShell` (SiteHeader + Footer + StickyQuotePill + MotionConfig). Home does NOT use this group — it keeps its own header inside `testSite.js`.
- Global App metadata: `app/layout.js` (App Router metadata API). LocalBusiness JSON-LD with `aggregateRating` + 3 Review objects injected via `<Script>`. Preconnect/dns-prefetch hints for EmailJS.
- Dynamic OG cards: `app/opengraph-image.js` (1200×630) and `app/twitter-image.js` are file-based image conventions that auto-apply to all routes — do NOT set `openGraph.images` in per-page metadata or you'll override them.

## Key Components (active)
- `app/components/testSite.js` — main landing page. Sections in order: hero, stats, **Areas We Serve** (3 cards linking to `/cleaning/*`), services (3 cards each linking to `/services/*` via "View full service page →"), why-choose-us, portfolio, testimonials, FAQ (`<FAQ />`), contact (with `ContactForm`). Header nav includes FAQ link to `/faq`.
- `app/components/FAQ.js` — home-page FAQ accordion (8 questions) with FAQPage JSON-LD. Inserted between testimonials and contact in `testSite.js`. Distinct from the dedicated `/faq` page (which has 20 categorized Qs and search/filter).
- `app/components/ContactForm.js` — validated + sanitized EmailJS form (glass style).
- `app/components/CompetitiveServices.js` — modal overlay with service details/comparison. Triggered by "Compare Services" button on each home service card.
- `app/components/PrivacyPolicy.js` — policy page (App route at `/privacy-policy`).
- `app/components/TermsOfService.js` — terms page (App route at `/terms-of-service`).
- `app/components/Footer.js`, `app/components/Layout.js` — shell. Footer service-area chips link to `/cleaning/*` for cities with detail pages; "Our Services" rows link to `/services/*` and `/faq`.

### Phase 1 marketing components
- `app/components/shell/` — `SiteHeader.js` (solid sticky header w/ scroll progress + dropdown nav), `PageShell.js` (wraps marketing pages), `Breadcrumbs.js` (visual + JSON-LD).
- `app/components/motion/` — `MotionConfig.js` (global reduced-motion + spring presets), `Reveal.js` (whileInView wrapper + StaggerGroup/StaggerItem), `ParallaxLayer.js` (useScroll + useTransform), `MagneticButton.js` (pointer-tracking spring CTA), `StickyQuotePill.js` (scroll-revealed bottom-right CTA).
- `app/components/service/` — `ServiceHero.js`, `AtAGlance.js`, `ProcessSteps.js`, `IncludedChecklist.js`, `PricingGrid.js`, `BeforeAfter.js`, `ServiceFAQ.js`, `CrossSell.js`, `CTABand.js`. Section components that take icons as props (AtAGlance, ProcessSteps, IncludedChecklist, PricingGrid, CrossSell) are SERVER components — leave the `'use client'` directive off so icon function refs don't cross the RSC boundary.
- `app/components/city/` — `LocalContext.js` (typography + highlight chips), `ServiceAreaMap.js` (stylized SVG map with neighborhood pins), `NeighborhoodGrid.js` (chip grid).
- `app/components/faq/FAQAccordion.js` — categorized accordion w/ search and FAQPage JSON-LD.

Routes:
- `/` home (testSite, unchanged)
- `/services/vacation-rental-turnover`, `/services/emergency-cleaning`, `/services/property-management` — service detail pages
- `/cleaning/ormond-beach`, `/cleaning/daytona-beach`, `/cleaning/new-smyrna-beach` — city landing pages (LocalBusiness schema with `areaServed`/`geo`/`serviceArea`)
- `/faq` — categorized FAQ w/ FAQPage schema
- `/privacy-policy`, `/terms-of-service` — policy/terms pages
- `app/robots.js`, `app/sitemap.js` present for SEO; sitemap enumerates all routes above.

## RSC server/client boundary rules (Phase 1 lesson)
- Page files in `app/(marketing)/**/page.jsx` are SERVER components so `export const metadata` works and JSON-LD `<script>` tags can be inlined without hydration cost.
- When a server page passes a `lucide-react` icon (a forwardRef component) as a *prop* to a client component, Next.js fails with "Functions cannot be passed directly to Client Components." Fix: keep the receiving component as a server component (no `'use client'`), so the icon ref stays server-side and renders to SVG before the children prop crosses to any inner client primitive (`Reveal`, `StaggerItem`, `motion.*`).
- Components that DO need `'use client'`: anything with `useState`/`useEffect`/event handlers/Framer Motion hooks (`useScroll`, `useTransform`, `useReducedMotion`). All `motion/*` primitives, `BeforeAfter.js`, `ServiceFAQ.js`, `FAQAccordion.js`, `ServiceAreaMap.js`, `SiteHeader.js`, `Breadcrumbs.js` are client.

## Styling Conventions
- Brand colors in `tailwind.config.js` (`diva-pink`, `diva-cyan`, `diva-navy`, `diva-gold` + legacy aliases).
- “Glass” UI: `bg-white/20 border-white/30 text-white placeholder-white/70 focus:ring-pink-400`.

## Images
- Use `next/image` for all images:
  - Backgrounds: `Image` with `fill` + `className="object-cover"`.
  - Grid items: wrap with aspect container (e.g., `relative aspect-[4/3]`) + `Image fill`.
  - Avatars/logos: `Image` with explicit `width`/`height`.
- Assets are in `public/images`.
- Image optimization is enabled via `next.config.js` (`images.unoptimized: false`, WebP/AVIF, device sizes, 30-day cache TTL). Vercel's built-in optimizer serves resized formats per device.
- **`sizes` must describe the width the image actually renders at.** A full-bleed `fill` background is `sizes="100vw"`. The hero previously declared `33vw`, so the browser fetched a 640px variant and stretched it across the viewport — a 4.5x upscale on desktop. Fixed Aug 2026.
- Source images are capped at 2560px on the longest side, JPEG q~85. `public/images` went from 85 MB to 14 MB. Originals are archived outside the repo at `../_image_backup_20260819/`.

## Forms & EmailJS
- Contact form lives in `app/components/ContactForm.js` and is embedded within the contact section of `testSite.js`.
- Env vars (public):
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- Security hygiene: client-side sanitization, simple CSRF token, localStorage rate limiting. No server-side verification is implemented.

## SEO & Metadata
- Root metadata in `app/layout.js` (title/description, LocalBusiness JSON-LD with `aggregateRating` + 3 Review objects, preconnect/dns-prefetch hints).
- **JSON-LD must be a plain `<script>` in a server component — never `next/script`.** `<Script strategy="beforeInteractive">` queues the tag through `self.__next_s` and injects it client-side, so the schema is absent from the served HTML. Google executes JS and usually still sees it; AI/LLM crawlers read raw HTML and saw nothing. Fixed Aug 2026.
- **Per-page titles must NOT include the brand.** `app/layout.js` sets `template: "%s | Dazzle Divas Cleaning"`. Adding the brand in a page's own `metadata.title` produces a doubled suffix. Budget: title ≤ 70 chars, description ≤ 160 chars, both measured after the template is applied.
- Per-route metadata via `export const metadata` in each `page.jsx` (title, description, canonical, OG title/description/url — DO NOT set `openGraph.images`; the dynamic generators handle that).
- Per-page schemas inlined as `<script type="application/ld+json">` in page JSX:
  - Service pages: `Service` (with `provider`, `areaServed`, `hasOfferCatalog`) + `FAQPage` (via `ServiceFAQ` component) + `BreadcrumbList` (via `Breadcrumbs` component)
  - City pages: `LocalBusiness` (with `areaServed`, `geo` coordinates, `serviceArea` GeoCircle) + `BreadcrumbList`
  - `/faq`: `FAQPage` (via `FAQAccordion`) + `BreadcrumbList`
- `app/robots.js` explicitly allows AI/LLM crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, etc.) and points to sitemap.
- `app/sitemap.js` enumerates all routes (home, 3 services, 3 cities, FAQ, privacy, terms) with priority/changeFrequency. Set `NEXT_PUBLIC_SITE_URL` for accurate URLs.
- `public/llms.txt` is the AI-agent discoverability file. It cross-links to all service and city detail pages — keep URLs in sync when routes are added or removed.

## Deployment
- Vercel auto-build on push to GitHub.
- `next.config.js` is the single source of truth — image optimization (WebP/AVIF, deviceSizes, imageSizes, 30-day cache TTL), `poweredByHeader: false`, `compress: true`.
- Scripts (`package.json`): `dev`, `build`, `start`, `export`, `lint`.

## Linting & Safety Rules
- ESLint: `react/no-unescaped-entities` is enforced. Escape quotes in JSX text:
  - `'` → `&apos;` or use `&lsquo;/&rsquo;`; `"` → `&quot;` or `&ldquo;/&rdquo;`.
- Hooks: Do not call hooks conditionally. In sparkles components, `useMemo` is called before any early returns; check `prefersReduced` after creating `dots`.
- `.eslintignore` excludes `legacy/**`.

## Accordions and collapsible content
- **Answers stay mounted in the DOM at all times.** Never `{isOpen && <answer/>}`. Open/closed is a CSS `grid-template-rows: 0fr/1fr` transition on a wrapper with `overflow-hidden`, so crawlers and AI assistants read the text without a click. Applies to `FAQ.js`, `faq/FAQAccordion.js`, and `service/ServiceFAQ.js`. Fixed Aug 2026 — this alone took `/faq` from 355 to 1,117 crawlable words.

## Accessibility
- Minimum tap target 44x44 on mobile (24x24 is the absolute WCAG 2.2 AA floor). Wrap small visual elements in a padded button rather than enlarging the visual.
- Every icon-only button needs an `aria-label`.
- Mobile menu button has `aria-label` and `aria-expanded`.
- Modals have `role="dialog"` and `aria-modal`. Escape closes the image modal.
- Consider adding a focus trap for modals if you expand modal features.

## Legacy Archive
- Old modules are archived under `legacy/v1/components/` and excluded from lint/format/build.
- To restore a component, move it back to `app/components/` and update imports.
- See `legacy/README.md` for the list and rationale.

## Editing Tips for Agents
- Keep `testSite.js` logically segmented; prefer factoring large static arrays outside the component to avoid re-creation on each render.
- Use `next/image` everywhere (no raw `<img>` in active code).
- Keep legal pages’ content updated (effective/last updated dates) and avoid introducing unescaped quotes.
- When adding new routes, use App Router conventions (create `app/route/page.jsx`).
- If adding more SEO data, prefer `app/layout.js` metadata API; avoid `next/head` in client components.

## Environment Variables
- Required (client):
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
- Optional:
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
  - `NEXT_PUBLIC_SITE_URL` (sitemap)

## Dev Commands
- Start dev: `npm run dev`
- Lint: `npm run lint`
- Build locally: `npm run build`

## File Map (high value)
- Home flow: `app/page.js` → `app/components/Main.js` → `app/components/testSite.js` (with `<FAQ />` section)
- Marketing route group: `app/(marketing)/layout.jsx` → `PageShell` → SiteHeader + Footer + StickyQuotePill
- Service pages: `app/(marketing)/services/{vacation-rental-turnover,emergency-cleaning,property-management}/page.jsx`
- City pages: `app/(marketing)/cleaning/{ormond-beach,daytona-beach,new-smyrna-beach}/page.jsx`
- FAQ page: `app/(marketing)/faq/page.jsx`
- Layout shell: `app/layout.js`, `app/components/Layout.js`, `app/components/Footer.js`
- Policies: `app/privacy-policy/page.jsx` → `app/components/PrivacyPolicy.js` | `app/terms-of-service/page.jsx` → `app/components/TermsOfService.js`
- SEO/discoverability: `app/robots.js`, `app/sitemap.js`, `app/opengraph-image.js`, `app/twitter-image.js`, `public/llms.txt`
- Legacy: `legacy/v1/components/*`

## Navigation & Discovery (post-Phase-1)
- Home page is the only ungated entry point — visitors arrive here and must be funneled to detail pages through:
  - Header nav: includes "FAQ" link to `/faq`
  - "Areas We Serve" section (between stats and services): 3 city cards
  - Service cards: each has "Compare Services" (modal) + "View full service page →" (Link to `/services/*`)
  - Footer: service-area chips link to `/cleaning/*` (for cities with pages); Quick Links includes Service Areas + FAQ; "Our Services" rows link to detail pages
- Phase 1 pages use `SiteHeader.js` with dropdowns linking among themselves and back to home (`/#contact`, `/#services`, etc.).
- When adding a new service or city page: update sitemap, llms.txt Key Pages list, the relevant home-page array (`services` or `serviceAreas` in `testSite.js`), the Footer dropdown lists in `SiteHeader.js`, and the Footer chip array.

## Authoritative Copy Decisions
- **Office line is voice-only for incoming.** Phone (386) 301-5775 does NOT accept incoming SMS. Never write "call or text" anywhere on the site. Origin commit `28ce2e0` enforces this.
- **Quote turnaround is 24 hours**, not "2 minutes." Origin commit `28ce2e0` enforces this in the home hero CTA.
- **Founded 2018** — used in Footer copy, llms.txt, and layout.js metadata.
- **550+ properties cleaned per year** (three years running), NOT a cumulative "500+ properties served". Confirmed by the owner Aug 2026. Keep this figure consistent across testSite.js stats, the hero badge, property-management page stats, and llms.txt.
- **Year-relative claims are computed, never hardcoded.** "Zero negative cleanliness reviews in {lastYear}" gets `lastYear` from `app/page.js` (a server component) so it can never go stale and can never cause a hydration mismatch. `app/page.js` sets `revalidate = 86400` for this reason.
- **No dollar figures for customer revenue.** "~20% average revenue increase reported by hosts" replaced the old "$2,400 average annual revenue increase".


## Measurement (added Aug 2026)
- `app/components/Analytics.js` mounts Vercel Analytics + Speed Insights (zero config on Vercel) and GA4.
- GA4 loads **only** when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set, so local and preview stay clean.
- `app/lib/analytics.js` exports `track(event, params)` and an `EVENTS` map. It no-ops when no provider is present — safe to call from anywhere.
- Phone and email clicks are captured by one delegated listener in `Analytics.js`. Do NOT add per-link handlers.
- Tracked today: `call_click`, `email_click`, `quote_submit`, `quote_submit_failed`.

## Lead capture (added Aug 2026)
- `app/api/quote/route.js` is the server-side capture endpoint. The form posts here **first**, then attempts the EmailJS notification.
- Rationale: previously a failed EmailJS call lost the enquiry silently. Now the lead is recorded before delivery is attempted, and an email failure is tracked but not shown to the visitor as a failure.
- Capture targets: structured `console.log('[LEAD]', ...)` (always, searchable in Vercel logs) and `LEAD_WEBHOOK_URL` (optional — point it at Zapier/Make/Sheets/CRM).
- Protections: honeypot `company` field, server-side validation, per-instance IP rate limit (5/hour).
- `SERVICE_TYPES` in the route must stay in sync with the `<option value>` list in `ContactForm.js`.

## Resolved — Cloudflare robots.txt override (fixed 20 Aug 2026)
The issue below was real and has been turned off in the Cloudflare dashboard. Live robots.txt now
has zero `Disallow` rules. Kept here as history: if AI crawlers ever stop appearing, re-check
`https://www.dazzledivascleaning.com/robots.txt` for a re-enabled Cloudflare managed block first.

### What it was
`app/robots.js` explicitly allows AI crawlers, but Cloudflare's **Managed robots.txt** feature prepends its own block to the live file that does the opposite:

```
Content-Signal: search=yes,ai-train=no,use=reference
User-agent: ClaudeBot   -> Disallow: /
User-agent: GPTBot      -> Disallow: /
(also Amazonbot, Applebot-Extended, Bytespider, CCBot, Google-Extended, meta-externalagent)
```

The crawlers are NOT network-blocked (all return 200), but well-behaved ones read robots.txt and will self-restrict. This cannot be fixed in code — it is a Cloudflare dashboard setting. Until it is turned off, the site's AI-discoverability work is being contradicted at the edge.

## Header treatment (decided 20 Aug 2026)
- Home header is **frosted glass on scroll**, not solid: `bg-white/90 supports-[backdrop-filter]:bg-white/70 backdrop-blur-xl` with a `border-white/40` hairline. Owner preference — a solid white bar was tried and rejected.
- The tint must be a **real** value. The original `bg-slate/85` was not a Tailwind class and compiled to nothing, which is what caused the 2.65:1 contrast failure. Glass needs an actual translucent background, not the absence of one.
- The `bg-white/90` base is the no-backdrop-filter fallback; a 70% wash with no blur behind it is not legible.
- Nav links are `text-diva-navy-950` when scrolled, white over the hero. Measured 7.5:1 (over the darkest section that scrolls under the header) to 13.9:1 (over white). Keep any restyle above 4.5:1 at the worst backdrop.
- Marketing pages use a **dark** glass header (`bg-slate-900/90`, white text) in `shell/SiteHeader.js`. Home and the marketing pages therefore do not match. Unifying them is a Phase 4 design-system decision, not a bug.
