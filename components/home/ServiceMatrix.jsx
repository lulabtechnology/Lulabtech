import Link from "next/link";
import { services } from "@/data/services";

export default function ServiceMatrix() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Servicios principales</span>
          <h2 className="section-heading mt-4">
            Servicios diseñados para distintos objetivos, tipos de negocio y
            momentos de crecimiento
          </h2>
          <p className="section-copy mt-5">
            Cada solución responde a una necesidad distinta. La clave está en
            elegir la estructura correcta según lo que quieras lograr.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="panel p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                    {service.kicker}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                    {service.title}
                  </h3>
                </div>

                <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {service.badge}
                </span>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                {service.shortDescription}
              </p>

              <ul className="mt-5 space-y-3">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/servicios/${service.slug}`} className="btn-primary">
                  Ver servicio
                </Link>

                <Link href={service.whatsappHref} className="btn-secondary">
                  Cotizar este servicio
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
