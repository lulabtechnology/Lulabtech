"use client";

import { GaugeCircle, ShieldCheck, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { IconBox } from "@/components/ui/icon-box";
import { useSiteLanguage } from "@/components/providers/site-language";

const icons = [Sparkles, GaugeCircle, ShieldCheck] as const;

export function CredibilityStrip() {
  const { copy } = useSiteLanguage();

  return (
    <SectionShell className="py-10 md:py-12">
      <Reveal className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
        <div className="grid gap-4 md:grid-cols-3">
          {copy.credibility.map((item, index) => {
            const Icon = icons[index];

            return (
              <div
                key={item.title}
                className="rounded-[24px] border border-slate-200 bg-slate-50/70 p-5"
              >
                <IconBox icon={Icon} />
                <h2 className="mt-4 text-lg font-semibold text-ink-900">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </Reveal>
    </SectionShell>
  );
}
