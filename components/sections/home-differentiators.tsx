"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";

const items = [
  {
    title: "Más criterio visual",
    text: "La dirección de arte importa. Una web con mejor criterio se percibe más seria, más valiosa y más confiable."
  },
  {
    title: "Más claridad comercial",
    text: "No se trata de llenar secciones. Se trata de ordenar el mensaje para que el visitante entienda rápido el valor."
  },
  {
    title: "Más percepción premium",
    text: "Cada detalle visual debe ayudar a que la marca se sienta mejor posicionada y menos genérica."
  },
  {
    title: "Más intención de conversión",
    text: "La experiencia debe guiar hacia el contacto, la cotización y una mejor calidad de lead."
  }
];

export function HomeDifferentiators() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="surface-strong overflow-hidden rounded-[36px] px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-14">
            <div>
              <span className="section-kicker">por qué LulabTech</span>
              <h2 className="mt-5 max-w-[12ch] text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
                No solo construimos páginas. Construimos mejor percepción de marca.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--text-main)]">
                Una presencia digital bien pensada no solo se ve mejor. También ordena
                mejor el mensaje, transmite más autoridad y ayuda a convertir con más claridad.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.65, delay: index * 0.06 }}
                  className="rounded-[28px] border border-white/70 bg-white/78 p-5 shadow-soft"
                >
                  <div className="mb-4 h-11 w-11 rounded-2xl bg-gradient-to-br from-[var(--brand-blue-soft)] to-[var(--brand-teal-soft)]" />
                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
