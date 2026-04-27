import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Senflow - Send Bulk WhatsApp Messages",
  description:
    "Send bulk WhatsApp campaigns and manage conversations in one platform with SenFlow.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "en_US",
  },
};

export default function Home() {
  return <HomePage locale="en" />;
}
