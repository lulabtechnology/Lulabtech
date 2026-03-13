import { projectCategories } from "@/data/projects";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCarousel } from "@/components/project/project-carousel";
import { SectionHeading } from "@/components/ui/section-heading";

const categoryDescriptions: Record<string, string> = {
  landing:
    "Carrusel preparado para mostrar tus landing pages con enfoque visual, CTA claros y sensación premium.",
  corporate:
    "Espacio para webs corporativas que transmiten autoridad, estructura y confianza de marca.",
  ecommerce:
    "Bloque visual para enseñar tiendas online con experiencia cuidada, catálogo y flujo comercial.",
  software:
    "Carrusel pensado para dashboards, portales o sistemas personalizados con look moderno y profesional."
};

export function ProjectShowcaseSection() {
  return (
    <SectionShell
      id={NAV_ANCHORS.projects}
      className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Tipos de proyecto"
          title="Cuatro carruseles premium listos para tus proyectos"
          description="Cada categoría queda preparada con autoplay suave, tarjetas elegantes y rutas claras para que luego reemplaces imágenes y textos sin romper nada."
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {projectCategories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.04}>
            <ProjectCarousel
              title={category.label}
              description={categoryDescriptions[category.id] ?? "Carrusel listo para editar."}
              items={category.items}
            />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
