import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure proper static file handling
  images: {
    unoptimized: false,
  },
  // Vercel-specific optimizations
  swcMinify: true,
  compress: true,
};

export default nextConfig;
