import {
  Bot,
  Building2,
  LayoutTemplate,
  ShoppingBag,
  Workflow
} from "lucide-react";
import { servicesData } from "@/data/services";
import { NAV_ANCHORS } from "@/lib/constants";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceIcons = [
  LayoutTemplate,
  Building2,
  ShoppingBag,
  Workflow,
  Bot
];

export function ServicesSection() {
  return (
    <SectionShell
      id={NAV_ANCHORS.services}
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/20 to-white"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Capacidades"
          title="Soluciones pensadas para presentar mejor la marca y mover al usuario a la acción"
          description="Landing pages, webs corporativas, tiendas online, software y automatizaciones desarrolladas con claridad comercial y una ejecución más cuidada."
        />
      </Reveal>

      <Stagger className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {servicesData.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];

          return (
            <div
              key={service.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <IconBox icon={Icon} className="transition group-hover:scale-105" />
              <h3 className="mt-5 text-xl font-semibold text-ink-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{service.description}</p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-brand-200 via-slate-200 to-transparent" />

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                A medida · claro · listo para crecer
              </p>
            </div>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
