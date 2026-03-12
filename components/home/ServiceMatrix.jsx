import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  LayoutTemplate,
  MonitorSmartphone,
  Store,
  Workflow,
} from "lucide-react";
import { services } from "@/data/services";

const iconMap = {
  "landing-pages": LayoutTemplate,
  "webs-corporativas": MonitorSmartphone,
  "tiendas-online": Store,
  automatizaciones: Workflow,
};

const accentMap = {
  "landing-pages":
    "from-[rgba(22,119,255,0.16)] via-[rgba(22,119,255,0.06)] to-transparent",
  "webs-corporativas":
    "from-[rgba(17,194,138,0.16)] via-[rgba(17,194,138,0.06)] to-transparent",
  "tiendas-online":
    "from-[rgba(103,80,255,0.16)] via-[rgba(103,80,255,0.06)] to-transparent",
  automatizaciones:
    "from-[rgba(9,17,31,0.18)] via-[rgba(22,119,255,0.07)] to-transparent",
};

export default function ServiceMatrix() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Servicios principales</span>
            <h2 className="section-heading mt-4">
              Soluciones diseñadas para que tu negocio se vea mejor, se entienda más rápido y convierta con más intención.
            </h2>
          </div>

          <div className="panel px-6 py-5 md:px-7">
            <p className="text-sm leading-7 text-slate-600 md:text-base">
              Cada servicio responde a un momento distinto del negocio: captar clientes, presentar mejor tu marca, vender productos con más orden o automatizar procesos que hoy te quitan tiempo.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? LayoutTemplate;
            const accent = accentMap[service.slug] ?? accentMap["landing-pages"];

            return (
              <article
                key={service.slug}
                className={`group relative overflow-hidden rounded-[32px] border border-white/50 bg-gradient-to-b ${accent} panel p-6 transition duration-300 hover:-translate-y-1 hover:shadow-panel md:p-7`}
              >
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-slate-400/40 to-transparent" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-slate-200/70 bg-white text-slate-950 shadow-sm transition duration-300 group-hover:scale-105 group-hover:shadow-md">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue">
                        {service.kicker}
                      </p>
                      <h3 className="mt-2 text-[1.65rem] font-semibold leading-tight text-slate-950 md:text-[1.85rem]">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 backdrop-blur">
                    {service.badge}
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  {service.shortDescription}
                </p>

                <div className="mt-6 grid gap-3">
                  {service.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/60 bg-white/72 px-4 py-4 text-sm leading-6 text-slate-700 backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href={`/servicios/${service.slug}`} className="btn-primary">
                    Ver servicio
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link href={service.whatsappHref} className="btn-secondary">
                    Cotizar este servicio
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="mt-7 flex items-center justify-between rounded-[24px] border border-slate-200/70 bg-white/70 px-4 py-4 text-sm text-slate-600">
                  <span>
                    Opción {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-medium text-slate-900">
                    Enfoque estratégico + visual premium
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
