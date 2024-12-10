import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/msk-portfolio',
  assetPrefix: '/msk-portfolio',  // Removed trailing slash
  trailingSlash: true,
  distDir: 'out',  // Changed from .next to out
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config: Configuration) {
    return config;
  }
};

export default nextConfig;