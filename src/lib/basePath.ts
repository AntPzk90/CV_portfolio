// GitHub Pages serves this site from a sub-path (/CV_portfolio), so every
// asset referenced by a raw string (not next/link) needs this prefix.
// NEXT_PUBLIC_BASE_PATH is set in next.config.ts and mirrors `basePath`.

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
