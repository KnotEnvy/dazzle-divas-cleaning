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
    },
    // Remove output: 'standalone' if you had it
  };
  
  module.exports = nextConfig;