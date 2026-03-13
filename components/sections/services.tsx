import { servicesData } from "@/data/services";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <SectionShell id={NAV_ANCHORS.services} className="bg-slate-50/70">
      <SectionHeading
        eyebrow="Capacidades"
        title="Lo que LulabTech desarrolla"
        description="Base lista para que en la siguiente fase elevemos esta sección con mejor layout, iconografía y motion."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service) => (
          <div key={service.title} className="surface-card p-6">
            <h3 className="text-lg font-semibold text-ink-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{service.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
