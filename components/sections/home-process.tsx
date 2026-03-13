"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";

const steps = [
  {
    number: "01",
    title: "Diagnóstico y dirección",
    text: "Entendemos la marca, el contexto y lo que realmente debe comunicar la nueva presencia digital."
  },
  {
    number: "02",
    title: "Arquitectura y diseño",
    text: "Definimos estructura, narrativa, jerarquía visual y la dirección de arte correcta para el proyecto."
  },
  {
    number: "03",
    title: "Implementación",
    text: "Construimos una experiencia clara, premium y responsive con una base sólida para crecer."
  },
  {
    number: "04",
    title: "Refinamiento y lanzamiento",
    text: "Pulimos detalles, validamos experiencia y dejamos la salida lista para captar mejor."
  }
];

export function HomeProcess() {
  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 max-w-2xl">
          <span className="section-kicker">proceso</span>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
            Una ruta clara para construir algo con nivel.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.06 }}
              className="surface rounded-[30px] p-6"
            >
              <div className="text-4xl font-semibold tracking-[-0.06em] text-[var(--text-soft)]">
                {step.number}
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em]">
                {step.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                {step.text}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
