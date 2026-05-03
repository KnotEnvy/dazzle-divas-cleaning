// app/sitemap.js
// Declares known routes with priorities and change frequencies
// so search engines crawl the homepage most often.

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.dazzledivascleaning.com";

const SERVICE_PATHS = [
  "/services/vacation-rental-turnover",
  "/services/emergency-cleaning",
  "/services/property-management",
];

const CITY_PATHS = [
  "/cleaning/ormond-beach",
  "/cleaning/daytona-beach",
  "/cleaning/new-smyrna-beach",
];

export default async function sitemap() {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
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
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
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
