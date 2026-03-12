import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { projects } from "@/data/projects";

export default function FeaturedProjects() {
  const [featured, ...rest] = projects;

  return (
    <section className="section-space bg-slate-950 text-white">
      <div className="shell">
        <SectionIntro
          eyebrow="Proyectos seleccionados"
          title="Algunos proyectos que muestran cómo pensamos diseño, claridad y conversión."
          description="Cada proyecto responde a una necesidad distinta, pero todos parten de la misma idea: construir una presencia digital que se vea mejor, explique mejor y funcione mejor para vender."
        />

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
          <article className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-6">
            <div className="rounded-[28px] bg-gradient-to-br from-white/10 to-white/5 p-6">
              <div className="h-80 rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(33,150,243,0.18),transparent_25%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{featured.type}</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">{featured.title}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">{featured.summary}</p>
            <div className="mt-6"><Link href="/proyectos" className="btn-secondary border-white/15 bg-white/5 text-white hover:bg-white/10">Ver proyectos</Link></div>
          </article>

          <div className="grid gap-6">
            {rest.map((project) => (
              <article key={project.slug} className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                <div className="h-36 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(16,184,128,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]" />
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">{project.type}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
