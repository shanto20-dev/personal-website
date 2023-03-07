/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/personal-website",
  assetPrefix: "/personal-website/",
  reactStrictMode: true,
  images: {
    domains: ["shanto20-dev.github.io"],
  },
};

module.exports = nextConfig;
