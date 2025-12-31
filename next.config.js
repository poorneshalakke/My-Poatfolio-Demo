// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this so Next.js knows your pages are in src/
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Optional: if you want to deploy to a subfolder
  // basePath: '',
}

module.exports = nextConfig;
