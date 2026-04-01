"use client";

import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCarousel } from "@/components/project/project-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

export function ProjectShowcaseSection() {
  const { copy } = useSiteLanguage();
  const showcase = copy.projectShowcase;

  return (
    <SectionShell
      id={NAV_ANCHORS.projects}
      className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          description={showcase.description}
        />
      </Reveal>

      <div className="mt-12 space-y-8">
        {showcase.categories.map((category, index) => (
          <Reveal key={category.id} delay={index * 0.04}>
            <ProjectCarousel
              title={category.label}
              description={category.description}
              items={category.items}
            />
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
}
