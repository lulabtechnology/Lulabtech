"use client";

import { ArrowUpRight, Bot, Building2, LayoutTemplate, ShoppingBag, Workflow } from "lucide-react";
import { NAV_ANCHORS } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { ButtonLink } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

const serviceIcons = [LayoutTemplate, Building2, LayoutTemplate, ShoppingBag, Workflow, Bot];

const serviceCards = [
  {
    href: "/landing-pages-panama",
    price: "$149",
    event: "click_servicio_landing_page"
  },
  {
    href: "/paginas-web-corporativas-panama",
    price: "$299",
    event: "click_servicio_web_corporativa"
  },
  {
    href: "/diseno-web-para-abogados-panama",
    price: "$149",
    event: "click_servicio_web_corporativa"
  },
  {
    href: "/tiendas-online-panama",
    price: "$499",
    event: "click_servicio_ecommerce"
  },
  {
    href: "/software-a-medida-panama",
    price: "$899",
    event: "click_servicio_software"
  }
] as const;

export function ServicesSection() {
  const { copy, locale } = useSiteLanguage();
  const services = copy.services;
  const viewLabel = locale === "en" ? "View details" : "Ver detalle";
  const priceLabel = locale === "en" ? "Starting at" : "Desde";
  const note =
    locale === "en"
      ? "Final price depends on scope, content, integrations and required functionality."
      : "El precio final depende del alcance, contenido, integraciones y funcionalidades requeridas.";

  return (
    <SectionShell
      id={NAV_ANCHORS.services}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.items.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          const card = serviceCards[index] || serviceCards[serviceCards.length - 1];

          return (
            <div
              key={service.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <IconBox icon={Icon} className="transition group-hover:scale-105" />
              <h3 className="mt-5 text-xl font-semibold text-ink-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{service.description}</p>

              <div className="mt-5 rounded-2xl border border-brand-100 bg-brand-50/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                  {priceLabel}
                </p>
                <p className="mt-1 text-2xl font-bold text-ink-900">{card.price}</p>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-200 via-slate-200 to-transparent" />

              <div className="mt-4 flex flex-col gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                  {services.suffix}
                </p>
                <ButtonLink
                  href={card.href}
                  variant="outline"
                  className="w-full"
                  onClick={() => trackEvent(card.event, { source: "home_services", href: card.href })}
                >
                  {viewLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </Stagger>

      <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-6 text-ink-500 sm:text-sm">
        {note}
      </p>
    </SectionShell>
  );
}
