import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${SITE_NAME} | Soluciones digitales premium`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Creamos landing pages, webs corporativas, tiendas online y software a la medida con enfoque premium, conversión y experiencia de marca.",
  keywords: [
    "LulabTech",
    "landing pages",
    "desarrollo web",
    "tiendas online",
    "software a la medida",
    "Panamá",
    "agencia digital"
  ],
  openGraph: {
    title: `${SITE_NAME} | Soluciones digitales premium`,
    description:
      "Diseño, desarrollo y experiencias digitales premium pensadas para convertir.",
    url: baseUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: "/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "LulabTech"
      }
    ],
    locale: "es_PA",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Soluciones digitales premium`,
    description:
      "Diseño, desarrollo y experiencias digitales premium pensadas para convertir.",
    images: ["/og/og-cover.jpg"]
  },
  alternates: {
    canonical: "/"
  },
  applicationName: SITE_NAME,
  category: "technology",
  description: SITE_DESCRIPTION
};
