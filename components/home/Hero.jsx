"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const services = [
  { icon: LayoutTemplate, title: "Landing Pages" },
  { icon: MonitorSmartphone, title: "Webs Corporativas" },
  { icon: Store, title: "Tiendas Online" },
  { icon: Workflow, title: "Automatizaciones" },
];

const heroTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, quiero una cotización para mi proyecto."
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pb-8 pt-6 sm:px-4 md:pb-14 md:pt-8 lg:px-6 lg:pt-10">
      <div className="shell relative">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb left-[-4rem] top-10 h-48 w-48 bg-[rgba(38,120,242,0.18)] md:h-72 md:w-72"
        />
        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -7, 0] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb right-[-3rem] top-0 h-44 w-44 bg-[rgba(32,183,132,0.12)] md:h-64 md:w-64"
        />

        <div className="panel-dark relative overflow-hidden rounded-[36px] px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid-overlay" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                LulabTech Studio
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.08 }}
                className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.94] text-white sm:text-5xl md:text-6xl xl:text-[4.75rem]"
                style={{ letterSpacing: "-0.07em" }}
              >
                Webs que hacen que una marca se vea
                <span className="block brand-gradient-text">
                  mucho más cara, clara y seria.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.16 }}
                className="mt-5 max-w-xl text-base leading-8 text-soft md:text-lg"
              >
                Diseñamos experiencias digitales premium con una dirección visual más fuerte, mejor presentación y una ruta de contacto pensada para convertir.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.24 }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.32 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <span className="chip">Diseño premium</span>
                <span className="chip">Más impacto visual</span>
                <span className="chip">Más intención comercial</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.18 }}
              className="relative"
            >
              <div className="pointer-events-none absolute left-[8%] top-[8%] h-24 w-24 rounded-full bg-[rgba(38,120,242,0.22)] blur-3xl md:h-40 md:w-40" />
              <div className="pointer-events-none absolute bottom-[4%] right-[8%] h-24 w-24 rounded-full bg-[rgba(32,183,132,0.16)] blur-3xl md:h-36 md:w-36" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl md:p-4">
                <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,#0c1830_0%,#0a1322_100%)]">
                  <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-6">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        Showcase visual
                      </p>
                      <p className="mt-2 text-xl font-semibold text-white md:text-2xl">
                        Una presencia digital que sí impone más nivel.
                      </p>
                    </div>

                    <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 md:block">
                      Premium
                    </div>
                  </div>

                  <div className="grid gap-3 p-4 md:grid-cols-2 md:p-6">
                    <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Servicios
                      </p>

                      <div className="mt-4 grid gap-3">
                        {services.map((item) => {
                          const Icon = item.icon;

                          return (
                            <div
                              key={item.title}
                              className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.04] px-4 py-3"
                            >
                              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span className="text-sm font-medium text-slate-100">
                                {item.title}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(38,120,242,0.24),rgba(255,255,255,0.03))] p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                          Percepción
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                          Más categoría visual
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,rgba(32,183,132,0.18),rgba(255,255,255,0.03))] p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                          Conversión
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                          Mejor ruta de contacto
                        </p>
                      </div>

                      <div className="rounded-[24px] border border-white/10 bg-black/10 p-5">
                        <Link
                          href="/proyectos"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white"
                        >
                          Ver proyectos
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
