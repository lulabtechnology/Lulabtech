"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
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

function getProjectDomain(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getShowcaseScreenshotUrl(url: string) {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  // Screenshot alto para que la card se vea tipo showcase vertical, no como recorte aplastado.
  return `https://image.thum.io/get/width/1200/crop/1700/wait/8/noanimate/${normalized}`;
}

function getScrollDistance(track: HTMLDivElement | null) {
  if (!track) return 360;
  const firstCard = track.firstElementChild as HTMLElement | null;
  if (!firstCard) return 360;
  return firstCard.offsetWidth + 24;
}

function ProjectShowcaseImage({ project }: { project: PortfolioProject }) {
  const [useLocalFallback, setUseLocalFallback] = useState(false);
  const localFallback = project.screenshotSrc === null ? undefined : project.screenshotSrc;
  const src = useLocalFallback && localFallback ? localFallback : getShowcaseScreenshotUrl(project.url);

  return (
    <div className="relative h-[430px] overflow-hidden bg-slate-100">
      <img
        src={src}
        alt={`Vista previa del proyecto ${project.name}`}
        className={cn(
          "h-full w-full object-top transition duration-700 group-hover:scale-[1.02]",
          useLocalFallback ? "object-contain" : "object-cover"
        )}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (localFallback && !useLocalFallback) {
            setUseLocalFallback(true);
          }
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 px-4 py-4">
        {project.logoSrc ? (
          <div className="flex h-14 w-20 items-center justify-center rounded-[18px] border border-white/35 bg-white/90 p-2.5 shadow-elevated backdrop-blur-md">
            <img src={project.logoSrc} alt="" className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
          </div>
        ) : (
          <div className="rounded-[18px] border border-white/25 bg-black/35 px-3 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur-md">
            {project.name}
          </div>
        )}

        <span className="rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-soft backdrop-blur-md">
          {project.typeLabel}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b12] via-[#080b12]/45 to-transparent" />
    </div>
  );
}

function ProjectCarouselCard({ project, source }: { project: PortfolioProject; source: string }) {
  const domain = getProjectDomain(project.url);

  return (
    <article className="group flex h-full w-[318px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[#080b12] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated sm:w-[360px]">
      <ProjectShowcaseImage project={project} />

      <div className="flex flex-1 flex-col gap-3 border-t border-white/10 px-5 pb-5 pt-5 text-white">
        <div>
          <h3 className="text-xl font-semibold leading-tight text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{project.industry}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.services.slice(0, 2).map((service) => (
            <span key={service} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-slate-200">
              {service}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 items-center gap-1.5 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
            onClick={() => trackEvent("click_portafolio", { project: project.name, source })}
          >
            <span className="truncate">{domain}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
          </Link>

          <div className="flex gap-2">
            <ButtonLink
              href={project.url}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="md"
              className="w-full justify-center border-white/15 bg-white text-ink-900 hover:bg-white/90"
              onClick={() => trackEvent("click_portafolio", { project: project.name, source: `${source}_button` })}
            >
              {project.ctaLabel ?? "Ver proyecto"}
            </ButtonLink>
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              size="md"
              className="w-full justify-center"
              onClick={() => trackEvent("click_whatsapp_footer", { source: `${source}_${project.slug}` })}
            >
              Cotizar
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function PortfolioCarousel({
  projects,
  source,
  emptyLabel = "No hay proyectos disponibles para esta categoría."
}: {
  projects: PortfolioProject[];
  source: string;
  emptyLabel?: string;
}) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: direction * getScrollDistance(track),
      behavior: "smooth"
    });
  };

  if (!projects.length) {
    return (
      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 text-center text-sm text-ink-500 shadow-soft">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Mover carrusel hacia la izquierda"
          onClick={() => handleScroll(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Mover carrusel hacia la derecha"
          onClick={() => handleScroll(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <ProjectCarouselCard key={project.slug} project={project} source={source} />
        ))}
      </div>
    </div>
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

          <PortfolioCarousel projects={featuredPortfolioProjects} source="featured_carousel" />
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

          <PortfolioCarousel projects={visibleProjects} source="portfolio_carousel" />

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
