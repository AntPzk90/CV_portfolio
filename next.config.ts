import type { NextConfig } from "next";

// Must match the GitHub repo name — the site is served at
// https://<user>.github.io/CV_portfolio/
const basePath = "/CV_portfolio";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
