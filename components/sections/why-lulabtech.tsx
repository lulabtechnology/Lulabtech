"use client";

import {
  CheckCircle2,
  GaugeCircle,
  Palette,
  ShieldCheck,
  Sparkles,
  Workflow
} from "lucide-react";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

const icons = [Palette, Sparkles, GaugeCircle, Workflow, ShieldCheck] as const;

export function WhyLulabTechSection() {
  const { copy } = useSiteLanguage();
  const why = copy.why;

  return (
    <SectionShell
      id={NAV_ANCHORS.why}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-white"
    >
      <Reveal>
        <SectionHeading eyebrow={why.eyebrow} title={why.title} description={why.description} />
      </Reveal>

      <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#0A1227] via-[#0E1D45] to-[#12397A] p-7 text-white shadow-elevated sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            {why.panelEyebrow}
          </div>

          <h3 className="mt-5 max-w-md text-balance text-[1.95rem] font-semibold leading-[1.08] text-white sm:text-[2.4rem]">
            {why.panelTitle}
          </h3>

          <p className="mt-5 max-w-md text-sm leading-7 text-white sm:text-base">
            {why.panelDescription}
          </p>

          <div className="mt-7 grid gap-3">
            {why.valuePoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-[20px] border border-white/14 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-200" />
                <p className="text-sm font-medium leading-6 text-white">{point}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                {why.focusLabel}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-white">{why.focusValue}</p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-white/8 p-4 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/75">
                {why.resultLabel}
              </p>
              <p className="mt-2 text-sm font-medium leading-6 text-white">{why.resultValue}</p>
            </div>
          </div>
        </Reveal>

        <Stagger className="grid gap-4 sm:grid-cols-2">
          {why.items.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <IconBox icon={Icon} />
                <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
              </div>
            );
          })}
        </Stagger>
      </div>
    </SectionShell>
  );
}
