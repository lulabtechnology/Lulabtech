import { projectCategories } from "@/data/projects";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProjectShowcaseSection() {
  return (
    <SectionShell id={NAV_ANCHORS.projects}>
      <SectionHeading
        eyebrow="Tipos de proyecto"
        title="Base preparada para mostrar tus proyectos por categoría"
        description="En FASE 3 esta sección se convierte en carruseles premium independientes para cada tipo de proyecto."
      />

      <div className="mt-10 grid gap-6">
        {projectCategories.map((category) => (
          <div key={category.id} className="surface-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-ink-900">{category.label}</h3>
                <p className="mt-2 text-sm text-ink-600">
                  {category.items.length} placeholders listos para reemplazar.
                </p>
              </div>
              <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                Carrusel pendiente FASE 3
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
