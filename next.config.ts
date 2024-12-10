import type { NextConfig } from "next";
import { Configuration } from 'webpack';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/msk-portfolio',
  assetPrefix: '/msk-portfolio',
  trailingSlash: true,
  distDir: 'out',
};

export default nextConfig;