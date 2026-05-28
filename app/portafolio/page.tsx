import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: {
    absolute: "Portafolio de trabajos realizados | LulabTech Panamá"
  },
  description:
    "Portafolio de LulabTech con trabajos realizados en páginas web, landing pages, webs corporativas y software a medida para empresas en Panamá.",
  keywords: [
    "portafolio LulabTech",
    "trabajos realizados páginas web Panamá",
    "portafolio diseño web Panamá",
    "proyectos de landing pages Panamá",
    "software a medida Panamá"
  ],
  alternates: {
    canonical: "/portafolio"
  },
  openGraph: {
    type: "website",
    url: "https://www.lulabtech.com/portafolio",
    title: "Portafolio de trabajos realizados | LulabTech Panamá",
    description:
      "Mira trabajos reales de LulabTech: landing pages, webs corporativas y software a medida desarrollados para negocios en Panamá.",
    siteName: "LulabTech",
    locale: "es_PA",
    images: [
      {
        url: "/og/og-cover.png?v=10",
        width: 1200,
        height: 630,
        alt: "Portafolio de trabajos realizados por LulabTech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de trabajos realizados | LulabTech Panamá",
    description:
      "Trabajos realizados por LulabTech en diseño web, landing pages, webs corporativas y software a medida.",
    images: ["/og/og-cover.png?v=10"]
  }
};

export default function Page() {
  return <ProjectsPage />;
}
