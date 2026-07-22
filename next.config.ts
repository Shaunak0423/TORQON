import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.GITHUB_ACTIONS ? "/TORQON" : "",
  assetPrefix: process.env.GITHUB_ACTIONS ? "/TORQON/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

