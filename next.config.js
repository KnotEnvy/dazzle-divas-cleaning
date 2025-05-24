// next.config.js (at project root)
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      unoptimized: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dazzledivascleaning.vercel.app/',
        },
      ],
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    // Remove output: 'standalone' if you had it
  };

  
  
  module.exports = nextConfig;