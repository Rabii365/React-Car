/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
