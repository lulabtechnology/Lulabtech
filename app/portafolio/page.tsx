import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Portafolio de páginas web y software en Panamá | Lulab Technology",
  description:
    "Portafolio de LulabTech con proyectos reales de landing pages, webs corporativas y software a medida para negocios en Panamá.",
  keywords: [
    "portafolio diseño web Panamá",
    "trabajos realizados páginas web Panamá",
    "proyectos LulabTech",
    "software a medida Panamá",
    "landing pages Panamá"
  ],
  alternates: {
    canonical: "/portafolio"
  },
  openGraph: {
    type: "website",
    url: "https://www.lulabtech.com/portafolio",
    title: "Portafolio de páginas web y software en Panamá | Lulab Technology",
    description:
      "Conoce proyectos reales de LulabTech: landing pages, webs corporativas, software a medida y soluciones digitales desarrolladas para negocios en Panamá.",
    siteName: "LulabTech",
    locale: "es_PA",
    images: [
      {
        url: "/og/og-cover.png?v=9",
        width: 1200,
        height: 630,
        alt: "Portafolio de LulabTech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio de páginas web y software en Panamá | Lulab Technology",
    description:
      "Portafolio de LulabTech con trabajos publicados, landing pages, webs corporativas y software en Panamá.",
    images: ["/og/og-cover.png?v=9"]
  }
};

export default function Page() {
  return <ProjectsPage />;
}
