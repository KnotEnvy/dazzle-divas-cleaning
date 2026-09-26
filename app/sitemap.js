// app/sitemap.js
// Declares known routes with priorities and change frequencies
// so search engines crawl the homepage most often.

import { GUIDES, GUIDES_PATH } from "./components/guides/guides";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dazzledivascleaning.com";

const SERVICE_PATHS = [
  "/services/vacation-rental-turnover",
  "/services/emergency-cleaning",
  "/services/property-management",
  "/services/residential-house-cleaning",
  "/services/deep-cleaning",
  "/services/eco-friendly-cleaning",
];

const CITY_PATHS = [
  "/cleaning/ormond-beach",
  "/cleaning/daytona-beach",
  "/cleaning/new-smyrna-beach",
  "/cleaning/port-orange",
  "/cleaning/ponce-inlet",
  "/cleaning/daytona-beach-shores",
  "/cleaning/ormond-by-the-sea",
];

// Standalone marketing pages. /review and /reviews are redirect route
// handlers, not pages, so they are deliberately absent.
const RESOURCE_PATHS = [
  { path: "/pricing", priority: 0.8 },
  { path: "/about", priority: 0.6 },
];

export default async function sitemap() {
  const now = new Date();

  return [
    {
      // No trailing slash — matches the canonical emitted by app/layout.js
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...SERVICE_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...CITY_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...RESOURCE_PATHS.map(({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority,
    })),
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}${GUIDES_PATH}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Guides register themselves in app/components/guides/guides.js; the
    // registry's lastReviewed date is the honest lastModified.
    ...GUIDES.map((guide) => ({
      url: `${SITE_URL}${GUIDES_PATH}/${guide.slug}`,
      lastModified: new Date(guide.lastReviewed),
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
