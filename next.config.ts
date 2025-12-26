import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/wasin.profile",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
