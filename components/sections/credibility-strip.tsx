import { credibilityItems } from "@/data/credibility";
import { SectionShell } from "@/components/layout/section-shell";

export function CredibilityStrip() {
  return (
    <SectionShell className="py-10 md:py-12">
      <div className="grid gap-4 md:grid-cols-3">
        {credibilityItems.map((item) => (
          <div key={item.title} className="surface-card p-6">
            <h2 className="text-lg font-semibold text-ink-900">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
