import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const title = `Diseño de Páginas Web en Panamá | Landing Pages, Tiendas Online y Software | ${SITE_NAME}`;

const description =
  "Agencia de diseño web en Panamá. Creamos landing pages, páginas web corporativas, tiendas online y software a medida con diseño premium, enfoque comercial y conexión a WhatsApp.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`
  },
  description,
  keywords: [
    "diseño de páginas web en Panamá",
    "páginas web Panamá",
    "diseño web Panamá",
    "agencia de diseño web Panamá",
    "landing pages Panamá",
    "desarrollo web Panamá",
    "tiendas online Panamá",
    "software a medida Panamá",
    "agencia digital Panamá",
    "LulabTech"
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: baseUrl,
    title,
    description,
    siteName: SITE_NAME,
    locale: "es_PA",
    images: [
      {
        url: "/og/og-cover.png",
        width: 1200,
        height: 630,
        alt: "LulabTech — Diseño de páginas web en Panamá"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/og-cover.png"]
  },
  applicationName: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  icons: {
    icon: [
      { url: "/brand/lulabtech-mark.png?v=5", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico?v=5", sizes: "any" }
    ],
    shortcut: ["/favicon.ico?v=5"],
    apple: [{ url: "/brand/lulabtech-mark.png?v=5", sizes: "180x180", type: "image/png" }]
  }
};
