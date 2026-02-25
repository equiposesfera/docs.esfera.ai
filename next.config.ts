import type { NextConfig } from "next";

const isStatic = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStatic && {
    output: "export",
    assetPrefix: "./",
  }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
