import type { Metadata } from "next";
import { PortfolioPageClient } from "@/components/portfolio/portfolio-page-client";

export const metadata: Metadata = {
  title: "Portafolio diseño web Panamá | Proyectos LulabTech",
  description:
    "Portafolio de LulabTech con cards tipo carrusel premium para mostrar landing pages, webs corporativas y software a medida."
};

export default function PortfolioPage() {
  return <PortfolioPageClient />;
}
