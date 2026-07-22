import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "gh-pages";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/TORQON",
    assetPrefix: "/TORQON/",
    images: { unoptimized: true },
  }),
};

export default nextConfig;

