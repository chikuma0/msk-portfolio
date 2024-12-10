import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/msk-portfolio',
  assetPrefix: 'https://chikuma0.github.io/msk-portfolio',
  trailingSlash: true,
  distDir: '.next',
  experimental: {
    // Remove appDir configuration as it's no longer experimental
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config: Configuration) {
    return config;
  }
};

export default nextConfig;
