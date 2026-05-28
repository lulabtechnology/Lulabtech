import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/pages/services-hub-page";

export const metadata: Metadata = {
  title: {
    absolute: "Servicios digitales Panamá | Web, software y SEO | LulabTech"
  },
  description:
    "Explora servicios digitales en Panamá: diseño web, landing pages, ecommerce, software a medida, POS, reservas, CRM, inventario y SEO. Cotiza con LulabTech.",
  keywords: [
    "servicios digitales Panamá",
    "diseño web Panamá",
    "software a medida Panamá",
    "landing pages Panamá",
    "páginas web corporativas Panamá",
    "ecommerce Panamá",
    "SEO Panamá",
    "software POS Panamá",
    "sistemas de reservas Panamá"
  ],
  alternates: {
    canonical: "/servicios-panama"
  },
  openGraph: {
    type: "website",
    url: "https://www.lulabtech.com/servicios-panama",
    title: "Servicios digitales Panamá | Web, software y SEO | LulabTech",
    description:
      "Explora servicios digitales en Panamá: diseño web, landing pages, ecommerce, software, POS, reservas, CRM, inventario, SEO y soluciones por industria.",
    siteName: "LulabTech",
    locale: "es_PA",
    images: [
      {
        url: "/og/og-cover.png?v=7",
        width: 1200,
        height: 630,
        alt: "Servicios digitales de LulabTech en Panamá"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios digitales Panamá | Web, software y SEO | LulabTech",
    description:
      "Servicios digitales en Panamá para empresas: páginas web, ecommerce, software, POS, reservas, CRM y SEO.",
    images: ["/og/og-cover.png?v=7"]
  }
};

export default function Page() {
  return <ServicesHubPage />;
}
