"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Container } from "../ui/container";

const projects = [
  {
    category: "Dermoestética premium",
    title: "Krása",
    description:
      "Dirección visual más refinada, estética premium y una experiencia que transmite confianza, sofisticación y especialización.",
    tag: "branding + web"
  },
  {
    category: "Solución tecnológica",
    title: "Quality Techno",
    description:
      "Una presencia más clara y corporativa para una propuesta tecnológica que necesita orden, estructura y una percepción profesional sólida.",
    tag: "web corporativa"
  },
  {
    category: "Logística y portal",
    title: "Nova Shipping Services",
    description:
      "Base visual más seria y mejor organizada para una operación con procesos, paneles y una experiencia más alineada con profesionalismo.",
    tag: "portal + sistema"
  }
];

export function HomeShowcasePreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = projects[activeIndex];

  const previous = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-kicker">trabajos seleccionados</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Un showcase más visual, más elegante y mejor presentado.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-lg text-[var(--text-strong)] transition hover:-translate-y-[1px]"
              aria-label="Proyecto anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={next}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-lg text-[var(--text-strong)] transition hover:-translate-y-[1px]"
              aria-label="Proyecto siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
          <div className="surface-strong relative overflow-hidden rounded-[36px] p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.title}
                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.985 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(22,115,255,0.14),rgba(18,184,167,0.12))] p-4 md:p-5">
                  <div className="rounded-[24px] border border-white/70 bg-white/78 p-4 shadow-soft backdrop-blur md:p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[rgba(255,99,71,0.6)]" />
                      <span className="h-3 w-3 rounded-full bg-[rgba(255,206,84,0.7)]" />
                      <span className="h-3 w-3 rounded-full bg-[rgba(18,184,167,0.7)]" />
                    </div>

                    <div className="grid gap-4">
                      <div className="h-5 w-2/5 rounded-full bg-white/95" />
                      <div className="h-[240px] rounded-[24px] bg-white/84 md:h-[320px]" />
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-[18px] bg-white/76" />
                        <div className="h-24 rounded-[18px] bg-white/66" />
                        <div className="h-24 rounded-[18px] bg-white/84" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="surface rounded-[36px] p-6 md:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${current.title}-content`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {current.category}
                </span>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                  {current.title}
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-[var(--text-main)] md:text-base">
                  {current.description}
                </p>

                <div className="mt-6 inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-main)]">
                  {current.tag}
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {projects.map((project, index) => (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? "w-10 bg-[var(--brand-blue)]"
                          : "w-2.5 bg-[var(--border-strong)]"
                      }`}
                      aria-label={`Ver ${project.title}`}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/proyectos" className="link-inline">
                    Ver proyectos <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
