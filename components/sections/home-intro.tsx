"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/container";

const cards = [
  {
    title: "Más criterio visual",
    text: "No solo se trata de verse bien. Se trata de verse mejor posicionado, más serio y más memorable."
  },
  {
    title: "Más claridad comercial",
    text: "La estructura debe ayudar a que el visitante entienda rápido el valor y avance hacia el contacto."
  },
  {
    title: "Más percepción de marca",
    text: "La experiencia completa tiene que elevar cómo se percibe tu negocio desde el primer scroll."
  }
];

export function HomeIntro() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div>
            <span className="section-kicker">posicionamiento digital</span>
            <h2 className="mt-5 max-w-[11ch] text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-5xl">
              Tu web no solo debe existir. Debe elevar tu marca.
            </h2>
          </div>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--text-main)]">
              En LulabTech no buscamos llenar una página con bloques. Buscamos
              construir una presencia digital más clara, más elegante y mejor pensada
              para que una marca se vea a la altura de lo que realmente vale.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="surface rounded-[28px] p-6"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[var(--brand-blue-soft)] to-[var(--brand-teal-soft)]" />
              <h3 className="text-xl font-semibold tracking-[-0.04em]">
                {card.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
