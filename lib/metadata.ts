import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const title = `Diseño de páginas web en Panamá | ${SITE_NAME}`;

const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

const description =
  "Creamos páginas web, landing pages, tiendas online y software a medida en Panamá para negocios que quieren verse profesionales, captar clientes y vender más.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`
  },
  description,
  keywords: [
    "diseño de páginas web en Panamá",
    "servicios digitales Panamá",
    "servicios de diseño web Panamá",
    "servicios de software Panamá",
    "páginas web en Panamá",
    "páginas web Panamá",
    "páginas informativas Panamá",
    "páginas para abogados Panamá",
    "diseño web Panamá",
    "agencia de diseño web Panamá",
    "desarrollo de páginas web Panamá",
    "desarrollo web Panamá",
    "agencia de diseño web Panamá",
    "mantenimiento web Panamá",
    "SEO para páginas web Panamá",
    "diseño web para clínicas Panamá",
    "diseño web para inmobiliarias Panamá",
    "software POS Panamá",
    "páginas web para restaurantes Panamá",
    "páginas web para academias Panamá",
    "páginas web para eventos Panamá",
    "rediseño web Panamá",
    "sistema de inventario Panamá",
    "CRM para empresas Panamá",
    "software para logística Panamá",
    "automatizaciones para empresas Panamá",
    "crear página web Panamá",
    "landing pages Panamá",
    "web corporativa Panamá",
    "tiendas online Panamá",
    "ecommerce Panamá",
    "software a medida Panamá",
    "sistemas web Panamá",
    "software para casilleros Panamá",
    "software para restaurantes Panamá",
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
        url: "/og/og-cover.png?v=7",
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
    images: ["/og/og-cover.png?v=7"]
  },
  applicationName: SITE_NAME,
  verification: googleSiteVerification
    ? {
        google: googleSiteVerification
      }
    : undefined,
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
      { url: "/brand/lulabtech-mark.png?v=7", type: "image/png", sizes: "1024x1024" },
      { url: "/favicon.ico?v=7", sizes: "any" }
    ],
    shortcut: ["/favicon.ico?v=7"],
    apple: [{ url: "/brand/lulabtech-mark.png?v=7", sizes: "180x180", type: "image/png" }]
  },
  other: {
    "geo.region": "PA",
    "geo.placename": "Panamá",
    "business:contact_data:country_name": "Panama",
    "business:contact_data:email": "ventas@lulabtech.com",
    "description:extended": SITE_DESCRIPTION,
    "classification": "Agencia de diseño web, desarrollo web, software y marketing digital en Panamá",
    "coverage": "Panamá",
    "target": "empresas en Panamá, emprendedores, servicios profesionales, negocios locales"
  }
};
