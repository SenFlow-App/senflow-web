const DEFAULT_SITE_URL = "https://senflow.app";

function normalizeBaseUrl(url: string) {
  const withProtocol = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  return new URL(withProtocol);
}

export function getBaseUrlFromEnv() {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL;

  if (!envUrl) {
    return new URL(DEFAULT_SITE_URL);
  }

  return normalizeBaseUrl(envUrl);
}

export function getBaseUrlFromHeaders(requestHeaders: Headers) {
  const forwardedHost = requestHeaders.get("x-forwarded-host");
  const host = forwardedHost || requestHeaders.get("host");
  const forwardedProto = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProto || (host?.includes("localhost") ? "http" : "https");

  if (host) {
    return normalizeBaseUrl(`${protocol}://${host}`);
  }

  return getBaseUrlFromEnv();
}

