"use client";

import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";
import { INSTAGRAM_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";

const serviceLinks = [
  { label: "Landing pages desde $149", href: "/landing-pages-panama" },
  { label: "Webs corporativas desde $299", href: "/paginas-web-corporativas-panama" },
  { label: "Tiendas online desde $499", href: "/tiendas-online-panama" },
  { label: "Software a medida desde $899", href: "/software-a-medida-panama" },
  { label: "Software para restaurantes", href: "/software-para-restaurantes-panama" },
  { label: "Software para casilleros/logística", href: "/software-para-casilleros-panama" },
  { label: "Webs para abogados", href: "/diseno-web-para-abogados-panama" },
  { label: "Webs para clínicas", href: "/diseno-web-para-clinicas-panama" },
  { label: "Webs para inmobiliarias", href: "/diseno-web-para-inmobiliarias-panama" },
  { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" },
  { label: "Software POS", href: "/software-pos-panama" },
  { label: "Automatizaciones", href: "/automatizaciones-para-empresas-panama" },
  { label: "SEO para páginas web", href: "/seo-para-paginas-web-panama" },
  { label: "Mantenimiento web", href: "/mantenimiento-web-panama" },
  { label: "Cuánto cuesta una web", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
];

export function Footer() {
  const { copy } = useSiteLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12 sm:py-14">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="relative h-12 w-[180px] sm:h-14 sm:w-[210px]">
                <Image
                  src="/brand/lulabtech-logo.png"
                  alt="LulabTech"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                {copy.footer.title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-600 sm:text-base">
                {copy.footer.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={contactData.whatsappUrl} target="_blank" rel="noreferrer" onClick={() => trackEvent("click_whatsapp_footer")}>
                  <MessageCircle className="h-4 w-4" />
                  {copy.footer.whatsapp}
                </ButtonLink>

                <ButtonLink href={`mailto:${contactData.email}`} variant="outline" onClick={() => trackEvent("click_email", { source: "footer_cta" })}>
                  <Mail className="h-4 w-4" />
                  {contactData.email}
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  {copy.footer.navigation}
                </p>
                <nav className="mt-4 grid gap-3">
                  {copy.navigation.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition hover:text-ink-900"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Servicios SEO
                </p>
                <nav className="mt-4 grid gap-3">
                  {serviceLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition hover:text-ink-900"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  {copy.footer.contact}
                </p>

                <div className="mt-4 grid gap-4">
                  <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {copy.footer.email}
                    </p>
                    <a
                      href={`mailto:${contactData.email}`}
                      onClick={() => trackEvent("click_email", { source: "footer_contact" })}
                      className="mt-2 block break-all text-sm font-semibold text-ink-900"
                    >
                      {contactData.email}
                    </a>
                  </div>

                  <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      {copy.footer.directChannel}
                    </p>
                    <a
                      href={contactData.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackEvent("click_whatsapp_footer", { source: "footer_contact" })}
                      className="mt-2 block text-sm font-semibold text-ink-900"
                    >
                      {copy.footer.whatsapp}
                    </a>
                  </div>

                  <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Instagram
                    </p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block break-all text-sm font-semibold text-ink-900"
                    >
                      @lulab.technology
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} LulabTech. {copy.footer.rights}
            </p>
            <p>{copy.footer.bottom}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
