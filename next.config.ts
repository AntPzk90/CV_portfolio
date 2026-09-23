import type { NextConfig } from "next";

// Must match the GitHub repo name — the site is served at
// https://<user>.github.io/CV_portfolio/
// Only applied for production builds (`next build`), so local dev
// (`next dev`) keeps working at plain http://localhost:3000.
const basePath = process.env.NODE_ENV === "production" ? "/CV_portfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
