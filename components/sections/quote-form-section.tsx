"use client";

import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { QuoteForm } from "@/components/sections/quote-form";
import { useSiteLanguage } from "@/components/providers/site-language";

export function QuoteFormSection() {
  const { copy } = useSiteLanguage();
  const section = copy.quoteSection;

  return (
    <SectionShell
      id={NAV_ANCHORS.quote}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/25 to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
      </Reveal>

      <Reveal delay={0.06} className="mt-10">
        <QuoteForm />
      </Reveal>
    </SectionShell>
  );
}
