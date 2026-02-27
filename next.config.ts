import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.ouc.com", pathname: "/**" },
      { protocol: "https", hostname: "ouc.com", pathname: "/**" },
      { protocol: "https", hostname: "oucblog.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
