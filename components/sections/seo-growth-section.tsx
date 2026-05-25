import Link from "next/link";
import { ArrowUpRight, Building2, Globe2, Sparkles, Workflow } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

const clusters = [
  {
    title: "Servicios web principales",
    description: "Rutas comerciales para quienes buscan presencia digital, desarrollo y posicionamiento inicial en Panamá.",
    icon: Globe2,
    links: [
      { label: "Desarrollo web en Panamá", href: "/desarrollo-web-panama" },
      { label: "Agencia de diseño web", href: "/agencia-de-diseno-web-panama" },
      { label: "SEO para páginas web", href: "/seo-para-paginas-web-panama" },
      { label: "Mantenimiento web", href: "/mantenimiento-web-panama" }
    ]
  },
  {
    title: "Webs por industria",
    description: "Páginas enfocadas en sectores donde el cliente necesita confianza, claridad y contacto directo.",
    icon: Building2,
    links: [
      { label: "Diseño web para abogados", href: "/diseno-web-para-abogados-panama" },
      { label: "Diseño web para clínicas", href: "/diseno-web-para-clinicas-panama" },
      { label: "Diseño web para inmobiliarias", href: "/diseno-web-para-inmobiliarias-panama" },
      { label: "Páginas corporativas", href: "/paginas-web-corporativas-panama" }
    ]
  },
  {
    title: "Software y automatización",
    description: "Soluciones para negocios que necesitan paneles, reservas, caja, logística, reportes o procesos internos.",
    icon: Workflow,
    links: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Software POS", href: "/software-pos-panama" },
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" },
      { label: "Automatizaciones", href: "/automatizaciones-para-empresas-panama" }
    ]
  }
];

export function SeoGrowthSection() {
  return (
    <SectionShell className="overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeading
          eyebrow="SEO y soluciones por necesidad"
          title="Más rutas para que Google y tus clientes entiendan qué hace LulabTech"
          description="Esta arquitectura conecta servicios principales, industrias y soluciones de software para reforzar búsquedas comerciales en Panamá sin cambiar el diseño principal de la web."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {clusters.map((cluster) => {
            const Icon = cluster.icon;

            return (
              <div key={cluster.title} className="rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink-900">{cluster.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{cluster.description}</p>

                <div className="mt-5 grid gap-2">
                  {cluster.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group inline-flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm font-semibold text-ink-700 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-[30px] border border-brand-100 bg-brand-50/70 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-3">
            <Sparkles className="mt-1 h-5 w-5 shrink-0 text-brand-700" />
            <p className="text-sm leading-7 text-ink-700">
              La Fase 2 refuerza páginas de intención comercial: desarrollo web, SEO, mantenimiento, industrias y software operativo. Así la web no depende solo del home para posicionar servicios específicos.
            </p>
          </div>
          <Link
            href="/cuanto-cuesta-una-pagina-web-en-panama"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
          >
            Ver precios desde
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </SectionShell>
  );
}
