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
  portfolioTrustStats,
  type PortfolioCategoryId,
  type PortfolioProject
} from "@/data/portfolio";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ProjectsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  featuredTitle: string;
  featuredDescription: string;
  allProjectsTitle: string;
  allProjectsDescription: string;
  filterLabel: string;
  allLabel: string;
  primaryCta: string;
  secondaryCta: string;
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
    title: "Trabajos realizados en páginas web, landing pages y software para empresas en Panamá",
    description:
      "Conoce una selección de proyectos desarrollados por LulabTech para negocios reales. Primero verás los trabajos con mayor impacto visual y comercial; luego el portafolio completo organizado por tipo de solución.",
    featuredTitle: "Proyectos destacados",
    featuredDescription:
      "Trabajos seleccionados por su presentación, claridad comercial y calidad visual. Son buenas referencias para entender el estilo y el nivel de ejecución de LulabTech.",
    allProjectsTitle: "Portafolio completo por categoría",
    allProjectsDescription:
      "Revisa los proyectos por tipo de solución: webs corporativas, landing pages y software a medida.",
    filterLabel: "Filtrar por tipo de proyecto",
    allLabel: "Todos",
    primaryCta: "Cotizar un proyecto similar",
    secondaryCta: "Ver servicios",
    highlights: ["100+ proyectos realizados", "2+ años de experiencia", "Entrega rápida", "Soporte inicial"],
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Creamos páginas web y sistemas que se ven profesionales y ayudan a cotizar mejor.",
    ctaDescription:
      "Si necesitas una landing page, una web corporativa o un software a medida, organizamos el contenido, el diseño y los botones de contacto para que el cliente entienda la oferta y pueda escribir sin perderse.",
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
    title: "Websites, landing pages and software projects for businesses in Panama",
    description:
      "Explore selected projects developed by LulabTech for real businesses. The strongest visual and commercial references appear first, followed by the complete portfolio by solution type.",
    featuredTitle: "Featured projects",
    featuredDescription:
      "Selected work that reflects LulabTech's visual quality, commercial clarity and execution level.",
    allProjectsTitle: "Complete portfolio by category",
    allProjectsDescription:
      "Browse visible LulabTech work and filter by corporate websites, landing pages and custom software.",
    filterLabel: "Filter by project type",
    allLabel: "All",
    primaryCta: "Quote a similar project",
    secondaryCta: "View services",
    highlights: ["100+ completed projects", "2+ years experience", "Fast delivery", "Initial support"],
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We build websites and systems that look professional and help businesses get better quote requests.",
    ctaDescription:
      "For landing pages, corporate websites or custom software, we organize the content, design and contact buttons so visitors understand the offer and can reach out easily.",
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

function ProjectArticle({ project, source, featured = false }: { project: PortfolioProject; source: string; featured?: boolean }) {
  return (
    <article
      className={cn(
        "group overflow-hidden border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated",
        featured ? "rounded-[42px]" : "rounded-[36px]"
      )}
    >
      <div className={cn("overflow-hidden bg-slate-100", featured ? "aspect-[16/9]" : "aspect-[16/10]") }>
        <PortfolioPreview project={project} />
      </div>

      <div className={cn(featured ? "p-7 sm:p-8" : "p-6 sm:p-7")}>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">{project.typeLabel}</p>
            <h2 className={cn("mt-2 font-semibold leading-tight text-ink-900", featured ? "text-2xl sm:text-[1.85rem]" : "text-2xl")}>{project.name}</h2>
          </div>
          <span className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-ink-700">
            {project.industry}
          </span>
        </div>

        <p className={cn("mt-4 leading-7 text-ink-600", featured ? "text-base" : "text-sm sm:text-base")}>{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-ink-700">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
              {service}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={project.url}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size={featured ? "lg" : "md"}
            className="w-full justify-center"
            onClick={() => trackEvent("click_portafolio", { project: project.name, source })}
          >
            <ExternalLink className="h-4 w-4" />
            {project.ctaLabel ?? "Ver proyecto"}
          </ButtonLink>
          <ButtonLink
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            size={featured ? "lg" : "md"}
            className="w-full justify-center"
            onClick={() => trackEvent("click_whatsapp_footer", { source: `${source}_${project.slug}` })}
          >
            Cotizar similar
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}

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
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">{pageCopy.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-600 sm:text-lg">{pageCopy.description}</p>

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

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {portfolioTrustStats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-slate-200 bg-white/90 p-5 text-center shadow-soft">
                <p className="text-3xl font-semibold text-ink-900 sm:text-[2rem]">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-ink-900">{stat.label}</p>
                <p className="mt-2 text-xs leading-5 text-ink-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="eyebrow">Recomendados</span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{pageCopy.featuredTitle}</h2>
                <p className="mt-3 text-base leading-7 text-ink-600">{pageCopy.featuredDescription}</p>
              </div>

              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg" onClick={() => trackEvent("click_whatsapp_footer", { source: "portafolio_featured" })}>
                {pageCopy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-8 xl:grid-cols-2">
            {featuredPortfolioProjects.map((project) => (
              <ProjectArticle key={project.slug} project={project} source="featured_grid" featured />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="eyebrow">Trabajos realizados</span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{pageCopy.allProjectsTitle}</h2>
                <p className="mt-3 max-w-3xl text-base leading-7 text-ink-600">{pageCopy.allProjectsDescription}</p>
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

          <div className="mx-auto mt-8 grid max-w-7xl gap-8 xl:grid-cols-2">
            {visibleProjects.map((project) => (
              <ProjectArticle key={project.slug} project={project} source="portfolio_grid" />
            ))}
          </div>

          <div className="mt-12 rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">{pageCopy.ctaEyebrow}</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">{pageCopy.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{pageCopy.ctaDescription}</p>
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
