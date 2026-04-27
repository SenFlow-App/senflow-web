import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://senflow.app"),
  title: {
    default: "Senflow - Send Bulk WhatsApp Messages",
    template: "%s | SenFlow",
  },
  description:
    "Gestiona campañas masivas por WhatsApp y conversaciones en una sola plataforma con SenFlow.",
  keywords: [
    "SenFlow",
    "WhatsApp campaign manager",
    "WhatsApp marketing",
    "mensajeria masiva",
    "gestor de conversaciones",
  ],
  openGraph: {
    title: "Senflow - Send Bulk WhatsApp Messages",
    description:
      "Envía campañas masivas por WhatsApp y gestiona conversaciones desde una sola plataforma.",
    url: "https://senflow.app",
    siteName: "SenFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senflow - Send Bulk WhatsApp Messages",
    description:
      "Envía campañas masivas por WhatsApp y gestiona conversaciones desde una sola plataforma.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600,700&f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
