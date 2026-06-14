"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useSiteLanguage } from "@/components/providers/site-language";
import { getProjectsBySlug, PortfolioCarousel } from "@/components/pages/projects-page-content";
import { getPortfolioSectionById, getPortfolioSectionIdBySlug } from "@/data/portfolio-sections";
import { trackEvent } from "@/lib/tracking";

const categoryPageCopy = {
  es: {
    eyebrow: "Portafolio por categoría",
    priceLabel: "Inversión inicial",
    fromLabel: "Desde",
    emptyLabel: "No hay proyectos cargados para esta categoría todavía.",
    quote: "Cotizar algo así",
    back: "Volver al portafolio",
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Podemos ayudarte a convertir esta idea en una web o sistema listo para vender mejor.",
    ctaDescription:
      "Cuéntanos qué tipo de proyecto necesitas y te ayudamos a ordenar la estructura, secciones, textos, funciones y ruta de contacto para tus clientes.",
    whatsapp: "Hablar por WhatsApp"
  },
  en: {
    eyebrow: "Portfolio by category",
    priceLabel: "Initial investment",
    fromLabel: "Starting at",
    emptyLabel: "There are no projects loaded for this category yet.",
    quote: "Quote something like this",
    back: "Back to portfolio",
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We can help turn this idea into a website or system built to sell better.",
    ctaDescription:
      "Tell us what type of project you need and we’ll help structure the sections, content, features and contact path for your customers.",
    whatsapp: "Talk on WhatsApp"
  }
} as const;

export function PortfolioCategoryPageContent({ category }: { category: string }) {
  const { locale } = useSiteLanguage();
  const currentLocale = locale === "en" ? "en" : "es";
  const copy = categoryPageCopy[currentLocale];
  const sectionId = getPortfolioSectionIdBySlug(category);
  const section = sectionId ? getPortfolioSectionById(currentLocale, sectionId) : null;
  const projects = section ? getProjectsBySlug(section.slugs) : [];

  if (!section) {
    return (
      <main className="relative overflow-hidden bg-white py-20">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-8 text-center shadow-soft">
            <p className="eyebrow">Portafolio</p>
            <h1 className="mt-3 text-3xl font-semibold text-ink-900">Categoría no encontrada</h1>
            <ButtonLink href="/portafolio" variant="outline" size="lg" className="mt-6">
              <ArrowLeft className="h-4 w-4" />
              Volver al portafolio
            </ButtonLink>
          </div>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-14 sm:py-16 lg:py-20">
        <GridPattern className="opacity-20" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <Link href="/portafolio" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-900">
                <ArrowLeft className="h-4 w-4" />
                {copy.back}
              </Link>
              <div className="mt-5">
                <span className="eyebrow">{copy.eyebrow}</span>
                <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">{section.title}</h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-ink-600 sm:text-lg">{section.pageIntro}</p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={`https://wa.me/50767069044?text=${section.quoteText}`}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  onClick={() => trackEvent("click_whatsapp_portfolio_category_page", { category: section.id })}
                >
                  <MessageCircle className="h-4 w-4" />
                  {copy.quote}
                </ButtonLink>
                <ButtonLink href="/servicios-panama" variant="outline" size="lg">
                  Ver servicios
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-[#07142D] p-5 shadow-elevated">
              <div className="relative flex min-h-[300px] flex-col justify-end overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-[#07142D] via-[#0D2A61] to-brand-700 p-8 text-white sm:min-h-[360px] lg:min-h-[430px]">
                <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-300/25 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent-200/20 blur-3xl" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.08),transparent_45%)]" />

                <div className="relative max-w-sm rounded-[26px] border border-white/12 bg-black/30 p-6 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">{copy.priceLabel}</p>
                  <div className="mt-4 flex items-end gap-3">
                    <span className="pb-1 text-sm font-semibold text-white/75">{copy.fromLabel}</span>
                    <span className="text-5xl font-semibold leading-none text-white sm:text-6xl">{section.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <PortfolioCarousel projects={projects} source={`portfolio_category_page_${section.id}`} emptyLabel={copy.emptyLabel} />
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">{copy.ctaEyebrow}</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">{copy.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{copy.ctaDescription}</p>
              </div>
              <ButtonLink href={`https://wa.me/50767069044?text=${section.quoteText}`} target="_blank" rel="noreferrer" variant="outline" size="lg" className="border-white/20 bg-white text-ink-900 hover:bg-white/90" onClick={() => trackEvent("click_whatsapp_footer", { source: `portfolio_category_${section.id}` })}>
                {copy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
