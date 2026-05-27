"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { PortfolioCover } from "@/components/project/portfolio-cover";
import { useSiteLanguage } from "@/components/providers/site-language";
import {
  portfolioCategories,
  portfolioProjects,
  portfolioStats,
  type PortfolioCategoryId
} from "@/data/portfolio";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ProjectsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  trustLabel: string;
  filterLabel: string;
  allLabel: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { label: string; value: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  whatsapp: string;
  links: { label: string; href: string }[];
};

const copy = {
  es: {
    eyebrow: "Portafolio LulabTech",
    title: "Trabajos realizados, proyectos publicados y software desarrollado por LulabTech",
    description:
      "Aquí reunimos proyectos reales de LulabTech: landing pages, webs corporativas y software a medida para negocios en Panamá. Puedes usarlos como referencia visual y comercial cuando quieras mostrar experiencia a un cliente.",
    trustLabel: "Prueba de confianza",
    filterLabel: "Filtrar por tipo de proyecto",
    allLabel: "Todos",
    primaryCta: "Cotizar un proyecto similar",
    secondaryCta: "Ver servicios",
    stats: [
      { label: "Proyectos publicados", value: `${portfolioStats.totalProjects}+` },
      { label: "Landing pages", value: `${portfolioStats.totalLandingPages}` },
      { label: "Webs corporativas", value: `${portfolioStats.totalCorporateWebsites}` },
      { label: "Software y plataformas", value: `${portfolioStats.totalSoftwareProjects}` }
    ],
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Podemos crear tu web o software con una dirección visual mucho más seria y comercial.",
    ctaDescription:
      "Si quieres una referencia rápida para un cliente, este portafolio ya organiza los trabajos por categoría. Y si ya quieres cotizar algo similar, te guiamos por WhatsApp o te proponemos la mejor ruta para tu negocio.",
    whatsapp: "Hablar por WhatsApp",
    links: [
      { label: "Diseño web", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Webs corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Servicios", href: "/servicios-panama" }
    ]
  },
  en: {
    eyebrow: "LulabTech portfolio",
    title: "Published projects, websites, and software developed by LulabTech",
    description:
      "A curated portfolio of real LulabTech work: landing pages, corporate websites, and custom software for businesses in Panama.",
    trustLabel: "Trust proof",
    filterLabel: "Filter by project type",
    allLabel: "All",
    primaryCta: "Quote a similar project",
    secondaryCta: "View services",
    stats: [
      { label: "Published projects", value: `${portfolioStats.totalProjects}+` },
      { label: "Landing pages", value: `${portfolioStats.totalLandingPages}` },
      { label: "Corporate websites", value: `${portfolioStats.totalCorporateWebsites}` },
      { label: "Software platforms", value: `${portfolioStats.totalSoftwareProjects}` }
    ],
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We can build your website or software with a stronger visual and commercial direction.",
    ctaDescription:
      "This portfolio is organized by category so you can quickly show relevant references to a prospect. If you are ready to quote something similar, we can guide you through the next step.",
    whatsapp: "Talk on WhatsApp",
    links: [
      { label: "Web design", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Corporate websites", href: "/paginas-web-corporativas-panama" },
      { label: "Custom software", href: "/software-a-medida-panama" },
      { label: "Services", href: "/servicios-panama" }
    ]
  }
} as const;

export function ProjectsPageContent() {
  const { locale } = useSiteLanguage();
  const pageCopy = locale === "en" ? copy.en : copy.es;
  const [activeCategory, setActiveCategory] = useState<PortfolioCategoryId | "all">("all");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") {
      return portfolioProjects;
    }

    return portfolioProjects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-14 sm:py-16 lg:py-20">
        <GridPattern className="opacity-20" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">{pageCopy.eyebrow}</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">
              {pageCopy.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-600 sm:text-lg">
              {pageCopy.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" onClick={() => trackEvent("click_whatsapp_hero", { source: "portfolio" })}>
                <MessageCircle className="h-4 w-4" />
                {pageCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href="/servicios-panama" variant="outline" size="lg" onClick={() => trackEvent("click_servicio_software", { source: "portfolio" })}>
                {pageCopy.secondaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {pageCopy.stats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-slate-200 bg-white/90 p-5 text-center shadow-soft">
                <p className="text-3xl font-semibold text-ink-900 sm:text-[2rem]">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{pageCopy.trustLabel}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                  Portafolio organizado por tipo de solución
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-600 sm:text-base">
                  Landing pages, webs corporativas y software a medida ordenados para que puedas enseñar referencias con más facilidad y sin mezclar proyectos distintos.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">{pageCopy.filterLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
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
                    {pageCopy.allLabel}
                  </button>
                  {portfolioCategories.map((category) => (
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
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <PortfolioCover project={project} compact />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                        {project.typeLabel}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold leading-tight text-ink-900">
                        {project.name}
                      </h2>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-600">
                      {project.industry}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-ink-600">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-ink-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      variant="outline"
                      className="w-full justify-center"
                      onClick={() => trackEvent("click_portafolio", { project: project.name, source: "portfolio_grid" })}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.ctaLabel ?? "Ver proyecto"}
                    </ButtonLink>
                    <ButtonLink
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-center"
                      onClick={() => trackEvent("click_whatsapp_footer", { source: `portfolio_${project.slug}` })}
                    >
                      Cotizar algo similar
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">
                  {pageCopy.ctaEyebrow}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {pageCopy.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  {pageCopy.ctaDescription}
                </p>
              </div>
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg" className="border-white/20 bg-white text-ink-900 hover:bg-white/90" onClick={() => trackEvent("click_whatsapp_footer", { source: "portfolio_cta" })}>
                {pageCopy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink-600">
            {pageCopy.links.map((link) => (
              <Link key={link.href} className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
