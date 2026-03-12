import Link from "next/link";

export default function FeaturedProjects({ projects = [] }) {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Proyectos destacados</span>
          <h2 className="section-heading mt-4">
            Proyectos seleccionados para marcas y negocios que necesitaban una
            presencia digital más clara, más sólida y mejor pensada para convertir.
          </h2>
          <p className="section-copy mt-5">
            Cada proyecto responde a una necesidad distinta, pero todos parten
            de la misma idea: construir una presencia digital que se vea mejor,
            explique mejor y funcione mejor para vender.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          {projects[0] && (
            <article className="rounded-[34px] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft md:p-8">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                  {projects[0].type}
                </p>
                <h3 className="mt-3 text-3xl font-semibold">{projects[0].title}</h3>
                <p className="mt-2 text-sm text-slate-300">{projects[0].industry}</p>
                <p className="mt-5 text-sm leading-7 text-slate-200 md:text-base">
                  {projects[0].summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contacto" className="btn-primary">
                    Quiero algo similar
                  </Link>
                  <Link href="/proyectos" className="btn-secondary">
                    Ver proyectos
                  </Link>
                </div>
              </div>
            </article>
          )}

          <div className="grid gap-5">
            {projects.slice(1).map((project) => (
              <article key={project.slug} className="panel p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue">
                  {project.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500">{project.industry}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {project.summary}
                </p>
                <div className="mt-6">
                  <Link href="/contacto" className="btn-secondary">
                    Quiero algo similar
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
