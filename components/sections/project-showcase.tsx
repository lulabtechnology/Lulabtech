"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { NAV_ANCHORS, WHATSAPP_URL } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioProjects, type PortfolioProject } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

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

function getShowcaseScreenshotUrl(url: string) {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  return `https://image.thum.io/get/width/1200/crop/1700/wait/8/noanimate/${normalized}`;
}

function getScrollAmount(track: HTMLDivElement | null) {
  if (!track) return 360;
  const firstCard = track.firstElementChild as HTMLElement | null;
  if (!firstCard) return 360;
  return firstCard.offsetWidth + 24;
}

function HomeShowcaseImage({ project }: { project: PortfolioProject }) {
  const [useLocalFallback, setUseLocalFallback] = useState(false);
  const localFallback = project.screenshotSrc === null ? undefined : project.screenshotSrc;
  const forceLocalPreview = project.slug === "solarled" && Boolean(localFallback);
  const src = forceLocalPreview && localFallback ? localFallback : useLocalFallback && localFallback ? localFallback : getShowcaseScreenshotUrl(project.url);

  return (
    <div className="relative h-[430px] overflow-hidden bg-slate-100">
      <img
        src={src}
        alt={`Vista previa del proyecto ${project.name}`}
        className={cn(
          "h-full w-full object-top transition duration-700 group-hover:scale-[1.02]",
          forceLocalPreview ? "object-cover" : useLocalFallback ? "object-contain" : "object-cover"
        )}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!forceLocalPreview && localFallback && !useLocalFallback) {
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

function ProjectCarouselCard({ project, locale }: { project: PortfolioProject; locale: "es" | "en" }) {
  const domain = getProjectDomain(project.url);

  return (
    <article className="group flex h-full w-[318px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[#080b12] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated sm:w-[360px]">
      <HomeShowcaseImage project={project} />

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
            onClick={() => trackEvent("click_portafolio", { project: project.name, source: "home_projects_carousel_domain" })}
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
              onClick={() => trackEvent("click_portafolio", { project: project.name, source: "home_projects_carousel_button" })}
            >
              {project.ctaLabel ?? (locale === "en" ? "View project" : "Ver proyecto")}
            </ButtonLink>
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              size="md"
              className="w-full justify-center"
              onClick={() => trackEvent("click_whatsapp_hero", { source: `home_projects_cta_${project.slug}` })}
            >
              {locale === "en" ? "Quote" : "Cotizar"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

export function ProjectShowcaseSection() {
  const { locale } = useSiteLanguage();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pauseAutoRef = useRef(false);

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
      if (pauseAutoRef.current) return;

      const track = trackRef.current;
      if (!track) return;

      const amount = getScrollAmount(track);
      const reachedEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - amount * 0.75;

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
            onMouseEnter={() => {
              pauseAutoRef.current = true;
            }}
            onMouseLeave={() => {
              pauseAutoRef.current = false;
            }}
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
