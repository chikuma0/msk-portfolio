import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/msk-portfolio',
  assetPrefix: 'https://chikuma0.github.io/msk-portfolio',
  trailingSlash: true,
  experimental: {
    appDir: true
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack(config: Configuration) {
    return config;
  },
  distDir: '.next',
  srcDir: 'src',
};

export default nextConfig;
