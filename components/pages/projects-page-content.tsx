"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { PortfolioPreview } from "@/components/project/portfolio-preview";
import { useSiteLanguage } from "@/components/providers/site-language";
import {
  featuredPortfolioProjects,
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
  featuredTitle: string;
  featuredDescription: string;
  allProjectsTitle: string;
  allProjectsDescription: string;
  filterLabel: string;
  allLabel: string;
  primaryCta: string;
  secondaryCta: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  whatsapp: string;
  links: { label: string; href: string }[];
};

const copy = {
  es: {
    eyebrow: "Portafolio LulabTech",
    title: "Un portafolio pensado para enviarlo por WhatsApp y generar confianza real",
    description:
      "Aquí tienes una selección ordenada de trabajos reales de LulabTech con una presentación mucho más útil para compartir con clientes: primero los proyectos que generan mejor impresión y luego el portafolio completo por categoría.",
    trustLabel: "Comparte este enlace como prueba de confianza",
    featuredTitle: "Proyectos destacados y ordenados por impacto",
    featuredDescription:
      "Estos son los trabajos que primero conviene mostrar cuando un cliente te pide referencias. Están elegidos y ordenados para dar una impresión más profesional desde el inicio.",
    allProjectsTitle: "Todos los proyectos organizados por tipo de solución",
    allProjectsDescription:
      "Después de los destacados, aquí puedes enseñar el resto del portafolio filtrando entre landing pages, webs corporativas y software a medida.",
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
    highlights: [
      "Entrega rápida",
      "Diseño premium",
      "SEO base",
      "Soporte inicial",
      "Listo para compartir"
    ],
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Podemos crear tu web o software con una presencia visual mucho más fuerte y comercial.",
    ctaDescription:
      "Si ya tienes un prospecto, este portafolio te sirve para mostrar credenciales. Y si ese prospecto ya quiere avanzar, nosotros te ayudamos a aterrizar su proyecto con la mejor ruta posible.",
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
    title: "A portfolio built to share on WhatsApp and build trust fast",
    description:
      "This page is organized so you can quickly send it to prospects: strongest projects first, then the complete portfolio by category.",
    trustLabel: "Share this link as trust proof",
    featuredTitle: "Featured projects sorted by impact",
    featuredDescription:
      "These are the references that make the best first impression when a client asks for previous work.",
    allProjectsTitle: "All projects organized by solution type",
    allProjectsDescription:
      "After the featured section, you can browse the full portfolio filtered by landing pages, corporate websites, and custom software.",
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
    highlights: ["Fast delivery", "Premium design", "Basic SEO", "Initial support", "Share-ready"],
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We can build your website or software with a stronger visual and commercial presence.",
    ctaDescription:
      "Use this portfolio to show credentials to prospects, and when they are ready to move forward, we can guide the next step.",
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

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {pageCopy.highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft">
                  <Sparkles className="h-4 w-4 text-brand-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" onClick={() => trackEvent("click_whatsapp_hero", { source: "portafolio_page" })}>
                <MessageCircle className="h-4 w-4" />
                {pageCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href="/servicios-panama" variant="outline" size="lg" onClick={() => trackEvent("click_servicio_software", { source: "portafolio_page" })}>
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

      <section className="py-12 sm:py-14">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">{pageCopy.trustLabel}</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                  {pageCopy.featuredTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-ink-600 sm:text-base">
                  {pageCopy.featuredDescription}
                </p>
              </div>

              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" onClick={() => trackEvent("click_whatsapp_footer", { source: "portafolio_featured" })}>
                {pageCopy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredPortfolioProjects.map((project) => (
              <article
                key={project.slug}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <PortfolioPreview project={project} compact />
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
                      onClick={() => trackEvent("click_portafolio", { project: project.name, source: "featured_grid" })}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {project.ctaLabel ?? "Ver proyecto"}
                    </ButtonLink>
                    <ButtonLink
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-center"
                      onClick={() => trackEvent("click_whatsapp_footer", { source: `featured_${project.slug}` })}
                    >
                      Cotizar algo similar
                    </ButtonLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">Portafolio completo</p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                  {pageCopy.allProjectsTitle}
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-600 sm:text-base">
                  {pageCopy.allProjectsDescription}
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
                  <PortfolioPreview project={project} compact />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                        {project.typeLabel}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold leading-tight text-ink-900">
                        {project.name}
                      </h3>
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
