import SectionIntro from "@/components/ui/SectionIntro";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ContactCta from "@/components/home/ContactCta";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Proyectos Web y Casos",
  path: "/proyectos",
  description:
    "Explora proyectos web seleccionados por LulabTech para marcas y negocios que necesitaban una presencia digital más clara, sólida y orientada a conversión.",
  keywords: ["proyectos web en Panamá", "casos de estudio diseño web", "portfolio de agencia digital"],
});

export default function ProyectosPage() {
  return (
    <main>
      <section className="shell pb-10 pt-16 md:pt-20">
        <SectionIntro
          eyebrow="Proyectos"
          title="Proyectos seleccionados para marcas y negocios que necesitaban una presencia digital más clara, más sólida y mejor pensada para convertir."
          description="Cada proyecto responde a una necesidad distinta, pero todos comparten una intención: construir una experiencia digital que se vea mejor, explique mejor y funcione mejor para vender."
        />
      </section>
      <ProjectsGrid />
      <ContactCta />
    </main>
  );
}
