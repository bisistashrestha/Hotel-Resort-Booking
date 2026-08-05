import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // This tells Turbopack the root is the folder where this config file lives
    root: path.join(__dirname),
  },
};

export default nextConfig;