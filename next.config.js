/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [ "api.papi.rest","cdni.pornpics.com","media.babesource.com"],
  },
}

module.exports = nextConfig
