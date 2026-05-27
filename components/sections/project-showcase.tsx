"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { PortfolioPreview } from "@/components/project/portfolio-preview";
import { useSiteLanguage } from "@/components/providers/site-language";
import { featuredPortfolioProjects, portfolioCategories, type PortfolioCategoryId } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

export function ProjectShowcaseSection() {
  const { locale } = useSiteLanguage();
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");

  const projects = useMemo(() => {
    const base = activeCategory === "all"
      ? featuredPortfolioProjects
      : featuredPortfolioProjects.filter((project) => project.type === activeCategory);

    return base.slice(0, 6);
  }, [activeCategory]);

  const heading = locale === "en"
    ? {
        eyebrow: "Selected work",
        title: "A quick look at published projects",
        description:
          "A stronger sample of LulabTech work, ordered to show the most polished references first and help prospects understand the quality of the execution.",
        allLabel: "All",
        cta: "View full portfolio"
      }
    : {
        eyebrow: "Trabajos seleccionados",
        title: "Una vista rápida de proyectos publicados",
        description:
          "Una muestra más fuerte de trabajos reales de LulabTech, ordenada para enseñar primero las referencias con mejor impacto visual y comercial.",
        allLabel: "Todos",
        cta: "Ver portafolio completo"
      };

  return (
    <SectionShell id={NAV_ANCHORS.projects} className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      <Reveal>
        <SectionHeading eyebrow={heading.eyebrow} title={heading.title} description={heading.description} />
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
            {heading.allLabel}
          </button>

          {portfolioCategories.map((category) => (
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
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="aspect-[16/10] overflow-hidden">
                <PortfolioPreview project={project} compact />
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">{project.typeLabel}</p>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-ink-900">{project.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{project.description}</p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={project.url} target="_blank" rel="noreferrer" variant="outline" className="w-full justify-center" onClick={() => trackEvent("click_portafolio", { project: project.name, source: "home_featured" })}>
                    <ExternalLink className="h-4 w-4" />
                    {project.ctaLabel ?? (locale === "en" ? "View project" : "Ver proyecto")}
                  </ButtonLink>
                  <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="w-full justify-center" onClick={() => trackEvent("click_whatsapp_hero", { source: `featured_${project.slug}` })}>
                    {locale === "en" ? "Quote similar" : "Cotizar similar"}
                  </ButtonLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/portafolio" size="lg" onClick={() => trackEvent("click_portafolio", { source: "home_portfolio_cta" })}>
            {heading.cta}
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Reveal>
    </SectionShell>
  );
}
