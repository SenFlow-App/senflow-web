import type { MetadataRoute } from "next";
import { getBaseUrlFromEnv } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrlFromEnv();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
  };
}

