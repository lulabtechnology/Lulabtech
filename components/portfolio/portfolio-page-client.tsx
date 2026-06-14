"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  featuredPortfolioProjects,
  portfolioCategories,
  portfolioProjects,
  portfolioTrustStats,
  type PortfolioCategoryId,
  type PortfolioProject
} from "@/data/portfolio";
import styles from "./portfolio-page-client.module.css";

type FilterId = "all" | PortfolioCategoryId;

function getProjectDomain(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getScrollAmount(track: HTMLDivElement | null) {
  if (!track) return 360;
  const firstCard = track.firstElementChild as HTMLElement | null;
  if (!firstCard) return 360;
  const gap = 22;
  return firstCard.offsetWidth + gap;
}

function ProjectCard({ project }: { project: PortfolioProject }) {
  const actionLabel = project.ctaLabel ?? "Ver proyecto";
  const domain = getProjectDomain(project.url);

  return (
    <article className={styles.card}>
      <div className={styles.screenshotWrap}>
        <div className={styles.cardTopRow}>
          {project.logoSrc ? (
            <div className={styles.logoBadge}>
              <Image
                src={project.logoSrc}
                alt={`Logo de ${project.name}`}
                fill
                sizes="84px"
                className={styles.logoImage}
              />
            </div>
          ) : (
            <div className={styles.logoFallback}>{project.name}</div>
          )}

          <span className={styles.typeChip}>{project.typeLabel}</span>
        </div>

        {project.screenshotSrc ? (
          <>
            <Image
              src={project.screenshotSrc}
              alt={`Vista previa del proyecto ${project.name}`}
              fill
              sizes="(max-width: 768px) calc(100vw - 32px), 380px"
              className={styles.screenshotImage}
              priority={false}
            />
            <div className={styles.screenshotOverlay} />
          </>
        ) : (
          <div className={styles.emptyPreview}>
            <span className={styles.emptyPreviewLabel}>{project.name}</span>
          </div>
        )}
      </div>

      <div className={styles.cardBody}>
        <div>
          <h3 className={styles.projectName}>{project.name}</h3>
          <div className={styles.projectIndustry}>{project.industry}</div>
        </div>

        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.servicePills}>
          {project.services.map((service) => (
            <span key={`${project.slug}-${service}`} className={styles.servicePill}>
              {service}
            </span>
          ))}
        </div>

        <div className={styles.cardLinks}>
          <Link href={project.url} target="_blank" rel="noreferrer" className={styles.linkButton}>
            {actionLabel} ↗
          </Link>
          <Link href={`https://wa.me/50767069044?text=Hola,%20quiero%20una%20web%20tipo%20${encodeURIComponent(project.name)}`} target="_blank" rel="noreferrer" className={styles.ghostLinkButton}>
            Cotizar similar
          </Link>
        </div>

        <div className={styles.countLabel}>{domain}</div>
      </div>
    </article>
  );
}

function CarouselSection({
  title,
  description,
  projects,
  trackKey,
  eyebrow,
  showCount = true
}: {
  title: string;
  description: string;
  projects: PortfolioProject[];
  trackKey: string;
  eyebrow: string;
  showCount?: boolean;
}) {
  const trackRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleScroll = (direction: -1 | 1) => {
    const track = trackRefs.current[trackKey];
    if (!track) return;

    track.scrollBy({
      left: getScrollAmount(track) * direction,
      behavior: "smooth"
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitleGroup}>
            <span className={styles.sectionEyebrow}>{eyebrow}</span>
            <h2 className={styles.sectionTitle}>{title}</h2>
            <p className={styles.sectionDescription}>{description}</p>
            {showCount ? <div className={styles.countLabel}>{projects.length} proyectos mostrados</div> : null}
          </div>

          <div className={styles.carouselNav}>
            <button type="button" className={styles.navButton} onClick={() => handleScroll(-1)} aria-label={`Mover ${title} hacia la izquierda`}>
              ←
            </button>
            <button type="button" className={styles.navButton} onClick={() => handleScroll(1)} aria-label={`Mover ${title} hacia la derecha`}>
              →
            </button>
          </div>
        </div>

        <div className={styles.carouselShell}>
          <div className={styles.carouselMask}>
            <div
              ref={(node) => {
                trackRefs.current[trackKey] = node;
              }}
              className={styles.track}
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioPageClient() {
  const [activeFilter, setActiveFilter] = useState<FilterId>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return portfolioProjects;
    return portfolioProjects.filter((project) => project.type === activeFilter);
  }, [activeFilter]);

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <span className={styles.heroEyebrow}>Portafolio LulabTech</span>
          <h1 className={styles.heroTitle}>
            Portafolio con cards tipo <span className={styles.accent}>carrusel premium</span>, manteniendo logos, links y screenshots.
          </h1>
          <p className={styles.heroDescription}>
            Reorganicé la sección para que se vea más vendible: cards altas tipo showcase, screenshot grande del proyecto,
            logo visible, enlaces claros y navegación en carrusel. Se mantiene el orden actual de tus proyectos y la estética se ajusta a los colores de LulabTech.
          </p>

          <div className={styles.heroButtons}>
            <Link href="https://wa.me/50767069044?text=Hola,%20quiero%20cotizar%20una%20web" target="_blank" rel="noreferrer" className={styles.primaryButton}>
              Cotizar por WhatsApp
            </Link>
            <Link href="#portafolio-completo" className={styles.secondaryButton}>
              Ver portafolio completo
            </Link>
          </div>

          <div className={styles.heroStats}>
            {portfolioTrustStats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                <span className={styles.statDescription}>{stat.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CarouselSection
        eyebrow="Proyectos destacados"
        title="Cards altas estilo showcase para las referencias más fuertes"
        description="Esta primera fila queda en formato carrusel premium, con el screenshot como protagonista y la información comercial en la parte inferior, similar al efecto que querías replicar pero respetando la identidad visual de LulabTech."
        projects={featuredPortfolioProjects}
        trackKey="featured-projects"
        showCount={false}
      />

      <section id="portafolio-completo" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionTitleGroup}>
              <span className={styles.sectionEyebrow}>Portafolio completo</span>
              <h2 className={styles.sectionTitle}>Todas las cards en el mismo formato de carrusel</h2>
              <p className={styles.sectionDescription}>
                Aquí se mantiene el orden que ya tenías en tu data. Solo cambia la presentación visual para que todo el portafolio tenga una apariencia más uniforme, más premium y más cercana a una sección de venta real.
              </p>
            </div>

            <div className={styles.filters}>
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`${styles.filterButton} ${activeFilter === "all" ? styles.filterButtonActive : ""}`.trim()}
              >
                Todos
              </button>
              {portfolioCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveFilter(category.id)}
                  className={`${styles.filterButton} ${activeFilter === category.id ? styles.filterButtonActive : ""}`.trim()}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {filteredProjects.length > 0 ? (
        <CarouselSection
          eyebrow={activeFilter === "all" ? "Todos los proyectos" : "Filtrado por categoría"}
          title={
            activeFilter === "all"
              ? "Portafolio completo de LulabTech"
              : portfolioCategories.find((category) => category.id === activeFilter)?.label ?? "Portafolio filtrado"
          }
          description={
            activeFilter === "all"
              ? "Desliza horizontalmente para ver todas las referencias. Cada card mantiene screenshot, logo, categoría, descripción y acceso al sitio correspondiente."
              : portfolioCategories.find((category) => category.id === activeFilter)?.description ?? "Desliza para ver los proyectos de esta categoría."
          }
          projects={filteredProjects}
          trackKey={`portfolio-${activeFilter}`}
        />
      ) : (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.emptyState}>No hay proyectos para esta categoría.</div>
          </div>
        </section>
      )}

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              Creamos páginas web y sistemas con una presentación más clara, profesional y lista para vender mejor.
            </h2>
            <p className={styles.ctaText}>
              Si quieres seguir refinando esta página, el siguiente paso ideal sería revisar que todas las capturas finales estén correctas,
              completar las que faltan y luego ajustar microdetalles como animación automática opcional, drag mejorado en desktop,
              o una versión adicional por categoría si quieres separar aún más la experiencia.
            </p>
            <div className={styles.heroButtons}>
              <Link href="https://wa.me/50767069044?text=Hola,%20quiero%20una%20web%20como%20las%20de%20su%20portafolio" target="_blank" rel="noreferrer" className={styles.primaryButton}>
                Solicitar cotización
              </Link>
              <Link href="/servicios" className={styles.secondaryButton}>
                Ver servicios
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
