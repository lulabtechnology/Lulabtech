"use client";

import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Clock3, Layers3, SearchCheck } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioLogoRows, portfolioTrustStats, type PortfolioProject } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const icons = [Layers3, Clock3, BadgeCheck, SearchCheck];

function getDomain(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function LogoTile({ project }: { project: PortfolioProject }) {
  const [firstWord, secondWord] = project.name.split(" ");
  const initials = `${firstWord?.[0] ?? "L"}${secondWord?.[0] ?? ""}`.toUpperCase();
  const favicon = `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(project.url)}`;

  return (
    <div className="flex h-20 w-64 shrink-0 items-center gap-3 rounded-[22px] border border-slate-200 bg-white px-4 shadow-soft sm:h-24 sm:w-72">
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
        {project.logoSrc ? (
          <Image src={project.logoSrc} alt={`Logo de ${project.name}`} fill sizes="48px" className="object-contain p-2" />
        ) : (
          <img src={favicon} alt={`Logo de ${project.name}`} className="h-8 w-8 object-contain" loading="lazy" decoding="async" />
        )}
        <span className="sr-only">{initials}</span>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-ink-900">{project.name}</p>
        <p className="mt-1 truncate text-xs font-medium text-ink-500">{getDomain(project.url)}</p>
      </div>
    </div>
  );
}

function LogoRow({ projects, reverse = false }: { projects: PortfolioProject[]; reverse?: boolean }) {
  const repeated = [...projects, ...projects];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
      <div className={cn("flex w-max gap-3 px-3", reverse ? "client-marquee-reverse" : "client-marquee")}>        
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
        eyebrow: "Trust proof",
        title: "A stronger first impression before a prospect asks for references",
        description:
          "LulabTech brings together published websites, landing pages and software projects across legal, education, logistics, tourism, health, energy, real estate and service businesses.",
        primary: "View portfolio",
        logosTitle: "Brands and projects worked on by LulabTech"
      }
    : {
        eyebrow: "Prueba de confianza",
        title: "Más respaldo visual antes de que el cliente pregunte por trabajos realizados",
        description:
          "LulabTech reúne proyectos publicados de páginas web, landing pages y software para sectores como legal, educación, logística, turismo, salud, energía, inmobiliaria y servicios profesionales.",
        primary: "Ver portafolio",
        logosTitle: "Marcas y proyectos trabajados por LulabTech"
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
