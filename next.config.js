// next.config.js (at project root)
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Let Next.js serve WebP/AVIF, resize per device, and lazy-load.
    // Site deploys to Vercel, which supports the built-in optimizer.
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
