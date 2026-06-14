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
    carouselEyebrow: "Proyectos seleccionados",
    carouselTitle: "Ejemplos reales en esta categoría",
    carouselDescription:
      "Desliza para ver referencias con screenshots, logos y enlaces. Estas cards se mueven automáticamente para que el visitante pueda explorar sin tener todo mezclado en una sola página.",
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
    carouselEyebrow: "Selected projects",
    carouselTitle: "Real examples in this category",
    carouselDescription:
      "Swipe to view references with screenshots, logos and links. These cards move automatically so visitors can explore without seeing every project mixed on one page.",
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
              <img src={section.coverSrc} alt={section.coverAlt} className="h-[430px] w-full rounded-[26px] object-cover" loading="eager" decoding="async" />
              <div className="pointer-events-none absolute inset-5 rounded-[26px] bg-gradient-to-t from-[#020817]/88 via-[#020817]/20 to-transparent" />
              <div className="absolute inset-x-10 bottom-10 rounded-[24px] border border-white/10 bg-black/45 p-5 text-white backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">{copy.priceLabel}</p>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-sm font-semibold text-white/75">{copy.fromLabel}</span>
                  <span className="text-4xl font-semibold leading-none text-white">{section.price}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-white/76">{section.priceNote}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="max-w-4xl">
              <span className="eyebrow">{copy.carouselEyebrow}</span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{copy.carouselTitle}</h2>
              <p className="mt-3 text-base leading-7 text-ink-600">{copy.carouselDescription}</p>
            </div>
          </div>

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
