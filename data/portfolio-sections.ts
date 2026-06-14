export type PortfolioSectionId =
  | "landing-ventas"
  | "reservas-sistemas"
  | "corporativa-informativa"
  | "corporativa-servicios"
  | "software-medida";

export type PortfolioSection = {
  id: PortfolioSectionId;
  slug: string;
  badge: string;
  title: string;
  shortTitle: string;
  description: string;
  pageIntro: string;
  price: string;
  priceNote: string;
  cta: string;
  quoteText: string;
  coverSrc: string;
  coverAlt: string;
  coverPosition?: string;
  slugs: string[];
};

export const portfolioSectionCopy = {
  es: [
    {
      id: "landing-ventas",
      slug: "landing-pages-que-venden",
      badge: "Landing pages",
      title: "Landing pages que venden",
      shortTitle: "Landings de venta",
      description: "Páginas diseñadas para captar clientes, presentar servicios y convertir visitas en mensajes, formularios o cotizaciones.",
      pageIntro:
        "Una landing page que vende está pensada para una acción clara: que el visitante entienda rápido la oferta, confíe en el negocio y escriba por WhatsApp, llene un formulario o solicite una cotización.",
      price: "$149",
      priceNote: "Desde $149 según contenido, secciones y nivel de personalización.",
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
      slug: "landing-con-reservas-citas-y-plataformas-web",
      badge: "Reservas y plataformas",
      title: "Landing con reservas, citas y plataformas web",
      shortTitle: "Reservas y plataformas",
      description: "Sitios con funciones adicionales como formularios avanzados, reservas, citas, accesos o flujos personalizados.",
      pageIntro:
        "Este tipo de proyecto combina una landing comercial con funciones web adicionales: formularios más completos, reservas, citas, accesos privados o flujos personalizados para que el cliente pueda avanzar sin depender solo de un mensaje manual.",
      price: "$249",
      priceNote: "Desde $249 según la función, formularios, automatizaciones o accesos requeridos.",
      cta: "Ver reservas y plataformas",
      quoteText: "Hola,%20quiero%20una%20landing%20con%20reservas,%20citas%20o%20plataforma%20web",
      coverSrc: "/portfolio-category-covers/landing-reservas-citas-plataformas.webp",
      coverAlt: "Ejemplo de landing con plataforma, reservas o funciones avanzadas creada por LulabTech",
      slugs: ["bb-logistic", "caba-express", "panama-heritage-tours", "biofest-panama"]
    },
    {
      id: "corporativa-informativa",
      slug: "webs-corporativas-informativas",
      badge: "Corporativas",
      title: "Webs corporativas informativas",
      shortTitle: "Webs informativas",
      description: "Sitios profesionales para presentar empresas, marcas, instituciones o proyectos de forma clara y confiable.",
      pageIntro:
        "Una web corporativa informativa sirve para explicar quién es la empresa, qué hace, qué la diferencia y cómo contactarla. Es ideal para marcas que necesitan verse más serias, ordenadas y confiables en Google, WhatsApp y presentaciones comerciales.",
      price: "$299",
      priceNote: "Desde $299 para webs corporativas con estructura profesional e información clara.",
      cta: "Ver webs informativas",
      quoteText: "Hola,%20quiero%20una%20web%20corporativa%20informativa%20para%20mi%20empresa",
      coverSrc: "/portfolio-category-covers/webs-corporativas-informativas.webp",
      coverAlt: "Ejemplo de web corporativa informativa creada por LulabTech",
      slugs: ["solmas-legal", "k9-security-international", "enis-caicedo", "dra-ivette-rios-diez", "jardines-espino-de-la-rosa", "alaf-international-academy"]
    },
    {
      id: "corporativa-servicios",
      slug: "webs-corporativas-de-servicios",
      badge: "Servicios profesionales",
      title: "Webs corporativas de servicios",
      shortTitle: "Webs de servicios",
      description: "Webs enfocadas en explicar servicios, mostrar autoridad y facilitar el contacto con clientes potenciales.",
      pageIntro:
        "Una web corporativa de servicios está pensada para vender confianza: organiza servicios, argumentos comerciales, sectores atendidos, pruebas de experiencia y llamadas claras para que el cliente pueda solicitar información o cotizar.",
      price: "$400+",
      priceNote: "Desde $400+ cuando el proyecto requiere más secciones, estructura de servicios o contenido especializado.",
      cta: "Ver webs de servicios",
      quoteText: "Hola,%20quiero%20una%20web%20corporativa%20para%20mostrar%20mis%20servicios",
      coverSrc: "/portfolio-category-covers/webs-corporativas-servicios.webp",
      coverAlt: "Ejemplo de web corporativa de servicios creada por LulabTech",
      slugs: ["isasa-panama", "quality-techno-services", "proselec-panama", "intramar-pty", "magna-academy"]
    },
    {
      id: "software-medida",
      slug: "software-a-medida-para-empresas",
      badge: "Software a medida",
      title: "Software a medida para empresas",
      shortTitle: "Software empresarial",
      description: "Sistemas, portales y plataformas creadas para automatizar procesos, gestionar información o mejorar operaciones internas.",
      pageIntro:
        "El software a medida se crea cuando una empresa necesita algo más que una página: paneles administrativos, portales de clientes, control de operaciones, reportes, usuarios, estados, reservas, inventario o procesos internos conectados a su forma real de trabajar.",
      price: "$899",
      priceNote: "Desde $899 según módulos, usuarios, base de datos, paneles y nivel de automatización.",
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
      slug: "landing-pages-que-venden",
      badge: "Landing pages",
      title: "Landing pages that sell",
      shortTitle: "Sales landings",
      description: "Pages designed to capture leads, present services and turn visits into messages, forms or quote requests.",
      pageIntro:
        "A sales landing page is built around one clear action: helping visitors understand the offer quickly, trust the business and contact through WhatsApp, forms or quote requests.",
      price: "$149",
      priceNote: "Starting at $149 depending on content, sections and customization level.",
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
      slug: "landing-con-reservas-citas-y-plataformas-web",
      badge: "Bookings and platforms",
      title: "Landing pages with bookings, appointments and web platforms",
      shortTitle: "Bookings and platforms",
      description: "Sites with additional features such as advanced forms, bookings, appointments, access areas or custom flows.",
      pageIntro:
        "This type of project combines a commercial landing page with extra web functions: richer forms, bookings, appointments, private access or custom flows so the customer can move forward without relying only on manual messages.",
      price: "$249",
      priceNote: "Starting at $249 depending on the function, forms, automations or access requirements.",
      cta: "View booking projects",
      quoteText: "Hello,%20I%20want%20a%20landing%20page%20with%20bookings,%20appointments%20or%20a%20web%20platform",
      coverSrc: "/portfolio-category-covers/landing-reservas-citas-plataformas.webp",
      coverAlt: "Booking or platform landing page example created by LulabTech",
      slugs: ["bb-logistic", "caba-express", "panama-heritage-tours", "biofest-panama"]
    },
    {
      id: "corporativa-informativa",
      slug: "webs-corporativas-informativas",
      badge: "Corporate",
      title: "Informational corporate websites",
      shortTitle: "Informational websites",
      description: "Professional websites for presenting companies, brands, institutions or projects clearly and reliably.",
      pageIntro:
        "An informational corporate website explains who the company is, what it does, what makes it different and how to contact it. It is ideal for brands that need to look more serious, organized and trustworthy.",
      price: "$299",
      priceNote: "Starting at $299 for corporate websites with a professional structure and clear information.",
      cta: "View informational websites",
      quoteText: "Hello,%20I%20want%20an%20informational%20corporate%20website%20for%20my%20company",
      coverSrc: "/portfolio-category-covers/webs-corporativas-informativas.webp",
      coverAlt: "Informational corporate website example created by LulabTech",
      slugs: ["solmas-legal", "k9-security-international", "enis-caicedo", "dra-ivette-rios-diez", "jardines-espino-de-la-rosa", "alaf-international-academy"]
    },
    {
      id: "corporativa-servicios",
      slug: "webs-corporativas-de-servicios",
      badge: "Professional services",
      title: "Corporate service websites",
      shortTitle: "Service websites",
      description: "Websites focused on explaining services, building authority and making it easier for potential clients to contact you.",
      pageIntro:
        "A service corporate website is built to sell trust: it organizes services, commercial arguments, industries served, proof of experience and clear calls to request information or quotes.",
      price: "$400+",
      priceNote: "Starting at $400+ when the project requires more sections, service structure or specialized content.",
      cta: "View service websites",
      quoteText: "Hello,%20I%20want%20a%20corporate%20website%20to%20show%20my%20services",
      coverSrc: "/portfolio-category-covers/webs-corporativas-servicios.webp",
      coverAlt: "Corporate service website example created by LulabTech",
      slugs: ["isasa-panama", "quality-techno-services", "proselec-panama", "intramar-pty", "magna-academy"]
    },
    {
      id: "software-medida",
      slug: "software-a-medida-para-empresas",
      badge: "Custom software",
      title: "Custom software for companies",
      shortTitle: "Business software",
      description: "Systems, portals and platforms created to automate processes, manage information or improve internal operations.",
      pageIntro:
        "Custom software is built when a company needs more than a website: admin panels, client portals, operations control, reports, users, statuses, bookings, inventory or internal processes connected to the way the business actually works.",
      price: "$899",
      priceNote: "Starting at $899 depending on modules, users, database, panels and automation level.",
      cta: "View business software",
      quoteText: "Hello,%20I%20want%20custom%20software%20for%20my%20company",
      coverSrc: "/portfolio-category-covers/software-a-medida-empresas.webp",
      coverAlt: "Custom software for companies example created by LulabTech",
      slugs: ["nova-track-portal", "bb-logistic", "los-cholos"]
    }
  ]
} satisfies Record<"es" | "en", PortfolioSection[]>;

export const portfolioSectionSlugs = portfolioSectionCopy.es.map((section) => section.slug);

export function getPortfolioSectionIdBySlug(slug: string): PortfolioSectionId | null {
  return portfolioSectionCopy.es.find((section) => section.slug === slug)?.id ?? null;
}

export function getPortfolioSectionById(locale: "es" | "en", id: PortfolioSectionId) {
  return portfolioSectionCopy[locale].find((section) => section.id === id) ?? null;
}
