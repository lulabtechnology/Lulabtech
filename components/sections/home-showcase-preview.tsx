import Link from "next/link";
import { Container } from "../ui/container";

const projects = [
  {
    category: "Dermoestética premium",
    title: "Krása",
    description:
      "Una dirección visual más refinada, femenina y premium para una marca orientada a confianza y sofisticación."
  },
  {
    category: "Solución corporativa",
    title: "Quality Techno",
    description:
      "Presencia más clara y profesional para una propuesta tecnológica que necesita orden, estructura y seriedad."
  },
  {
    category: "Logística y portal",
    title: "Nova Shipping Services",
    description:
      "Experiencia más funcional y mejor presentada para una operación con procesos, paneles y contacto profesional."
  }
];

export function HomeShowcasePreview() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">trabajos seleccionados</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Showcase visual con más intención.
            </h2>
          </div>

          <Link href="/proyectos" className="link-inline">
            Ver proyectos <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.title} className="surface-strong rounded-[32px] p-4">
              <div className="mb-5 overflow-hidden rounded-[26px] border border-white/70 bg-[linear-gradient(135deg,rgba(22,115,255,0.14),rgba(18,184,167,0.12))] p-4">
                <div className="rounded-[22px] border border-white/70 bg-white/75 p-4 shadow-soft backdrop-blur">
                  <div className="mb-4 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-[rgba(255,99,71,0.6)]" />
                    <span className="h-3 w-3 rounded-full bg-[rgba(255,206,84,0.7)]" />
                    <span className="h-3 w-3 rounded-full bg-[rgba(18,184,167,0.7)]" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-4 w-2/5 rounded-full bg-white/95" />
                    <div className="h-20 rounded-[18px] bg-white/82" />
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 rounded-[16px] bg-white/75" />
                      <div className="h-16 rounded-[16px] bg-white/65" />
                    </div>
                  </div>
                </div>
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                {project.category}
              </span>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                {project.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                {project.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-[var(--brand-blue)]">
                Proyecto {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
