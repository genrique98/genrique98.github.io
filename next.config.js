/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental:{ appDir: true },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  basePath: '/gh-pages',
}

module.exports = nextConfig