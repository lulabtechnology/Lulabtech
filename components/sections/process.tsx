import { processSteps } from "@/data/process";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <SectionShell id={NAV_ANCHORS.process} className="bg-slate-50/70">
      <SectionHeading
        eyebrow="Proceso"
        title="Cómo trabajamos"
        description="Estructura clara para llevar una idea desde la visión inicial hasta una entrega lista para lanzar."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step) => (
          <div key={step.step} className="surface-card p-6">
            <span className="text-sm font-semibold text-brand-700">{step.step}</span>
            <h3 className="mt-3 text-lg font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
