"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioStats, trustedClientLogos } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";

export function CredibilityStrip() {
  const { locale } = useSiteLanguage();
  const marqueeImages = [...trustedClientLogos, ...trustedClientLogos];

  const copy = locale === "en"
    ? {
        title: "Brands and projects that help build trust",
        description:
          "A visual sample of clients and sectors where LulabTech has already worked. The goal is simple: show real proof before a prospect asks if there is previous experience.",
        primary: "View portfolio",
        secondary: `+${portfolioStats.totalProjects} published projects`,
        bullets: [
          `${portfolioStats.totalLandingPages} landing pages`,
          `${portfolioStats.totalCorporateWebsites} corporate websites`,
          `${portfolioStats.totalSoftwareProjects} software platforms`
        ]
      }
    : {
        title: "Marcas y proyectos que ayudan a generar confianza",
        description:
          "Una muestra visual de clientes y sectores en los que LulabTech ya ha trabajado. La idea es que el visitante vea respaldo real antes de preguntar si existen trabajos realizados.",
        primary: "Ver portafolio",
        secondary: `+${portfolioStats.totalProjects} proyectos publicados`,
        bullets: [
          `${portfolioStats.totalLandingPages} landing pages`,
          `${portfolioStats.totalCorporateWebsites} webs corporativas`,
          `${portfolioStats.totalSoftwareProjects} softwares y plataformas`
        ]
      };

  return (
    <SectionShell className="overflow-hidden py-12 md:py-14">
      <Reveal>
        <div className="rounded-[34px] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{copy.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-600 sm:text-base">
                {copy.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                {copy.bullets.map((bullet) => (
                  <span key={bullet} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-ink-700">
                    {bullet}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 lg:items-end">
              <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">
                {copy.secondary}
              </span>
              <ButtonLink href="/portafolio" size="lg" onClick={() => trackEvent("click_portafolio", { source: "trust_section" })}>
                {copy.primary}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="relative mt-7 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50/80 py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-slate-50 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-slate-50 to-transparent" />

            <div className="client-marquee flex w-max gap-4 px-4">
              {marqueeImages.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative h-24 w-44 shrink-0 overflow-hidden rounded-[22px] border border-slate-200 bg-white p-4 shadow-soft sm:h-28 sm:w-56"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="224px"
                    className="object-contain p-3"
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
