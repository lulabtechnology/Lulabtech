"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "../ui/container";

const capabilities = [
  {
    number: "01",
    title: "Landing Pages",
    text: "Diseñadas para campañas, lanzamiento y captación con una estructura más clara, una dirección visual más fuerte y una experiencia más enfocada en conversión.",
    bullets: ["Mensaje claro", "CTA fuerte", "Diseño de impacto"]
  },
  {
    number: "02",
    title: "Webs Corporativas",
    text: "Para empresas y marcas que necesitan una presencia más seria, mejor organizada y alineada con una percepción de mayor nivel.",
    bullets: ["Jerarquía premium", "Narrativa visual", "Más confianza"]
  },
  {
    number: "03",
    title: "Tiendas Online",
    text: "Ecommerce con mejor presentación de producto, mejor orden visual y una experiencia más limpia para vender con más confianza.",
    bullets: ["Catálogo claro", "Mejor experiencia", "Base escalable"]
  },
  {
    number: "04",
    title: "Automatizaciones",
    text: "Soluciones para reducir fricción, ordenar mejor procesos y ayudar a que una operación funcione de forma más eficiente.",
    bullets: ["Menos tareas manuales", "Más eficiencia", "Más control"]
  }
];

export function HomeCapabilitiesPreview() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">capacidades principales</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Servicios presentados como valor real, no como una lista genérica.
            </h2>
          </div>

          <Link href="/servicios" className="link-inline">
            Ver todos los servicios <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid gap-5">
          {capabilities.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.06 }}
              className="surface group rounded-[32px] p-6 md:p-8"
            >
              <div className="grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-start">
                <div className="flex items-center justify-between md:block">
                  <span className="text-4xl font-semibold tracking-[-0.06em] text-[var(--text-soft)]">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-[15px] leading-8 text-[var(--text-main)] md:text-base">
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

                <div className="hidden md:flex">
                  <span className="rounded-full bg-[var(--bg-soft)] px-4 py-2 text-sm font-semibold text-[var(--text-main)] transition group-hover:bg-white">
                    LulabTech
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
