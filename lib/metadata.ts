import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const title = `Diseño de Páginas Web en Panamá | Landing Pages, Tiendas Online y Software | ${SITE_NAME}`;

const description =
  "Agencia de diseño web en Panamá. Creamos páginas web profesionales, landing pages, tiendas online y software a medida con diseño premium, SEO inicial y conexión a WhatsApp.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`
  },
  description,
  keywords: [
    "diseño de páginas web en Panamá",
    "páginas web en Panamá",
    "páginas web Panamá",
    "diseño web Panamá",
    "agencia de diseño web Panamá",
    "desarrollo de páginas web Panamá",
    "crear página web Panamá",
    "landing pages Panamá",
    "web corporativa Panamá",
    "tiendas online Panamá",
    "ecommerce Panamá",
    "software a medida Panamá",
    "sistemas web Panamá",
    "SEO Panamá",
    "Google Ads Panamá",
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
        url: "/og/og-cover.png?v=6",
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
    images: ["/og/og-cover.png?v=6"]
  },
  applicationName: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
      { url: "/brand/lulabtech-mark.png?v=6", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico?v=6", sizes: "any" }
    ],
    shortcut: ["/favicon.ico?v=6"],
    apple: [{ url: "/brand/lulabtech-mark.png?v=6", sizes: "180x180", type: "image/png" }]
  },
  other: {
    "geo.region": "PA",
    "geo.placename": "Panamá",
    "business:contact_data:country_name": "Panama",
    "business:contact_data:email": "ventas@lulabtech.com",
    "description:extended": SITE_DESCRIPTION
  }
};
