"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function FeaturedProjects({ projects = [] }) {
  const safeProjects = useMemo(() => projects.filter(Boolean), [projects]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!safeProjects.length) return null;

  const active = safeProjects[activeIndex];

  const prev = () =>
    setActiveIndex((current) =>
      current === 0 ? safeProjects.length - 1 : current - 1
    );

  const next = () =>
    setActiveIndex((current) =>
      current === safeProjects.length - 1 ? 0 : current + 1
    );

  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Proyectos destacados</span>
            <h2 className="section-heading mt-4">
              Un showcase pensado para que la calidad visual y la intención estratégica se sientan desde el primer vistazo.
            </h2>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
              Esta sección queda preparada para que luego puedas cambiar imágenes, títulos, categorías y enlaces sin romper el diseño. Por ahora dejamos tres estructuras base con una presentación mucho más premium.
            </p>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Proyecto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={next}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 bg-white/90 text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                aria-label="Proyecto siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="panel-dark relative overflow-hidden p-3 md:p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(22,119,255,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(17,194,138,0.10),transparent_22%)]" />

            <AnimatePresence mode="wait">
              <motion.article
                key={active.slug}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/10">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={active.image}
                      alt={active.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1280px) 100vw, 65vw"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[rgba(2,8,23,0.86)] via-[rgba(2,8,23,0.34)] to-[rgba(2,8,23,0.06)]" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-100 backdrop-blur">
                      <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                      {active.category}
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
                      <div>
                        <h3 className="text-3xl font-semibold text-white md:text-[2.2rem]">
                          {active.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-300">
                          {active.type} · {active.industry}
                        </p>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                          {active.summary}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                        <Link href="/contacto" className="btn-primary">
                          Quiero algo similar
                          <ArrowRight className="h-4 w-4" />
                        </Link>

                        {active.href ? (
                          <Link href={active.href} className="btn-dark">
                            Ver proyecto
                            <ExternalLink className="h-4 w-4" />
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="grid gap-4">
            {safeProjects.map((project, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={project.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`text-left transition duration-300 ${
                    isActive ? "scale-[1.01]" : ""
                  }`}
                >
                  <div
                    className={`panel relative overflow-hidden p-4 md:p-5 ${
                      isActive
                        ? "border-slate-200/90 shadow-panel"
                        : "hover:-translate-y-0.5 hover:shadow-soft"
                    }`}
                  >
                    <div
                      className={`absolute inset-y-0 left-0 w-1 rounded-full transition ${
                        isActive
                          ? "bg-gradient-to-b from-brand-blue to-brand-green opacity-100"
                          : "bg-slate-200 opacity-40"
                      }`}
                    />

                    <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border border-slate-200/70 bg-slate-100">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 220px"
                        />
                      </div>

                      <div className="sm:pl-2">
                        <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-blue">
                          {project.category}
                        </div>
                        <h3 className="mt-2 text-xl font-semibold text-slate-950">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          {project.type} · {project.industry}
                        </p>
                        <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-600">
                          {project.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
