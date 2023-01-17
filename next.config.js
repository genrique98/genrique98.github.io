/** @type {import('next').NextConfig} */
const repo = 'genrique98.github.io'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental:{ appDir: true },
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
}

module.exports = nextConfig
