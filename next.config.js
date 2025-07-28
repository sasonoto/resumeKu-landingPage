/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    optimizeCss: false, // Turn this off as it's causing the critters error
  },
  // Remove the output: 'standalone' for development
}

module.exports = nextConfig