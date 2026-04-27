import type { MetadataRoute } from "next";
import { getBaseUrlFromEnv } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrlFromEnv();
  const now = new Date();

  return [
    {
      url: new URL("/", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: new URL("/", baseUrl).toString(),
          es: new URL("/es", baseUrl).toString(),
          "x-default": new URL("/", baseUrl).toString(),
        },
      },
    },
    {
      url: new URL("/es", baseUrl).toString(),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: new URL("/", baseUrl).toString(),
          es: new URL("/es", baseUrl).toString(),
          "x-default": new URL("/", baseUrl).toString(),
        },
      },
    },
  ];
}

