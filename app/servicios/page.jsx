import SectionIntro from "@/components/ui/SectionIntro";
import ServicesGrid from "@/components/home/ServicesGrid";
import SolutionSelector from "@/components/home/SolutionSelector";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Servicios",
  path: "/servicios",
  description:
    "Explora los servicios de LulabTech: landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más clara y orientada a conversión.",
  keywords: ["servicios de diseño web", "landing pages", "webs corporativas", "tiendas online", "automatizaciones"],
});

export default function ServiciosPage() {
  return (
    <main>
      <section className="shell pb-10 pt-16 md:pt-20">
        <SectionIntro
          eyebrow="Servicios"
          title="Soluciones digitales pensadas para distintos objetivos, tipos de negocio y momentos de crecimiento."
          description="No todos los negocios necesitan la misma estructura. Por eso organizamos cada servicio según el problema real que ayuda a resolver."
        />
      </section>
      <ServicesGrid />
      <SolutionSelector />
    </main>
  );
}
