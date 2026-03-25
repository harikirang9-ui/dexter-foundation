import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
      {
        protocol: "https",
        hostname: "ey5228l95bqwogyb.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
