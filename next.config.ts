import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["react", "next", "next/navigation"],
  },
};

export default nextConfig;
