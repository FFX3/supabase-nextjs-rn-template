import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compiler: {
    relay: {
      src: "./",
      language: "typescript",
    },
  },
};

export default nextConfig;

