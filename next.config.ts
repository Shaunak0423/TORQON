import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/TORQON',
  assetPrefix: '/TORQON/',
};

export default nextConfig;
