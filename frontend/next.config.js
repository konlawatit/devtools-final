/** @type {import('next').NextConfig} */
require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_SERVER_URL: 'http://localhost:3013',
  },
}

module.exports = nextConfig
