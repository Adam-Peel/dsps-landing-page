/** @type {import('next').NextConfig} */
import path from "path";
const nextConfig = {
  output: "export",
  // basePath: "/",
  basePath: "/dsps-landing-page",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  webpack(config, { dev, isServer }) {
    if (!isServer) {
      config.resolve.modules.push(path.resolve("./src"));
    }
    return config;
  },
};

export default nextConfig;
