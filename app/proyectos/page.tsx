import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";
import { projects } from "../../data/projects";

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="proyectos"
        title="Proyectos de LulabTech"
        description="Los mismos proyectos deben estar visibles aquí y también reforzados en el inicio."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.slug} className="surface-strong rounded-[32px] p-5">
                <div className="mb-5 overflow-hidden rounded-[26px] border border-white/70 bg-[linear-gradient(135deg,rgba(22,115,255,0.14),rgba(18,184,167,0.12))] p-4">
                  <div className="rounded-[22px] border border-white/70 bg-white/75 p-4 shadow-soft">
                    <div className="mb-4 h-4 w-2/5 rounded-full bg-white/90" />
                    <div className="h-28 rounded-[18px] bg-white/82" />
                    <div className="mt-3 grid grid-cols-2 gap-3">
                      <div className="h-16 rounded-[16px] bg-white/75" />
                      <div className="h-16 rounded-[16px] bg-white/65" />
                    </div>
                  </div>
                </div>

                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {project.category}
                </span>

                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                  {project.title}
                </h2>

                <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                  {project.description}
                </p>

                <div className="mt-5 inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-main)]">
                  {project.tag}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
