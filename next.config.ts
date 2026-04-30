import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
