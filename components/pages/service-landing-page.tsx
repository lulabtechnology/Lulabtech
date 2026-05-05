import Link from "next/link";
import { ArrowUpRight, CheckCircle2, HelpCircle, MessageCircle, Sparkles } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { ServicePageStructuredData } from "@/components/seo/service-page-structured-data";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { WHATSAPP_URL } from "@/lib/constants";
import { getServicePageOrThrow } from "@/data/seo-pages";

export function ServiceLandingPage({ slug }: { slug: string }) {
  const page = getServicePageOrThrow(slug);

  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <ServicePageStructuredData page={page} />
        <SitePreloader />
        <Navbar />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-16 sm:py-20 lg:py-24">
            <GridPattern className="opacity-20" />
            <Container className="relative">
              <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="max-w-3xl">
                  <span className="eyebrow">{page.eyebrow}</span>
                  <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">
                    {page.h1}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
                    {page.intro}
                  </p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                      <MessageCircle className="h-4 w-4" />
                      {page.primaryCta}
                    </ButtonLink>
                    <ButtonLink href="/proyectos" variant="outline" size="lg">
                      {page.secondaryCta}
                      <ArrowUpRight className="h-4 w-4" />
                    </ButtonLink>
                  </div>
                </div>

                <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-elevated sm:p-6">
                  <div className="rounded-[28px] bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-6 text-white">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">
                      Enfoque LulabTech
                    </p>
                    <h2 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                      Diseño, estructura y conversión trabajando juntos.
                    </h2>
                    <div className="mt-6 grid gap-3">
                      {page.heroBullets.map((bullet) => (
                        <div key={bullet} className="flex gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-200" />
                          <p className="text-sm leading-6 text-white/90">{bullet}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-20">
            <Container>
              <div className="mx-auto max-w-3xl text-center">
                <span className="eyebrow">Beneficios</span>
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
                  <span className="eyebrow">Casos de uso</span>
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
                <span className="eyebrow">Proceso</span>
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
                <span className="eyebrow">Preguntas frecuentes</span>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                  Dudas comunes antes de cotizar
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
                      También puede interesarte
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {page.relatedLinks.map((link) => (
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
                  <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                    Cotizar con LulabTech
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
