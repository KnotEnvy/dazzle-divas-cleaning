export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dazzledivascleaning.com';
  const now = new Date();
  return [
    { url: `${base}/`, lastModified: now },
    { url: `${base}/privacy-policy`, lastModified: now },
    { url: `${base}/terms-of-service`, lastModified: now },
  ];
}

