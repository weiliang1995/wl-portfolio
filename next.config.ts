import type { NextConfig } from "next";

// Next.js ships Sass support but not Less, so Less files are routed through
// less-loader explicitly. `*.module.less` must be declared before `*.less` so
// module files are compiled as CSS Modules rather than global stylesheets.
const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.module.less": {
        loaders: ["less-loader"],
        as: "*.module.css",
      },
      "*.less": {
        loaders: ["less-loader"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
