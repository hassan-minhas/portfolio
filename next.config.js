/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  output: "export", // <=== enables static exports
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};
module.exports = nextConfig;
