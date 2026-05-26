import type { MetadataRoute } from "next";
import { properties } from "@/lib/data";

const baseUrl = "https://impulsovivienda.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${baseUrl}/propiedades`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9
    },
    ...properties.map((property) => ({
      url: `${baseUrl}/propiedades/${property.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8
    }))
  ];
}
