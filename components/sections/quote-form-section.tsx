import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "@/components/sections/quote-form";

export function QuoteFormSection() {
  return (
    <SectionShell
      id={NAV_ANCHORS.quote}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/25 to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Cotización"
          title="Solicita una propuesta para tu proyecto"
          description="Formulario premium conectado con Resend, con validaciones, loading, success y error para dejar esta landing lista para producción."
        />
      </Reveal>

      <Reveal delay={0.06} className="mt-10">
        <QuoteForm />
      </Reveal>
    </SectionShell>
  );
}
