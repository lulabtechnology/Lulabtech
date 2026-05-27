"use client";

import Image from "next/image";
import { ArrowUpRight, Clock3, Layers3 } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioLogoRows, portfolioTrustStats, type PortfolioProject } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const icons = [Layers3, Clock3];

function getDomain(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LogoTile({ project }: { project: PortfolioProject }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackEvent("click_portafolio", { project: project.name, source: "logos_carousel" })}
      className="group flex h-28 w-72 shrink-0 flex-col justify-between overflow-hidden rounded-[26px] border border-slate-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated sm:h-32 sm:w-80"
    >
      <div className="relative flex min-h-0 flex-1 items-center justify-center rounded-[20px] bg-slate-50/80 px-4 py-3 ring-1 ring-inset ring-slate-100">
        {project.logoSrc ? (
          <Image
            src={project.logoSrc}
            alt={`Logo de ${project.name}`}
            fill
            sizes="320px"
            className="object-contain p-4 transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-center">
            <span className="text-balance text-lg font-semibold leading-tight text-ink-900 sm:text-xl">
              {project.name}
            </span>
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-3">
        <p className="truncate text-sm font-semibold text-ink-900">{project.name}</p>
        <p className="hidden truncate text-xs font-medium text-ink-500 sm:block">{getDomain(project.url)}</p>
      </div>
    </a>
  );
}

function LogoRow({ projects, reverse = false }: { projects: PortfolioProject[]; reverse?: boolean }) {
  const repeated = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className={cn("flex w-max gap-4 px-3", reverse ? "client-marquee-reverse" : "client-marquee")}>
        {repeated.map((project, index) => (
          <LogoTile key={`${project.slug}-${index}`} project={project} />
        ))}
      </div>
    </div>
  );
}

export function CredibilityStrip() {
  const { locale } = useSiteLanguage();

  const copy = locale === "en"
    ? {
        eyebrow: "Completed work",
        title: "Real projects built for businesses in Panama",
        description:
          "LulabTech has developed websites, landing pages and custom systems for legal firms, academies, logistics companies, tourism brands, health businesses, energy companies and professional services.",
        primary: "View full portfolio",
        logosTitle: "Brands and projects we have worked with"
      }
    : {
        eyebrow: "Trabajos realizados",
        title: "Proyectos reales desarrollados por LulabTech",
        description:
          "Hemos desarrollado páginas web, landing pages y sistemas a medida para firmas legales, academias, empresas logísticas, marcas turísticas, clínicas, compañías de energía y servicios profesionales.",
        primary: "Ver portafolio completo",
        logosTitle: "Marcas y proyectos trabajados"
      };

  return (
    <SectionShell className="overflow-hidden py-12 md:py-14">
      <Reveal>
        <div className="rounded-[34px] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="eyebrow">{copy.eyebrow}</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{copy.title}</h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink-600 sm:text-base">
                {copy.description}
              </p>
              <div className="mt-6">
                <ButtonLink href="/portafolio" size="lg" onClick={() => trackEvent("click_portafolio", { source: "trust_section" })}>
                  {copy.primary}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {portfolioTrustStats.map((item, index) => {
                const Icon = icons[index] ?? Layers3;
                return (
                  <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-5 shadow-soft">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-3xl font-semibold text-ink-900">{item.value}</p>
                    <p className="mt-1 text-sm font-semibold text-ink-900">{item.label}</p>
                    <p className="mt-2 text-xs leading-5 text-ink-500">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8">
          <div className="mb-4 flex items-center justify-between gap-4 px-2">
            <h3 className="text-lg font-semibold text-ink-900 sm:text-xl">{copy.logosTitle}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-brand-100 to-transparent" />
          </div>
          <LogoRow projects={portfolioLogoRows[0]} />
          <LogoRow projects={portfolioLogoRows[1]} reverse />
        </div>
      </Reveal>
    </SectionShell>
  );
}
