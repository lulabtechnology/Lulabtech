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
};

export type TrustedLogo = {
  src: string;
  alt: string;
  name: string;
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

// Ordenados primero por impacto visual/comercial para la sección de confianza.
export const trustedClientLogos: TrustedLogo[] = [
  { src: "/clients/quality-techno-services.webp", alt: "Logo de Quality Techno Services", name: "Quality Techno Services" },
  { src: "/clients/solmas.webp", alt: "Logo de SOLMAS Legal", name: "SOLMAS Legal" },
  { src: "/clients/orthoclinix.webp", alt: "Logo de OrthoClinix", name: "OrthoClinix" },
  { src: "/clients/aa-law-firm.webp", alt: "Logo de A&A Law Firm", name: "A&A Law Firm" },
  { src: "/clients/alaf-international-academy.webp", alt: "Logo de ALAF International Academy", name: "ALAF International Academy" },
  { src: "/clients/nova-shipping.webp", alt: "Logo de Nova Shipping Services", name: "Nova Shipping Services" },
  { src: "/clients/bd-logistic.webp", alt: "Logo de B&D Logistic", name: "B&D Logistic" },
  { src: "/clients/cerebritos.webp", alt: "Logo de Cerebritos Panamá", name: "Cerebritos Panamá" },
  { src: "/clients/veranieras-flor.webp", alt: "Logo de Veranieras", name: "Veranieras" },
  { src: "/clients/remax.webp", alt: "Logo de RE/MAX", name: "RE/MAX" },
  { src: "/clients/enis-caicedo.webp", alt: "Logo de Enis Caicedo", name: "Enis Caicedo" },
  { src: "/clients/servi-estufa.webp", alt: "Logo de Servi-Estufa", name: "Servi-Estufa" },
  { src: "/clients/los-cholos.webp", alt: "Logo de Los Cholos", name: "Los Cholos" },
  { src: "/clients/krasa-dermoestudio.webp", alt: "Logo de Krasa Dermoestudio", name: "Krasa Dermoestudio" },
  { src: "/clients/alcira-trigueros.webp", alt: "Logo de Alcira Trigueros", name: "Alcira Trigueros" },
  { src: "/clients/fundacion-alada.webp", alt: "Logo de Fundación Alada", name: "Fundación Alada" },
  { src: "/clients/reyes-echevers-petroni.webp", alt: "Logo de Reyes Echevers Petroni", name: "Reyes Echevers Petroni" }
];

// Ordenados primero por proyectos que generan mejor impresión al compartir el portafolio por WhatsApp.
export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "solmas-legal",
    name: "SOLMAS Legal",
    url: "https://solmaslegal.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Firma legal",
    description: "Web corporativa para firma legal con áreas de práctica, presentación de la firma y un tono institucional elegante.",
    services: ["Web corporativa", "Marca legal", "SEO inicial"],
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
    services: ["Web corporativa", "SEO base", "Formulario / WhatsApp"],
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
    featured: true
  },
  {
    slug: "orthoclinix",
    name: "OrthoClinix",
    url: "https://orthoclinix.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Clínica dental / ortodoncia",
    description: "Landing premium para clínica dental con enfoque visual boutique, confianza y solicitudes de cita.",
    services: ["Landing page", "Sector salud", "Citas / contacto"],
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
    featured: true
  },
  {
    slug: "veranieras",
    name: "Veranieras",
    url: "https://www.veranieras.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Moda y accesorios",
    description: "Landing visual para marca de accesorios, colección de producto y venta por WhatsApp con una estética muy cuidada.",
    services: ["Landing page", "Marca", "Venta por WhatsApp"],
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
    ctaLabel: "Ver plataforma",
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
    ctaLabel: "Ver acceso",
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
    featured: true
  },
  {
    slug: "cerebritos-panama",
    name: "Cerebritos Panamá",
    url: "https://cerebritospanama.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Educación infantil",
    description: "Página de captación para academia/estimulación infantil con estructura comercial, información clara y contacto directo.",
    services: ["Landing page", "Captación", "WhatsApp"],
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
    services: ["Landing page", "Catálogo visual", "CTA"]
  },
  {
    slug: "alcira-trigueros",
    name: "Alcira Trigueros Legal Inmobiliaria",
    url: "https://www.alciratrigueroslegalinmobila.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Legal e inmobiliario",
    description: "Presencia digital para servicios legales e inmobiliarios con enfoque en claridad, respaldo y contacto directo.",
    services: ["Landing page", "Marca personal", "Contacto"]
  },
  {
    slug: "enis-caicedo",
    name: "Enis Caicedo",
    url: "https://eniscaicedo.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Marca profesional",
    description: "Web corporativa o brand site para presentar perfil profesional, servicios, propuesta y canales de contacto.",
    services: ["Web corporativa", "Marca profesional", "Responsive"]
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
    services: ["Landing page", "Servicios", "CTA"]
  },
  {
    slug: "proselec-panama",
    name: "Proselec Panamá",
    url: "https://proselecpanama.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Servicios eléctricos / ingeniería",
    description: "Sitio corporativo para comunicar experiencia, servicios y canales de atención de la empresa.",
    services: ["Web corporativa", "Servicios", "Contacto"]
  },
  {
    slug: "dra-ivette-rios-diez",
    name: "Dra. Ivette Ríos Díez",
    url: "https://draivetteriosdiez.com/",
    type: "corporativa",
    typeLabel: "Web corporativa",
    industry: "Salud",
    description: "Web para marca profesional del sector salud con presentación, servicios y contacto orientado a confianza.",
    services: ["Web corporativa", "Marca profesional", "Responsive"]
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
    services: ["Landing page", "Estética", "Citas"]
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
    services: ["Landing page", "Servicios", "Responsive"]
  },
  {
    slug: "prisma-bm",
    name: "Prisma BM",
    url: "https://www.prismabm.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Business management",
    description: "Landing comercial para presentar servicios, proceso y llamada a la acción hacia contacto.",
    services: ["Landing page", "Consultoría", "Conversión"]
  },
  {
    slug: "servi-estufa",
    name: "Servi-Estufa",
    url: "https://www.serviestufa.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Servicios técnicos",
    description: "Página de captación para reparación y servicio técnico con foco en claridad, confianza y contacto rápido.",
    services: ["Landing page", "Servicio técnico", "WhatsApp"]
  },
  {
    slug: "audiomedica",
    name: "Audiomédica",
    url: "https://www.audiomedica.com.pa/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Salud auditiva",
    description: "Landing para servicios de salud auditiva con estructura informativa y conversión a contacto o cita.",
    services: ["Landing page", "Salud", "Contacto"]
  },
  {
    slug: "cle-property-management",
    name: "CLE Property Management",
    url: "https://clepropertymanagement.com/",
    type: "landing",
    typeLabel: "Landing page",
    industry: "Property management",
    description: "Landing para servicios de administración de propiedades con propuesta clara y captación de leads.",
    services: ["Landing page", "Property management", "Leads"]
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

export const portfolioStats = {
  totalProjects: portfolioProjects.length,
  featuredProjects: featuredPortfolioProjects.length,
  totalLandingPages: portfolioProjects.filter((project) => project.type === "landing").length,
  totalCorporateWebsites: portfolioProjects.filter((project) => project.type === "corporativa").length,
  totalSoftwareProjects: portfolioProjects.filter((project) => project.type === "software").length,
  supportBadge: "Entrega rápida",
  trustBadge: "Soporte inicial",
  seoBadge: "SEO base"
};
