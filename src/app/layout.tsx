import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getBaseUrlFromEnv } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getBaseUrlFromEnv(),
  title: {
    default: "Senflow - Send Bulk WhatsApp Messages",
    template: "%s | SenFlow",
  },
  description:
    "Send bulk WhatsApp campaigns and manage conversations from one platform with SenFlow.",
  keywords: [
    "SenFlow",
    "WhatsApp campaign manager",
    "WhatsApp marketing",
    "bulk messaging",
    "conversation manager",
  ],
  openGraph: {
    title: "Senflow - Send Bulk WhatsApp Messages",
    description:
      "Send bulk WhatsApp campaigns and manage conversations from one platform.",
    url: "/",
    siteName: "SenFlow",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senflow - Send Bulk WhatsApp Messages",
    description:
      "Send bulk WhatsApp campaigns and manage conversations from one platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var key='senflow-theme';var saved=localStorage.getItem(key);var theme=(saved==='light'||saved==='dark')?saved:'dark';document.documentElement.setAttribute('data-theme',theme);}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`,
          }}
        />
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
