"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { PortfolioPreview } from "@/components/project/portfolio-preview";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";

const homeProjectSlugs = [
  "k9-security-international",
  "nova-track-portal",
  "solmas-legal",
  "isasa-panama",
  "quality-techno-services",
  "cerebritos-panama"
] as const;

function getProjectDomain(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getScrollAmount(track: HTMLDivElement | null) {
  if (!track) return 320;
  const firstCard = track.firstElementChild as HTMLElement | null;
  if (!firstCard) return 320;
  return firstCard.offsetWidth + 24;
}

function ProjectCarouselCard({ project, locale }: { project: PortfolioProject; locale: "es" | "en" }) {
  const domain = getProjectDomain(project.url);

  return (
    <article className="group flex h-[640px] w-[308px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[#06080d] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated sm:w-[330px]">
      <div className="relative h-[430px] overflow-hidden bg-slate-100">
        <PortfolioPreview project={project} compact />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#06080d] via-[#06080d]/35 to-transparent" />
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-white/10 px-5 pb-5 pt-4 text-white sm:px-6">
        <div>
          <h3 className="text-lg font-semibold leading-tight text-white sm:text-[1.36rem]">{project.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{project.industry}</p>
        </div>

        <div className="mt-1 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-200">
            {project.typeLabel}
          </span>
          {project.services.slice(0, 1).map((service) => (
            <span key={service} className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-300">
              {service}
            </span>
          ))}
        </div>

        <Link
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex min-w-0 items-center gap-1.5 pt-3 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
          onClick={() => trackEvent("click_portafolio", { project: project.name, source: "home_projects_carousel_domain" })}
        >
          <span className="truncate">{domain}</span>
          <ExternalLink className="h-3.5 w-3.5 shrink-0" />
        </Link>

        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-ink-900 transition hover:bg-slate-100"
            onClick={() => trackEvent("click_portafolio", { project: project.name, source: "home_projects_carousel_button" })}
          >
            {project.ctaLabel ?? (locale === "en" ? "View project" : "Ver proyecto")}
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-600 px-4 text-sm font-semibold text-white transition hover:bg-brand-700"
            onClick={() => trackEvent("click_whatsapp_hero", { source: `home_projects_cta_${project.slug}` })}
          >
            {locale === "en" ? "Quote" : "Cotizar"}
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ProjectShowcaseSection() {
  const { locale } = useSiteLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);

  const projects = useMemo(
    () => homeProjectSlugs.map((slug) => portfolioProjects.find((project) => project.slug === slug)).filter(Boolean) as PortfolioProject[],
    []
  );

  const heading = locale === "en"
    ? {
        eyebrow: "Selected work",
        title: "Real projects developed by LulabTech",
        description:
          "A selected group of websites and digital systems, ordered to show the strongest visual and commercial references first.",
        cta: "View full portfolio"
      }
    : {
        eyebrow: "Trabajos seleccionados",
        title: "Proyectos reales desarrollados por LulabTech",
        description:
          "Una selección de trabajos para empresas, marcas y sistemas digitales. Están ordenados para mostrar primero las referencias con mejor impacto visual y comercial.",
        cta: "Ver portafolio completo"
      };

  const scrollCarousel = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({
      left: getScrollAmount(track) * direction,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const amount = getScrollAmount(track);
      const reachedEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - amount * 0.6;

      if (reachedEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: amount, behavior: "smooth" });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <SectionShell id={NAV_ANCHORS.projects} className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      <Reveal>
        <SectionHeading eyebrow={heading.eyebrow} title={heading.title} description={heading.description} />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mx-auto mt-7 flex max-w-5xl justify-center">
          <ButtonLink href="/portafolio" size="lg" onClick={() => trackEvent("click_portafolio", { source: "home_portfolio_top_cta" })}>
            {heading.cta}
            <ArrowUpRight className="h-4 w-4" />
          </ButtonLink>
        </div>
      </Reveal>

      <Reveal delay={0.14}>
        <div className="mx-auto mt-10 max-w-7xl">
          <div className="mb-5 flex justify-end gap-2">
            <button
              type="button"
              aria-label="Mover proyectos hacia la izquierda"
              onClick={() => scrollCarousel(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Mover proyectos hacia la derecha"
              onClick={() => scrollCarousel(1)}
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
              <ProjectCarouselCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
