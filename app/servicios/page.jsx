import Link from "next/link";
import { services } from "@/data/services";

export const metadata = {
  title: "Servicios | LulabTech",
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más seria y orientada a conversión.",
};

export default function ServiciosPage() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Servicios</span>
          <h1 className="section-heading mt-4">
            Soluciones digitales pensadas para distintos tipos de negocio,
            objetivos y momentos de crecimiento
          </h1>
          <p className="section-copy mt-5">
            La clave no está en hacer “una web por hacerla”. La clave está en
            elegir la estructura correcta según lo que quieras lograr.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="panel p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue">
                {service.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">
                {service.title}
              </h2>
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
                <Link href="/contacto" className="btn-secondary">
                  Solicitar propuesta
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
