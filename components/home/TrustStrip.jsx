"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const chips = [
  "Diseño premium",
  "SEO-ready",
  "Mobile-first",
  "WhatsApp integrado",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 md:pt-16">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-eyebrow">
              Estudio digital para negocios que quieren verse mejor y vender con más claridad
            </span>

            <h1 className="hero-title mt-6 max-w-4xl">
              Diseñamos webs premium que hacen que tu negocio se vea al nivel
              de lo que ya ofrece.
            </h1>

            <p className="section-copy mt-6 max-w-2xl text-base md:text-lg">
              Creamos landing pages, webs corporativas, tiendas online y
              automatizaciones para marcas y negocios que necesitan una
              presencia digital más seria, clara y orientada a conversión.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
                <ArrowRight size={16} />
              </Link>

              <Link href="/servicios" className="btn-secondary">
                Ver servicios
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <CheckCircle2 size={16} className="text-brand-green" />
                  Propuesta personalizada
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Cotizamos según alcance real, objetivo comercial y estructura
                  que realmente necesita tu negocio.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white/80 p-4 shadow-soft">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                  <Sparkles size={16} className="text-brand-blue" />
                  Enfoque comercial
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  No solo buscamos que se vea bien. Buscamos que comunique
                  mejor y convierta con menos fricción.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -left-10 top-8 h-44 w-44 rounded-full bg-[rgba(16,120,255,0.12)] blur-3xl" />
            <div className="absolute -right-10 bottom-4 h-40 w-40 rounded-full bg-[rgba(16,184,128,0.12)] blur-3xl" />

            <div className="panel relative p-4 md:p-6">
              <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-5 text-white shadow-soft">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                      LulabTech Studio
                    </p>
                    <h2 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">
                      Presencia digital más seria. Más clara. Más lista para vender.
                    </h2>
                  </div>
                  <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 md:block">
                    Responsive
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Landing Pages
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Páginas enfocadas en captar leads o cotizaciones con una sola
                      propuesta clara y CTA directo.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Webs Corporativas
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Sitios para marcas y empresas que necesitan autoridad,
                      estructura y mejor percepción.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Tiendas Online
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Catálogos y ecommerce con mejor orden, mejor experiencia y
                      más claridad comercial.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                      Automatizaciones
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      Flujos útiles para ordenar atención, seguimiento y tareas
                      repetitivas.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    SEO-ready
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    WhatsApp integrado
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                    Diseño con intención comercial
                  </span>
                </div>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Conversión
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Estructuras claras para captar desde Meta Ads, Google y redes.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Método
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Propuesta, diseño, desarrollo y publicación con proceso ordenado.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                    Mobile-first
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Cuidada desde el inicio para el tráfico real que llega desde celular.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
