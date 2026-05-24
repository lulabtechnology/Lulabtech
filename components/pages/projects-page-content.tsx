"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useSiteLanguage } from "@/components/providers/site-language";
import { getProjectPortfolio, type ServiceLocale } from "@/data/seo-pages";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";

type ProjectsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  whatsapp: string;
  links: { label: string; href: string }[];
};

const copy: Record<ServiceLocale, ProjectsPageCopy> = {
  es: {
    eyebrow: "Portafolio LulabTech",
    title: "Proyectos de diseño web, software y presencia digital para negocios en Panamá",
    description:
      "Una selección de proyectos y soluciones trabajadas por LulabTech: landing pages, webs corporativas, sistemas para casilleros, reservas y presencia digital para empresas.",
    primaryCta: "Cotizar un proyecto similar",
    secondaryCta: "Ver servicios",
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Creamos una solución ajustada a tu negocio, no una plantilla genérica.",
    ctaDescription:
      "Podemos ayudarte con una página informativa, una web corporativa, una tienda online o un sistema a medida para casilleros, restaurantes, reservas, inventario y más.",
    whatsapp: "Hablar por WhatsApp",
    links: [
      { label: "Diseño web", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Webs corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Ecommerce", href: "/tiendas-online-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" }
    ]
  },
  en: {
    eyebrow: "LulabTech portfolio",
    title: "Web design, software, and digital presence projects for businesses in Panama",
    description:
      "A selection of projects and solutions developed by LulabTech: landing pages, corporate websites, locker systems, booking systems, and digital presence for companies.",
    primaryCta: "Quote a similar project",
    secondaryCta: "View services",
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We create a solution tailored to your business, not a generic template.",
    ctaDescription:
      "We can help with an informational website, a corporate website, an online store, or a custom system for lockers, restaurants, bookings, inventory, and more.",
    whatsapp: "Talk on WhatsApp",
    links: [
      { label: "Web design", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Corporate websites", href: "/paginas-web-corporativas-panama" },
      { label: "Ecommerce", href: "/tiendas-online-panama" },
      { label: "Custom software", href: "/software-a-medida-panama" }
    ]
  }
};

export function ProjectsPageContent() {
  const { locale } = useSiteLanguage();
  const activeLocale: ServiceLocale = locale === "en" ? "en" : "es";
  const pageCopy = copy[activeLocale];
  const projects = getProjectPortfolio(activeLocale);

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-14 sm:py-16 lg:py-20">
        <GridPattern className="opacity-20" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">{pageCopy.eyebrow}</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">
              {pageCopy.title}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
              {pageCopy.description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" onClick={() => trackEvent("click_whatsapp_hero", { source: "projects" })}>
                <MessageCircle className="h-4 w-4" />
                {pageCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href="/#servicios" variant="outline" size="lg" onClick={() => trackEvent("click_servicio_software", { source: "projects" })}>
                {pageCopy.secondaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="border-b border-slate-200 bg-slate-50/90 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <span className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={`LulabTech project: ${project.name}`}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    {project.type}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold leading-tight text-ink-900">
                    {project.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-ink-600">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-ink-700"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">
                  {pageCopy.ctaEyebrow}
                </p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  {pageCopy.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                  {pageCopy.ctaDescription}
                </p>
              </div>
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg" className="border-white/20 bg-white text-ink-900 hover:bg-white/90" onClick={() => trackEvent("click_whatsapp_footer", { source: "projects_cta" })}>
                {pageCopy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink-600">
            {pageCopy.links.map((link) => (
              <Link key={link.href} className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
