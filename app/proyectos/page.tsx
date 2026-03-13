import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";
import { projectCategories } from "../../data/projects";

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="proyectos"
        title="Showcase preparado para que reemplaces todo con tus casos reales."
        description="Aquí ya no salen nombres reales. Todo queda organizado por tipo de proyecto y listo para que subas imágenes y reemplaces textos sin romper la estructura."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="space-y-10">
            {projectCategories.map((category) => (
              <section key={category.id} className="surface-strong rounded-[34px] p-5 md:p-7">
                <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                      {category.label}
                    </span>
                    <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                      {category.label}
                    </h2>
                    <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)] md:text-base">
                      {category.intro}
                    </p>
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-3">
                  {category.projects.map((project) => (
                    <article key={project.slug} className="surface rounded-[30px] p-5">
                      <div className="mb-5 overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(22,115,255,0.10),rgba(18,184,167,0.10))] p-4">
                        <div className="rounded-[20px] border border-dashed border-[var(--border-strong)] bg-white/78 px-4 py-10 text-center shadow-soft">
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">
                            Placeholder de imagen
                          </p>
                          <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                            {project.imageHint}
                          </p>
                          <p className="mt-3 break-all text-sm leading-7 text-[var(--text-main)]">
                            Ruta sugerida: {project.imageRecommendedPath}
                          </p>
                        </div>
                      </div>

                      <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                        {project.categoryLabel}
                      </span>

                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                        {project.description}
                      </p>

                      <div className="mt-5 inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-main)]">
                        {project.tag}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
