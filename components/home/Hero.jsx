"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  ShieldCheck,
  Sparkles,
  Store,
  Workflow,
} from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const chips = [
  "Diseño premium",
  "Conversión clara",
  "Mobile-first",
  "SEO-ready",
];

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Pages",
    copy: "Captación enfocada en campañas, cotizaciones y formularios de intención real.",
  },
  {
    icon: MonitorSmartphone,
    title: "Webs Corporativas",
    copy: "Sitios para marcas que necesitan autoridad, confianza y una presencia más seria.",
  },
  {
    icon: Store,
    title: "Tiendas Online",
    copy: "Experiencias de compra limpias, bien estructuradas y listas para vender mejor.",
  },
  {
    icon: Workflow,
    title: "Automatizaciones",
    copy: "Flujos digitales para ordenar atención, seguimiento y procesos repetitivos.",
  },
];

const proof = [
  "Estructura comercial más clara",
  "Experiencia premium en desktop y mobile",
  "Contacto directo por WhatsApp y cotización formal",
];

const metrics = [
  { label: "Percepción", value: "Premium" },
  { label: "Enfoque", value: "Conversión" },
  { label: "Experiencia", value: "Responsive" },
];

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, quiero una cotización formal para mi proyecto."
);

const heroTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-3 pb-10 pt-6 sm:px-4 md:pb-14 md:pt-8 lg:px-6 lg:pt-10">
      <div className="shell relative">
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb left-[-4rem] top-20 h-48 w-48 bg-[rgba(22,119,255,0.16)] md:h-72 md:w-72"
        />
        <motion.div
          animate={{ y: [0, 12, 0], x: [0, -6, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="hero-orb right-[-3rem] top-0 h-40 w-40 bg-[rgba(17,194,138,0.14)] md:h-64 md:w-64"
        />
        <div className="hero-orb bottom-[-3rem] left-[24%] h-44 w-44 bg-[rgba(255,255,255,0.22)] blur-[100px] md:h-72 md:w-72" />

        <div className="panel-dark relative overflow-hidden rounded-[34px] px-5 py-8 sm:px-7 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="grid-overlay" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTransition}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-200"
              >
                <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                Presencia digital elevada
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.08 }}
                className="mt-6 max-w-4xl text-4xl font-semibold leading-[0.96] text-white sm:text-5xl md:text-6xl xl:text-[4.6rem]"
                style={{ letterSpacing: "-0.06em" }}
              >
                Diseñamos experiencias web que hacen que tu marca se vea
                <span className="block text-transparent [background:linear-gradient(135deg,#ffffff_0%,#8fcbff_45%,#7af0cc_100%)] bg-clip-text">
                  más seria, más premium y más lista para vender.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.16 }}
                className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
              >
                En LulabTech creamos landing pages, webs corporativas, tiendas online y automatizaciones con un enfoque visual de alto nivel, estructura clara y una experiencia hecha para convertir mejor.
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

                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-dark">
                  <MessageCircle className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.32 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200"
                  >
                    {chip}
                  </span>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...heroTransition, delay: 0.4 }}
                className="mt-8 grid gap-3 sm:grid-cols-3"
              >
                {metrics.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      {item.label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white md:text-lg">
                      {item.value}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...heroTransition, delay: 0.18 }}
              className="relative"
            >
              <div className="pointer-events-none absolute inset-x-6 top-10 h-28 rounded-full bg-[rgba(22,119,255,0.18)] blur-3xl" />

              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_90px_rgba(2,8,23,0.34)] backdrop-blur-xl md:p-4">
                <div className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,31,0.9),rgba(5,10,20,0.96))] p-5 md:p-6">
                  <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        LulabTech Studio
                      </p>
                      <h2 className="mt-2 text-2xl font-semibold text-white md:text-[2rem]">
                        Soluciones digitales premium con intención comercial.
                      </h2>
                    </div>
                    <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 md:block">
                      Panamá + remoto
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {services.map((service, index) => {
                      const Icon = service.icon;
                      return (
                        <motion.div
                          key={service.title}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.32 + index * 0.08, duration: 0.5 }}
                          className="group rounded-[24px] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:bg-white/[0.06]"
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white">
                                {service.title}
                              </div>
                              <p className="mt-2 text-sm leading-6 text-slate-300">
                                {service.copy}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  <div className="mt-5 grid gap-3 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-4 md:p-5">
                      <div className="flex items-center gap-2 text-sm font-semibold text-white">
                        <ShieldCheck className="h-4 w-4 text-brand-green" />
                        Pensado para negocios que quieren verse al nivel de lo que ya ofrecen.
                      </div>
                      <div className="mt-4 space-y-3">
                        {proof.map((item) => (
                          <div key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-300">
                            <BadgeCheck className="mt-1 h-4 w-4 shrink-0 text-brand-blue" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-[24px] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-4 md:p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        Flujo de captación
                      </p>
                      <div className="mt-3 space-y-3">
                        <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-white">
                          Visita y entiende rápido tu propuesta
                        </div>
                        <div className="flex justify-center text-slate-500">
                          <ChevronRight className="h-4 w-4 rotate-90" />
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-white">
                          Encuentra el servicio correcto
                        </div>
                        <div className="flex justify-center text-slate-500">
                          <ChevronRight className="h-4 w-4 rotate-90" />
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-sm font-medium text-white">
                          Solicita cotización o escribe por WhatsApp
                        </div>
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
