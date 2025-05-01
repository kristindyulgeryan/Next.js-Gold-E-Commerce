import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/kristindyulgeryan/Goldman/blob/main/avediss/image/**",
      },
      {
        protocol: "https",
        hostname: "static.wixstatic.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
