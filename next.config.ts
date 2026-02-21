import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Note: API routes require server mode. For static export, comment out the line below
  // output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;