import Link from "next/link";
import {
  ArrowRight,
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

export default function ServiceMatrix() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">Servicios</span>
          <h2 className="section-heading mt-4">
            Soluciones diseñadas para vender mejor, comunicar mejor y verse mucho más pro.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-2">
          {services.map((service, index) => {
            const Icon = iconMap[service.slug] ?? LayoutTemplate;

            return (
              <article
                key={service.slug}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-panel md:p-7"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(38,120,242,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(32,183,132,0.08),transparent_18%)] opacity-80" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] border border-white/10 bg-white/10 text-white transition duration-300 group-hover:scale-105">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                          {service.kicker}
                        </p>
                        <h3 className="mt-2 text-[1.7rem] font-semibold leading-tight text-white md:text-[1.95rem]">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                    {service.shortDescription}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {service.highlights.slice(0, 3).map((item) => (
                      <div
                        key={item}
                        className="rounded-[22px] border border-white/10 bg-black/10 px-4 py-4 text-sm leading-6 text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <div className="mt-7">
                    <Link href={`/servicios/${service.slug}`} className="btn-primary">
                      Ver servicio
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
