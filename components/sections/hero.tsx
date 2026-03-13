import { heroContent } from "@/data/hero";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

export function HeroSection() {
  return (
    <SectionShell
      className="overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-white pt-16 md:pt-20"
      containerClassName="relative"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="max-w-3xl">
          <span className="eyebrow">{heroContent.eyebrow}</span>
          <h1 className="mt-5 balance text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
            {heroContent.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
              {heroContent.primaryCta}
            </ButtonLink>
            <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg">
              {heroContent.secondaryCta}
            </ButtonLink>
          </div>
        </div>

        <div className="surface-card min-h-[320px] p-6">
          <div className="flex h-full min-h-[280px] items-center justify-center rounded-[24px] border border-dashed border-slate-200 bg-slate-50 text-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-700">
                Hero Visual Placeholder
              </p>
              <p className="mt-3 max-w-sm text-sm text-ink-500">
                En FASE 3 aquí va el hero premium con motion, composición visual fuerte y look de alto nivel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
