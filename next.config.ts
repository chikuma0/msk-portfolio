import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/msk-portfolio',
  assetPrefix: '/msk-portfolio/',
  trailingSlash: true,
  distDir: '.next',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config: Configuration) {
    return config;
  }
};

export default nextConfig;