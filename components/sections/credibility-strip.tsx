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

function LogoTile({ project }: { project: PortfolioProject }) {
  return (
    <div className="flex h-28 w-[17rem] shrink-0 items-center justify-center rounded-[28px] border border-slate-200 bg-white px-6 py-4 shadow-soft sm:h-32 sm:w-[20rem] sm:px-7 lg:h-36 lg:w-[22rem] lg:px-8">
      {project.logoSrc ? (
        <div className="relative h-full w-full">
          <Image
            src={project.logoSrc}
            alt={`Logo de ${project.name}`}
            fill
            sizes="(max-width: 640px) 272px, (max-width: 1024px) 320px, 352px"
            className="object-contain"
          />
        </div>
      ) : (
        <p className="text-center text-lg font-semibold text-ink-900 sm:text-xl">{project.name}</p>
      )}
    </div>
  );
}

function LogoRow({ projects, reverse = false }: { projects: PortfolioProject[]; reverse?: boolean }) {
  const repeated = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden py-2 sm:py-3">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent sm:w-20" />
      <div className={cn("flex w-max gap-4 px-2 sm:gap-5 sm:px-4", reverse ? "client-marquee-reverse" : "client-marquee")}>
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
                  <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 shadow-soft">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
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
        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4 px-1 sm:px-2">
            <h3 className="text-xl font-semibold text-ink-900 sm:text-2xl">{copy.logosTitle}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-brand-100 to-transparent" />
          </div>
          <LogoRow projects={portfolioLogoRows[0]} />
          <LogoRow projects={portfolioLogoRows[1]} reverse />
        </div>
      </Reveal>
    </SectionShell>
  );
}
