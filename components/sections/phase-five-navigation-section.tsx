import Link from "next/link";
import { ArrowUpRight, Compass, Layers3, MessageCircle, Route } from "lucide-react";
import { serviceHubClusters } from "@/data/service-hub";
import { WHATSAPP_URL } from "@/lib/constants";
import { ButtonLink } from "@/components/ui/button";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

const highlightedLinks = serviceHubClusters.map((cluster) => cluster.links[0]).filter(Boolean);

export function PhaseFiveNavigationSection() {
  return (
    <SectionShell className="bg-gradient-to-b from-white via-brand-50/25 to-white">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionHeading
          eyebrow="Mapa de servicios"
          title="Una ruta más clara para elegir entre web, ecommerce, software y SEO"
          description="La Fase 5 refuerza navegación e interlinking: el usuario puede entrar a un mapa de servicios, Google encuentra mejor cada página interna y las rutas principales quedan conectadas por intención de búsqueda."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {highlightedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-[30px] border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                  <Route className="h-5 w-5" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-ink-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-tight text-ink-900">{link.label}</h3>
              <p className="mt-3 text-sm leading-6 text-ink-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-[32px] border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-white">
              <Compass className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-ink-900">Ver todos los servicios por categoría</h3>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-ink-600">
                El nuevo hub reúne páginas web, landing pages, corporativas, ecommerce, software, POS, reservas, inventario, CRM, logística y páginas por industria.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/servicios-panama" variant="secondary">
              <Layers3 className="h-4 w-4" />
              Mapa de servicios
            </ButtonLink>
            <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline">
              <MessageCircle className="h-4 w-4" />
              Cotizar
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
