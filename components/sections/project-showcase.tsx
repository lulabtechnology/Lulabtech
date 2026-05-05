"use client";

import { useMemo, useState } from "react";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCarousel } from "@/components/project/project-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";
import { cn } from "@/lib/utils";

export function ProjectShowcaseSection() {
  const { copy } = useSiteLanguage();
  const showcase = copy.projectShowcase;
  const [activeCategory, setActiveCategory] = useState("all");

  const allItems = useMemo(
    () =>
      showcase.categories.flatMap((category) =>
        category.items.map((item) => ({ ...item, categoryLabel: category.label }))
      ),
    [showcase.categories]
  );

  const activeGroup = useMemo(
    () => showcase.categories.find((category) => category.id === activeCategory),
    [activeCategory, showcase.categories]
  );

  const activeItems = useMemo(() => {
    if (activeCategory === "all") {
      return allItems;
    }

    const categoryLabel = activeGroup?.label ?? "";

    return activeGroup?.items.map((item) => ({ ...item, categoryLabel })) ?? [];
  }, [activeCategory, activeGroup, allItems]);

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

      <Reveal delay={0.08}>
        <div className="mx-auto mt-8 flex max-w-5xl gap-2.5 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible sm:pb-0">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
              activeCategory === "all"
                ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                : "border-slate-200 bg-white text-ink-700 hover:border-brand-200 hover:text-brand-700"
            )}
          >
            {showcase.allLabel}
          </button>

          {showcase.categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition",
                activeCategory === category.id
                  ? "border-brand-600 bg-brand-600 text-white shadow-soft"
                  : "border-slate-200 bg-white text-ink-700 hover:border-brand-200 hover:text-brand-700"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mt-9">
          <ProjectCarousel
            key={activeCategory}
            title={activeCategory === "all" ? showcase.allLabel : activeGroup?.label ?? showcase.allLabel}
            description={activeCategory === "all" ? showcase.carouselDescription : activeGroup?.description ?? showcase.carouselDescription}
            items={activeItems}
          />
        </div>
      </Reveal>
    </SectionShell>
  );
}
