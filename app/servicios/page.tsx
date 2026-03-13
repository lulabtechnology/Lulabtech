import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";

const services = [
  {
    title: "Landing Pages",
    text: "Diseñadas para campañas, captación, validación de oferta y acciones concretas."
  },
  {
    title: "Webs Corporativas",
    text: "Para marcas que necesitan proyectar estructura, claridad y una percepción más profesional."
  },
  {
    title: "Tiendas Online",
    text: "Con mejor orden, mejor experiencia y una presentación de producto más seria."
  },
  {
    title: "Automatizaciones",
    text: "Flujos y soluciones que reducen fricción, ahorran tiempo y organizan mejor procesos."
  }
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="servicios"
        title="Capacidades digitales con enfoque más estratégico."
        description="No se trata de listar entregables. Se trata de construir presencia, claridad y estructuras que ayuden a una marca a verse y funcionar mejor."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="surface rounded-[30px] p-6 md:p-7">
                <div className="mb-4 inline-flex rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  servicio
                </div>
                <h2 className="text-2xl font-semibold tracking-[-0.04em]">
                  {service.title}
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                  {service.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
