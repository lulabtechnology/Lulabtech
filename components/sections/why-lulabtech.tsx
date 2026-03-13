import { whyLulabTechData } from "@/data/why-lulabtech";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function WhyLulabTechSection() {
  return (
    <SectionShell id={NAV_ANCHORS.why}>
      <SectionHeading
        eyebrow="Diferenciadores"
        title="Por qué LulabTech"
        description="La base ya queda montada para que la siguiente fase suba el nivel visual y de percepción."
      />

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {whyLulabTechData.map((item) => (
          <div key={item.title} className="surface-card p-6">
            <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
