"use client";

import { Building2, BriefcaseBusiness, Gavel, GraduationCap, PackageCheck, ShoppingBag, Utensils, Workflow } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { ButtonLink } from "@/components/ui/button";
import { IconBox } from "@/components/ui/icon-box";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSiteLanguage } from "@/components/providers/site-language";

const content = {
  es: {
    eyebrow: "Soluciones por negocio",
    title: "Páginas informativas, webs corporativas, ecommerce y software según tu operación",
    description:
      "No todos los negocios necesitan lo mismo. LulabTech puede construir desde una página sencilla para presentar servicios hasta un sistema completo para operar mejor.",
    items: [
      {
        title: "Páginas informativas",
        description:
          "Ideales para negocios que necesitan explicar servicios, ubicación, horarios, beneficios y contacto de forma profesional.",
        href: "/diseno-web-panama"
      },
      {
        title: "Páginas para abogados",
        description:
          "Webs serias para comunicar áreas legales, perfil profesional, confianza y llamadas a consulta sin caer en diseños genéricos.",
        href: "/paginas-web-empresas-panama"
      },
      {
        title: "Webs corporativas",
        description:
          "Para empresas que necesitan presentar servicios, equipo, respaldo, proyectos y canales de contacto con más autoridad.",
        href: "/paginas-web-empresas-panama"
      },
      {
        title: "Ecommerce y catálogos",
        description:
          "Tiendas online o catálogos digitales para productos, categorías, WhatsApp, carrito o pagos según el alcance.",
        href: "/tiendas-online-panama"
      },
      {
        title: "Software para casilleros",
        description:
          "Sistemas para clientes, casilleros, envíos, contenedores, estados, comprobantes, facturación y panel administrativo.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Software para restaurantes",
        description:
          "Herramientas para ventas, inventario, empleados, horarios, reportes, estados de pago y control operativo interno.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Sistemas de reservas",
        description:
          "Flujos para servicios, disponibilidad, solicitudes, aprobaciones, correos, estados y administración de citas.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Automatizaciones",
        description:
          "Procesos digitales para reducir tareas manuales, ordenar información y conectar mejor la operación del negocio.",
        href: "/software-a-medida-panama"
      }
    ],
    cta: "Ver servicio"
  },
  en: {
    eyebrow: "Business solutions",
    title: "Informational pages, corporate websites, ecommerce and custom software for real operations",
    description:
      "Not every business needs the same thing. LulabTech can build from a clean service page to a full internal system.",
    items: [
      {
        title: "Informational websites",
        description:
          "For businesses that need to explain services, location, hours, benefits and contact in a professional way.",
        href: "/diseno-web-panama"
      },
      {
        title: "Websites for law firms",
        description:
          "Serious websites to communicate legal practice areas, professional profile, trust and consultation calls.",
        href: "/paginas-web-empresas-panama"
      },
      {
        title: "Corporate websites",
        description:
          "For companies that need to present services, team, proof, projects and contact channels with more authority.",
        href: "/paginas-web-empresas-panama"
      },
      {
        title: "Ecommerce and catalogs",
        description:
          "Online stores or digital catalogs for products, categories, WhatsApp, cart or payments depending on scope.",
        href: "/tiendas-online-panama"
      },
      {
        title: "Locker software",
        description:
          "Systems for clients, lockers, shipments, containers, statuses, receipts, billing and admin panels.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Restaurant software",
        description:
          "Tools for sales, inventory, employees, schedules, reports, payment statements and internal control.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Booking systems",
        description:
          "Flows for services, availability, requests, approvals, emails, statuses and appointment management.",
        href: "/software-a-medida-panama"
      },
      {
        title: "Automations",
        description:
          "Digital processes to reduce manual work, organize information and connect business operations better.",
        href: "/software-a-medida-panama"
      }
    ],
    cta: "View service"
  }
};

const icons = [Building2, Gavel, BriefcaseBusiness, ShoppingBag, PackageCheck, Utensils, GraduationCap, Workflow] as const;

export function SolutionUseCasesSection() {
  const { locale } = useSiteLanguage();
  const current = content[locale];

  return (
    <SectionShell id="soluciones" className="overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white">
      <Reveal>
        <SectionHeading eyebrow={current.eyebrow} title={current.title} description={current.description} />
      </Reveal>

      <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {current.items.map((item, index) => {
          const Icon = icons[index % icons.length];

          return (
            <div
              key={item.title}
              className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
            >
              <IconBox icon={Icon} className="transition group-hover:scale-105" />
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink-900">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-ink-600">{item.description}</p>
              <ButtonLink href={item.href} variant="outline" className="mt-6 w-full">
                {current.cta}
              </ButtonLink>
            </div>
          );
        })}
      </Stagger>
    </SectionShell>
  );
}
