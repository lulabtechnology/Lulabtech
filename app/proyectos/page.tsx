import type { Metadata } from "next";
import { ProjectsPage } from "@/components/pages/projects-page";

export const metadata: Metadata = {
  title: "Proyectos de páginas web y software en Panamá | Lulab Technology",
  description:
    "Portafolio de LulabTech con proyectos de landing pages, webs corporativas, software para casilleros, reservas y presencia digital en Panamá.",
  keywords: [
    "proyectos LulabTech",
    "portafolio diseño web Panamá",
    "páginas web Panamá",
    "software a medida Panamá"
  ],
  alternates: {
    canonical: "/proyectos"
  },
  openGraph: {
    type: "website",
    url: "https://www.lulabtech.com/proyectos",
    title: "Proyectos de páginas web y software en Panamá | Lulab Technology",
    description:
      "Conoce proyectos de LulabTech: landing pages, webs corporativas, software a medida, reservas, casilleros y soluciones digitales.",
    siteName: "LulabTech",
    locale: "es_PA",
    images: [
      {
        url: "/og/og-cover.png?v=7",
        width: 1200,
        height: 630,
        alt: "Portafolio de LulabTech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Proyectos de páginas web y software en Panamá | Lulab Technology",
    description:
      "Portafolio de LulabTech con proyectos de páginas web, landing pages, software y soluciones digitales.",
    images: ["/og/og-cover.png?v=7"]
  }
};

export default function Page() {
  return <ProjectsPage />;
}
