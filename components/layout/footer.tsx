"use client";

import Image from "next/image";
import { ArrowUpRight, Layers3, Mail, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";
import { serviceHubClusters } from "@/data/service-hub";
import { INSTAGRAM_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { useSiteLanguage } from "@/components/providers/site-language";

export function Footer() {
  const { copy } = useSiteLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12 sm:py-14">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.25fr_0.85fr] lg:gap-12">
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

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
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

            <div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Servicios por categoría
                </p>
                <a
                  href="/servicios-panama"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                >
                  <Layers3 className="h-4 w-4" />
                  Mapa de servicios
                </a>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {serviceHubClusters.map((cluster) => (
                  <div key={cluster.id} className="rounded-[22px] border border-slate-200 bg-white/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">
                      {cluster.eyebrow}
                    </p>
                    <nav className="mt-3 grid gap-2">
                      {cluster.links.slice(0, cluster.id === "web-seo" ? 6 : 5).map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="inline-flex items-start justify-between gap-2 text-sm font-medium leading-5 text-ink-700 transition hover:text-ink-900"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                        </a>
                      ))}
                    </nav>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-8">
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
