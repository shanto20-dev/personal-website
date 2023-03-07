/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/personal-website" : "",
  assetPrefix: isProd ? "/personal-website/" : "",
  reactStrictMode: true,
  images: {
    domains: ["shanto20-dev.github.io"],
  },
};

module.exports = nextConfig;
