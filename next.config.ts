import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/TORQON",
  assetPrefix: "/TORQON",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

