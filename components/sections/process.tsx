"use client";

import { Compass, DraftingCompass, Rocket, Wrench } from "lucide-react";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

const icons = [Compass, DraftingCompass, Wrench, Rocket] as const;

export function ProcessSection() {
  const { copy } = useSiteLanguage();
  const process = copy.process;

  return (
    <SectionShell
      id={NAV_ANCHORS.process}
      className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          description={process.description}
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-4 lg:grid-cols-4">
        {process.items.map((step, index) => (
          <div
            key={step.step}
            className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 to-accent-500" />

            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                {process.stepPrefix} {step.step}
              </span>
              <IconBox icon={icons[index]} className="h-11 w-11 rounded-2xl" />
            </div>

            <h3 className="mt-6 text-xl font-semibold text-ink-900">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{step.description}</p>
          </div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
