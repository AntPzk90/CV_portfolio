import type { MetadataRoute } from "next";
import { locales } from "@/dictionaries";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const pages = ["", "about", "experience", "certificates"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${siteUrl}/${locale}${page ? `/${page}` : ""}/`,
      });
    }
  }

  return entries;
}
