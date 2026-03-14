import { projectCategories } from "@/data/projects";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCarousel } from "@/components/project/project-carousel";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryDescriptions: Record<string, string> = {
  landing:
    "Landing pages diseñadas para presentar valor con claridad, elevar percepción y empujar la conversión.",
  corporate:
    "Webs corporativas enfocadas en autoridad, estructura comercial y una presencia digital más sólida.",
  ecommerce:
    "Tiendas online con mejor experiencia visual, recorrido de compra más claro y enfoque comercial.",
  software:
    "Software a la medida con interfaces modernas, organización inteligente y sensación profesional."
};

export function ProjectShowcaseSection() {
  return (
    <SectionShell
      id={NAV_ANCHORS.projects}
      className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Proyectos"
          title="Experiencias digitales diseñadas para verse mejor y comunicar con más fuerza"
          description="Una muestra visual de los tipos de soluciones que desarrollamos para marcas que buscan un nivel superior de presencia digital."
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {projectCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.04}>
            <ProjectCarousel
              title={category.label}
              description={categoryDescriptions[category.id] ?? "Soluciones digitales premium."}
              items={category.items}
            />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
