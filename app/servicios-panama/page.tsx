import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/pages/services-hub-page";

export const metadata: Metadata = {
  title: "Servicios de diseño web, software y SEO en Panamá | LulabTech",
  description:
    "Mapa de servicios de LulabTech en Panamá: diseño web, landing pages, webs corporativas, ecommerce, software a medida, POS, reservas, CRM, inventario y SEO.",
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
    title: "Servicios de diseño web, software y SEO en Panamá | LulabTech",
    description:
      "Explora los servicios de LulabTech: diseño web, landing pages, ecommerce, software, POS, reservas, CRM, inventario, SEO y soluciones por industria.",
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
    title: "Servicios de diseño web, software y SEO en Panamá | LulabTech",
    description:
      "Mapa de servicios de LulabTech para empresas en Panamá: páginas web, ecommerce, software y SEO.",
    images: ["/og/og-cover.png?v=7"]
  }
};

export default function Page() {
  return <ServicesHubPage />;
}
