import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { services } from "@/data/services";
import { buildWhatsappLink } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section className="shell section-space">
      <SectionIntro
        eyebrow="Servicios"
        title="Servicios diseñados para distintos objetivos, tipos de negocio y momentos de crecimiento"
        description="Cada solución responde a una necesidad distinta. La clave está en elegir la estructura correcta según lo que quieras lograr."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.slug} className="panel p-7">
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="chip">{service.eyebrow}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              <p className="mt-4 text-sm leading-7 text-slate-500">{service.idealFor}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-brand-green" /> <span>{bullet}</span></li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={`/servicios/${service.slug}`} className="btn-primary">Ver servicio</Link>
                <a href={buildWhatsappLink(service.whatsappMessage)} className="btn-secondary" target="_blank" rel="noreferrer">Cotizar</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
