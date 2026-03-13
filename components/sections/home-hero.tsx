"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "../ui/container";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

export function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-10 md:pb-16 md:pt-16">
      <div className="hero-orb hero-orb--blue left-[-120px] top-[120px] h-[300px] w-[300px]" />
      <div className="hero-orb hero-orb--teal right-[-80px] top-[60px] h-[280px] w-[280px]" />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14">
          <div className="relative z-10">
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="section-kicker"
            >
              diseño, criterio y conversión
            </motion.span>

            <motion.h1
              custom={0.1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-[12ch] text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[var(--text-strong)] sm:text-6xl lg:text-7xl"
            >
              Presencia digital con nivel premium de verdad.
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-xl text-lg leading-8 text-[var(--text-main)] md:text-xl"
            >
              LulabTech diseña landing pages, webs corporativas, ecommerce y
              automatizaciones para marcas que necesitan verse más serias,
              modernas y listas para convertir mejor.
            </motion.p>

            <motion.div
              custom={0.3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
              </Link>

              <a
                href="https://wa.me/50700000000"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Escribir por WhatsApp
              </a>
            </motion.div>

            <motion.div
              custom={0.4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--text-soft)]"
            >
              <span className="surface rounded-full px-4 py-2">Landing Pages</span>
              <span className="surface rounded-full px-4 py-2">Webs Corporativas</span>
              <span className="surface rounded-full px-4 py-2">Tiendas Online</span>
              <span className="surface rounded-full px-4 py-2">Automatizaciones</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.95,
                delay: 0.18,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            className="relative"
          >
            <div className="surface-strong soft-grid relative overflow-hidden rounded-[36px] p-4 md:p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-[#dff8f3]/35" />

              <div className="relative rounded-[28px] border border-white/70 bg-white/70 p-4 shadow-soft backdrop-blur md:p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-strong)]">
                      Dirección visual premium
                    </p>
                    <p className="text-sm text-[var(--text-soft)]">
                      claridad, elegancia y jerarquía real
                    </p>
                  </div>
                  <span className="rounded-full bg-[var(--brand-blue-soft)] px-3 py-1 text-xs font-semibold text-[var(--brand-blue)]">
                    LulabTech
                  </span>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(135deg,rgba(22,115,255,0.1),rgba(18,184,167,0.08))] p-5">
                    <div className="mb-8 flex items-center justify-between">
                      <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[var(--text-main)]">
                        interfaz
                      </span>
                      <span className="text-xs font-medium text-[var(--text-soft)]">
                        premium / responsive
                      </span>
                    </div>

                    <div className="grid gap-3">
                      <div className="h-4 w-3/5 rounded-full bg-white/90" />
                      <div className="h-4 w-4/5 rounded-full bg-white/75" />
                      <div className="grid grid-cols-3 gap-3 pt-2">
                        <div className="h-24 rounded-2xl bg-white/80" />
                        <div className="h-24 rounded-2xl bg-white/65" />
                        <div className="h-24 rounded-2xl bg-white/85" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-[.92fr_1.08fr]">
                    <div className="rounded-[24px] border border-[var(--border-soft)] bg-white/82 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                        enfoque
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em]">
                        Diseño que eleva percepción de marca.
                      </h3>
                    </div>

                    <div className="rounded-[24px] border border-[var(--border-soft)] bg-white/82 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                        conversión
                      </p>
                      <div className="mt-3 flex items-end justify-between">
                        <div>
                          <h3 className="text-xl font-semibold tracking-[-0.04em]">
                            Más claridad.
                          </h3>
                          <p className="mt-1 text-sm text-[var(--text-soft)]">
                            Mejor estructura para captar leads de calidad.
                          </p>
                        </div>
                        <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-teal)] opacity-90" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
