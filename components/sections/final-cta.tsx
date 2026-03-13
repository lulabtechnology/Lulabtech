import { ArrowUpRight, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GridPattern } from "@/components/ui/grid-pattern";

export function FinalCtaSection() {
  return (
    <SectionShell className="relative overflow-hidden">
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-ink-950 via-brand-950 to-brand-900 px-6 py-10 text-white shadow-elevated sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <GridPattern className="opacity-10" />
        <GlowOrb className="-left-10 top-0 h-48 w-48 bg-brand-400/20" />
        <GlowOrb className="right-0 top-10 h-52 w-52 bg-accent-400/20" />

        <Reveal className="relative max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            CTA final
          </div>

          <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Si tu marca necesita una presencia más seria, más premium y más clara, hablemos.
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            {contactData.ctaDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
              Solicitar cotización
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>

            <ButtonLink
              href={contactData.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              className="border-white/15 bg-white/10 text-white hover:bg-white/14"
            >
              <MessageCircle className="h-4 w-4" />
              Hablar por WhatsApp
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
