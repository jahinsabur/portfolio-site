import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Uncomment if deploying to a subdirectory
  // basePath: '/portfolio',
  // assetPrefix: '/portfolio',
};

export default nextConfig;
