/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/shanto20-dev",
  assetPrefix: "/shanto20-dev/",
  reactStrictMode: true,
  images: {
    domains: ["shanto20-dev.github.io"],
  },
};

module.exports = nextConfig;
