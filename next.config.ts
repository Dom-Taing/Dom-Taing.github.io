import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/PortfolioV2",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
