import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
