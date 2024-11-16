// next.config.js (at project root)
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
      domains: ['dazzle-divas-cleaning.vercel.app'],
      unoptimized: true,
    },
  };
  
  module.exports = nextConfig;