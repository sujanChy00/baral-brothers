import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "cdn.tetoteto.co.jp",
        protocol: "https",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "localhost",
        protocol: "http",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
