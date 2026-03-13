"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Container } from "../ui/container";
import { projectCategories } from "../../data/projects";

const AUTO_PLAY_MS = 4500;

export function HomeShowcasePreview() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const activeCategory = projectCategories[activeCategoryIndex];
  const activeProjects = activeCategory.projects;
  const currentProject = activeProjects[activeProjectIndex];

  const totalProjects = activeProjects.length;

  const nextProject = () => {
    setActiveProjectIndex((prev) => (prev + 1) % totalProjects);
  };

  const previousProject = () => {
    setActiveProjectIndex((prev) => (prev === 0 ? totalProjects - 1 : prev - 1));
  };

  useEffect(() => {
    setActiveProjectIndex(0);
  }, [activeCategoryIndex]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveProjectIndex((prev) => (prev + 1) % totalProjects);
    }, AUTO_PLAY_MS);

    return () => clearInterval(interval);
  }, [isPaused, totalProjects, activeCategoryIndex]);

  const progressLabel = useMemo(() => {
    return `${String(activeProjectIndex + 1).padStart(2, "0")} / ${String(
      totalProjects
    ).padStart(2, "0")}`;
  }, [activeProjectIndex, totalProjects]);

  return (
    <section className="section-padding pt-0">
      <Container>
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="section-kicker">proyectos</span>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">
              Showcase por tipo de proyecto, con autoplay y placeholders listos para reemplazar.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-8 text-[var(--text-main)] md:text-base">
              Aquí ya no salen nombres reales. Todo queda listo como placeholder para
              que luego subas tus imágenes y reemplaces textos sin tocar la estructura.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previousProject}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-lg text-[var(--text-strong)] transition hover:-translate-y-[1px]"
              aria-label="Proyecto anterior"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextProject}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-soft)] bg-white text-lg text-[var(--text-strong)] transition hover:-translate-y-[1px]"
              aria-label="Proyecto siguiente"
            >
              →
            </button>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-3">
          {projectCategories.map((category, index) => {
            const isActive = index === activeCategoryIndex;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryIndex(index)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[var(--text-strong)] text-white shadow-soft"
                    : "border border-[var(--border-soft)] bg-white text-[var(--text-main)] hover:-translate-y-[1px]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div
          className="grid gap-5 lg:grid-cols-[1.18fr_.82fr]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="surface-strong relative overflow-hidden rounded-[36px] p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory.id}-${currentProject.slug}`}
                initial={{ opacity: 0, y: 16, scale: 0.985 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.985 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className="overflow-hidden rounded-[28px] border border-white/70 bg-[linear-gradient(135deg,rgba(22,115,255,0.16),rgba(18,184,167,0.14))] p-4 md:p-5">
                  <div className="rounded-[24px] border border-white/70 bg-white/78 p-4 shadow-soft backdrop-blur md:p-5">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[rgba(255,99,71,0.6)]" />
                        <span className="h-3 w-3 rounded-full bg-[rgba(255,206,84,0.7)]" />
                        <span className="h-3 w-3 rounded-full bg-[rgba(18,184,167,0.7)]" />
                      </div>

                      <span className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                        {progressLabel}
                      </span>
                    </div>

                    <div className="grid gap-4">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                          {activeCategory.label}
                        </span>
                        <span className="rounded-full border border-[var(--border-soft)] bg-white px-3 py-1 text-xs font-semibold text-[var(--text-main)]">
                          autoplay {isPaused ? "pausado" : "activo"}
                        </span>
                      </div>

                      <div className="relative overflow-hidden rounded-[24px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(240,248,250,0.86))] p-5 md:p-6">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,115,255,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(18,184,167,0.12),transparent_35%)]" />

                        <div className="relative z-10 flex min-h-[260px] flex-col justify-between md:min-h-[360px]">
                          <div>
                            <div className="mb-3 h-4 w-1/3 rounded-full bg-white/90" />
                            <div className="mb-2 h-4 w-2/3 rounded-full bg-white/75" />
                          </div>

                          <div className="grid gap-3">
                            <div className="rounded-[20px] border border-dashed border-[var(--border-strong)] bg-white/70 px-5 py-12 text-center shadow-soft">
                              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--text-soft)]">
                                Placeholder de imagen
                              </p>
                              <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-[var(--text-strong)]">
                                {currentProject.imageHint}
                              </p>
                              <p className="mt-3 break-all text-sm leading-7 text-[var(--text-main)]">
                                Ruta sugerida: {currentProject.imageRecommendedPath}
                              </p>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                              <div className="h-20 rounded-[18px] border border-dashed border-[var(--border-soft)] bg-white/65" />
                              <div className="h-20 rounded-[18px] border border-dashed border-[var(--border-soft)] bg-white/55" />
                              <div className="h-20 rounded-[18px] border border-dashed border-[var(--border-soft)] bg-white/72" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {activeProjects.map((project, index) => (
                          <button
                            key={project.slug}
                            type="button"
                            onClick={() => setActiveProjectIndex(index)}
                            className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                              index === activeProjectIndex
                                ? "bg-[var(--text-strong)] text-white"
                                : "border border-[var(--border-soft)] bg-white text-[var(--text-main)]"
                            }`}
                          >
                            {project.title}
                          </button>
                        ))}
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
                key={`${activeCategory.id}-${currentProject.slug}-content`}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="rounded-full bg-[var(--bg-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                  {currentProject.categoryLabel}
                </span>

                <h3 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                  {currentProject.title}
                </h3>

                <p className="mt-4 text-[15px] leading-8 text-[var(--text-main)] md:text-base">
                  {currentProject.description}
                </p>

                <div className="mt-6 inline-flex rounded-full border border-[var(--border-soft)] bg-white px-4 py-2 text-sm font-medium text-[var(--text-main)]">
                  {currentProject.tag}
                </div>

                <div className="mt-8 rounded-[24px] border border-[var(--border-soft)] bg-white/72 p-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                    Categoría activa
                  </p>
                  <h4 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--text-strong)]">
                    {activeCategory.label}
                  </h4>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                    {activeCategory.intro}
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-3">
                  {activeProjects.map((project, index) => (
                    <button
                      key={project.slug}
                      type="button"
                      onClick={() => setActiveProjectIndex(index)}
                      className={`h-2.5 rounded-full transition-all ${
                        index === activeProjectIndex
                          ? "w-10 bg-[var(--brand-blue)]"
                          : "w-2.5 bg-[var(--border-strong)]"
                      }`}
                      aria-label={`Ver ${project.title}`}
                    />
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/proyectos" className="link-inline">
                    Ver todos los proyectos <span aria-hidden="true">→</span>
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
