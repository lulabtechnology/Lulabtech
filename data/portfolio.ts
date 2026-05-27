export type PortfolioCategoryId = "corporativa" | "landing" | "software";

export type PortfolioProject = {
  slug: string;
  name: string;
  url: string;
  type: PortfolioCategoryId;
  typeLabel: string;
  industry: string;
  description: string;
  services: string[];
  ctaLabel?: string;
  featured?: boolean;
  logoSrc?: string;
  screenshotSrc?: string;
};

export const portfolioCategories = [
  {
    id: "corporativa" as const,
    label: "Webs corporativas",
    description:
      "Sitios para empresas, firmas, clínicas, academias y marcas que necesitan una presencia más sólida."
  },
  {
    id: "landing" as const,
    label: "Landing pages",
    description:
      "Páginas orientadas a captación, campañas, marcas personales y negocios que venden por WhatsApp o formulario."
  },
  {
    id: "software" as const,
    label: "Software y plataformas",
    description:
      "Sistemas internos, portales y soluciones a medida para operación, reservas, logística y administración."
  }
] as const;

export const portfolioTrustStats = [
  {
    value: "100+",
    label: "Proyectos realizados",
    description: "Webs, landing pages y sistemas desarrollados para negocios de distintos sectores."
  },
  {
    value: "2+",
    label: "Años de experiencia",
    description: "Trabajo continuo con empresas, marcas personales y proyectos digitales en Panamá."
  }
] as const;

// Ordenados primero por proyectos que generan mejor impresión al compartir el portafolio por WhatsApp.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "solmas-legal",
    name: "SOLMAS Legal",
    url: "https://solmaslegal.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Firma legal",
    description: "Web corporativa para firma legal con áreas de práctica, presentación de la firma y tono institucional elegante.",
    services: ["Web corporativa", "Marca legal", "SEO inicial"],
    screenshotSrc: "/portfolio-previews/solmas-legal.webp",
    logoSrc: "/clients/solmas.webp",
    featured: true
  },
  {
    slug: "isasa-panama",
    name: "ISASA Panamá",
    url: "https://www.isasapanama.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Aire acondicionado e ingeniería",
    description: "Sitio corporativo para presentar servicios HVAC, proyectos, subservicios y contacto profesional para clientes residenciales, comerciales e industriales.",
    services: ["Web corporativa", "Estructura comercial", "Formulario / WhatsApp"],
    screenshotSrc: "/portfolio-previews/isasa-panama.webp",
    logoSrc: "/clients/isasa-panama.webp",
    featured: true
  },
  {
    slug: "quality-techno-services",
    name: "Quality Techno Services",
    url: "https://www.qualitytechnoservices.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Servicios técnicos e industriales",
    description: "Presencia corporativa para una empresa técnica con servicios, respaldo, contacto y una presentación más sólida de marca.",
    services: ["Web corporativa", "Contacto", "Responsive"],
    logoSrc: "/clients/quality-techno-services.webp",
    featured: true
  },
  {
    slug: "orthoclinix",
    name: "OrthoClinix",
    url: "https://orthoclinix.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Clínica dental / ortodoncia",
    description: "Landing premium para clínica dental con enfoque boutique, confianza visual y solicitudes de cita.",
    services: ["Landing page", "Sector salud", "Citas / contacto"],
    logoSrc: "/clients/orthoclinix.webp",
    featured: true
  },
  {
    slug: "rep-lawyer",
    name: "REP Lawyer",
    url: "https://rep-lawyer.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Abogados",
    description: "Landing legal de alto impacto para presentar la firma, reforzar confianza y captar consultas.",
    services: ["Landing page", "Legal", "Marca premium"],
    screenshotSrc: "/portfolio-previews/rep-lawyer.webp",
    logoSrc: "/clients/rep-lawyer.webp",
    featured: true
  },
  {
    slug: "aa-law-firm",
    name: "A&A Law Firm",
    url: "https://www.aalawfirmpa.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Abogados",
    description: "Landing legal enfocada en explicar servicios, generar confianza y captar consultas desde WhatsApp o formulario.",
    services: ["Landing page", "Legal", "Conversión"],
    screenshotSrc: "/portfolio-previews/aa-law-firm.webp",
    logoSrc: "/clients/aa-law-firm.webp",
    featured: true
  },
  {
    slug: "julissa-lewis",
    name: "Julissa Lewis",
    url: "https://julissalewis.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Contabilidad",
    description: "Landing bilingüe para servicios contables y fiscales con enfoque en claridad, confianza y rutas directas de contacto.",
    services: ["Landing page", "Bilingüe", "Responsive"],
    screenshotSrc: "/portfolio-previews/julissa-lewis.webp",
    featured: true
  },
  {
    slug: "veranieras",
    name: "Veranieras",
    url: "https://www.veranieras.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Moda y accesorios",
    description: "Landing visual para marca de accesorios, colección de producto y venta por WhatsApp con una estética cuidada.",
    services: ["Landing page", "Marca", "Venta por WhatsApp"],
    screenshotSrc: "/portfolio-previews/veranieras.webp",
    logoSrc: "/clients/veranieras-flor.webp",
    featured: true
  },
  {
    slug: "solarled",
    name: "SolarLED PTY",
    url: "https://solarledpty.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Energía solar",
    description: "Página comercial para comunicar soluciones solares, ventajas del servicio y contacto inmediato con el cliente.",
    services: ["Landing page", "Video / visual", "Generación de leads"],
    screenshotSrc: "/portfolio-previews/solarled.webp",
    logoSrc: "/clients/solarled.webp",
    featured: true
  },
  {
    slug: "magna-academy",
    name: "Magna Academy",
    url: "https://magnaacademy.org/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Educación",
    description: "Web corporativa para academia con presentación institucional, oferta de cursos y captación de interesados.",
    services: ["Web corporativa", "Academia", "Panel admin"],
    screenshotSrc: "/portfolio-previews/magna-academy.webp",
    featured: true
  },
  {
    slug: "nova-track-portal",
    name: "Nova Track Portal",
    url: "https://novatrackportal.com/portal/",
    type: "software",
    typeLabel: "Software a medida",
    industry: "Logística / portal cliente",
    description: "Plataforma web para operación logística, seguimiento, gestión documental, estados y procesos administrativos de la empresa.",
    services: ["Software a medida", "Portal cliente", "Gestión operativa"],
    screenshotSrc: "/portfolio-previews/nova-track-portal.webp",
    ctaLabel: "Ver plataforma",
    logoSrc: "/clients/nova-shipping.webp",
    featured: true
  },
  {
    slug: "bb-logistic",
    name: "BB Logistic",
    url: "https://bblogistic.org/",
    type: "software",
    typeLabel: "Software a medida",
    industry: "Logística y transporte",
    description: "Sistema operativo con acceso de usuarios, módulos de viajes, tarifas, planillas, finanzas y control administrativo para una empresa logística.",
    services: ["Software a medida", "Login / panel", "Gestión operativa"],
    screenshotSrc: "/portfolio-previews/bb-logistic.webp",
    ctaLabel: "Ver acceso",
    logoSrc: "/clients/bd-logistic.webp",
    featured: true
  },
  {
    slug: "los-cholos",
    name: "Los Cholos",
    url: "https://loscholospty.com/",
    type: "software",
    typeLabel: "Software a medida",
    industry: "Restaurante / POS",
    description: "Sistema interno con acceso de usuarios para ventas, caja, inventario, asistencia y control operativo del negocio.",
    services: ["Software POS", "Login / panel", "Operación interna"],
    ctaLabel: "Ver acceso",
    logoSrc: "/clients/los-cholos.webp",
    featured: true
  },
  {
    slug: "cerebritos-panama",
    name: "Cerebritos Panamá",
    url: "https://cerebritospanama.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Educación infantil",
    description: "Página de captación para academia y estimulación infantil con información clara, branding amigable y contacto directo.",
    services: ["Landing page", "Captación", "WhatsApp"],
    screenshotSrc: "/portfolio-previews/cerebritos-panama.webp",
    logoSrc: "/clients/cerebritos.webp",
    featured: true
  },
  {
    slug: "alaf-international-academy",
    name: "ALAF International Academy",
    url: "https://www.alafinternationalacademy.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Educación",
    description: "Sitio de captación para academia con presentación de propuesta académica, confianza y contacto.",
    services: ["Landing page", "Academia", "Información"],
    logoSrc: "/clients/alaf-international-academy.webp",
    featured: true
  },
  {
    slug: "biofest-panama",
    name: "Biofest Panamá",
    url: "https://biofestpanama.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Turismo / experiencias",
    description: "Landing turística para presentar experiencias, detalles de tours, reservas y comunicación con visitantes.",
    services: ["Landing page", "Turismo", "Reservas"],
    screenshotSrc: "/portfolio-previews/biofest-panama.webp",
    featured: true
  },
  {
    slug: "panama-heritage-tours",
    name: "Panama Heritage Tours",
    url: "https://panamaheritagetours.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Turismo",
    description: "Landing turística orientada a presentar tours, detalles del servicio y contacto directo para consultas o reservas.",
    services: ["Landing page", "Turismo", "Reservas"],
    screenshotSrc: "/portfolio-previews/panama-heritage-tours.webp",
    logoSrc: "/clients/panama-heritage-tours.webp",
    featured: true
  },
  {
    slug: "caba-express",
    name: "Caba Express",
    url: "https://cabaexpresspa.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Tours y transporte",
    description: "Landing de tours y traslados con información comercial, reservas y contacto para turistas o clientes.",
    services: ["Landing page", "Reservas", "Turismo"],
    screenshotSrc: "/portfolio-previews/caba-express.webp",
    featured: true
  },
  {
    slug: "amornflor",
    name: "Amor N Flor",
    url: "https://amornflor.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Floristería / regalos",
    description: "Landing orientada a mostrar propuesta de valor, catálogo visual y contacto para pedidos o consultas.",
    services: ["Landing page", "Catálogo visual", "CTA"],
    logoSrc: "/clients/amornflor.webp"
  },
  {
    slug: "alcira-trigueros",
    name: "Alcira Trigueros Legal Inmobiliaria",
    url: "https://www.alciratrigueroslegalinmobila.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Legal e inmobiliario",
    description: "Presencia digital para servicios legales e inmobiliarios con enfoque en claridad, respaldo y contacto directo.",
    services: ["Landing page", "Marca personal", "Contacto"],
    logoSrc: "/clients/alcira-trigueros.webp"
  },
  {
    slug: "enis-caicedo",
    name: "Enis Caicedo",
    url: "https://eniscaicedo.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Marca profesional",
    description: "Web corporativa o brand site para presentar perfil profesional, servicios, propuesta y canales de contacto.",
    services: ["Web corporativa", "Marca profesional", "Responsive"],
    logoSrc: "/clients/enis-caicedo.webp"
  },
  {
    slug: "palash-tower",
    name: "Palash Tower",
    url: "https://www.palashtower.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Bienes raíces / proyecto",
    description: "Landing enfocada en presentar un proyecto, beneficios, ubicación y contacto comercial.",
    services: ["Landing page", "Proyecto inmobiliario", "Captación"]
  },
  {
    slug: "eurides-young",
    name: "Eurides Young",
    url: "https://euridesyoung.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Servicios profesionales",
    description: "Landing clara para explicar servicios, reforzar la marca personal y facilitar el contacto del visitante.",
    services: ["Landing page", "Servicios", "CTA"],
    logoSrc: "/clients/eurides-young.webp"
  },
  {
    slug: "proselec-panama",
    name: "Proselec Panamá",
    url: "https://proselecpanama.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Servicios eléctricos / ingeniería",
    description: "Sitio corporativo para comunicar experiencia, servicios y canales de atención de la empresa.",
    services: ["Web corporativa", "Servicios", "Contacto"],
    screenshotSrc: "/portfolio-previews/proselec-panama.webp",
    logoSrc: "/clients/proselec-panama.webp"
  },
  {
    slug: "dra-ivette-rios-diez",
    name: "Dra. Ivette Ríos Díez",
    url: "https://draivetteriosdiez.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Salud",
    description: "Web para marca profesional del sector salud con presentación, servicios y contacto orientado a confianza.",
    services: ["Web corporativa", "Marca profesional", "Responsive"],
    logoSrc: "/clients/dra-ivette-rios-diez.webp"
  },
  {
    slug: "chambonnet-comercial-realty",
    name: "Chambonnet Comercial Realty",
    url: "https://chambonnetcomercialrealty.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Bienes raíces",
    description: "Landing inmobiliaria para explicar propuesta, oportunidades y facilitar consultas comerciales.",
    services: ["Landing page", "Inmobiliaria", "Captación"]
  },
  {
    slug: "krasa-dermoestudio",
    name: "Krasa Dermoestudio",
    url: "https://krasadermoestudio.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Belleza y estética",
    description: "Landing visual para servicios de estética, branding y contacto orientado a citas o consultas.",
    services: ["Landing page", "Estética", "Citas"],
    screenshotSrc: "/portfolio-previews/krasa-dermoestudio.webp",
    logoSrc: "/clients/krasa-dermoestudio.webp"
  },
  {
    slug: "handy-group",
    name: "Handy Group",
    url: "https://handygroupsa.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Servicios empresariales",
    description: "Landing para comunicar oferta de servicios, beneficios y una ruta rápida de contacto.",
    services: ["Landing page", "Servicios", "WhatsApp"]
  },
  {
    slug: "rapicredito-panama",
    name: "RapiCrédito Panamá",
    url: "https://rapicreditopanama.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Finanzas",
    description: "Landing orientada a explicar oferta financiera, requisitos y llamadas a la acción de consulta.",
    services: ["Landing page", "Finanzas", "Lead generation"]
  },
  {
    slug: "intramar-pty",
    name: "Intramar PTY",
    url: "https://intramarpty.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Servicios marítimos / corporativos",
    description: "Landing para servicios empresariales con estructura clara y enfoque en captar contactos relevantes.",
    services: ["Landing page", "Servicios", "Responsive"],
    logoSrc: "/clients/intramar-pty.webp"
  },
  {
    slug: "prisma-bm",
    name: "Prisma BM",
    url: "https://www.prismabm.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Business management",
    description: "Landing comercial para presentar servicios, proceso y llamada a la acción hacia contacto.",
    services: ["Landing page", "Consultoría", "Conversión"],
    logoSrc: "/clients/prisma-bm.webp"
  },
  {
    slug: "servi-estufa",
    name: "Servi-Estufa",
    url: "https://www.serviestufa.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Servicios técnicos",
    description: "Página de captación para reparación y servicio técnico con foco en claridad, confianza y contacto rápido.",
    services: ["Landing page", "Servicio técnico", "WhatsApp"],
    screenshotSrc: "/portfolio-previews/servi-estufa.webp",
    logoSrc: "/clients/servi-estufa.webp"
  },
  {
    slug: "audiomedica",
    name: "Audiomédica",
    url: "https://www.audiomedica.com.pa/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Salud auditiva",
    description: "Landing para servicios de salud auditiva con estructura informativa y conversión a contacto o cita.",
    services: ["Landing page", "Salud", "Contacto"],
    logoSrc: "/clients/audiomedica.webp"
  },
  {
    slug: "cle-property-management",
    name: "CLE Property Management",
    url: "https://clepropertymanagement.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Property management",
    description: "Landing para servicios de administración de propiedades con propuesta clara y captación de leads.",
    services: ["Landing page", "Property management", "Leads"],
    logoSrc: "/clients/cle-property-management.webp"
  },
  {
    slug: "transformacion-360",
    name: "Transformación 360",
    url: "https://transformacion360edt.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Coaching / formación",
    description: "Landing para programas, sesiones y transformación personal con contacto y enfoque comercial.",
    services: ["Landing page", "Servicios", "Contacto"]
  },
  {
    slug: "jardines-espino-de-la-rosa",
    name: "Jardines Espino de la Rosa",
    url: "https://jardinesespinodelarosa.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Servicios / institucional",
    description: "Sitio corporativo para presentar servicios, información institucional y atención al cliente.",
    services: ["Web corporativa", "Institucional", "Contacto"]
  }
];

export const featuredPortfolioProjects = portfolioProjects.filter((project) => project.featured);

const projectsWithLogos = portfolioProjects.filter((project) => project.logoSrc);
const logoRowSplitIndex = Math.ceil(projectsWithLogos.length / 2);

export const portfolioLogoRows = [
  projectsWithLogos.slice(0, logoRowSplitIndex),
  projectsWithLogos.slice(logoRowSplitIndex)
];

export const portfolioStats = {
  totalProjects: portfolioProjects.length,
  featuredProjects: featuredPortfolioProjects.length,
  totalLandingPages: portfolioProjects.filter((project) => project.type === "landing").length,
  totalCorporateWebsites: portfolioProjects.filter((project) => project.type === "corporativa").length,
  totalSoftwareProjects: portfolioProjects.filter((project) => project.type === "software").length
};
