import type { MetadataRoute } from "next";
import { servicePageSlugs } from "@/data/seo-pages";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/proyectos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85
    },
    ...servicePageSlugs.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: slug === "diseno-web-panama" ? 0.95 : 0.9
    }))
  ];
}
