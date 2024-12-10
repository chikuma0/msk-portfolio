import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['res.cloudinary.com', 'placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
  },
  basePath: '/msk-portfolio',
  assetPrefix: '/msk-portfolio/',
  trailingSlash: true,
};

export default nextConfig;
