"use client";

import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Compass, Layers3, MessageCircle, Search, Sparkles } from "lucide-react";
import { serviceHubClusters, hubFeaturedPaths, findServiceHubLink } from "@/data/service-hub";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";

const summaryCards = [
  {
    label: "Web y SEO",
    value: "8 opciones",
    description: "Diseño web, landing pages, corporativas, SEO, mantenimiento y rediseño."
  },
  {
    label: "Software",
    value: "7 opciones",
    description: "Sistemas a medida, POS, reservas, inventario, CRM y automatizaciones."
  },
  {
    label: "Industrias",
    value: "6 sectores",
    description: "Abogados, clínicas, inmobiliarias, restaurantes, academias y eventos."
  }
];

export function ServicesHubPageContent() {
  return (
    <main>
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white py-14 sm:py-16 lg:py-20">
        <div className="absolute left-1/2 top-0 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="eyebrow">Servicios digitales en Panamá</span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[3.85rem]">
                Servicios de diseño web, software y SEO para empresas en Panamá
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
                Encuentra de forma rápida el servicio que encaja con tu negocio: páginas web para captar clientes, ecommerce para vender productos, SEO para mejorar tu base digital y software para ordenar procesos internos.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  size="lg"
                  onClick={() => trackEvent("click_whatsapp_hero", { source: "servicios_panama" })}
                >
                  <MessageCircle className="h-4 w-4" />
                  Cotizar por WhatsApp
                </ButtonLink>
                <ButtonLink href="/portafolio" variant="outline" size="lg" onClick={() => trackEvent("click_portafolio", { source: "servicios_panama" })}>
                  Ver proyectos
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[34px] border border-slate-200 bg-white/90 p-4 shadow-elevated backdrop-blur sm:p-5">
              <div className="rounded-[28px] border border-brand-100 bg-gradient-to-br from-white via-brand-50/70 to-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Servicios LulabTech
                  </p>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-white">
                    <Compass className="h-5 w-5" />
                  </span>
                </div>
                <h2 className="mt-5 text-balance text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                  Una guía clara para comparar servicios antes de cotizar.
                </h2>
                <div className="mt-6 grid gap-3">
                  {summaryCards.map((card) => (
                    <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-semibold text-ink-900">{card.label}</p>
                        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">{card.value}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-ink-600">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <SectionShell className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Servicios por categoría</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Elige la ruta según lo que quieres vender, ordenar o posicionar
          </h2>
          <p className="mt-4 text-base leading-7 text-ink-600">
            Cada opción incluye explicación comercial, beneficios, proceso, precio desde cuando aplica, preguntas frecuentes y contacto directo por WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {serviceHubClusters.map((cluster) => (
            <article key={cluster.id} className="rounded-[34px] border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-white p-5 shadow-soft sm:p-6">
              <span className="eyebrow">{cluster.eyebrow}</span>
              <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink-900">{cluster.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink-600">{cluster.description}</p>

              <div className="mt-6 grid gap-3">
                {cluster.links.map((link) => (
                  <Link
                    key={`${cluster.id}-${link.href}`}
                    href={link.href}
                    className="group rounded-[24px] border border-slate-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/60"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-base font-semibold text-ink-900">{link.label}</h4>
                        <p className="mt-2 text-sm leading-6 text-ink-600">{link.description}</p>
                      </div>
                      <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                    </div>
                    {link.price ? (
                      <span className="mt-3 inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-700 ring-1 ring-brand-100">
                        {link.price}
                      </span>
                    ) : null}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="bg-gradient-to-b from-slate-50/80 to-white">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <span className="eyebrow">Recomendaciones rápidas</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
              Qué revisar primero según el objetivo del negocio
            </h2>
            <p className="mt-4 text-base leading-7 text-ink-600">
              Usa estas recomendaciones para elegir entre una web para captar clientes, una tienda online para vender productos o un sistema para ordenar la operación diaria.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {hubFeaturedPaths.map((path) => (
              <div key={path.title} className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Layers3 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight text-ink-900">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{path.description}</p>
                <div className="mt-5 grid gap-2">
                  {path.links.map((href) => {
                    const link = findServiceHubLink(href);
                    if (!link) return null;
                    return (
                      <Link key={href} href={href} className="inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700">
                        {link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-white">
        <div className="rounded-[34px] border border-brand-100 bg-brand-50/70 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <span className="eyebrow">Cómo elegir el servicio correcto</span>
              <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
                Si no sabes qué servicio necesitas, empieza por el objetivo del negocio
              </h2>
            </div>
            <div className="grid gap-3">
              {[
                "Si quieres captar clientes rápido, revisa landing pages, web corporativa o diseño web en Panamá.",
                "Si quieres vender productos, revisa ecommerce y catálogo digital.",
                "Si quieres ordenar procesos internos, revisa software a medida, POS, reservas, inventario o CRM.",
                "Si tu industria necesita confianza, revisa páginas para abogados, clínicas, inmobiliarias, restaurantes, academias o eventos."
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-white/80 bg-white p-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <p className="text-sm leading-7 text-ink-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="bg-gradient-to-b from-white via-slate-50/80 to-white">
        <div className="rounded-[34px] border border-slate-200 bg-white p-6 text-center shadow-soft sm:p-8 lg:p-10">
          <Sparkles className="mx-auto h-6 w-6 text-brand-600" />
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            ¿Quieres que te diga cuál ruta aplica para tu proyecto?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-600">
            Escríbenos por WhatsApp con el tipo de negocio, objetivo y presupuesto aproximado. Te orientamos entre landing page, web corporativa, ecommerce o software a medida.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              size="lg"
              onClick={() => trackEvent("click_whatsapp_footer", { source: "servicios_panama_cta" })}
            >
              <MessageCircle className="h-4 w-4" />
              Cotizar por WhatsApp
            </ButtonLink>
            <ButtonLink href="/#cotizar" variant="outline" size="lg" onClick={() => trackEvent("click_formulario_contacto", { source: "servicios_panama_cta" })}>
              Enviar formulario
              <Search className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
