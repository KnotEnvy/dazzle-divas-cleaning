// Single source of truth for the /guides section.
//
// The /guides index maps over GUIDES, every guide page reads its metadata
// from here, and the lead can import it to wire sitemap.js, llms.txt, the
// header dropdowns, and the footer (nav group: "Resources").
//
// Field rules:
// - title: metadata title, <= 46 chars. The root template appends
//   " | Dazzle Divas Cleaning", so never include the brand here.
// - headline: the visible <h1> and Article.headline.
// - description: meta description, <= 160 chars.
// - published / lastReviewed: ISO dates. lastReviewed renders as
//   "Last reviewed <Month Year>" and feeds Article.dateModified. Bump it
//   whenever a guide is re-checked, especially the regulatory one.
// - readingMinutes: visible text (takeaways + body + FAQ) at ~230 wpm.
// - image: a real job photo in /public/images, used for Article.image.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';

export const GUIDES_PATH = '/guides';

export const GUIDES_INDEX = {
  title: 'Vacation Rental Host Guides for Volusia County',
  headline: 'Guides for Volusia County vacation rental hosts',
  description:
    'Practical guides for Airbnb and VRBO hosts in Volusia County: turnover checklists, cleaning fees, local rental rules, race weeks, hurricanes, and snowbirds.',
};

export const GUIDE_CATEGORIES = [
  'Turnovers and seasons',
  'Pricing and hiring',
  'Rules and storms',
];

export const GUIDES = [
  {
    slug: 'vacation-rental-turnover-checklist',
    title: 'Vacation Rental Turnover Cleaning Checklist',
    headline: 'Vacation rental turnover cleaning checklist, room by room',
    description:
      'A room-by-room vacation rental turnover checklist for Airbnb and VRBO hosts: what to clean, what to restock, what to photograph, and what hosts forget.',
    dek: 'The order a hospitality-trained crew works a turnover, the restock list, and the photo checks that catch a miss before your guest does.',
    summary:
      'Room-by-room turnover steps, a par-level restock list, how 30-point photo verification works, and the small misses that cost reviews.',
    category: 'Turnovers and seasons',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 6,
    image: '/images/twinBed_divas.jpg',
  },
  {
    slug: 'airbnb-cleaning-fee-florida',
    title: 'Airbnb Cleaning Fee in Florida: What to Charge',
    headline: 'How much should you charge for an Airbnb cleaning fee in Florida?',
    description:
      'How to set an Airbnb or VRBO cleaning fee in Florida: tie it to your real turnover cost, account for taxes and total-price display, and know when to fold it in.',
    dek: 'Start from what a turnover actually costs you, then account for Volusia taxes, platform fees, and how guests read the number.',
    summary:
      'Tie your fee to your real turnover cost, see how Volusia taxes and Airbnb fees stack on it, and decide whether to fold it into the nightly rate.',
    category: 'Pricing and hiring',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 6,
    image: '/images/bed_divas.jpg',
  },
  {
    slug: 'volusia-county-short-term-rental-rules',
    title: 'Volusia County Short-Term Rental Rules',
    headline: 'Volusia County short-term rental rules: a city-by-city guide for hosts',
    description:
      'Volusia County short-term rental rules for hosts: the DBPR license, tourist tax, and zoning in Daytona Beach, Ormond Beach, New Smyrna Beach, and Ponce Inlet.',
    dek: 'The state license, the tax accounts, and what each coastal city allows, checked against official sources and linked so you can confirm them yourself.',
    summary:
      'The DBPR license, sales and tourist tax registration, the state grandfather rule, and what each Volusia coastal city allows, with official sources.',
    category: 'Rules and storms',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 6,
    image: '/images/stairsOcean_divas.jpg',
  },
  {
    slug: 'daytona-race-week-bike-week-rental-prep',
    title: 'Race Week & Bike Week Prep for Daytona Rentals',
    headline: 'Race week and Bike Week prep for Daytona vacation rentals',
    description:
      'Prep your Daytona rental for Speedweeks, Bike Week, Jeep Beach, and Biketoberfest: when events typically run, booking cleaners early, minimum stays, and wear.',
    dek: 'When the big event weeks usually fall, how to lock in cleaning capacity, and what changes in a turnover when the whole county checks out at once.',
    summary:
      'Typical event windows, why to book cleaners the day you open event dates, minimum stays, heavier turnovers, and protecting the unit from event wear.',
    category: 'Turnovers and seasons',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 5,
    image: '/images/livingroom2_divas.jpg',
  },
  {
    slug: 'hurricane-prep-vacation-rental-volusia',
    title: 'Hurricane Prep & Cleanup for Vacation Rentals',
    headline: 'Hurricane prep and post-storm cleanup for Volusia vacation rentals',
    description:
      'Hurricane season prep for Volusia County vacation rentals: a pre-storm checklist, guest messaging, insurance photos, and what post-storm cleaning involves.',
    dek: 'A pre-storm checklist, what to tell guests, the photos your insurer will want, and the order post-storm cleanup should happen in.',
    summary:
      'A pre-storm checklist, guest messaging that sets expectations, insurance documentation photos, and what post-storm cleaning involves.',
    category: 'Rules and storms',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 5,
    image: '/images/backtard_divas.jpg',
  },
  {
    slug: 'snowbird-season-cleaning-volusia',
    title: 'Snowbird Season Cleaning in Volusia County',
    headline: 'Snowbird season turnovers in Volusia County: long stays, deeper cleans',
    description:
      'How to handle October-to-April snowbird stays in Volusia County: deep cleans between long-stay guests, linen rotation, and Ormond vs Ormond-by-the-Sea rules.',
    dek: 'Fewer turnovers, heavier ones. What a long-stay guest leaves behind, how to rotate linens, and why the rules differ a few minutes apart in Ormond.',
    summary:
      'Deep cleans between long-stay guests, linen rotation, mid-stay cleans, and why Ormond Beach and Ormond-by-the-Sea follow different rental rules.',
    category: 'Turnovers and seasons',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 5,
    image: '/images/kitchen_divas.jpg',
  },
  {
    slug: 'how-to-hire-vacation-rental-cleaner-volusia',
    title: 'How to Hire a Vacation Rental Cleaner',
    headline: 'How to hire a vacation rental cleaner in Volusia County',
    description:
      'Questions to ask before you hire a vacation rental cleaner in Volusia County: photo proof, backup crews, insurance, calendar sync, and transparent pricing.',
    dek: 'The questions that reveal how a cleaner performs on a bad day, the red flags, and the paperwork to collect before the first turnover.',
    summary:
      'Questions to ask, red flags, photo verification, backup capacity, insurance and workers’ comp, calendar sync, and pricing you can see up front.',
    category: 'Pricing and hiring',
    published: '2026-09-26',
    lastReviewed: '2026-09-26',
    readingMinutes: 5,
    image: '/images/cleanSink_divas.jpg',
  },
];

export function getGuide(slug) {
  return GUIDES.find((guide) => guide.slug === slug);
}

export function guidePath(slug) {
  return `${GUIDES_PATH}/${slug}`;
}

// Renders an ISO date as "September 2026". Only server components call this,
// so there is no hydration risk; UTC keeps the month from shifting by zone.
export function formatMonthYear(iso) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T12:00:00Z`));
}

export function guideMetadata(slug) {
  const guide = getGuide(slug);
  if (!guide) throw new Error(`Unknown guide slug: ${slug}`);
  const path = guidePath(slug);
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}${path}`,
      siteName: 'Dazzle Divas Cleaning LLC',
      locale: 'en_US',
      publishedTime: guide.published,
      modifiedTime: guide.lastReviewed,
    },
  };
}
