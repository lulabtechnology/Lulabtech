import Link from "next/link";
import { Container } from "../ui/container";

const capabilities = [
  {
    title: "Landing Pages",
    text: "Páginas enfocadas en campañas, lanzamiento, captación y conversión con una experiencia más cuidada.",
    bullets: ["Mensaje claro", "CTA fuerte", "Diseño de alto impacto"]
  },
  {
    title: "Webs Corporativas",
    text: "Presencia digital más seria para empresas que necesitan transmitir confianza, estructura y nivel.",
    bullets: ["Jerarquía limpia", "Narrativa visual", "Percepción premium"]
  },
  {
    title: "Tiendas Online",
    text: "Ecommerce con mejor orden, mejor presentación de producto y mejor experiencia de compra.",
    bullets: ["Catálogo claro", "Checkout limpio", "Base escalable"]
  },
  {
    title: "Automatizaciones",
    text: "Procesos y flujos que reducen fricción, organizan mejor la operación y ahorran tiempo.",
    bullets: ["Menos tareas manuales", "Más orden", "Más eficiencia"]
  }
];

export function HomeCapabilitiesPreview() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">capacidades</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Servicios pensados como sistemas de valor.
            </h2>
          </div>

          <Link href="/servicios" className="link-inline">
            Ver todos los servicios <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((item) => (
            <div key={item.title} className="surface rounded-[30px] p-6 md:p-7">
              <div className="mb-4 inline-flex rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                LulabTech
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-3 max-w-xl text-[15px] leading-7 text-[var(--text-main)]">
                {item.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.bullets.map((bullet) => (
                  <span
                    key={bullet}
                    className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-2 text-sm text-[var(--text-main)]"
                  >
                    {bullet}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
