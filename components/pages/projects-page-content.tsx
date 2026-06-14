"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useSiteLanguage } from "@/components/providers/site-language";
import { portfolioProjects, portfolioTrustStats, type PortfolioProject } from "@/data/portfolio";
import { WHATSAPP_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

type ProjectsPageCopy = {
  eyebrow: string;
  title: string;
  description: string;
  selectorEyebrow: string;
  selectorTitle: string;
  selectorDescription: string;
  noSelectionTitle: string;
  noSelectionDescription: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  whatsapp: string;
  viewExamples: string;
  quoteThis: string;
  selectedEyebrow: string;
  links: { label: string; href: string }[];
};

type PortfolioSectionId =
  | "landing-ventas"
  | "reservas-sistemas"
  | "corporativa-informativa"
  | "corporativa-servicios"
  | "software-medida";

type PortfolioSection = {
  id: PortfolioSectionId;
  badge: string;
  title: string;
  description: string;
  cta: string;
  quoteText: string;
  coverSrc: string;
  coverAlt: string;
  coverPosition?: string;
  slugs: string[];
};

const copy = {
  es: {
    eyebrow: "Portafolio LulabTech",
    title: "Elige el tipo de proyecto web que quieres ver",
    description:
      "Organizamos el portafolio para que puedas revisar ejemplos según la necesidad del negocio: landing pages comerciales, páginas con reservas, webs corporativas y software a medida para empresas.",
    selectorEyebrow: "Explora por objetivo comercial",
    selectorTitle: "Cinco rutas claras para encontrar referencias más rápido",
    selectorDescription:
      "En vez de mostrar todos los proyectos mezclados desde el inicio, primero eliges el tipo de solución. Así cada cliente ve ejemplos parecidos a lo que necesita y el portafolio se siente más ordenado, más premium y más fácil de vender.",
    noSelectionTitle: "Selecciona una categoría para abrir los proyectos",
    noSelectionDescription:
      "Toca una de las cards superiores para ver ejemplos reales con el mismo estilo de presentación, enlaces y llamadas a cotización.",
    primaryCta: "Cotizar un proyecto similar",
    secondaryCta: "Ver servicios",
    highlights: ["100+ proyectos realizados", "2+ años de experiencia", "Entrega rápida", "Soporte inicial"],
    ctaEyebrow: "¿Quieres algo parecido?",
    ctaTitle: "Creamos landing pages, webs corporativas y software a medida que se ven profesionales y ayudan a cotizar mejor.",
    ctaDescription:
      "Cuéntanos si necesitas una landing, una web corporativa, una página con reservas o un sistema a medida. Te ayudamos a ordenar el contenido y convertirlo en una experiencia clara para tus clientes.",
    whatsapp: "Hablar por WhatsApp",
    viewExamples: "Ver ejemplos",
    quoteThis: "Cotizar algo así",
    selectedEyebrow: "Ejemplos seleccionados",
    links: [
      { label: "Diseño web", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Webs corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Servicios", href: "/servicios-panama" }
    ]
  },
  en: {
    eyebrow: "LulabTech portfolio",
    title: "Choose the type of web project you want to explore",
    description:
      "We organized the portfolio around business goals: sales landing pages, booking pages, corporate websites, service websites and custom software for companies.",
    selectorEyebrow: "Explore by business goal",
    selectorTitle: "Five clear paths to find relevant references faster",
    selectorDescription:
      "Instead of showing every project mixed together from the start, visitors first choose the type of solution they need. This makes the portfolio feel clearer, more premium and easier to sell.",
    noSelectionTitle: "Select a category to open the projects",
    noSelectionDescription:
      "Tap one of the cards above to view real examples with the same showcase style, project links and quote calls to action.",
    primaryCta: "Quote a similar project",
    secondaryCta: "View services",
    highlights: ["100+ completed projects", "2+ years experience", "Fast delivery", "Initial support"],
    ctaEyebrow: "Want something similar?",
    ctaTitle: "We build landing pages, corporate websites and custom software that look professional and help businesses get better quote requests.",
    ctaDescription:
      "Tell us if you need a landing page, corporate website, booking page or custom system. We help structure the content and turn it into a clear experience for your clients.",
    whatsapp: "Talk on WhatsApp",
    viewExamples: "View examples",
    quoteThis: "Quote something like this",
    selectedEyebrow: "Selected examples",
    links: [
      { label: "Web design", href: "/diseno-web-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Corporate websites", href: "/paginas-web-corporativas-panama" },
      { label: "Custom software", href: "/software-a-medida-panama" },
      { label: "Services", href: "/servicios-panama" }
    ]
  }
} as const;

const portfolioSectionCopy = {
  es: [
    {
      id: "landing-ventas",
      badge: "Landing pages",
      title: "Landing pages que venden",
      description: "Páginas diseñadas para captar clientes, presentar servicios y convertir visitas en mensajes, formularios o cotizaciones.",
      cta: "Ver landings de venta",
      quoteText: "Hola,%20quiero%20una%20landing%20page%20para%20vender%20o%20captar%20clientes",
      coverSrc: "/portfolio-category-covers/landing-pages-que-venden.webp",
      coverAlt: "Ejemplo de landing page de venta creada por LulabTech",
      slugs: [
        "rep-lawyer",
        "aa-law-firm",
        "julissa-lewis",
        "solarled",
        "orthoclinix",
        "krasa-dermoestudio",
        "rapicredito-panama",
        "servi-estufa",
        "eurides-young",
        "transformacion-360",
        "los-cholos",
        "cerebritos-panama",
        "logiplus-pty",
        "handy-group",
        "cle-property-management",
        "veranieras",
        "amornflor",
        "palash-tower",
        "chambonnet-comercial-realty"
      ]
    },
    {
      id: "reservas-sistemas",
      badge: "Reservas y plataformas",
      title: "Landing con reservas, citas y plataformas web",
      description: "Sitios con funciones adicionales como formularios avanzados, reservas, citas, accesos o flujos personalizados.",
      cta: "Ver reservas y plataformas",
      quoteText: "Hola,%20quiero%20una%20landing%20con%20reservas,%20citas%20o%20plataforma%20web",
      coverSrc: "/portfolio-category-covers/landing-reservas-citas-plataformas.webp",
      coverAlt: "Ejemplo de landing con plataforma, reservas o funciones avanzadas creada por LulabTech",
      slugs: ["bb-logistic", "caba-express", "panama-heritage-tours", "biofest-panama"]
    },
    {
      id: "corporativa-informativa",
      badge: "Corporativas",
      title: "Webs corporativas informativas",
      description: "Sitios profesionales para presentar empresas, marcas, instituciones o proyectos de forma clara y confiable.",
      cta: "Ver webs informativas",
      quoteText: "Hola,%20quiero%20una%20web%20corporativa%20informativa%20para%20mi%20empresa",
      coverSrc: "/portfolio-category-covers/webs-corporativas-informativas.webp",
      coverAlt: "Ejemplo de web corporativa informativa creada por LulabTech",
      slugs: ["solmas-legal", "k9-security-international", "enis-caicedo", "dra-ivette-rios-diez", "jardines-espino-de-la-rosa", "alaf-international-academy"]
    },
    {
      id: "corporativa-servicios",
      badge: "Servicios profesionales",
      title: "Webs corporativas de servicios",
      description: "Webs enfocadas en explicar servicios, mostrar autoridad y facilitar el contacto con clientes potenciales.",
      cta: "Ver webs de servicios",
      quoteText: "Hola,%20quiero%20una%20web%20corporativa%20para%20mostrar%20mis%20servicios",
      coverSrc: "/portfolio-category-covers/webs-corporativas-servicios.webp",
      coverAlt: "Ejemplo de web corporativa de servicios creada por LulabTech",
      slugs: ["isasa-panama", "quality-techno-services", "proselec-panama", "intramar-pty", "magna-academy"]
    },
    {
      id: "software-medida",
      badge: "Software a medida",
      title: "Software a medida para empresas",
      description: "Sistemas, portales y plataformas creadas para automatizar procesos, gestionar información o mejorar operaciones internas.",
      cta: "Ver software empresarial",
      quoteText: "Hola,%20quiero%20un%20software%20a%20medida%20para%20mi%20empresa",
      coverSrc: "/portfolio-category-covers/software-a-medida-empresas.webp",
      coverAlt: "Ejemplo de software a medida para empresas creado por LulabTech",
      slugs: ["nova-track-portal", "bb-logistic", "los-cholos"]
    }
  ],
  en: [
    {
      id: "landing-ventas",
      badge: "Landing pages",
      title: "Landing pages built to sell",
      description: "Pages designed to capture leads, present services and turn visits into messages, forms or quote requests.",
      cta: "View sales landings",
      quoteText: "Hello,%20I%20want%20a%20landing%20page%20to%20sell%20or%20capture%20leads",
      coverSrc: "/portfolio-category-covers/landing-pages-que-venden.webp",
      coverAlt: "Sales landing page example created by LulabTech",
      slugs: [
        "rep-lawyer",
        "aa-law-firm",
        "julissa-lewis",
        "solarled",
        "orthoclinix",
        "krasa-dermoestudio",
        "rapicredito-panama",
        "servi-estufa",
        "eurides-young",
        "transformacion-360",
        "los-cholos",
        "cerebritos-panama",
        "logiplus-pty",
        "handy-group",
        "cle-property-management",
        "veranieras",
        "amornflor",
        "palash-tower",
        "chambonnet-comercial-realty"
      ]
    },
    {
      id: "reservas-sistemas",
      badge: "Bookings and platforms",
      title: "Landing pages with bookings, appointments and web platforms",
      description: "Sites with additional functions such as advanced forms, bookings, appointments, access areas or custom flows.",
      cta: "View bookings and platforms",
      quoteText: "Hello,%20I%20want%20a%20landing%20page%20with%20bookings,%20appointments%20or%20a%20web%20platform",
      coverSrc: "/portfolio-category-covers/landing-reservas-citas-plataformas.webp",
      coverAlt: "Booking, platform or advanced web function example created by LulabTech",
      slugs: ["bb-logistic", "caba-express", "panama-heritage-tours", "biofest-panama"]
    },
    {
      id: "corporativa-informativa",
      badge: "Corporate",
      title: "Informative corporate websites",
      description: "Professional websites to present companies, brands, institutions or projects in a clear and trustworthy way.",
      cta: "View informative websites",
      quoteText: "Hello,%20I%20want%20an%20informative%20corporate%20website%20for%20my%20company",
      coverSrc: "/portfolio-category-covers/webs-corporativas-informativas.webp",
      coverAlt: "Informative corporate website example created by LulabTech",
      slugs: ["solmas-legal", "k9-security-international", "enis-caicedo", "dra-ivette-rios-diez", "jardines-espino-de-la-rosa", "alaf-international-academy"]
    },
    {
      id: "corporativa-servicios",
      badge: "Professional services",
      title: "Corporate service websites",
      description: "Websites focused on explaining services, showing authority and making it easier for potential clients to get in touch.",
      cta: "View service websites",
      quoteText: "Hello,%20I%20want%20a%20corporate%20website%20to%20show%20my%20services",
      coverSrc: "/portfolio-category-covers/webs-corporativas-servicios.webp",
      coverAlt: "Corporate service website example created by LulabTech",
      slugs: ["isasa-panama", "quality-techno-services", "proselec-panama", "intramar-pty", "magna-academy"]
    },
    {
      id: "software-medida",
      badge: "Custom software",
      title: "Custom software for companies",
      description: "Systems, portals and platforms created to automate processes, manage information or improve internal operations.",
      cta: "View business software",
      quoteText: "Hello,%20I%20want%20custom%20software%20for%20my%20company",
      coverSrc: "/portfolio-category-covers/software-a-medida-empresas.webp",
      coverAlt: "Custom software for companies example created by LulabTech",
      slugs: ["nova-track-portal", "bb-logistic", "los-cholos"]
    }
  ]
} satisfies Record<"es" | "en", PortfolioSection[]>;

function getProjectDomain(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getShowcaseScreenshotUrl(url: string) {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  // Screenshot alto para que la card se vea tipo showcase vertical, no como recorte aplastado.
  return `https://image.thum.io/get/width/1200/crop/1700/wait/8/noanimate/${normalized}`;
}

function getScrollDistance(track: HTMLDivElement | null) {
  if (!track) return 360;
  const firstCard = track.firstElementChild as HTMLElement | null;
  if (!firstCard) return 360;
  return firstCard.offsetWidth + 24;
}

function getProjectsBySlug(slugs: string[]) {
  return slugs
    .map((slug) => portfolioProjects.find((project) => project.slug === slug))
    .filter((project): project is PortfolioProject => Boolean(project));
}

function AnimatedStatValue({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : Number.NaN;
  const suffix = match ? match[2] : "";
  const [displayValue, setDisplayValue] = useState(Number.isFinite(target) ? 0 : value);

  useEffect(() => {
    if (!Number.isFinite(target)) return;

    let animationFrame = 0;
    const start = performance.now();
    const duration = target <= 5 ? 900 : 1300;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(tick);
      }
    };

    animationFrame = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [target]);

  if (!Number.isFinite(target)) return <>{value}</>;

  return <>{displayValue}{suffix}</>;
}

function ProjectShowcaseImage({ project }: { project: PortfolioProject }) {
  const [useLocalFallback, setUseLocalFallback] = useState(false);
  const localFallback = project.screenshotSrc === null ? undefined : project.screenshotSrc;
  const forceLocalPreview = project.slug === "solarled" && Boolean(localFallback);
  const src = forceLocalPreview && localFallback ? localFallback : useLocalFallback && localFallback ? localFallback : getShowcaseScreenshotUrl(project.url);

  return (
    <div className="relative h-[430px] overflow-hidden bg-slate-100">
      <img
        src={src}
        alt={`Vista previa del proyecto ${project.name}`}
        className={cn(
          "h-full w-full object-top transition duration-700 group-hover:scale-[1.02]",
          forceLocalPreview ? "object-cover" : useLocalFallback ? "object-contain" : "object-cover"
        )}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onError={() => {
          if (!forceLocalPreview && localFallback && !useLocalFallback) {
            setUseLocalFallback(true);
          }
        }}
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-3 px-4 py-4">
        {project.logoSrc ? (
          <div className="flex h-14 w-20 items-center justify-center rounded-[18px] border border-white/35 bg-white/90 p-2.5 shadow-elevated backdrop-blur-md">
            <img src={project.logoSrc} alt="" className="max-h-full max-w-full object-contain" loading="lazy" decoding="async" />
          </div>
        ) : (
          <div className="rounded-[18px] border border-white/25 bg-black/35 px-3 py-2 text-xs font-semibold text-white shadow-soft backdrop-blur-md">
            {project.name}
          </div>
        )}

        <span className="rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white shadow-soft backdrop-blur-md">
          {project.typeLabel}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080b12] via-[#080b12]/45 to-transparent" />
    </div>
  );
}

function ProjectCarouselCard({ project, source }: { project: PortfolioProject; source: string }) {
  const domain = getProjectDomain(project.url);

  return (
    <article className="group flex h-full w-[318px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-[#080b12] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated sm:w-[360px]">
      <ProjectShowcaseImage project={project} />

      <div className="flex flex-1 flex-col gap-3 border-t border-white/10 px-5 pb-5 pt-5 text-white">
        <div>
          <h3 className="text-xl font-semibold leading-tight text-white">{project.name}</h3>
          <p className="mt-1 text-sm text-slate-300">{project.industry}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.services.slice(0, 2).map((service) => (
            <span key={service} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold text-slate-200">
              {service}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-2">
          <Link
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-w-0 items-center gap-1.5 text-sm font-semibold text-brand-300 transition hover:text-brand-200"
            onClick={() => trackEvent("click_portafolio", { project: project.name, source })}
          >
            <span className="truncate">{domain}</span>
            <ExternalLink className="h-3.5 w-3.5 shrink-0" />
          </Link>

          <div className="flex gap-2">
            <ButtonLink
              href={project.url}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="md"
              className="w-full justify-center border-white/15 bg-white text-ink-900 hover:bg-white/90"
              onClick={() => trackEvent("click_portafolio", { project: project.name, source: `${source}_button` })}
            >
              {project.ctaLabel ?? "Ver proyecto"}
            </ButtonLink>
          </div>
        </div>
      </div>
    </article>
  );
}

function PortfolioCarousel({ projects, source, emptyLabel }: { projects: PortfolioProject[]; source: string; emptyLabel: string }) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pauseAutoRef = useRef(false);

  const handleScroll = (direction: -1 | 1) => {
    const amount = getScrollDistance(trackRef.current);
    trackRef.current?.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (pauseAutoRef.current) return;

      const track = trackRef.current;
      if (!track) return;

      const amount = getScrollDistance(track);
      const reachedEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - amount * 0.75;

      if (reachedEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
        return;
      }

      track.scrollBy({ left: amount, behavior: "smooth" });
    }, 4300);

    return () => window.clearInterval(interval);
  }, [projects]);

  if (!projects.length) {
    return (
      <div className="mt-8 rounded-[28px] border border-slate-200 bg-white p-8 text-center text-sm text-ink-500 shadow-soft">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="mb-5 flex justify-end gap-2">
        <button
          type="button"
          aria-label="Mover carrusel hacia la izquierda"
          onClick={() => handleScroll(-1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Mover carrusel hacia la derecha"
          onClick={() => handleScroll(1)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-800 shadow-soft transition hover:border-brand-200 hover:text-brand-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        onMouseEnter={() => {
          pauseAutoRef.current = true;
        }}
        onMouseLeave={() => {
          pauseAutoRef.current = false;
        }}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project) => (
          <ProjectCarouselCard key={project.slug} project={project} source={source} />
        ))}
      </div>
    </div>
  );
}

function CategoryCard({ section, isActive, onSelect, viewExamplesLabel }: { section: PortfolioSection; isActive: boolean; onSelect: () => void; viewExamplesLabel: string }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "group relative flex min-h-[540px] overflow-hidden rounded-[30px] border text-left shadow-soft outline-none transition duration-300 hover:-translate-y-1 hover:shadow-elevated focus-visible:ring-4 focus-visible:ring-brand-200",
        isActive ? "border-brand-500 ring-4 ring-brand-100" : "border-slate-200"
      )}
    >
      <img
        src={section.coverSrc}
        alt={section.coverAlt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100",
          section.coverPosition ?? "object-center",
          isActive ? "scale-105 grayscale-0 opacity-100" : "opacity-[0.72]"
        )}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#020817]/35 via-[#020817]/42 to-[#020817]/94 transition duration-300 group-hover:from-[#020817]/12 group-hover:via-[#020817]/28 group-hover:to-[#020817]/88" />
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-500 via-accent-400 to-brand-300 opacity-80" />

      <div className="relative z-10 flex h-full min-h-[540px] w-full flex-col justify-end p-5 text-white">
        <span className="mb-auto w-fit rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {section.badge}
        </span>

        <div className="flex min-h-[205px] w-full flex-col justify-between rounded-[24px] border border-white/10 bg-black/40 p-4 backdrop-blur-[2px] transition duration-300 group-hover:bg-black/28 lg:min-h-[230px] xl:min-h-[210px]">
          <h3 className="text-[1.45rem] font-semibold leading-[1.12] text-white sm:text-2xl lg:text-[1.18rem] xl:text-[1.36rem]">{section.title}</h3>
          <span className="mt-5 inline-flex min-h-[54px] w-full items-center justify-between gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-bold leading-tight text-ink-900 transition group-hover:bg-brand-50 lg:text-[0.8rem] xl:text-sm">
            <span>{section.cta || viewExamplesLabel}</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" />
          </span>
        </div>
      </div>
    </button>
  );
}

export function ProjectsPageContent() {
  const { locale } = useSiteLanguage();
  const pageCopy = locale === "en" ? copy.en : copy.es;
  const portfolioSections = locale === "en" ? portfolioSectionCopy.en : portfolioSectionCopy.es;
  const detailsRef = useRef<HTMLDivElement | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<PortfolioSectionId | null>(null);

  const activeSection = useMemo(() => portfolioSections.find((section) => section.id === activeSectionId) ?? null, [activeSectionId, portfolioSections]);
  const activeProjects = useMemo(() => (activeSection ? getProjectsBySlug(activeSection.slugs) : []), [activeSection]);

  const handleSelectSection = (sectionId: PortfolioSectionId) => {
    setActiveSectionId(sectionId);
    trackEvent("click_portfolio_category", { category: sectionId });

    window.setTimeout(() => {
      detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-14 sm:py-16 lg:py-20">
        <GridPattern className="opacity-20" />
        <Container className="relative">
          <div className="mx-auto max-w-4xl text-center">
            <span className="eyebrow">{pageCopy.eyebrow}</span>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">{pageCopy.title}</h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-ink-600 sm:text-lg">{pageCopy.description}</p>

            <div className="mt-6 flex flex-wrap justify-center gap-2.5">
              {pageCopy.highlights.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-ink-700 shadow-soft">
                  <Sparkles className="h-4 w-4 text-brand-600" />
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg" onClick={() => trackEvent("click_whatsapp_hero", { source: "portafolio_page" })}>
                <MessageCircle className="h-4 w-4" />
                {pageCopy.primaryCta}
              </ButtonLink>
              <ButtonLink href="/servicios-panama" variant="outline" size="lg" onClick={() => trackEvent("click_servicio_software", { source: "portafolio_page" })}>
                {pageCopy.secondaryCta}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
            {portfolioTrustStats.map((stat) => (
              <div key={stat.label} className="rounded-[26px] border border-slate-200 bg-white/90 p-5 text-center shadow-soft">
                <p className="text-3xl font-semibold text-ink-900 sm:text-[2rem]">
                  <AnimatedStatValue value={stat.value} />
                </p>
                <p className="mt-2 text-sm font-semibold text-ink-900">{stat.label}</p>
                <p className="mt-2 text-xs leading-5 text-ink-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
            <div className="max-w-4xl">
              <span className="eyebrow">{pageCopy.selectorEyebrow}</span>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{pageCopy.selectorTitle}</h2>
              <p className="mt-3 text-base leading-7 text-ink-600">{pageCopy.selectorDescription}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolioSections.map((section) => (
              <CategoryCard
                key={section.id}
                section={section}
                isActive={activeSectionId === section.id}
                viewExamplesLabel={pageCopy.viewExamples}
                onSelect={() => handleSelectSection(section.id)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section ref={detailsRef} className="pb-16 sm:pb-20">
        <Container>
          {activeSection ? (
            <div>
              <div className="rounded-[34px] border border-slate-200 bg-white p-6 shadow-soft sm:p-7 lg:p-8">
                <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
                  <div>
                    <span className="eyebrow">{pageCopy.selectedEyebrow}</span>
                    <h2 className="mt-3 text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">{activeSection.title}</h2>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-ink-600">{activeSection.description}</p>
                  </div>

                  <ButtonLink
                    href={`https://wa.me/50767069044?text=${activeSection.quoteText}`}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    size="lg"
                    onClick={() => trackEvent("click_whatsapp_portfolio_category", { category: activeSection.id })}
                  >
                    {pageCopy.quoteThis}
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <PortfolioCarousel projects={activeProjects} source={`portfolio_${activeSection.id}`} emptyLabel={pageCopy.noSelectionDescription} />
            </div>
          ) : (
            <div className="rounded-[34px] border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft sm:p-10">
              <p className="eyebrow">Portafolio</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink-900 sm:text-3xl">{pageCopy.noSelectionTitle}</h2>
              <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-ink-600">{pageCopy.noSelectionDescription}</p>
            </div>
          )}

          <div className="mt-12 rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">{pageCopy.ctaEyebrow}</p>
                <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">{pageCopy.ctaTitle}</h2>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">{pageCopy.ctaDescription}</p>
              </div>
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg" className="border-white/20 bg-white text-ink-900 hover:bg-white/90" onClick={() => trackEvent("click_whatsapp_footer", { source: "portfolio_cta" })}>
                {pageCopy.whatsapp}
                <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink-600">
            {pageCopy.links.map((link) => (
              <Link key={link.href} className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
