import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "upload.wikimedia.org",
      "source.unsplash.com",
      "images.unsplash.com"
       // Add any other domains you need
    ],
  },
};

export default nextConfig;
