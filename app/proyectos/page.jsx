import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Proyectos Web y Casos | LulabTech",
  description:
    "Proyectos seleccionados para marcas y negocios que necesitaban una presencia digital más clara, más sólida y mejor pensada para convertir.",
};

export default function ProyectosPage() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">Proyectos</span>
          <h1 className="section-heading mt-4">
            Proyectos seleccionados para marcas y negocios que necesitaban una
            presencia digital más clara, más sólida y mejor pensada para convertir.
          </h1>
          <p className="section-copy mt-5 max-w-3xl">
            Cada proyecto responde a una necesidad distinta, pero todos parten de
            la misma idea: construir una experiencia digital que se vea mejor,
            explique mejor y funcione mejor para vender.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="panel p-6 md:p-7">
              <div className="rounded-[24px] border border-slate-200 bg-slate-950 p-5 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  {project.type}
                </p>
                <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm text-slate-300">{project.industry}</p>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600 md:text-base">
                {project.summary}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contacto" className="btn-primary">
                  Quiero algo similar
                </Link>
                <Link href="/servicios" className="btn-secondary">
                  Ver servicios
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-[36px] border border-slate-200 bg-slate-950 px-6 py-10 text-white shadow-soft md:px-10 md:py-14">
          <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
            Hablemos sobre la estructura que más le conviene a tu negocio y la
            mejor forma de convertirlo en una presencia digital más clara y más seria.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización
            </Link>
            <Link
              href="https://wa.me/50767069044?text=Hola%20LulabTech%2C%20vi%20sus%20proyectos%20y%20quiero%20cotizar%20algo%20similar."
              className="btn-secondary"
            >
              Hablar por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
