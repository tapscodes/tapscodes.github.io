/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/tapscodes.github.io",
  assetPrefix: "/tapscodes.github.io",
};

module.exports = nextConfig;
