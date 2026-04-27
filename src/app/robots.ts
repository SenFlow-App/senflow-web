import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getBaseUrlFromHeaders } from "@/lib/seo";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const baseUrl = getBaseUrlFromHeaders(await headers());

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [new URL("/sitemap.xml", baseUrl).toString()],
    host: baseUrl.toString(),
  };
}

