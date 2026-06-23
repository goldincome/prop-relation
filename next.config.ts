import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "proportionalrelationship.com",
      },
    ],
  },

};

export default nextConfig;
