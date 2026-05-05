"use client";

import { useMemo, useState } from "react";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { ProjectCard } from "@/components/project/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";
import { cn } from "@/lib/utils";

export function ProjectShowcaseSection() {
  const { copy } = useSiteLanguage();
  const showcase = copy.projectShowcase;
  const [activeCategory, setActiveCategory] = useState("all");

  const activeItems = useMemo(() => {
    if (activeCategory === "all") {
      return showcase.categories.flatMap((category) =>
        category.items.map((item) => ({ ...item, categoryLabel: category.label }))
      );
    }

    const category = showcase.categories.find((item) => item.id === activeCategory);

    return (
      category?.items.map((item) => ({ ...item, categoryLabel: category.label })) ?? []
    );
  }, [activeCategory, showcase.categories]);

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
        <div className="mt-8 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-semibold transition",
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
                "rounded-full border px-4 py-2 text-sm font-semibold transition",
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

      <Stagger className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {activeItems.map((item) => (
          <ProjectCard
            key={`${item.categoryLabel}-${item.title}`}
            item={item}
            categoryLabel={item.categoryLabel}
          />
        ))}
      </Stagger>
    </SectionShell>
  );
}
