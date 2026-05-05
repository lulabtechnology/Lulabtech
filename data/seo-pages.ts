import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export type RelatedLink = {
  label: string;
  href: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type ServicePage = {
  slug: string;
  eyebrow: string;
  h1: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  primaryCta: string;
  secondaryCta: string;
  heroBullets: string[];
  benefitsTitle: string;
  benefitsDescription: string;
  benefits: string[];
  processTitle: string;
  process: { title: string; description: string }[];
  useCasesTitle: string;
  useCasesDescription: string;
  useCases: { title: string; description: string }[];
  faq: FaqItem[];
  relatedLinks: RelatedLink[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "diseno-web-panama",
    eyebrow: "Diseño web en Panamá",
    h1: "Diseño web en Panamá para empresas que quieren verse profesionales y vender más",
    intro:
      "Creamos páginas web profesionales para negocios panameños que necesitan comunicar mejor su oferta, generar confianza y convertir visitantes en consultas reales por WhatsApp, formulario o correo.",
    metaTitle: "Diseño web en Panamá para empresas | Lulab Technology",
    metaDescription:
      "Diseño web en Panamá para empresas, marcas y negocios que necesitan una página profesional, responsive, clara, rápida y preparada para SEO local.",
    keywords: [
      "diseño web en Panamá",
      "diseño de páginas web Panamá",
      "páginas web profesionales Panamá",
      "agencia web Panamá"
    ],
    primaryCta: "Cotizar mi página web",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Diseño responsive para celular, tablet y escritorio",
      "Estructura comercial clara para explicar servicios y captar consultas",
      "Base preparada para SEO local, WhatsApp y campañas digitales"
    ],
    benefitsTitle: "Una página web diseñada para que tu negocio se entienda rápido",
    benefitsDescription:
      "No se trata solo de verse bonito. La web debe ordenar tu mensaje, explicar qué vendes y guiar al usuario hacia el contacto.",
    benefits: [
      "Jerarquía visual premium y moderna",
      "Textos comerciales orientados a dueños de negocio",
      "Botones de WhatsApp y formularios visibles",
      "Secciones para servicios, beneficios, proyectos, preguntas frecuentes y contacto",
      "Optimización básica de títulos, metadescripciones, enlaces internos y estructura semántica",
      "Diseño adaptable para que no se rompa en pantallas pequeñas"
    ],
    processTitle: "Proceso para crear una web profesional",
    process: [
      {
        title: "Diagnóstico del negocio",
        description:
          "Entendemos qué vendes, a quién le vendes, qué acción quieres lograr y qué debe comunicar la página desde el primer scroll."
      },
      {
        title: "Estructura y contenido",
        description:
          "Organizamos las secciones para que el visitante entienda rápido tus servicios, tu valor y cómo contactarte."
      },
      {
        title: "Diseño y desarrollo responsive",
        description:
          "Construimos una experiencia moderna, limpia y usable en móvil, cuidando estética, claridad y velocidad."
      },
      {
        title: "Publicación y base SEO",
        description:
          "Dejamos la web lista para compartir, conectar con WhatsApp, indexar en Google y crecer con contenido o campañas."
      }
    ],
    useCasesTitle: "Ideal para negocios que necesitan presencia digital seria",
    useCasesDescription:
      "Funciona para empresas de servicios, firmas legales, clínicas, restaurantes, academias, inmobiliarias, logística y marcas personales que necesitan verse más confiables.",
    useCases: [
      {
        title: "Páginas informativas",
        description:
          "Para explicar quién eres, qué servicios ofreces, horarios, ubicación, beneficios y contacto en una estructura sencilla y profesional."
      },
      {
        title: "Páginas para abogados",
        description:
          "Para comunicar áreas de práctica, experiencia, confianza, datos de contacto y llamadas a consulta sin verse genérico."
      },
      {
        title: "Páginas corporativas",
        description:
          "Para empresas que necesitan mostrar servicios, equipo, respaldo, proyectos, certificaciones y canales de atención."
      }
    ],
    faq: [
      {
        question: "¿Una página web profesional ayuda a vender más?",
        answer:
          "Ayuda a que el cliente entienda rápido qué haces, confíe más en tu negocio y tenga un camino claro para escribirte o cotizar."
      },
      {
        question: "¿La página queda lista para Google?",
        answer:
          "Sí. Se trabaja una base de SEO on-page con títulos, metadescripción, estructura H1/H2, sitemap, robots y enlaces internos."
      },
      {
        question: "¿Puedo conectar WhatsApp?",
        answer:
          "Sí. Podemos agregar botones, mensajes precargados y rutas de contacto para que el usuario escriba sin perderse."
      }
    ],
    relatedLinks: [
      { label: "Landing pages en Panamá", href: "/landing-pages-panama" },
      { label: "Páginas web para empresas", href: "/paginas-web-empresas-panama" },
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  },
  {
    slug: "landing-pages-panama",
    eyebrow: "Landing pages en Panamá",
    h1: "Landing pages en Panamá para captar clientes por WhatsApp, formularios y campañas",
    intro:
      "Diseñamos landing pages enfocadas en una oferta clara, un llamado a la acción visible y una ruta directa para que el usuario escriba, cotice o deje sus datos.",
    metaTitle: "Landing pages en Panamá para WhatsApp y campañas | Lulab Technology",
    metaDescription:
      "Landing pages en Panamá para captar clientes desde WhatsApp, formularios, Meta Ads y Google Ads con diseño responsive y enfoque comercial.",
    keywords: [
      "landing pages Panamá",
      "landing page para WhatsApp Panamá",
      "landing page para Google Ads Panamá",
      "página one page Panamá"
    ],
    primaryCta: "Quiero una landing page",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Una página enfocada en una oferta o campaña específica",
      "CTA claro hacia WhatsApp, formulario o llamada",
      "Diseño rápido, responsive y preparado para campañas digitales"
    ],
    benefitsTitle: "Una landing page debe explicar, convencer y mover a la acción",
    benefitsDescription:
      "La landing elimina distracciones y concentra la atención en una oferta, servicio o campaña para aumentar la probabilidad de contacto.",
    benefits: [
      "Hero fuerte con propuesta de valor clara",
      "Beneficios y servicios explicados sin saturar",
      "Formulario o WhatsApp visible durante el recorrido",
      "Sección de confianza, preguntas frecuentes y CTA final",
      "Base para medir campañas de Meta Ads o Google Ads",
      "Experiencia móvil pensada para usuarios que llegan desde anuncios"
    ],
    processTitle: "Cómo trabajamos una landing page",
    process: [
      {
        title: "Oferta principal",
        description:
          "Definimos qué servicio, producto o promoción debe comunicar la landing para evitar mensajes dispersos."
      },
      {
        title: "Ruta de conversión",
        description:
          "Definimos si el usuario debe escribir por WhatsApp, llenar formulario, llamar o solicitar información."
      },
      {
        title: "Diseño y contenido",
        description:
          "Creamos una estructura visual clara, con textos persuasivos y secciones que refuercen confianza."
      },
      {
        title: "Publicación para campañas",
        description:
          "La dejamos lista para compartir, medir y conectar con campañas de Meta Ads, Google Ads o tráfico orgánico."
      }
    ],
    useCasesTitle: "Cuándo conviene una landing page",
    useCasesDescription:
      "Es ideal cuando quieres vender un servicio puntual, validar una oferta, lanzar una campaña o convertir tráfico de redes y anuncios.",
    useCases: [
      {
        title: "Servicios profesionales",
        description:
          "Abogados, clínicas, asesores, inmobiliarias y consultores que necesitan explicar una oferta y captar consultas."
      },
      {
        title: "Campañas de anuncios",
        description:
          "Meta Ads y Google Ads funcionan mejor cuando el anuncio lleva a una página alineada con la promesa del anuncio."
      },
      {
        title: "Negocios que venden por WhatsApp",
        description:
          "La landing puede funcionar como carta de presentación y filtro antes de que el cliente escriba."
      }
    ],
    faq: [
      {
        question: "¿Una landing page es lo mismo que una web completa?",
        answer:
          "No exactamente. La landing se enfoca en una oferta o acción principal. Una web completa puede tener más páginas, secciones y profundidad."
      },
      {
        question: "¿Sirve para campañas de Google Ads?",
        answer:
          "Sí. Una landing bien alineada con la búsqueda y el anuncio puede mejorar la claridad del mensaje y la conversión."
      },
      {
        question: "¿Puede tener formulario y WhatsApp?",
        answer:
          "Sí. Se puede combinar formulario, WhatsApp, correo, teléfono y botones estratégicos según el objetivo."
      }
    ],
    relatedLinks: [
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Google Ads en Panamá", href: "/google-ads-panama" },
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  },
  {
    slug: "paginas-web-empresas-panama",
    eyebrow: "Webs corporativas",
    h1: "Páginas web para empresas en Panamá",
    intro:
      "Construimos páginas web corporativas para empresas que necesitan una presencia formal, clara y confiable, con secciones para servicios, equipo, experiencia, proyectos y contacto.",
    metaTitle: "Páginas web para empresas en Panamá | Lulab Technology",
    metaDescription:
      "Páginas web corporativas para empresas en Panamá con diseño profesional, servicios, contacto, portafolio, SEO básico y experiencia responsive.",
    keywords: [
      "páginas web para empresas Panamá",
      "web corporativa Panamá",
      "sitio web empresarial Panamá",
      "diseño web corporativo Panamá"
    ],
    primaryCta: "Crear web para mi empresa",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Estructura formal para presentar empresa, servicios y respaldo",
      "Diseño premium, limpio y alineado con la identidad de marca",
      "Contacto claro por WhatsApp, formulario, correo y redes"
    ],
    benefitsTitle: "Una web corporativa debe transmitir seriedad desde el primer vistazo",
    benefitsDescription:
      "Para muchas empresas, la web es el primer punto de validación. Debe verse profesional, cargar bien y explicar la propuesta sin confundir.",
    benefits: [
      "Secciones para servicios, empresa, beneficios, proyectos y contacto",
      "Diseño adaptable para ejecutivos, clientes y visitantes móviles",
      "Textos orientados a credibilidad y claridad comercial",
      "Estructura preparada para SEO básico y futuras páginas internas",
      "Integración con WhatsApp, correo y formularios",
      "Base visual consistente para empresas que quieren verse más serias"
    ],
    processTitle: "Proceso para una página corporativa",
    process: [
      {
        title: "Mapa de secciones",
        description:
          "Definimos qué debe tener la web: inicio, servicios, sobre la empresa, proyectos, contacto, FAQ y otras secciones necesarias."
      },
      {
        title: "Mensaje corporativo",
        description:
          "Ordenamos el contenido para que la empresa comunique seriedad, experiencia y valor de forma sencilla."
      },
      {
        title: "Diseño y desarrollo",
        description:
          "Construimos una experiencia moderna, responsive y consistente con la marca."
      },
      {
        title: "Entrega y publicación",
        description:
          "Publicamos la web y dejamos rutas claras para compartirla, medirla y seguirla mejorando."
      }
    ],
    useCasesTitle: "Tipos de empresas que pueden beneficiarse",
    useCasesDescription:
      "Una web corporativa funciona para negocios que necesitan explicar servicios, generar confianza y facilitar contacto profesional.",
    useCases: [
      {
        title: "Firmas legales y consultorías",
        description:
          "Presentación de áreas de práctica, experiencia, perfil profesional y canales de consulta."
      },
      {
        title: "Empresas logísticas e industriales",
        description:
          "Comunicación de servicios, procesos, cobertura, respaldo y atención comercial."
      },
      {
        title: "Academias, clínicas e inmobiliarias",
        description:
          "Estructuras para programas, servicios, ubicaciones, reservas, contacto y confianza institucional."
      }
    ],
    faq: [
      {
        question: "¿Una web corporativa puede tener varias páginas?",
        answer:
          "Sí. Puede ser una landing completa o una web con páginas internas según el tamaño de la empresa y el objetivo SEO."
      },
      {
        question: "¿Puede incluir portafolio o proyectos?",
        answer:
          "Sí. Se puede incluir una sección o página de proyectos para mostrar experiencia sin inventar resultados ni datos falsos."
      },
      {
        question: "¿La web se puede ampliar después?",
        answer:
          "Sí. La estructura puede quedar preparada para agregar blog, páginas de servicios, formularios avanzados o integraciones."
      }
    ],
    relatedLinks: [
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  },
  {
    slug: "tiendas-online-panama",
    eyebrow: "Ecommerce en Panamá",
    h1: "Tiendas online en Panamá para vender productos de forma profesional",
    intro:
      "Creamos tiendas online y catálogos digitales para negocios que venden por Instagram, WhatsApp o tienda física y quieren presentar productos con más orden, confianza y capacidad de escalar.",
    metaTitle: "Tiendas online en Panamá y ecommerce | Lulab Technology",
    metaDescription:
      "Tiendas online en Panamá para vender productos con catálogo, categorías, carrito, pagos o WhatsApp, experiencia móvil y estructura para crecer.",
    keywords: [
      "tiendas online Panamá",
      "ecommerce Panamá",
      "crear tienda online Panamá",
      "catálogo digital Panamá"
    ],
    primaryCta: "Cotizar tienda online",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Catálogo de productos con categorías y fichas claras",
      "Opciones de carrito, pagos o cotización por WhatsApp",
      "Diseño móvil para clientes que compran desde redes sociales"
    ],
    benefitsTitle: "Una tienda online debe hacer que comprar o consultar sea fácil",
    benefitsDescription:
      "El objetivo no es solo subir productos. La experiencia debe ordenar el catálogo, generar confianza y reducir fricción para el cliente.",
    benefits: [
      "Catálogo organizado por categorías",
      "Páginas de producto con información clara",
      "Ruta hacia carrito, pago, formulario o WhatsApp",
      "Diseño responsive enfocado en compra móvil",
      "Estructura para crecer con más productos y campañas",
      "Base para conectar métricas, Pixel o Google según el alcance"
    ],
    processTitle: "Proceso para crear una tienda online",
    process: [
      {
        title: "Definición del catálogo",
        description:
          "Organizamos categorías, productos, atributos, fotos, precios y forma de contacto o compra."
      },
      {
        title: "Experiencia de compra",
        description:
          "Definimos si el flujo será con carrito, pago online, WhatsApp, formulario o una combinación."
      },
      {
        title: "Diseño visual",
        description:
          "Construimos una tienda clara, rápida y usable en celular, cuidando producto, confianza y navegación."
      },
      {
        title: "Publicación y mejora",
        description:
          "La tienda queda lista para compartir, conectar con campañas y seguir ampliando productos o secciones."
      }
    ],
    useCasesTitle: "Ideal para negocios que quieren formalizar sus ventas digitales",
    useCasesDescription:
      "Especialmente útil si hoy vendes por Instagram, WhatsApp o atención directa, pero quieres una vitrina más ordenada y profesional.",
    useCases: [
      {
        title: "Catálogos con WhatsApp",
        description:
          "El cliente ve productos, entiende detalles y escribe con una consulta más clara."
      },
      {
        title: "Tiendas con carrito",
        description:
          "Para negocios que desean una experiencia de compra más completa con productos y proceso de pedido."
      },
      {
        title: "Marcas que escalan por campañas",
        description:
          "Una tienda bien estructurada ayuda a recibir tráfico de anuncios y presentar productos con más seriedad."
      }
    ],
    faq: [
      {
        question: "¿La tienda puede vender por WhatsApp?",
        answer:
          "Sí. Puede funcionar como catálogo profesional con botones de WhatsApp para que el cliente consulte productos específicos."
      },
      {
        question: "¿Puede tener pagos online?",
        answer:
          "Sí, dependiendo del alcance y la pasarela que el negocio quiera utilizar. También se puede empezar con una estructura más sencilla."
      },
      {
        question: "¿Sirve para negocios que venden por Instagram?",
        answer:
          "Sí. La tienda ayuda a ordenar productos, dar más confianza y tener un enlace profesional para campañas y redes."
      }
    ],
    relatedLinks: [
      { label: "Landing pages en Panamá", href: "/landing-pages-panama" },
      { label: "Google Ads en Panamá", href: "/google-ads-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" }
    ]
  },
  {
    slug: "software-a-medida-panama",
    eyebrow: "Software a medida en Panamá",
    h1: "Software a medida en Panamá para automatizar procesos de tu empresa",
    intro:
      "Desarrollamos sistemas digitales para empresas que ya no pueden manejar su operación solo con Excel, WhatsApp o procesos manuales. Creamos paneles, módulos, reservas, inventarios, reportes y flujos personalizados.",
    metaTitle: "Software a medida en Panamá para empresas | Lulab Technology",
    metaDescription:
      "Software a medida en Panamá para automatizar procesos: paneles administrativos, reservas, inventarios, casilleros, restaurantes, reportes y bases de datos.",
    keywords: [
      "software a medida Panamá",
      "sistemas web Panamá",
      "software para empresas Panamá",
      "automatización de procesos Panamá"
    ],
    primaryCta: "Cotizar sistema a medida",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Paneles administrativos, usuarios, permisos y reportes",
      "Bases de datos para ordenar información y reducir trabajo manual",
      "Módulos personalizados según el flujo real de tu empresa"
    ],
    benefitsTitle: "Cuando Excel y WhatsApp ya no alcanzan, necesitas un sistema",
    benefitsDescription:
      "Un software a medida permite controlar procesos, centralizar datos y reducir errores operativos con una herramienta diseñada para tu forma de trabajar.",
    benefits: [
      "Módulos para clientes, productos, reservas, pagos, estados o reportes",
      "Usuarios con roles y permisos según el equipo",
      "Panel administrativo para controlar la operación",
      "Base de datos estructurada para consultar información rápido",
      "Exportaciones, filtros, estados y seguimiento",
      "Diseño responsive para uso desde computadoras o móviles según el caso"
    ],
    processTitle: "Proceso para crear software a medida",
    process: [
      {
        title: "Levantamiento del proceso",
        description:
          "Entendemos cómo trabaja la empresa hoy, dónde se pierde tiempo y qué información debe ordenarse."
      },
      {
        title: "Definición de módulos",
        description:
          "Aterrizamos qué pantallas, roles, reportes, estados y flujos necesita el sistema."
      },
      {
        title: "Desarrollo por etapas",
        description:
          "Construimos el sistema cuidando base de datos, seguridad, experiencia y pruebas."
      },
      {
        title: "Entrega y ajustes",
        description:
          "Se entrega una primera versión funcional y se ajusta según el uso real del equipo."
      }
    ],
    useCasesTitle: "Ejemplos de software que podemos construir",
    useCasesDescription:
      "Cada sistema se cotiza según alcance, módulos y complejidad. La idea es crear una herramienta que se adapte al negocio, no al revés.",
    useCases: [
      {
        title: "Software para casilleros y logística",
        description:
          "Clientes, casilleros, contenedores, envíos, estados, comprobantes, facturación y panel administrativo."
      },
      {
        title: "Software para restaurantes",
        description:
          "Ventas, inventario, horarios, empleados, reportes, estados de pago y control operativo interno."
      },
      {
        title: "Sistemas de reservas",
        description:
          "Servicios, disponibilidad, solicitudes, aprobaciones, correos, estados y panel de administración."
      },
      {
        title: "Sistemas de inventario",
        description:
          "Productos, códigos, ubicaciones, estados, responsables, transferencias y reportes."
      }
    ],
    faq: [
      {
        question: "¿Un software a medida es diferente a una página web?",
        answer:
          "Sí. Una página web comunica y capta clientes. Un software a medida ayuda a operar, administrar información y automatizar procesos internos."
      },
      {
        question: "¿Se puede hacer por etapas?",
        answer:
          "Sí. Lo más sano suele ser construir una primera versión con los módulos esenciales y luego ampliar según uso real."
      },
      {
        question: "¿Puede tener usuarios y permisos?",
        answer:
          "Sí. Podemos crear roles para administradores, empleados, clientes u otros perfiles según el flujo del sistema."
      }
    ],
    relatedLinks: [
      { label: "Páginas web para empresas", href: "/paginas-web-empresas-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  },
  {
    slug: "google-ads-panama",
    eyebrow: "Google Ads en Panamá",
    h1: "Configuración de Google Ads en Panamá para negocios que quieren recibir más consultas",
    intro:
      "Configuramos campañas de búsqueda en Google Ads para negocios que quieren aparecer cuando las personas ya están buscando servicios como los suyos. La campaña debe ir conectada a una web o landing clara para convertir mejor.",
    metaTitle: "Configuración de Google Ads en Panamá | Lulab Technology",
    metaDescription:
      "Configuración de Google Ads en Panamá: palabras clave, anuncios, ubicación, extensiones y conexión con landing page o página web. Pauta no incluida.",
    keywords: [
      "Google Ads Panamá",
      "configuración Google Ads Panamá",
      "campañas de Google Panamá",
      "anuncios en Google Panamá"
    ],
    primaryCta: "Configurar Google Ads",
    secondaryCta: "Ver landing pages",
    heroBullets: [
      "Investigación inicial de palabras clave y términos negativos",
      "Configuración de ubicación, anuncios y estructura de campaña",
      "Conexión con landing page, WhatsApp o formulario"
    ],
    benefitsTitle: "Google Ads funciona mejor cuando la página está preparada para convertir",
    benefitsDescription:
      "No basta con activar anuncios. La búsqueda, el anuncio y la página deben estar alineados para que el usuario encuentre rápido lo que necesita.",
    benefits: [
      "Configuración de campaña de búsqueda según servicio y zona",
      "Grupos de anuncios organizados por intención",
      "Anuncios con mensajes claros y llamados a la acción",
      "Palabras clave negativas iniciales para filtrar búsquedas no útiles",
      "Recomendación de landing page o página de destino",
      "Aclaración de que la pauta publicitaria se paga aparte y no se garantizan resultados"
    ],
    processTitle: "Qué incluye la configuración inicial",
    process: [
      {
        title: "Objetivo y servicio",
        description:
          "Definimos qué quiere conseguir el negocio y qué servicio o producto se va a anunciar."
      },
      {
        title: "Palabras clave y anuncios",
        description:
          "Se organizan keywords, negativos iniciales, títulos, descripciones y llamadas a la acción."
      },
      {
        title: "Ubicación y enlaces",
        description:
          "Se configura la zona de Panamá, horarios si aplica y destino hacia landing, web, WhatsApp o formulario."
      },
      {
        title: "Entrega y recomendaciones",
        description:
          "Se deja la campaña preparada y se explican puntos importantes para medir y optimizar después."
      }
    ],
    useCasesTitle: "Negocios que pueden usar Google Ads",
    useCasesDescription:
      "Google Ads puede ayudar cuando existe intención de búsqueda: personas buscando abogados, clínicas, restaurantes, servicios técnicos, cursos o soluciones empresariales.",
    useCases: [
      {
        title: "Servicios profesionales",
        description:
          "Abogados, contadores, asesores, consultores, inmobiliarias y clínicas que buscan consultas más directas."
      },
      {
        title: "Negocios locales",
        description:
          "Restaurantes, academias, servicios a domicilio y empresas con atención por WhatsApp o llamada."
      },
      {
        title: "Empresas B2B",
        description:
          "Compañías que venden servicios industriales, logísticos, tecnología o soluciones especializadas."
      }
    ],
    faq: [
      {
        question: "¿La pauta publicitaria está incluida?",
        answer:
          "No. La inversión que se paga a Google Ads no está incluida y la define el cliente según presupuesto."
      },
      {
        question: "¿Se garantizan ventas o leads?",
        answer:
          "No se prometen resultados garantizados. Se configura una base correcta y se recomienda medir, optimizar y mejorar la página de destino."
      },
      {
        question: "¿Necesito una landing page?",
        answer:
          "Es muy recomendable. Una landing bien enfocada ayuda a que la persona que llega desde Google entienda la oferta y contacte con menos fricción."
      }
    ],
    relatedLinks: [
      { label: "Landing pages en Panamá", href: "/landing-pages-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  }
];

export const servicePageSlugs = servicePages.map((page) => page.slug);

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function getServicePageOrThrow(slug: string) {
  const page = getServicePage(slug);

  if (!page) {
    throw new Error(`Service page not found: ${slug}`);
  }

  return page;
}

export function createServicePageMetadata(slug: string): Metadata {
  const page = getServicePageOrThrow(slug);
  const url = `${baseUrl}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      type: "website",
      url,
      title: page.metaTitle,
      description: page.metaDescription,
      siteName: SITE_NAME,
      locale: "es_PA",
      images: [
        {
          url: "/og/og-cover.png?v=7",
          width: 1200,
          height: 630,
          alt: page.h1
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: ["/og/og-cover.png?v=7"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}

export const projectPortfolio = [
  {
    name: "Krasa Dermoestudio",
    type: "Landing page estética",
    description:
      "Landing comercial para presentar servicios estéticos, reforzar confianza visual y facilitar solicitudes de cita.",
    services: ["Landing page", "Diseño responsive", "CTA a contacto"],
    image: "/projects/landing/landing-02.png"
  },
  {
    name: "Nova Shipping Services",
    type: "Software para casilleros y logística",
    description:
      "Portal y sistema administrativo para organizar clientes, casilleros, envíos, contenedores, estados y comprobantes.",
    services: ["Software a medida", "Panel admin", "Portal cliente"],
    image: "/projects/software/software-01.png"
  },
  {
    name: "Biofest Panamá",
    type: "Landing turística y reservas",
    description:
      "Experiencia visual para presentar tours, locaciones, información bilingüe y flujo de reservas.",
    services: ["Landing page", "Reservas", "Bilingüe ES/EN"],
    image: "/projects/landing/landing-04.png"
  },
  {
    name: "Quality Techno Services",
    type: "Web corporativa industrial",
    description:
      "Sitio corporativo para explicar servicios técnicos, respaldo profesional y canales de contacto claros.",
    services: ["Web corporativa", "Formulario", "WhatsApp"],
    image: "/projects/Corporate/corporate-02.png"
  },
  {
    name: "Solarled",
    type: "Landing de energía solar",
    description:
      "Página comercial para comunicar servicios solares, certificaciones, beneficios y contacto directo.",
    services: ["Landing page", "Diseño visual", "CTA comercial"],
    image: "/projects/Corporate/corporate-03.png"
  },
  {
    name: "Transformación 360",
    type: "Sistema de reservas",
    description:
      "Sistema web para gestionar servicios, disponibilidad, reservas, estados y panel administrativo.",
    services: ["Software a medida", "Reservas", "Panel admin"],
    image: "/projects/software/software-02.png"
  },
  {
    name: "Alcira Trigueros Asesora Legal Inmobiliaria",
    type: "Web legal inmobiliaria",
    description:
      "Presencia digital para comunicar servicios legales e inmobiliarios con tono profesional y elegante.",
    services: ["Web corporativa", "Marca personal", "SEO inicial"],
    image: "/projects/Corporate/corporate-01.png"
  },
  {
    name: "ALAF International Academy",
    type: "Web educativa",
    description:
      "Estructura digital para academia, programas, comunicación institucional y experiencia responsive.",
    services: ["Web educativa", "Estructura de cursos", "Responsive"],
    image: "/projects/Corporate/corporate-04.png"
  }
];
