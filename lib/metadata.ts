import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const title = `${SITE_NAME} | Landing pages, webs premium, e-commerce y software a la medida`;

const description =
  "LulabTech diseña y desarrolla landing pages, webs corporativas, tiendas online y software a la medida con enfoque premium, claridad comercial y alta conversión.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`
  },
  description,
  keywords: [
    "LulabTech",
    "landing pages Panamá",
    "desarrollo web Panamá",
    "web corporativa premium",
    "tienda online",
    "software a la medida",
    "agencia digital",
    "Next.js Panamá",
    "diseño web premium"
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
        url: "/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "LulabTech — Soluciones digitales premium"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og/og-cover.jpg"]
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
    icon: "/favicon.ico"
  }
};
