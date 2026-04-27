import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHeaders } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getBaseUrlFromHeaders(await headers());
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

