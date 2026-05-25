"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useSiteLanguage } from "@/components/providers/site-language";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { getServicePage, getServicePageOrThrow, type ServiceLocale } from "@/data/seo-pages";

const uiCopy = {
  es: {
    focus: "Enfoque LulabTech",
    results: "Base profesional",
    resultsText: "Diseño claro, mobile-first, SEO local y contacto directo.",
    benefits: "Beneficios",
    useCases: "Casos de uso",
    process: "Proceso",
    faq: "Preguntas frecuentes",
    faqTitle: "Dudas comunes antes de cotizar",
    related: "También puede interesarte",
    quote: "Cotizar con LulabTech",
    priceLabel: "Precio desde",
    priceNote: "El precio final depende del alcance, contenido, integraciones y funcionalidades requeridas."
  },
  en: {
    focus: "LulabTech approach",
    results: "Professional foundation",
    resultsText: "Clear design, mobile-first experience, local SEO, and direct contact.",
    benefits: "Benefits",
    useCases: "Use cases",
    process: "Process",
    faq: "Frequently asked questions",
    faqTitle: "Common questions before requesting a quote",
    related: "You may also be interested in",
    quote: "Quote with LulabTech",
    priceLabel: "Starting at",
    priceNote: "The final price depends on scope, content, integrations, and required functionality."
  }
} satisfies Record<ServiceLocale, Record<string, string>>;


const priceFromBySlug: Record<string, string> = {
  "landing-pages-panama": "$149",
  "paginas-web-corporativas-panama": "$299",
  "paginas-web-empresas-panama": "$299",
  "tiendas-online-panama": "$499",
  "software-a-medida-panama": "$899",
  "software-para-restaurantes-panama": "$899",
  "software-para-casilleros-panama": "$899",
  "diseno-web-para-abogados-panama": "$149",
  "sistemas-de-reservas-panama": "$899",
  "cuanto-cuesta-una-pagina-web-en-panama": "$149",
  "desarrollo-web-panama": "$299",
  "agencia-de-diseno-web-panama": "$149",
  "diseno-web-para-clinicas-panama": "$299",
  "diseno-web-para-inmobiliarias-panama": "$299",
  "software-pos-panama": "$899",
  "automatizaciones-para-empresas-panama": "$899",
  "paginas-web-para-restaurantes-panama": "$149",
  "paginas-web-para-academias-panama": "$299",
  "paginas-web-para-eventos-panama": "$299",
  "rediseno-web-panama": "$299",
  "sistemas-de-inventario-panama": "$899",
  "crm-para-empresas-panama": "$899",
  "software-para-logistica-panama": "$899",
};

const serviceEventBySlug: Record<string, string> = {
  "landing-pages-panama": "click_servicio_landing_page",
  "paginas-web-corporativas-panama": "click_servicio_web_corporativa",
  "paginas-web-empresas-panama": "click_servicio_web_corporativa",
  "tiendas-online-panama": "click_servicio_ecommerce",
  "software-a-medida-panama": "click_servicio_software",
  "software-para-restaurantes-panama": "click_servicio_software",
  "software-para-casilleros-panama": "click_servicio_software",
  "sistemas-de-reservas-panama": "click_servicio_software",
  "desarrollo-web-panama": "click_servicio_web_corporativa",
  "agencia-de-diseno-web-panama": "click_servicio_web_corporativa",
  "seo-para-paginas-web-panama": "click_servicio_software",
  "mantenimiento-web-panama": "click_servicio_software",
  "diseno-web-para-clinicas-panama": "click_servicio_web_corporativa",
  "diseno-web-para-inmobiliarias-panama": "click_servicio_web_corporativa",
  "software-pos-panama": "click_servicio_software",
  "automatizaciones-para-empresas-panama": "click_servicio_software",
  "paginas-web-para-restaurantes-panama": "click_servicio_web_corporativa",
  "paginas-web-para-academias-panama": "click_servicio_web_corporativa",
  "paginas-web-para-eventos-panama": "click_servicio_web_corporativa",
  "rediseno-web-panama": "click_servicio_web_corporativa",
  "sistemas-de-inventario-panama": "click_servicio_software",
  "crm-para-empresas-panama": "click_servicio_software",
  "software-para-logistica-panama": "click_servicio_software",
};

export function ServiceLandingPageContent({ slug }: { slug: string }) {
  const { locale } = useSiteLanguage();
  const activeLocale: ServiceLocale = locale === "en" ? "en" : "es";
  const page = getServicePage(slug, activeLocale) || getServicePageOrThrow(slug, "es");
  const copy = uiCopy[activeLocale];
  const priceFrom = page.priceFrom || priceFromBySlug[slug];
  const serviceEvent = serviceEventBySlug[slug] || "click_servicio_software";
  const serviceHubLabel = activeLocale === "en" ? "Services" : "Servicios";
  const relatedLinks = [
    { label: serviceHubLabel, href: "/servicios-panama" },
    ...page.relatedLinks.filter((link) => link.href !== "/servicios-panama")
  ];

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-brand-50/25 to-white py-14 sm:py-16 lg:py-20">
        <GridPattern className="opacity-20" />
        <div className="absolute left-1/2 top-8 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm font-medium text-ink-500">
            <Link href="/" className="transition hover:text-brand-700">Inicio</Link>
            <span>/</span>
            <Link href="/servicios-panama" className="transition hover:text-brand-700">{serviceHubLabel}</Link>
            <span>/</span>
            <span className="text-ink-800">{page.eyebrow}</span>
          </nav>

          <div className="grid gap-9 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.78fr)] lg:items-center">
            <div className="max-w-3xl">
              <span className="eyebrow">{page.eyebrow}</span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[3.85rem]">
                {page.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
                {page.intro}
              </p>

              {priceFrom ? (
                <div className="mt-7 inline-flex flex-col rounded-3xl border border-brand-100 bg-white px-5 py-4 shadow-soft sm:flex-row sm:items-center sm:gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {copy.priceLabel}
                  </span>
                  <span className="mt-1 text-2xl font-bold text-ink-900 sm:mt-0">{priceFrom}</span>
                  <span className="text-sm leading-6 text-ink-500">{copy.priceNote}</span>
                </div>
              ) : null}

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  onClick={() => {
                    trackEvent("click_whatsapp_hero", { service: slug });
                    trackEvent(serviceEvent, { service: slug });
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  {page.primaryCta}
                </ButtonLink>
                <ButtonLink href="/proyectos" variant="outline" size="lg" onClick={() => trackEvent("click_portafolio", { source: slug })}>
                  {page.secondaryCta}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <aside className="rounded-[34px] border border-slate-200 bg-white/90 p-4 shadow-elevated backdrop-blur sm:p-5">
              <div className="rounded-[28px] border border-brand-100 bg-gradient-to-br from-white via-brand-50/70 to-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    {copy.focus}
                  </p>
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-soft">
                    L
                  </span>
                </div>

                <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                  {page.heroPanelTitle}
                </h2>
                <p className="mt-4 text-sm leading-7 text-ink-600">
                  {page.heroPanelDescription}
                </p>

                <div className="mt-6 grid gap-3">
                  {page.heroBullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                      <p className="text-sm leading-6 text-ink-700">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-brand-100 bg-brand-600 p-4 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">
                    {priceFrom ? copy.priceLabel : copy.results}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {priceFrom ? `${priceFrom} · ${copy.priceNote}` : copy.resultsText}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{copy.benefits}</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              {page.benefitsTitle}
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600">
              {page.benefitsDescription}
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {page.benefits.map((benefit) => (
              <div key={benefit} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <Sparkles className="h-5 w-5 text-brand-600" />
                <p className="mt-4 text-sm font-medium leading-7 text-ink-700">{benefit}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-slate-50/80 to-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="eyebrow">{copy.useCases}</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                {page.useCasesTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-ink-600">
                {page.useCasesDescription}
              </p>
            </div>

            <div className="grid gap-4">
              {page.useCases.map((item) => (
                <div key={item.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                  <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{copy.process}</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              {page.processTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {page.process.map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-50 text-sm font-bold text-brand-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-white via-slate-50/80 to-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="eyebrow">{copy.faq}</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              {copy.faqTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {page.faq.map((item) => (
              <div key={item.question} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
                <HelpCircle className="h-5 w-5 text-brand-600" />
                <h3 className="mt-4 text-lg font-semibold leading-snug text-ink-900">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-600">{item.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {copy.related}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {relatedLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-brand-200 hover:text-brand-700"
                    >
                      {link.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  ))}
                </div>
              </div>
              <ButtonLink
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                size="lg"
                onClick={() => {
                  trackEvent("click_whatsapp_footer", { service: slug });
                  trackEvent(serviceEvent, { service: slug, placement: "service_related" });
                }}
              >
                {copy.quote}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
