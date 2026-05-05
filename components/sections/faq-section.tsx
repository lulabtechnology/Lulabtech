"use client";

import { HelpCircle } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

export function FaqSection() {
  const { copy } = useSiteLanguage();
  const faq = copy.faq;

  return (
    <SectionShell className="overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      <Reveal>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} description={faq.description} />
      </Reveal>

      <Stagger className="mt-10 grid gap-4 md:grid-cols-2">
        {faq.items.map((item) => (
          <div
            key={item.question}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
          >
            <IconBox icon={HelpCircle} className="h-11 w-11 rounded-2xl" />
            <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">
              {item.question}
            </h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{item.answer}</p>
          </div>
        ))}
      </Stagger>
    </SectionShell>
  );
}
