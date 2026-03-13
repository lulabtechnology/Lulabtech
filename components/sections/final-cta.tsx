import { contactData } from "@/data/contact";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";

export function FinalCtaSection() {
  return (
    <SectionShell className="overflow-hidden">
      <div className="surface-card relative p-8 sm:p-10 lg:p-14">
        <div className="max-w-3xl">
          <span className="eyebrow">Listo para avanzar</span>
          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Construyamos una experiencia digital que se vea premium y convierta con intención.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-ink-600">
            {contactData.ctaDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
              Solicitar cotización
            </ButtonLink>
            <ButtonLink
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
            >
              Hablar por WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
