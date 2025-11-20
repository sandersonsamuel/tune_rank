import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "melodymingler.vercel.app",
      },
    ],
  }
};

export default nextConfig;
