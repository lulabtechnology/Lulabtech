"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { GlowOrb } from "@/components/ui/glow-orb";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useSiteLanguage } from "@/components/providers/site-language";

export function FinalCtaSection() {
  const { copy } = useSiteLanguage();
  const cta = copy.finalCta;

  return (
    <SectionShell className="relative overflow-hidden">
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-50/70 px-6 py-10 shadow-elevated sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <GridPattern className="opacity-20" />
        <GlowOrb className="-left-10 top-0 h-48 w-48 bg-brand-400/12" />
        <GlowOrb className="right-0 top-10 h-52 w-52 bg-accent-400/10" />

        <Reveal className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
              {cta.badge}
            </div>

            <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl lg:text-[3.15rem]">
              {cta.title}
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-ink-600 sm:text-base">
              {cta.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={`#${NAV_ANCHORS.quote}`} size="lg">
                {cta.primaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>

              <ButtonLink
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="lg"
              >
                <MessageCircle className="h-4 w-4" />
                {cta.secondaryCta}
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white/90 p-5 shadow-soft backdrop-blur sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
              {cta.projectTypesLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {cta.bullets.map((item) => (
                <span
                  key={item}
                  className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-ink-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-[22px] border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-sm leading-6 text-ink-600">{cta.helper}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </SectionShell>
  );
}
