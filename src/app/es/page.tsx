import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Senflow - Envia mensajes masivos por WhatsApp",
  description:
    "Envia campanas masivas por WhatsApp y gestiona conversaciones en una sola plataforma con SenFlow.",
  alternates: {
    canonical: "/es",
    languages: {
      en: "/",
      es: "/es",
      "x-default": "/",
    },
  },
  openGraph: {
    locale: "es_ES",
  },
};

export default function HomeSpanishPage() {
  return <HomePage locale="es" />;
}
