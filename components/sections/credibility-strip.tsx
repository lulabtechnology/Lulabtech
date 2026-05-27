"use client";

import Image from "next/image";
import { ArrowUpRight, BadgeCheck, Clock3, Layers3, Sparkles } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioStats, trustedClientLogos } from "@/data/portfolio";
import { trackEvent } from "@/lib/tracking";

export function CredibilityStrip() {
  const { locale } = useSiteLanguage();
  const logos = trustedClientLogos.slice(0, 12);

  const copy = locale === "en"
    ? {
        title: "Trust markers, stronger logos, and a clearer proof section",
        description:
          "This section is meant to instantly communicate that LulabTech already works across multiple industries. Stronger logos are shown first, plus trust badges and a direct route to the portfolio.",
        primary: "View portfolio",
        stats: [
          { label: "Published projects", value: `${portfolioStats.totalProjects}+`, icon: Layers3 },
          { label: "Fast delivery", value: "Quick turnaround", icon: Clock3 },
          { label: "Initial support", value: "Post-launch help", icon: BadgeCheck },
          { label: "Basic SEO", value: "Prepared to grow", icon: Sparkles }
        ]
      }
    : {
        title: "Más confianza visual, mejores logos y una prueba social más clara",
        description:
          "Esta sección busca transmitir rápido que LulabTech ya ha trabajado con distintos sectores. Por eso mostramos primero los logos que generan mayor impacto, sumamos badges de confianza y una ruta directa al portafolio.",
        primary: "Ver portafolio",
        stats: [
          { label: "Proyectos publicados", value: `${portfolioStats.totalProjects}+`, icon: Layers3 },
          { label: "Entrega rápida", value: "Respuesta ágil", icon: Clock3 },
          { label: "Soporte inicial", value: "Acompañamiento", icon: BadgeCheck },
          { label: "SEO base", value: "Preparado para crecer", icon: Sparkles }
        ]
      };

  return (
    <SectionShell className="overflow-hidden py-12 md:py-14">
      <Reveal>
        <div className="rounded-[34px] border border-slate-200 bg-white/92 p-5 shadow-soft sm:p-6 lg:p-7">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <h2 className="text-2xl font-semibold text-ink-900 sm:text-3xl">{copy.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-7 text-ink-600 sm:text-base">
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
              {copy.stats.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[24px] border border-slate-200 bg-slate-50/80 p-4 shadow-soft">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-brand-700 shadow-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xl font-semibold text-ink-900">{item.value}</p>
                    <p className="mt-1 text-sm font-medium text-ink-600">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((image) => (
              <div
                key={image.src}
                className="relative flex h-24 items-center justify-center overflow-hidden rounded-[22px] border border-slate-200 bg-white p-4 shadow-soft"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="200px"
                  className="object-contain p-4"
                />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}
