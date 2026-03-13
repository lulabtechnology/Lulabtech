import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function QuoteFormSection() {
  return (
    <SectionShell id={NAV_ANCHORS.quote}>
      <SectionHeading
        eyebrow="Cotización"
        title="Formulario listo para integrar"
        description="En FASE 4 conectamos esta sección con Resend, validaciones reales y estados de envío."
      />

      <div className="mt-10 surface-card p-6 sm:p-8">
        <div className="rounded-[24px] border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
            Formulario Placeholder
          </p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-ink-500">
            Aquí irá el formulario premium de cotización con Resend, loading, success, error y validaciones.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
