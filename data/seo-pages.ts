import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export type ServiceLocale = "es" | "en";

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
  heroPanelTitle: string;
  heroPanelDescription: string;
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
  priceFrom?: string;
  priceNote?: string;
};

const servicePagesEs: ServicePage[] = [
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
    heroPanelTitle: "Una presencia digital clara, rápida y lista para captar clientes.",
    heroPanelDescription:
      "Ordenamos el mensaje, diseñamos una experiencia profesional y dejamos una base preparada para crecer con Google, WhatsApp y campañas digitales.",
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
      { label: "Páginas web corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Ver proyectos", href: "/portafolio" }
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
    heroPanelTitle: "Una página enfocada en una acción: que el cliente te contacte.",
    heroPanelDescription:
      "Construimos una ruta directa entre el anuncio, la oferta y el WhatsApp o formulario para reducir fricción y captar oportunidades reales.",
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
      { label: "Ver proyectos", href: "/portafolio" }
    ]
  },
  {
    slug: "paginas-web-corporativas-panama",
    eyebrow: "Webs corporativas",
    h1: "Páginas web corporativas en Panamá",
    intro:
      "Construimos páginas web corporativas para empresas que necesitan una presencia formal, clara y confiable, con secciones para servicios, equipo, experiencia, proyectos y contacto.",
    metaTitle: "Páginas web corporativas en Panamá | Lulab Technology",
    metaDescription:
      "Páginas web corporativas para empresas en Panamá con diseño profesional, servicios, contacto, portafolio, SEO básico y experiencia responsive.",
    keywords: [
      "páginas web corporativas Panamá",
      "web corporativa Panamá",
      "sitio web empresarial Panamá",
      "diseño web corporativo Panamá"
    ],
    primaryCta: "Crear web para mi empresa",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una web corporativa que ordena tu empresa y transmite confianza.",
    heroPanelDescription:
      "Presentamos servicios, respaldo, equipo, experiencia y contacto en una estructura profesional que se entiende rápido.",
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
      { label: "Ver proyectos", href: "/portafolio" }
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
    heroPanelTitle: "Una vitrina digital ordenada para vender con más confianza.",
    heroPanelDescription:
      "Convertimos productos, categorías y consultas en una experiencia clara para clientes que compran desde móvil, redes sociales o WhatsApp.",
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
    heroPanelTitle: "Un sistema diseñado alrededor del flujo real de tu operación.",
    heroPanelDescription:
      "Creamos paneles, módulos, usuarios, reportes y bases de datos para ordenar procesos que ya no deberían vivir solo en Excel o WhatsApp.",
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
      { label: "Páginas web corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Ver proyectos", href: "/portafolio" }
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
    heroPanelTitle: "Campañas de búsqueda conectadas a una página preparada para convertir.",
    heroPanelDescription:
      "La pauta funciona mejor cuando palabras clave, anuncios y landing están alineados con una intención clara de contacto.",
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
      { label: "Ver proyectos", href: "/portafolio" }
    ]
  }
,

  {
    slug: "software-para-restaurantes-panama",
    eyebrow: "Software para restaurantes en Panamá",
    h1: "Software para restaurantes en Panamá para controlar ventas, caja e inventario",
    intro:
      "Desarrollamos sistemas para restaurantes, cafeterías y negocios de comida en Panamá que necesitan vender más ordenado, controlar turnos de caja, registrar gastos, medir productos y administrar operaciones desde un panel propio.",
    metaTitle: "Software para restaurantes en Panamá desde $899 | LulabTech",
    metaDescription:
      "Software para restaurantes en Panamá con POS, caja, ventas, productos, inventario, reportes, usuarios y panel administrativo desde $899 según alcance.",
    keywords: [
      "software para restaurantes en Panamá",
      "sistema POS Panamá",
      "software para cafeterías Panamá",
      "sistema de ventas para restaurantes Panamá"
    ],
    primaryCta: "Cotizar software para restaurante",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Un sistema hecho para la operación diaria del negocio.",
    heroPanelDescription:
      "La idea es que ventas, caja, productos, gastos y reportes vivan en un solo flujo, con roles claros y datos útiles para tomar decisiones.",
    heroBullets: [
      "Registro de ventas, métodos de pago, turnos y cierres de caja",
      "Productos, categorías, inventario, recetas y movimientos según alcance",
      "Reportes para entender ventas, gastos, productos más vendidos y control interno"
    ],
    benefitsTitle: "Más orden para vender, cerrar caja y revisar el negocio",
    benefitsDescription:
      "Un restaurante necesita velocidad, control y datos claros. El sistema puede adaptarse al flujo real del local para evitar hojas sueltas y cálculos manuales.",
    benefits: [
      "Panel para administradores y colaboradores",
      "Ventas rápidas con productos y métodos de pago",
      "Caja con apertura, cierre y control por turno",
      "Gestión de productos, categorías e inventario según necesidad",
      "Reportes de ventas, gastos y rendimiento",
      "Base preparada para crecer con facturas, asistencia o módulos internos"
    ],
    processTitle: "Cómo se construye un sistema para restaurante",
    process: [
      {
        title: "Mapeo del flujo",
        description:
          "Revisamos cómo venden, cómo cobran, cómo cierran caja y qué información necesitan ver los dueños o administradores."
      },
      {
        title: "Definición de módulos",
        description:
          "Aterrizamos POS, caja, productos, inventario, gastos, reportes, usuarios y cualquier módulo adicional requerido."
      },
      {
        title: "Desarrollo y pruebas",
        description:
          "Construimos el sistema con datos de prueba y validamos que el flujo sea entendible para el equipo."
      },
      {
        title: "Entrega y ajustes",
        description:
          "Se publica, se revisa con el cliente y se ajustan detalles operativos antes de usarlo de forma estable."
      }
    ],
    useCasesTitle: "Ideal para negocios de comida que quieren control real",
    useCasesDescription:
      "Puede adaptarse a salchipaperías, cafeterías, food trucks, restaurantes pequeños, dark kitchens o negocios con varios colaboradores.",
    useCases: [
      {
        title: "POS interno",
        description:
          "Pantalla de ventas rápida para registrar productos, cantidades, métodos de pago y facturas si el alcance lo requiere."
      },
      {
        title: "Control de caja",
        description:
          "Apertura y cierre de turnos, efectivo, Yappy u otros métodos, diferencias y revisión administrativa."
      },
      {
        title: "Reportes de operación",
        description:
          "Ventas por día, productos más vendidos, gastos y métricas útiles para decidir con más claridad."
      }
    ],
    faq: [
      {
        question: "¿El sistema sirve como POS?",
        answer:
          "Sí. Puede incluir un flujo POS para registrar ventas, productos, pagos y cierres, siempre ajustado al alcance acordado."
      },
      {
        question: "¿Puede tener inventario?",
        answer:
          "Sí. Se puede trabajar inventario simple o más avanzado con insumos, recetas y movimientos según lo que necesite el restaurante."
      },
      {
        question: "¿El precio es cerrado?",
        answer:
          "No. El precio inicia desde $899 y puede variar por módulos, reportes, usuarios, facturación, integraciones y complejidad operativa."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" },
      { label: "Cuánto cuesta una página web", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
    ]
  },
  {
    slug: "software-para-casilleros-panama",
    eyebrow: "Software para casilleros y logística en Panamá",
    h1: "Software para casilleros y logística en Panamá con tracking, clientes y administración",
    intro:
      "Creamos sistemas para casilleros, courier, carga y logística en Panamá que necesitan organizar clientes, paquetes, contenedores, estados, comprobantes, cobros y comunicación desde una plataforma propia.",
    metaTitle: "Software para casilleros y logística en Panamá | LulabTech",
    metaDescription:
      "Software para casilleros en Panamá con clientes, tracking, paquetes, contenedores, estados, comprobantes, facturación o panel administrativo desde $899.",
    keywords: [
      "software para casilleros Panamá",
      "software de logística Panamá",
      "sistema courier Panamá",
      "tracking de paquetes Panamá"
    ],
    primaryCta: "Cotizar sistema de casilleros",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una plataforma para ordenar la operación logística.",
    heroPanelDescription:
      "El sistema puede centralizar clientes, tracking, paquetes, estados, evidencias, cobros y reportes para reducir trabajo manual.",
    heroBullets: [
      "Registro de clientes, casilleros, paquetes y estados",
      "Tracking y comunicación para clientes según el flujo del negocio",
      "Panel administrativo con filtros, documentos, cobros y reportes"
    ],
    benefitsTitle: "Menos desorden operativo y más visibilidad para el cliente",
    benefitsDescription:
      "Un negocio de casilleros o logística necesita información clara, trazabilidad y control. La plataforma se diseña alrededor del flujo real de la empresa.",
    benefits: [
      "Clientes y cuentas organizadas",
      "Estados de paquetes o cargas por etapa",
      "Subida de comprobantes, documentos o evidencias según alcance",
      "Panel administrativo con búsqueda y filtros",
      "Rutas de comunicación con WhatsApp o correo",
      "Base para reportes, cobros, facturas o módulos financieros"
    ],
    processTitle: "Proceso para crear un software logístico",
    process: [
      {
        title: "Flujo operativo",
        description:
          "Definimos cómo entra una carga, cómo cambia de estado, quién actualiza información y qué ve el cliente."
      },
      {
        title: "Módulos y roles",
        description:
          "Separamos lo que hará el administrador, el personal operativo y el cliente final."
      },
      {
        title: "Desarrollo por etapas",
        description:
          "Construimos el sistema con módulos claros para probar tracking, clientes, documentos y reportes."
      },
      {
        title: "Publicación segura",
        description:
          "El sistema queda preparado para uso interno, con accesos, rutas, formularios y datos organizados."
      }
    ],
    useCasesTitle: "Ideal para courier, casilleros, cargas y operación interna",
    useCasesDescription:
      "Funciona para empresas que hoy manejan datos en Excel, WhatsApp o procesos manuales y quieren centralizar la información.",
    useCases: [
      {
        title: "Portal de cliente",
        description:
          "El cliente puede consultar estados, datos básicos, avisos o documentos según el alcance del sistema."
      },
      {
        title: "Panel de operaciones",
        description:
          "El equipo puede actualizar paquetes, cargas, contenedores, estados y notas internas."
      },
      {
        title: "Control comercial",
        description:
          "Se pueden agregar cobros, facturas, comprobantes, reportes o módulos financieros por etapa."
      }
    ],
    faq: [
      {
        question: "¿Puede tener tracking para clientes?",
        answer:
          "Sí. Se puede crear un portal o consulta por código para que el cliente vea estados y datos permitidos."
      },
      {
        question: "¿Sirve para carga marítima o aérea?",
        answer:
          "Sí, siempre que se defina el flujo real: paquetes, contenedores, guías, casilleros, estados y documentos."
      },
      {
        question: "¿Puede crecer por módulos?",
        answer:
          "Sí. Puede iniciar con clientes y tracking, y luego sumar facturación, finanzas, rutas, reportes o portal avanzado."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "Ver proyectos", href: "/portafolio" }
    ]
  },
  {
    slug: "diseno-web-para-abogados-panama",
    eyebrow: "Diseño web para abogados en Panamá",
    h1: "Diseño web para abogados en Panamá con imagen profesional y contacto claro",
    intro:
      "Creamos landing pages y páginas web para abogados, firmas legales y asesores en Panamá que necesitan presentar áreas de práctica, generar confianza y facilitar solicitudes de consulta por WhatsApp, formulario o correo.",
    metaTitle: "Diseño web para abogados en Panamá desde $149 | LulabTech",
    metaDescription:
      "Diseño web para abogados en Panamá: landing pages y webs corporativas legales con servicios, confianza, WhatsApp, SEO local y contenido profesional desde $149.",
    keywords: [
      "diseño web para abogados Panamá",
      "páginas web para abogados Panamá",
      "landing page abogados Panamá",
      "web legal Panamá"
    ],
    primaryCta: "Cotizar web legal",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una presencia legal seria, clara y sin verse genérica.",
    heroPanelDescription:
      "El objetivo es comunicar especialidad, experiencia y canales de consulta con un diseño sobrio, elegante y preparado para SEO local.",
    heroBullets: [
      "Secciones para áreas de práctica, perfil, beneficios y contacto",
      "CTA hacia WhatsApp, formulario o correo profesional",
      "Base SEO para búsquedas legales en Panamá"
    ],
    benefitsTitle: "Una web legal debe transmitir confianza desde el primer vistazo",
    benefitsDescription:
      "Para un abogado, la página debe verse seria, ordenar servicios y facilitar que el posible cliente solicite orientación sin confundirse.",
    benefits: [
      "Diseño sobrio y profesional",
      "Textos comerciales sin promesas exageradas",
      "Áreas de práctica presentadas con claridad",
      "Perfil profesional y señales de confianza",
      "WhatsApp y formulario visibles",
      "SEO inicial para búsquedas locales"
    ],
    processTitle: "Proceso para una página legal",
    process: [
      {
        title: "Definir enfoque",
        description:
          "Aterrizamos si será landing page para captar consultas o web corporativa con más profundidad."
      },
      {
        title: "Ordenar servicios legales",
        description:
          "Organizamos áreas de práctica, perfil, diferenciales y preguntas frecuentes reales."
      },
      {
        title: "Diseño y copy",
        description:
          "Construimos una presencia elegante con lenguaje claro y una ruta de contacto directa."
      },
      {
        title: "Publicación SEO",
        description:
          "La web queda con metadata, estructura semántica, sitemap, robots y enlaces internos."
      }
    ],
    useCasesTitle: "Ideal para profesionales y firmas legales",
    useCasesDescription:
      "Puede servir para abogados independientes, firmas pequeñas, servicios migratorios, inmobiliarios, corporativos, familia, laboral o asesoría legal general.",
    useCases: [
      {
        title: "Landing legal desde $149",
        description:
          "Para presentar una oferta o servicio principal con CTA directo a consulta."
      },
      {
        title: "Web corporativa desde $299",
        description:
          "Para firmas que necesitan más secciones, equipo, áreas de práctica y estructura institucional."
      },
      {
        title: "SEO local",
        description:
          "Estructura inicial para posicionar servicios legales en Panamá con páginas internas futuras."
      }
    ],
    faq: [
      {
        question: "¿Qué precio aplica para abogados?",
        answer:
          "Puede iniciar desde $149 si es landing page o desde $299 si requiere una web corporativa más completa."
      },
      {
        question: "¿Puedo poner mis áreas de práctica?",
        answer:
          "Sí. Se pueden organizar áreas legales, perfil, experiencia, preguntas frecuentes y llamadas a consulta."
      },
      {
        question: "¿Se puede conectar WhatsApp?",
        answer:
          "Sí. Se pueden colocar botones con mensajes precargados para facilitar consultas desde móvil."
      }
    ],
    relatedLinks: [
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" }
    ]
  },
  {
    slug: "sistemas-de-reservas-panama",
    eyebrow: "Sistemas de reservas en Panamá",
    h1: "Sistemas de reservas en Panamá para citas, cupos, servicios y confirmaciones",
    intro:
      "Desarrollamos sistemas de reservas para negocios en Panamá que necesitan recibir solicitudes, controlar disponibilidad, aprobar o reprogramar citas, enviar confirmaciones y administrar servicios desde un panel propio.",
    metaTitle: "Sistema de reservas en Panamá desde $899 | LulabTech",
    metaDescription:
      "Sistema de reservas en Panamá para citas, servicios, disponibilidad, confirmaciones, estados, clientes y panel administrativo desde $899 según alcance.",
    keywords: [
      "sistema de reservas Panamá",
      "sistema de citas Panamá",
      "software de reservas Panamá",
      "reservas online Panamá"
    ],
    primaryCta: "Cotizar sistema de reservas",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Reservas más ordenadas, con estados y administración clara.",
    heroPanelDescription:
      "El sistema puede manejar servicios, horarios, cupos, solicitudes, aprobaciones, reprogramaciones, correos y panel administrativo.",
    heroBullets: [
      "Servicios, disponibilidad, cupos y horarios configurables",
      "Reservas pendientes, aprobadas, canceladas o reprogramadas",
      "Panel administrativo para revisar solicitudes y dar seguimiento"
    ],
    benefitsTitle: "Un flujo de reservas evita perder solicitudes y desordena menos al equipo",
    benefitsDescription:
      "Ideal para negocios que hoy reciben citas por WhatsApp pero necesitan más control, historial y una experiencia más profesional.",
    benefits: [
      "Formulario de reserva claro para clientes",
      "Calendarios o slots según el tipo de servicio",
      "Estados de reserva y seguimiento administrativo",
      "Correos o mensajes de confirmación según alcance",
      "Panel para servicios, disponibilidad y solicitudes",
      "Base para pagos, comprobantes o reportes en etapas futuras"
    ],
    processTitle: "Cómo trabajamos un sistema de reservas",
    process: [
      {
        title: "Servicios y reglas",
        description:
          "Definimos qué se reserva, duración, cupos, horarios, modalidad y restricciones."
      },
      {
        title: "Flujo del cliente",
        description:
          "Diseñamos el camino para solicitar, confirmar y consultar el estado de una reserva."
      },
      {
        title: "Panel administrativo",
        description:
          "Creamos herramientas para aprobar, negar, cancelar, reprogramar o administrar disponibilidad."
      },
      {
        title: "Publicación y pruebas",
        description:
          "Probamos solicitudes, estados, correos y experiencia móvil antes de dejarlo en producción."
      }
    ],
    useCasesTitle: "Para negocios que dependen de citas o cupos",
    useCasesDescription:
      "Funciona para academias, coaching, tours, clínicas, servicios profesionales, consultorías, salones, alquileres o experiencias con cupos limitados.",
    useCases: [
      {
        title: "Citas profesionales",
        description:
          "Clientes solicitan una sesión y el administrador confirma, niega o reprograma."
      },
      {
        title: "Tours y experiencias",
        description:
          "Permite manejar servicios, fechas, cupos, comprobantes o solicitudes grupales."
      },
      {
        title: "Cursos y sesiones",
        description:
          "Útil para cupos por horario, modalidad virtual o presencial y seguimiento de interesados."
      }
    ],
    faq: [
      {
        question: "¿Las reservas se aprueban automáticamente?",
        answer:
          "Puede hacerse automático o con aprobación manual. Depende del modelo de negocio y del control que necesite el equipo."
      },
      {
        question: "¿Puede enviar correos?",
        answer:
          "Sí. Se pueden configurar notificaciones por correo o preparar integraciones según el alcance."
      },
      {
        question: "¿Puede tener pagos o comprobantes?",
        answer:
          "Sí, se puede sumar carga de comprobantes, pagos o pasarela en una etapa del proyecto si el negocio lo requiere."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Software para restaurantes", href: "/software-para-restaurantes-panama" }
    ]
  },
  {
    slug: "cuanto-cuesta-una-pagina-web-en-panama",
    eyebrow: "Precios de páginas web en Panamá",
    h1: "Cuánto cuesta una página web en Panamá y qué incluye cada tipo de proyecto",
    intro:
      "El precio de una página web en Panamá depende del alcance real: cantidad de secciones, páginas internas, contenido, panel administrativo, integraciones, pasarela de pago, automatizaciones, SEO y funcionalidades especiales.",
    metaTitle: "Cuánto cuesta una página web en Panamá | Precios LulabTech",
    metaDescription:
      "Conoce precios de páginas web en Panamá: landing desde $149, web corporativa desde $299, ecommerce desde $499 y software a medida desde $899.",
    keywords: [
      "cuánto cuesta una página web en Panamá",
      "precio página web Panamá",
      "landing page desde 149 Panamá",
      "web corporativa desde 299 Panamá"
    ],
    primaryCta: "Pedir cotización exacta",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Precios desde, no paquetes cerrados para todos.",
    heroPanelDescription:
      "Un proyecto simple puede resolverse rápido; uno con panel, integraciones o lógica interna requiere más desarrollo y validación.",
    heroBullets: [
      "Landing page desde $149",
      "Web corporativa desde $299 y ecommerce desde $499",
      "Software a medida, reservas, restaurantes o casilleros desde $899"
    ],
    benefitsTitle: "Rangos de precio claros para tomar una mejor decisión",
    benefitsDescription:
      "Estos precios sirven como punto de partida comercial. El monto final se define después de revisar alcance, contenido y funcionalidades.",
    benefits: [
      "Landing page desde $149 para una oferta o servicio específico",
      "Web corporativa desde $299 para empresas con más estructura",
      "Ecommerce desde $499 para catálogo, productos y flujo de compra o WhatsApp",
      "Software a medida desde $899 para paneles, reservas, inventarios o procesos internos",
      "Dominio y correo gratis por 1 año según promoción vigente",
      "Renovación anual desde $24.99 cuando aplique al modelo comercial de dominio/correo"
    ],
    processTitle: "Qué puede hacer variar el precio",
    process: [
      {
        title: "Cantidad de contenido",
        description:
          "Más secciones, páginas internas, textos, imágenes o carga inicial pueden aumentar el alcance."
      },
      {
        title: "Funcionalidades",
        description:
          "Formularios, panel administrativo, reservas, inventario, usuarios o reportes cambian el nivel de desarrollo."
      },
      {
        title: "Integraciones",
        description:
          "Pasarelas de pago, correos, CRM, Analytics, Pixel, APIs o automatizaciones requieren configuración adicional."
      },
      {
        title: "Nivel SEO",
        description:
          "Una base SEO inicial no es lo mismo que una estrategia mensual con contenido, medición y optimización continua."
      }
    ],
    useCasesTitle: "Qué opción conviene según el objetivo",
    useCasesDescription:
      "La mejor opción depende de si necesitas captar consultas, presentar una empresa, vender productos o digitalizar una operación interna.",
    useCases: [
      {
        title: "Captar clientes rápido",
        description:
          "Una landing page puede ser suficiente para explicar una oferta y conectar WhatsApp o formulario."
      },
      {
        title: "Construir presencia formal",
        description:
          "Una web corporativa ayuda a mostrar servicios, confianza, equipo, proyectos y contacto."
      },
      {
        title: "Automatizar operación",
        description:
          "Un software a medida aplica cuando hay procesos, usuarios, datos, reportes o tareas repetitivas."
      }
    ],
    faq: [
      {
        question: "¿El precio incluye dominio y correo?",
        answer:
          "Puede incluir dominio y correo gratis por 1 año según promoción y modelo comercial. Luego la renovación anual puede iniciar desde $24.99 si aplica."
      },
      {
        question: "¿Por qué el precio puede cambiar?",
        answer:
          "Porque no todos los proyectos tienen el mismo contenido, cantidad de secciones, panel administrativo, pasarela de pago, automatizaciones o integraciones."
      },
      {
        question: "¿Puedo empezar con algo pequeño y crecer?",
        answer:
          "Sí. Se puede iniciar con una landing o web corporativa y luego sumar páginas SEO, ecommerce, reservas o software interno."
      }
    ],
    relatedLinks: [
      { label: "Landing pages desde $149", href: "/landing-pages-panama" },
      { label: "Web corporativa desde $299", href: "/paginas-web-corporativas-panama" },
      { label: "Software a medida desde $899", href: "/software-a-medida-panama" }
    ]
  },

  {
    slug: "desarrollo-web-panama",
    eyebrow: "Desarrollo web en Panamá",
    h1: "Desarrollo web en Panamá para empresas que necesitan una base moderna y escalable",
    intro:
      "Desarrollamos sitios web y plataformas digitales para empresas en Panamá que necesitan algo más sólido que una plantilla: código limpio, estructura responsive, SEO inicial, formularios, WhatsApp e integración con procesos reales.",
    metaTitle: "Desarrollo web en Panamá para empresas | LulabTech",
    metaDescription:
      "Desarrollo web en Panamá para empresas: sitios modernos, páginas corporativas, landing pages, integraciones, formularios y bases escalables para crecer.",
    keywords: [
      "desarrollo web en Panamá",
      "desarrolladores web Panamá",
      "empresa de desarrollo web Panamá",
      "desarrollo de sitios web Panamá"
    ],
    primaryCta: "Cotizar desarrollo web",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Código, diseño y estrategia para que la web no sea solo una vitrina.",
    heroPanelDescription:
      "Trabajamos la parte visual y técnica para que el sitio cargue bien, se entienda en móvil y pueda crecer con nuevas páginas, campañas o módulos.",
    heroBullets: [
      "Sitios responsive desarrollados con estructura moderna",
      "Integración con WhatsApp, formularios, correo y medición",
      "Base preparada para SEO, campañas y futuras mejoras"
    ],
    benefitsTitle: "Un desarrollo web serio evita rehacer todo cuando el negocio crece",
    benefitsDescription:
      "La diferencia está en construir con orden: rutas claras, componentes reutilizables, contenido bien estructurado y una experiencia pensada para convertir.",
    benefits: [
      "Arquitectura web lista para nuevas secciones",
      "Diseño limpio sin perder enfoque comercial",
      "Código responsive para celular, tablet y escritorio",
      "Formularios y CTAs conectados al proceso comercial",
      "SEO técnico inicial desde la estructura",
      "Preparación para analítica, campañas y futuras integraciones"
    ],
    processTitle: "Cómo desarrollamos una web profesional",
    process: [
      {
        title: "Objetivo y alcance",
        description:
          "Definimos si necesitas una landing, web corporativa, ecommerce o sistema web para no sobredimensionar ni limitar el proyecto."
      },
      {
        title: "Arquitectura y contenido",
        description:
          "Ordenamos secciones, rutas, mensajes clave, CTAs y páginas necesarias para que la experiencia tenga lógica comercial."
      },
      {
        title: "Desarrollo responsive",
        description:
          "Construimos la web cuidando rendimiento, mobile-first, accesibilidad básica, animaciones y consistencia visual."
      },
      {
        title: "Publicación y medición",
        description:
          "Dejamos la web lista para dominio, SSL, indexación, WhatsApp, formularios y medición con herramientas como GA4 o GTM si el cliente las tiene."
      }
    ],
    useCasesTitle: "Proyectos donde conviene desarrollo web a medida",
    useCasesDescription:
      "Es útil cuando tu empresa necesita una web confiable, rápida y preparada para crecer sin depender de estructuras genéricas.",
    useCases: [
      {
        title: "Webs corporativas escalables",
        description:
          "Para empresas que desean iniciar con una base seria y luego sumar servicios, casos, SEO o formularios más avanzados."
      },
      {
        title: "Landing pages para campañas",
        description:
          "Para ofertas específicas donde la velocidad, el mensaje y la ruta de conversión son clave."
      },
      {
        title: "Sistemas y paneles internos",
        description:
          "Cuando la web debe conectarse con datos, usuarios, reservas, inventario, clientes o reportes."
      }
    ],
    faq: [
      {
        question: "¿Desarrollo web es lo mismo que diseño web?",
        answer:
          "No exactamente. El diseño define cómo se ve y se entiende la experiencia; el desarrollo convierte esa estructura en una web funcional, rápida y mantenible."
      },
      {
        question: "¿Pueden hacer una web desde cero?",
        answer:
          "Sí. Podemos trabajar desde estrategia, contenido, diseño, desarrollo, publicación y base SEO inicial."
      },
      {
        question: "¿Se puede ampliar después?",
        answer:
          "Sí. La idea es dejar una base preparada para agregar páginas SEO, módulos, formularios, integraciones o nuevas secciones."
      }
    ],
    relatedLinks: [
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "agencia-de-diseno-web-panama",
    eyebrow: "Agencia de diseño web en Panamá",
    h1: "Agencia de diseño web en Panamá para negocios que quieren una presencia digital más seria",
    intro:
      "LulabTech ayuda a empresas, marcas personales y negocios locales en Panamá a convertir ideas en páginas web, landing pages, tiendas online y sistemas digitales con diseño profesional y enfoque comercial.",
    metaTitle: "Agencia de diseño web en Panamá | LulabTech",
    metaDescription:
      "Agencia de diseño web en Panamá para landing pages, webs corporativas, ecommerce, software a medida, SEO inicial y campañas digitales.",
    keywords: [
      "agencia de diseño web Panamá",
      "agencia web Panamá",
      "agencia digital Panamá",
      "empresa de páginas web Panamá"
    ],
    primaryCta: "Hablar con LulabTech",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una agencia pequeña, ágil y enfocada en resultados visibles.",
    heroPanelDescription:
      "Unimos diseño, desarrollo, SEO inicial y pensamiento comercial para que la web se vea bien, se entienda rápido y tenga rutas claras de contacto.",
    heroBullets: [
      "Diseño web, desarrollo y software en un solo equipo",
      "Experiencia con empresas de servicios, legal, logística, educación y restaurantes",
      "Entregas pensadas para producción, dominio, hosting y campañas"
    ],
    benefitsTitle: "Trabajar con una agencia web debe darte claridad, no más confusión",
    benefitsDescription:
      "El proceso se enfoca en entender qué necesita vender o comunicar tu negocio y convertirlo en una experiencia digital ordenada.",
    benefits: [
      "Acompañamiento desde la estructura hasta la publicación",
      "Diseños modernos sin depender de plantillas genéricas",
      "Copy comercial y mensajes claros para el cliente final",
      "Enlaces a WhatsApp, formularios y canales oficiales",
      "SEO inicial y arquitectura para crecer",
      "Posibilidad de crear sistemas, paneles y automatizaciones por etapas"
    ],
    processTitle: "Cómo trabaja LulabTech",
    process: [
      {
        title: "Entendemos el negocio",
        description:
          "Antes de diseñar, aclaramos oferta, público, objetivos, estilo visual y acción principal esperada."
      },
      {
        title: "Proponemos estructura",
        description:
          "Definimos secciones, páginas, CTAs, contenido y prioridad de mensajes para evitar una web desordenada."
      },
      {
        title: "Diseñamos y desarrollamos",
        description:
          "Construimos una experiencia visual cuidada, responsive, rápida y alineada con el objetivo comercial."
      },
      {
        title: "Publicamos y mejoramos",
        description:
          "Dejamos la web lista para producción y preparada para campañas, SEO, contenido o nuevos módulos."
      }
    ],
    useCasesTitle: "Servicios principales de la agencia",
    useCasesDescription:
      "La estructura puede adaptarse a negocios que necesitan presencia, captación, venta online o sistemas internos.",
    useCases: [
      {
        title: "Diseño web y landing pages",
        description:
          "Para empresas que necesitan verse profesionales y recibir consultas por WhatsApp o formulario."
      },
      {
        title: "Ecommerce y catálogos",
        description:
          "Para marcas que desean ordenar productos y vender o cotizar con más claridad."
      },
      {
        title: "Software a medida",
        description:
          "Para negocios que necesitan panel administrativo, reservas, POS, inventario, logística o procesos internos."
      }
    ],
    faq: [
      {
        question: "¿LulabTech trabaja solo en Panamá?",
        answer:
          "El enfoque comercial principal está en Panamá, pero las soluciones digitales pueden atender proyectos que operan de forma remota o regional."
      },
      {
        question: "¿Pueden manejar dominio y correo?",
        answer:
          "Sí, según el modelo comercial del proyecto se puede incluir dominio y correo por el primer año y dejar clara la renovación anual."
      },
      {
        question: "¿También hacen software?",
        answer:
          "Sí. Además de páginas web, LulabTech desarrolla sistemas para reservas, restaurantes, logística, inventario, clientes y paneles administrativos."
      }
    ],
    relatedLinks: [
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "Cuánto cuesta una web", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
    ],
    priceFrom: "$149"
  },
  {
    slug: "seo-para-paginas-web-panama",
    eyebrow: "SEO para páginas web en Panamá",
    h1: "SEO para páginas web en Panamá desde la estructura, el contenido y la intención de búsqueda",
    intro:
      "Preparamos páginas web con una base SEO clara para que tu negocio se asocie mejor con sus servicios, su ubicación en Panamá y las búsquedas de clientes potenciales. Este trabajo no promete resultados mágicos: deja la web mejor ordenada para competir con contenido, medición y mejoras constantes.",
    metaTitle: "SEO para páginas web en Panamá | LulabTech",
    metaDescription:
      "SEO para páginas web en Panamá: estructura, metadata, sitemap, robots, enlaces internos, contenido comercial y base técnica para crecer en Google.",
    keywords: [
      "SEO para páginas web Panamá",
      "SEO Panamá",
      "posicionamiento web Panamá",
      "optimización SEO Panamá"
    ],
    primaryCta: "Revisar mi SEO",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "SEO inicial realista: primero orden, luego crecimiento.",
    heroPanelDescription:
      "La base SEO combina estructura, títulos, descripciones, páginas internas, enlaces, datos estructurados y contenido útil para búsquedas locales.",
    heroBullets: [
      "Metadata, sitemap, robots y estructura semántica",
      "Páginas orientadas a servicios y búsquedas locales",
      "Enlaces internos para fortalecer temas comerciales"
    ],
    benefitsTitle: "Una web bonita sin estructura SEO puede ser difícil de encontrar",
    benefitsDescription:
      "El SEO inicial ayuda a que el sitio tenga fundamentos técnicos y contenido alineado con lo que buscan los clientes en Panamá.",
    benefits: [
      "Títulos y descripciones optimizadas por intención",
      "Jerarquía H1, H2 y contenido útil por servicio",
      "Sitemap y robots correctos",
      "Datos estructurados para organización, servicios y preguntas frecuentes",
      "Enlaces internos entre páginas clave",
      "Base para Search Console, GA4 y futuras campañas"
    ],
    processTitle: "Cómo trabajamos una etapa SEO inicial",
    process: [
      {
        title: "Diagnóstico técnico",
        description:
          "Revisamos metadata, indexabilidad, sitemap, rutas, responsive, contenido y señales básicas de autoridad."
      },
      {
        title: "Mapa de palabras clave",
        description:
          "Priorizamos servicios con intención comercial: landing pages, web corporativa, ecommerce, software, reservas y verticales."
      },
      {
        title: "Contenido y enlaces internos",
        description:
          "Creamos o mejoramos páginas internas con texto real, FAQs, CTAs y enlaces relacionados."
      },
      {
        title: "Medición y siguientes pasos",
        description:
          "Dejamos preparado el sitio para medir clics, formularios y tráfico, sin inventar IDs de herramientas."
      }
    ],
    useCasesTitle: "Cuándo conviene trabajar SEO inicial",
    useCasesDescription:
      "Es especialmente útil cuando la web va a lanzarse, cuando ya existe pero no tiene páginas internas o cuando se quiere empezar a captar tráfico orgánico local.",
    useCases: [
      {
        title: "Webs nuevas",
        description:
          "Permite publicar con una estructura más clara para Google desde el primer día."
      },
      {
        title: "Webs existentes",
        description:
          "Ayuda a ordenar títulos, páginas, enlaces internos y contenido comercial sin rediseñar todo."
      },
      {
        title: "Negocios locales",
        description:
          "Refuerza términos como servicio + Panamá, industria + Panamá y necesidades específicas del cliente."
      }
    ],
    faq: [
      {
        question: "¿El SEO inicial garantiza aparecer primero?",
        answer:
          "No. Nadie serio puede garantizar la primera posición. La etapa inicial crea fundamentos correctos para competir y seguir mejorando."
      },
      {
        question: "¿Incluye Google Search Console?",
        answer:
          "Se puede preparar el sitio y orientar la configuración, pero la verificación depende del acceso del cliente al dominio o cuenta de Google."
      },
      {
        question: "¿SEO reemplaza los anuncios?",
        answer:
          "No necesariamente. SEO y anuncios pueden complementarse: SEO construye base orgánica y Ads acelera tráfico hacia ofertas específicas."
      }
    ],
    relatedLinks: [
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Google Ads", href: "/google-ads-panama" },
      { label: "Precios de páginas web", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
    ]
  },
  {
    slug: "mantenimiento-web-panama",
    eyebrow: "Mantenimiento web en Panamá",
    h1: "Mantenimiento web en Panamá para cuidar cambios, respaldo y continuidad de tu sitio",
    intro:
      "Damos soporte a sitios web que necesitan ajustes, mejoras de contenido, revisión de enlaces, cambios simples, respaldo y acompañamiento técnico para que la presencia digital no quede abandonada después de publicar.",
    metaTitle: "Mantenimiento web en Panamá | LulabTech",
    metaDescription:
      "Mantenimiento web en Panamá para cambios, soporte, ajustes de contenido, respaldo, revisión técnica, continuidad y mejoras ligeras del sitio.",
    keywords: [
      "mantenimiento web Panamá",
      "soporte web Panamá",
      "actualización de páginas web Panamá",
      "mantenimiento de sitios web Panamá"
    ],
    primaryCta: "Consultar mantenimiento",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una web publicada también necesita cuidado.",
    heroPanelDescription:
      "El mantenimiento permite corregir detalles, actualizar información, cuidar enlaces y acompañar mejoras sin reconstruir todo el sitio.",
    heroBullets: [
      "Cambios de textos, imágenes, enlaces y secciones simples",
      "Revisión de formularios, WhatsApp, correos y rutas clave",
      "Soporte técnico y mejoras por prioridad según alcance"
    ],
    benefitsTitle: "El mantenimiento evita que una web se vuelva vieja, confusa o incompleta",
    benefitsDescription:
      "Muchas webs pierden valor porque nadie actualiza servicios, precios, fotos, CTAs o información de contacto. El soporte mantiene la presencia activa.",
    benefits: [
      "Actualización de contenido y datos de contacto",
      "Revisión de enlaces rotos y CTAs importantes",
      "Ajustes visuales ligeros sin romper el diseño",
      "Apoyo en publicación y anticaché cuando hay cambios",
      "Priorización de mejoras según urgencia",
      "Base para etapas futuras de SEO o conversión"
    ],
    processTitle: "Cómo se maneja el mantenimiento",
    process: [
      {
        title: "Revisión de necesidades",
        description:
          "Identificamos qué tipo de soporte requiere el sitio: cambios simples, contenido, formularios, SEO o ajustes técnicos."
      },
      {
        title: "Priorización",
        description:
          "Ordenamos lo urgente y lo importante para no mezclar cambios pequeños con rediseños estructurales."
      },
      {
        title: "Aplicación segura",
        description:
          "Hacemos cambios cuidando responsive, rutas, formularios, WhatsApp, imágenes y estructura existente."
      },
      {
        title: "Validación",
        description:
          "Revisamos que el cambio se vea correctamente y que la versión publicada no quede atrapada por caché."
      }
    ],
    useCasesTitle: "Ideal para negocios que ya tienen web",
    useCasesDescription:
      "Funciona para clientes que publicaron su sitio y ahora necesitan mantenerlo actualizado sin hacer un rediseño completo cada vez.",
    useCases: [
      {
        title: "Cambios simples mensuales",
        description:
          "Actualizar textos, teléfonos, enlaces, precios, fotos o pequeñas secciones de forma ordenada."
      },
      {
        title: "Correcciones técnicas",
        description:
          "Revisar formularios, botones, errores visuales, enlaces y comportamiento responsive."
      },
      {
        title: "Mejoras por etapas",
        description:
          "Planificar SEO, nuevas páginas, optimización de conversión o integraciones sin romper la web actual."
      }
    ],
    faq: [
      {
        question: "¿El mantenimiento incluye rediseños completos?",
        answer:
          "No necesariamente. Los cambios estructurales grandes se cotizan aparte para proteger alcance, tiempo y calidad."
      },
      {
        question: "¿Pueden mantener una web que no hizo LulabTech?",
        answer:
          "Depende del acceso, tecnología y estado del proyecto. Primero se revisa la estructura antes de prometer cambios."
      },
      {
        question: "¿También pueden mejorar SEO durante mantenimiento?",
        answer:
          "Sí, se pueden planificar mejoras SEO por etapas, como metadata, nuevas páginas, contenido e enlaces internos."
      }
    ],
    relatedLinks: [
      { label: "SEO para páginas web", href: "/seo-para-paginas-web-panama" },
      { label: "Desarrollo web", href: "/desarrollo-web-panama" },
      { label: "Diseño web", href: "/diseno-web-panama" }
    ]
  },
  {
    slug: "diseno-web-para-clinicas-panama",
    eyebrow: "Diseño web para clínicas en Panamá",
    h1: "Diseño web para clínicas en Panamá con servicios claros, confianza y citas por WhatsApp",
    intro:
      "Creamos páginas web para clínicas, consultorios y profesionales de salud o bienestar que necesitan presentar servicios, ubicación, especialidades, horarios y rutas de contacto de forma profesional.",
    metaTitle: "Diseño web para clínicas en Panamá | LulabTech",
    metaDescription:
      "Diseño web para clínicas en Panamá con servicios, especialidades, ubicación, WhatsApp, formularios, citas y estructura SEO local.",
    keywords: [
      "diseño web para clínicas Panamá",
      "páginas web para clínicas Panamá",
      "web para consultorios Panamá",
      "página web médica Panamá"
    ],
    primaryCta: "Cotizar web para clínica",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una web clínica debe verse confiable, humana y fácil de usar.",
    heroPanelDescription:
      "Organizamos servicios, diferenciales, ubicación y contacto para que el paciente entienda rápido cómo pedir información o agendar.",
    heroBullets: [
      "Secciones para servicios, equipo, ubicación y preguntas frecuentes",
      "CTA a WhatsApp, formulario o sistema de citas según alcance",
      "Diseño responsive con enfoque en confianza y claridad"
    ],
    benefitsTitle: "La primera impresión digital también influye en la confianza del paciente",
    benefitsDescription:
      "Una web bien estructurada ayuda a reducir dudas, explicar servicios y facilitar que el usuario escriba desde celular.",
    benefits: [
      "Presentación clara de servicios y especialidades",
      "Botones de WhatsApp y contacto visibles",
      "Ubicación, horarios y datos importantes ordenados",
      "Diseño cálido y profesional",
      "Base SEO para búsquedas locales",
      "Posibilidad de sumar reservas o formularios por etapa"
    ],
    processTitle: "Proceso para una web clínica",
    process: [
      {
        title: "Servicios y especialidades",
        description:
          "Definimos qué servicios deben destacarse y qué información necesita el paciente antes de contactar."
      },
      {
        title: "Confianza visual",
        description:
          "Diseñamos una experiencia limpia, profesional y humana, sin parecer una plantilla genérica."
      },
      {
        title: "Contacto y citas",
        description:
          "Conectamos WhatsApp, formulario, correo o sistema de reservas según el proceso real de atención."
      },
      {
        title: "Publicación SEO",
        description:
          "Dejamos la base preparada para indexación, metadatos y futuras páginas por servicio o especialidad."
      }
    ],
    useCasesTitle: "Ideal para salud, estética y bienestar",
    useCasesDescription:
      "Puede adaptarse a clínicas dentales, consultorios, psicología, estética, fisioterapia, wellness y servicios de atención profesional.",
    useCases: [
      {
        title: "Clínicas y consultorios",
        description:
          "Sitios para mostrar servicios, equipo, ubicación, horarios y canales de contacto."
      },
      {
        title: "Servicios con cita",
        description:
          "Flujos que guían al usuario hacia WhatsApp, formulario o sistema de reserva."
      },
      {
        title: "SEO por especialidad",
        description:
          "Base para crear futuras páginas por tratamiento, servicio o ubicación."
      }
    ],
    faq: [
      {
        question: "¿Puede tener botón para agendar cita?",
        answer:
          "Sí. Puede conectar a WhatsApp, formulario o un sistema de reservas si el proyecto lo requiere."
      },
      {
        question: "¿Pueden crear páginas por servicio?",
        answer:
          "Sí. Es una buena etapa SEO para posicionar servicios específicos y no depender solo de la página principal."
      },
      {
        question: "¿La web puede verse premium?",
        answer:
          "Sí. Se puede trabajar una estética más boutique, limpia y confiable, alineada con el tipo de clínica."
      }
    ],
    relatedLinks: [
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" },
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "SEO para páginas web", href: "/seo-para-paginas-web-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "diseno-web-para-inmobiliarias-panama",
    eyebrow: "Diseño web inmobiliario en Panamá",
    h1: "Diseño web para inmobiliarias en Panamá con propiedades, confianza y contacto directo",
    intro:
      "Desarrollamos páginas web para agentes inmobiliarios, asesoras, brokers y empresas de real estate en Panamá que necesitan mostrar propiedades, servicios, experiencia y contacto por WhatsApp de forma profesional.",
    metaTitle: "Diseño web para inmobiliarias en Panamá | LulabTech",
    metaDescription:
      "Diseño web para inmobiliarias en Panamá con propiedades, galerías, filtros, WhatsApp, perfil profesional, SEO local y panel administrativo según alcance.",
    keywords: [
      "diseño web para inmobiliarias Panamá",
      "páginas web inmobiliarias Panamá",
      "web para bienes raíces Panamá",
      "sitio web para agentes inmobiliarios Panamá"
    ],
    primaryCta: "Cotizar web inmobiliaria",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Una web inmobiliaria debe vender confianza antes de mostrar propiedades.",
    heroPanelDescription:
      "La estructura puede presentar perfil, servicios, propiedades destacadas, galerías, filtros, WhatsApp y mensajes claros para compradores o vendedores.",
    heroBullets: [
      "Propiedades destacadas con fotos, precio y detalles clave",
      "CTA a WhatsApp para consultas de compra, venta o alquiler",
      "Posibilidad de panel para administrar inmuebles"
    ],
    benefitsTitle: "Mostrar propiedades con orden mejora la percepción del servicio",
    benefitsDescription:
      "Una web inmobiliaria profesional permite centralizar propiedades, explicar servicios y recibir consultas más claras que solo por redes sociales.",
    benefits: [
      "Cards de propiedades con datos importantes",
      "Galerías, filtros y páginas de detalle según alcance",
      "Perfil profesional y señales de confianza",
      "CTA a WhatsApp para compradores o propietarios",
      "SEO inicial para búsquedas inmobiliarias en Panamá",
      "Base para panel administrativo o CRM en etapas futuras"
    ],
    processTitle: "Proceso para una web inmobiliaria",
    process: [
      {
        title: "Modelo de propiedades",
        description:
          "Definimos si la web mostrará propiedades estáticas, catálogo administrable o integración con procesos internos."
      },
      {
        title: "Estructura comercial",
        description:
          "Ordenamos servicios de compra, venta, alquiler, asesoría y perfil profesional."
      },
      {
        title: "Diseño y galerías",
        description:
          "Creamos una experiencia visual clara para propiedades, fotos, beneficios y datos de contacto."
      },
      {
        title: "Publicación y SEO",
        description:
          "La web queda preparada para indexación, enlaces internos y crecimiento con páginas de propiedades o zonas."
      }
    ],
    useCasesTitle: "Para agentes, asesoras y empresas inmobiliarias",
    useCasesDescription:
      "Funciona tanto para una marca personal inmobiliaria como para una empresa que necesita catálogo y presencia corporativa.",
    useCases: [
      {
        title: "Marca personal inmobiliaria",
        description:
          "Presentación de perfil, experiencia, servicios y propiedades destacadas."
      },
      {
        title: "Catálogo de propiedades",
        description:
          "Listado con fotos, estado, precio, ubicación, metraje y CTA a WhatsApp."
      },
      {
        title: "Panel administrativo",
        description:
          "Para crear, editar y ordenar propiedades desde un acceso privado cuando el alcance lo requiera."
      }
    ],
    faq: [
      {
        question: "¿Puede tener panel para subir propiedades?",
        answer:
          "Sí. Se puede cotizar una versión con panel administrativo para agregar y editar propiedades."
      },
      {
        question: "¿Puede tener galerías por propiedad?",
        answer:
          "Sí. Las páginas de detalle pueden incluir galería, datos principales, amenidades y contacto."
      },
      {
        question: "¿Sirve para agentes independientes?",
        answer:
          "Sí. También funciona como marca personal para mostrar autoridad, servicios y propiedades destacadas."
      }
    ],
    relatedLinks: [
      { label: "Web corporativa", href: "/paginas-web-corporativas-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "software-pos-panama",
    eyebrow: "Software POS en Panamá",
    h1: "Software POS en Panamá para ventas, caja, productos y control operativo",
    intro:
      "Creamos sistemas POS y paneles administrativos para negocios en Panamá que necesitan registrar ventas, controlar caja, productos, gastos, usuarios, reportes e inventario desde una solución adaptada a su operación.",
    metaTitle: "Software POS en Panamá desde $899 | LulabTech",
    metaDescription:
      "Software POS en Panamá para ventas, caja, productos, inventario, gastos, usuarios, reportes y panel administrativo desde $899 según alcance.",
    keywords: [
      "software POS Panamá",
      "sistema POS Panamá",
      "software de ventas Panamá",
      "sistema de caja Panamá"
    ],
    primaryCta: "Cotizar software POS",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Un POS a medida puede ordenar ventas y operación sin depender de hojas sueltas.",
    heroPanelDescription:
      "El sistema puede adaptarse a flujos reales: ventas rápidas, métodos de pago, turnos de caja, productos, inventario, gastos y reportes.",
    heroBullets: [
      "Ventas, productos, caja y usuarios por rol",
      "Reportes de ingresos, gastos y actividad",
      "Módulos por etapas: inventario, recetas, asistencia o facturas"
    ],
    benefitsTitle: "Un POS debe ayudar a controlar el negocio, no solo registrar ventas",
    benefitsDescription:
      "La ventaja de un desarrollo a medida es que el sistema puede crecer según el proceso real del negocio y no al revés.",
    benefits: [
      "Registro de ventas y métodos de pago",
      "Apertura y cierre de caja",
      "Productos, categorías e imágenes",
      "Gastos, reportes y métricas internas",
      "Roles de usuario y auditoría según alcance",
      "Inventario, recetas o asistencia en etapas futuras"
    ],
    processTitle: "Cómo se trabaja un POS a medida",
    process: [
      {
        title: "Mapa operativo",
        description:
          "Entendemos cómo vende el negocio, qué métodos de pago usa, quién opera caja y qué reportes necesita."
      },
      {
        title: "Módulos iniciales",
        description:
          "Definimos si el primer alcance incluye ventas, productos, caja, gastos, usuarios, inventario o facturación."
      },
      {
        title: "Desarrollo y pruebas",
        description:
          "Construimos pantallas prácticas, rápidas y probadas con datos reales de operación."
      },
      {
        title: "Capacitación y mejoras",
        description:
          "Se entrega una base funcional y se planifican mejoras por etapa según el uso del negocio."
      }
    ],
    useCasesTitle: "Negocios que pueden usar un POS a medida",
    useCasesDescription:
      "Funciona para restaurantes, cafeterías, tiendas pequeñas, puntos de venta, servicios con caja diaria y negocios que necesitan control interno.",
    useCases: [
      {
        title: "Restaurantes y food trucks",
        description:
          "Ventas rápidas, productos, caja, métodos de pago, gastos y reportes de jornada."
      },
      {
        title: "Tiendas y puntos de venta",
        description:
          "Control de productos, ventas, inventario básico y seguimiento de actividad."
      },
      {
        title: "Operación por empleados",
        description:
          "Roles, permisos, auditoría y métricas por usuario cuando el negocio lo necesita."
      }
    ],
    faq: [
      {
        question: "¿Un POS a medida incluye inventario?",
        answer:
          "Puede incluirlo si forma parte del alcance. También puede agregarse en una etapa posterior."
      },
      {
        question: "¿Puede funcionar con roles de empleados?",
        answer:
          "Sí. Se pueden crear roles para administrador y empleados, con permisos según el flujo del negocio."
      },
      {
        question: "¿Es lo mismo que software para restaurantes?",
        answer:
          "El POS puede ser parte del software para restaurantes, pero también puede adaptarse a otros negocios con ventas y caja."
      }
    ],
    relatedLinks: [
      { label: "Software para restaurantes", href: "/software-para-restaurantes-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Automatizaciones", href: "/automatizaciones-para-empresas-panama" }
    ],
    priceFrom: "$899"
  },
  {
    slug: "automatizaciones-para-empresas-panama",
    eyebrow: "Automatizaciones para empresas en Panamá",
    h1: "Automatizaciones para empresas en Panamá que quieren ahorrar tiempo y reducir tareas repetitivas",
    intro:
      "Diseñamos automatizaciones y soluciones digitales para empresas que necesitan ordenar formularios, notificaciones, reportes, reservas, clientes, documentos o flujos internos sin depender de procesos manuales todo el tiempo.",
    metaTitle: "Automatizaciones para empresas en Panamá | LulabTech",
    metaDescription:
      "Automatizaciones para empresas en Panamá: formularios, reportes, notificaciones, paneles, flujos internos y soluciones digitales a medida.",
    keywords: [
      "automatizaciones para empresas Panamá",
      "automatización de procesos Panamá",
      "automatización digital Panamá",
      "soluciones digitales Panamá"
    ],
    primaryCta: "Cotizar automatización",
    secondaryCta: "Ver proyectos",
    heroPanelTitle: "Automatizar no es complicar: es quitar fricción al proceso.",
    heroPanelDescription:
      "Podemos convertir tareas repetidas en flujos más claros: formularios, avisos, registros, paneles, reportes y seguimiento.",
    heroBullets: [
      "Formularios que alimentan paneles o correos",
      "Notificaciones y registros para seguimiento",
      "Reportes, estados y flujos internos por etapa"
    ],
    benefitsTitle: "Una automatización bien hecha libera tiempo y reduce errores",
    benefitsDescription:
      "Primero se entiende el proceso real, luego se define qué parte conviene digitalizar para que el equipo trabaje con más orden.",
    benefits: [
      "Menos tareas repetitivas por WhatsApp o Excel",
      "Información centralizada en formularios o paneles",
      "Notificaciones para clientes o equipo interno",
      "Estados, historial y seguimiento",
      "Reportes básicos para tomar decisiones",
      "Base para crecer hacia software más completo"
    ],
    processTitle: "Cómo se define una automatización",
    process: [
      {
        title: "Detectar el cuello de botella",
        description:
          "Identificamos qué tarea se repite, dónde se pierde información y qué resultado debería producir el flujo."
      },
      {
        title: "Diseñar el flujo",
        description:
          "Separamos entradas, validaciones, notificaciones, estados y responsables antes de programar."
      },
      {
        title: "Construir solución mínima",
        description:
          "Creamos una primera versión usable para validar si realmente ahorra tiempo y ordena el proceso."
      },
      {
        title: "Medir y ampliar",
        description:
          "Con el uso real, se pueden sumar reportes, permisos, integraciones o módulos adicionales."
      }
    ],
    useCasesTitle: "Procesos que se pueden automatizar",
    useCasesDescription:
      "No todo necesita un sistema gigante. Muchas empresas pueden iniciar con una automatización pequeña y crecer por etapas.",
    useCases: [
      {
        title: "Leads y formularios",
        description:
          "Capturar solicitudes, clasificarlas y notificar al equipo comercial."
      },
      {
        title: "Reservas y confirmaciones",
        description:
          "Recibir solicitudes, manejar estados y enviar respuestas más ordenadas."
      },
      {
        title: "Reportes internos",
        description:
          "Centralizar registros y generar métricas simples para seguimiento operativo."
      }
    ],
    faq: [
      {
        question: "¿Una automatización requiere software completo?",
        answer:
          "No siempre. Puede empezar con formularios, notificaciones o un panel pequeño y luego crecer."
      },
      {
        question: "¿Pueden conectar WhatsApp?",
        answer:
          "Se pueden crear enlaces, mensajes precargados y flujos de contacto; integraciones oficiales avanzadas dependen del alcance y herramientas disponibles."
      },
      {
        question: "¿Qué se necesita para cotizar?",
        answer:
          "Explicar el proceso actual, qué se repite, quién lo hace, qué datos se manejan y qué resultado se espera."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" },
      { label: "Software POS", href: "/software-pos-panama" }
    ],
    priceFrom: "$899"
  },

  {
    slug: "paginas-web-para-restaurantes-panama",
    eyebrow: "Webs para restaurantes en Panamá",
    h1: "Páginas web para restaurantes en Panamá con menú, WhatsApp y presencia profesional",
    intro:
      "Creamos páginas web para restaurantes, cafeterías, food trucks y marcas gastronómicas que necesitan mostrar su propuesta, publicar menú, reforzar confianza y recibir consultas o pedidos por WhatsApp.",
    metaTitle: "Páginas web para restaurantes en Panamá | LulabTech",
    metaDescription:
      "Diseño de páginas web para restaurantes en Panamá con menú, fotos, ubicación, horarios, WhatsApp, SEO local y estructura comercial desde $149.",
    keywords: [
      "páginas web para restaurantes Panamá",
      "diseño web para restaurantes Panamá",
      "menú digital Panamá",
      "web para restaurante con WhatsApp"
    ],
    primaryCta: "Cotizar web para restaurante",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Secciones para menú, horarios, ubicación, fotos y promociones",
      "Botones claros hacia WhatsApp, llamada o redes oficiales",
      "Base SEO local para búsquedas gastronómicas en Panamá"
    ],
    heroPanelTitle: "Una web gastronómica debe abrir el apetito y facilitar el contacto.",
    heroPanelDescription:
      "Ordenamos el menú, la propuesta del restaurante y las rutas de contacto para que el cliente entienda rápido qué ofrecen y cómo pedir información.",
    benefitsTitle: "Más claridad para clientes que buscan dónde comer, pedir o reservar",
    benefitsDescription:
      "Una página bien armada ayuda a que el restaurante no dependa solo de redes sociales y pueda presentar su información de forma estable, profesional y fácil de compartir.",
    benefits: [
      "Menú o catálogo digital organizado por categorías",
      "Ubicación, horarios, delivery, reservas o pedidos por WhatsApp",
      "Galería visual para platos, local, promociones y ambiente",
      "Preguntas frecuentes sobre pedidos, pagos, cobertura o reservas",
      "Estructura responsive para usuarios que entran desde celular",
      "Enlaces internos hacia software POS o sistemas de reservas si el negocio necesita operar mejor"
    ],
    processTitle: "Proceso para una web de restaurante",
    process: [
      {
        title: "Información del local",
        description:
          "Recolectamos menú, horarios, ubicación, fotos, redes, promociones y datos de contacto para ordenar la información clave."
      },
      {
        title: "Estructura comercial",
        description:
          "Definimos qué debe verse primero: platos principales, promociones, reservas, delivery, ambiente o contacto directo."
      },
      {
        title: "Diseño responsive",
        description:
          "Creamos una experiencia visual clara para celular y escritorio, cuidando fotos, legibilidad y velocidad."
      },
      {
        title: "Publicación y medición",
        description:
          "La página queda lista para compartir, conectar WhatsApp, usar en campañas y reforzar presencia local."
      }
    ],
    useCasesTitle: "Restaurantes que pueden aprovechar una web propia",
    useCasesDescription:
      "Funciona para negocios gastronómicos que quieren comunicar mejor su oferta y depender menos de publicaciones sueltas en redes.",
    useCases: [
      {
        title: "Restaurantes y cafeterías",
        description:
          "Para mostrar menú, horarios, ubicación, fotos del local, promociones y contacto directo."
      },
      {
        title: "Food trucks y dark kitchens",
        description:
          "Para explicar productos, cobertura, pedidos por WhatsApp y diferenciadores del concepto."
      },
      {
        title: "Restaurantes con operación interna",
        description:
          "La web puede crecer hacia reservas, POS, inventario o reportes cuando el negocio necesita más control."
      }
    ],
    faq: [
      {
        question: "¿La página puede incluir menú digital?",
        answer:
          "Sí. Puede incluir menú por categorías, precios, fotos, descripción de platos y botones hacia WhatsApp según el alcance acordado."
      },
      {
        question: "¿Sirve si el restaurante ya usa Instagram?",
        answer:
          "Sí. Instagram ayuda a mostrar contenido, pero la web ordena la información fija, mejora la confianza y permite tener una ruta propia para Google y campañas."
      },
      {
        question: "¿Puede conectarse con un sistema POS?",
        answer:
          "Puede plantearse por etapas. Primero la web comercial y luego módulos de POS, inventario, reportes o reservas si el restaurante lo necesita."
      }
    ],
    relatedLinks: [
      { label: "Software para restaurantes", href: "/software-para-restaurantes-panama" },
      { label: "Software POS", href: "/software-pos-panama" },
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" }
    ],
    priceFrom: "$149"
  },
  {
    slug: "paginas-web-para-academias-panama",
    eyebrow: "Webs para academias en Panamá",
    h1: "Páginas web para academias en Panamá que necesitan presentar cursos y captar estudiantes",
    intro:
      "Diseñamos páginas web para academias, centros de capacitación, colegios, tutores y programas educativos que necesitan explicar su oferta, generar confianza y recibir solicitudes de información.",
    metaTitle: "Páginas web para academias en Panamá | LulabTech",
    metaDescription:
      "Diseño web para academias en Panamá con catálogo de cursos, formularios, WhatsApp, SEO local y estructura profesional desde $299.",
    keywords: [
      "páginas web para academias Panamá",
      "diseño web educativo Panamá",
      "web para cursos Panamá",
      "landing para academia Panamá"
    ],
    primaryCta: "Cotizar web para academia",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Catálogo de cursos, programas, modalidades y requisitos",
      "CTA hacia WhatsApp, formulario o proceso de inscripción",
      "Estructura profesional para transmitir confianza académica"
    ],
    heroPanelTitle: "Una academia necesita explicar su oferta sin confundir al estudiante.",
    heroPanelDescription:
      "Organizamos programas, beneficios, modalidad, duración y contacto para que el visitante entienda qué puede estudiar y cómo solicitar información.",
    benefitsTitle: "Una web educativa clara ayuda a captar mejores solicitudes",
    benefitsDescription:
      "La educación vende confianza. Una página bien estructurada permite presentar programas, metodología, respaldo y próximos pasos de forma ordenada.",
    benefits: [
      "Secciones para programas, cursos, diplomados o servicios educativos",
      "Formularios de interés y enlaces directos a WhatsApp",
      "Bloques de metodología, certificación, docentes o diferenciales",
      "Preguntas frecuentes sobre modalidad, duración, horarios y pagos",
      "Base SEO para búsquedas de cursos y capacitación en Panamá",
      "Posibilidad de crecer hacia panel administrativo o LMS según alcance"
    ],
    processTitle: "Proceso para una web académica",
    process: [
      {
        title: "Oferta educativa",
        description:
          "Definimos cursos, áreas, programas, duración, modalidad y tipo de estudiante objetivo."
      },
      {
        title: "Ruta de captación",
        description:
          "Organizamos formularios, WhatsApp, llamadas a inscripción y mensajes para orientar al estudiante."
      },
      {
        title: "Diseño institucional",
        description:
          "Construimos una estética clara y confiable, cuidando jerarquía, legibilidad y estructura responsive."
      },
      {
        title: "Publicación y base SEO",
        description:
          "La web queda lista para indexarse, compartirse y utilizarse en campañas o comunicación institucional."
      }
    ],
    useCasesTitle: "Academias y proyectos educativos donde aplica",
    useCasesDescription:
      "La estructura puede adaptarse a cursos cortos, diplomados, tutorías, academias virtuales o centros presenciales.",
    useCases: [
      {
        title: "Academias y centros de formación",
        description:
          "Para presentar programas, áreas académicas, metodología, certificados y canales de inscripción."
      },
      {
        title: "Cursos y diplomados",
        description:
          "Para vender una oferta específica con fecha, modalidad, contenido, beneficios y formulario de interés."
      },
      {
        title: "Programas para niños o adultos",
        description:
          "Para comunicar confianza, horarios, ubicación, equipo, proceso y contacto con padres o estudiantes."
      }
    ],
    faq: [
      {
        question: "¿Puede tener un catálogo de cursos?",
        answer:
          "Sí. Puede ser un catálogo estático o administrable, dependiendo de si el equipo necesita editar cursos desde un panel."
      },
      {
        question: "¿Incluye plataforma para clases virtuales?",
        answer:
          "Una web informativa no es lo mismo que un LMS. Si se necesita plataforma educativa, usuarios, módulos o clases, se cotiza como alcance adicional."
      },
      {
        question: "¿Puede captar interesados desde formularios?",
        answer:
          "Sí. Se puede conectar formulario, WhatsApp, correo o un flujo de solicitudes según la operación de la academia."
      }
    ],
    relatedLinks: [
      { label: "Páginas corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Automatizaciones", href: "/automatizaciones-para-empresas-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "paginas-web-para-eventos-panama",
    eyebrow: "Webs para eventos en Panamá",
    h1: "Páginas web para eventos, ferias y congresos en Panamá",
    intro:
      "Creamos páginas web para eventos, ferias, congresos, lanzamientos y actividades corporativas que necesitan comunicar fecha, sede, agenda, participantes, formularios y contacto de forma profesional.",
    metaTitle: "Páginas web para eventos en Panamá | LulabTech",
    metaDescription:
      "Diseño de páginas web para eventos en Panamá: ferias, congresos, agenda, formularios, patrocinadores, documentos y contacto desde $299.",
    keywords: [
      "páginas web para eventos Panamá",
      "web para ferias Panamá",
      "landing para eventos Panamá",
      "página para congreso Panamá"
    ],
    primaryCta: "Cotizar web para evento",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Secciones para fecha, sede, agenda, patrocinadores y participantes",
      "Formularios, descargas, WhatsApp y correos organizados",
      "Diseño responsive para promocionar el evento antes y durante la campaña"
    ],
    heroPanelTitle: "Un evento necesita una página clara para informar y convertir interés en acción.",
    heroPanelDescription:
      "Ordenamos toda la información del evento para que asistentes, expositores, patrocinadores o aliados encuentren rápido lo que necesitan.",
    benefitsTitle: "Una página propia evita que el evento dependa solo de piezas sueltas",
    benefitsDescription:
      "La web puede funcionar como centro oficial de información, descargas, contacto, agenda y comunicación para campañas digitales.",
    benefits: [
      "Hero con fecha, sede, propuesta del evento y CTA",
      "Bloques para visitantes, expositores, patrocinadores o aliados",
      "Descarga de formularios, brochures o documentos del evento",
      "Secciones para agenda, ubicación, hoteles, mapas o preguntas frecuentes",
      "Estructura para campañas, anuncios y comunicación por redes",
      "Base para etapas futuras como registro, panel o galerías privadas"
    ],
    processTitle: "Proceso para una web de evento",
    process: [
      {
        title: "Mapa de información",
        description:
          "Organizamos fecha, lugar, públicos, agenda, formularios, patrocinadores y contenidos clave."
      },
      {
        title: "Estructura por audiencia",
        description:
          "Definimos qué necesita saber cada visitante: asistente, expositor, patrocinador, aliado o prensa."
      },
      {
        title: "Diseño promocional",
        description:
          "Creamos una experiencia visual alineada a la marca del evento, preparada para mobile y campañas."
      },
      {
        title: "Lanzamiento y ajustes",
        description:
          "La web queda lista para compartir y puede ir ajustándose con nuevos logos, documentos o información confirmada."
      }
    ],
    useCasesTitle: "Eventos que pueden necesitar una landing o web completa",
    useCasesDescription:
      "La estructura puede crecer según si el evento necesita solo información, registro, descargas, participantes o paneles privados.",
    useCases: [
      {
        title: "Ferias y exposiciones",
        description:
          "Para mostrar sede, expositores, beneficios, formulario de participación y datos de coordinación."
      },
      {
        title: "Congresos y conferencias",
        description:
          "Para presentar agenda, ponentes, registro, ubicación, patrocinadores y preguntas frecuentes."
      },
      {
        title: "Eventos corporativos",
        description:
          "Para lanzamientos, encuentros, actividades de marca o comunicación institucional con una página formal."
      }
    ],
    faq: [
      {
        question: "¿Puede incluir formularios descargables?",
        answer:
          "Sí. Se pueden agregar documentos PDF, botones de descarga y mensajes claros sobre a dónde enviar la información."
      },
      {
        question: "¿Puede manejar participantes confirmados?",
        answer:
          "Puede mostrarlos en una sección pública o, si se requiere control, plantearse una etapa con panel administrativo."
      },
      {
        question: "¿Sirve para campañas de promoción?",
        answer:
          "Sí. Una web del evento ayuda a dirigir tráfico de redes, Google Ads, email marketing o WhatsApp hacia una fuente oficial."
      }
    ],
    relatedLinks: [
      { label: "Landing pages", href: "/landing-pages-panama" },
      { label: "Páginas corporativas", href: "/paginas-web-corporativas-panama" },
      { label: "Sistemas de reservas", href: "/sistemas-de-reservas-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "rediseno-web-panama",
    eyebrow: "Rediseño web en Panamá",
    h1: "Rediseño de páginas web en Panamá para negocios que necesitan verse más profesionales",
    intro:
      "Mejoramos páginas existentes que se ven antiguas, cargan mal, no explican bien la oferta o no convierten. Rediseñamos estructura, contenido, experiencia mobile, SEO básico y rutas de contacto.",
    metaTitle: "Rediseño de páginas web en Panamá | LulabTech",
    metaDescription:
      "Rediseño web en Panamá para empresas con sitios antiguos o poco claros. Mejoramos estructura, diseño responsive, SEO, WhatsApp y conversión desde $299.",
    keywords: [
      "rediseño web Panamá",
      "rediseñar página web Panamá",
      "mejorar página web Panamá",
      "actualizar sitio web Panamá"
    ],
    primaryCta: "Evaluar mi web actual",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Revisión de estructura, mensaje, responsive y rutas de contacto",
      "Mejora visual sin perder la esencia de la marca",
      "Base SEO y conversión para aprovechar mejor el tráfico existente"
    ],
    heroPanelTitle: "A veces no necesitas empezar de cero: necesitas ordenar y elevar lo que ya tienes.",
    heroPanelDescription:
      "Revisamos qué funciona, qué está confundiendo al usuario y cómo convertir la web actual en una presencia más clara, moderna y útil.",
    benefitsTitle: "Un rediseño puede mejorar percepción, confianza y consultas",
    benefitsDescription:
      "El objetivo no es cambiar por cambiar. Es corregir fricción, actualizar la presentación y hacer que la página ayude mejor al negocio.",
    benefits: [
      "Hero y mensajes principales más claros",
      "Secciones reordenadas para explicar servicios y beneficios",
      "Mejor experiencia en celular y pantallas pequeñas",
      "CTAs hacia WhatsApp, correo o formulario más visibles",
      "Revisión de títulos, metadescripciones, sitemap y enlaces internos",
      "Aprovechamiento de contenido existente sin llenar la web de texto genérico"
    ],
    processTitle: "Proceso de rediseño web",
    process: [
      {
        title: "Auditoría visual y comercial",
        description:
          "Identificamos problemas de claridad, diseño, navegación, mobile, contenido y conversión."
      },
      {
        title: "Nueva estructura",
        description:
          "Reorganizamos secciones, mensajes y llamados a la acción según el objetivo del negocio."
      },
      {
        title: "Diseño y desarrollo",
        description:
          "Construimos una versión más moderna y estable, cuidando responsive, performance y consistencia visual."
      },
      {
        title: "Publicación controlada",
        description:
          "Validamos rutas, formularios, WhatsApp, metadatos y redirecciones necesarias para no perder señales importantes."
      }
    ],
    useCasesTitle: "Cuándo conviene rediseñar una página",
    useCasesDescription:
      "Un rediseño aplica cuando la web todavía sirve como base, pero necesita una mejora visual, comercial y técnica.",
    useCases: [
      {
        title: "Webs antiguas o desordenadas",
        description:
          "Cuando la página se ve vieja, no transmite confianza o el visitante no entiende qué debe hacer."
      },
      {
        title: "Negocios que cambiaron su oferta",
        description:
          "Cuando nuevos servicios, precios, enfoque o públicos ya no coinciden con la web actual."
      },
      {
        title: "Sitios que reciben visitas pero no consultas",
        description:
          "Cuando hay tráfico, pero faltan CTAs, claridad, confianza o una ruta directa hacia el contacto."
      }
    ],
    faq: [
      {
        question: "¿Se puede rediseñar sin perder el dominio?",
        answer:
          "Sí. El dominio puede mantenerse. Lo importante es revisar hosting, tecnología, accesos y rutas antes de publicar."
      },
      {
        question: "¿Qué pasa con el SEO existente?",
        answer:
          "Se revisan URLs, metadatos, sitemap y redirecciones necesarias para reducir riesgos al cambiar la estructura."
      },
      {
        question: "¿Siempre hay que cambiar todo?",
        answer:
          "No. A veces basta con reorganizar secciones, mejorar diseño responsive, actualizar textos y reforzar CTAs."
      }
    ],
    relatedLinks: [
      { label: "Diseño web en Panamá", href: "/diseno-web-panama" },
      { label: "Mantenimiento web", href: "/mantenimiento-web-panama" },
      { label: "SEO para páginas web", href: "/seo-para-paginas-web-panama" }
    ],
    priceFrom: "$299"
  },
  {
    slug: "sistemas-de-inventario-panama",
    eyebrow: "Sistemas de inventario en Panamá",
    h1: "Sistemas de inventario en Panamá para controlar productos, movimientos y reportes",
    intro:
      "Desarrollamos sistemas de inventario a medida para empresas que necesitan controlar productos, insumos, entradas, salidas, existencias, responsables y reportes desde un panel claro.",
    metaTitle: "Sistemas de inventario en Panamá | LulabTech",
    metaDescription:
      "Sistema de inventario en Panamá para productos, insumos, movimientos, existencias, reportes, usuarios y panel administrativo desde $899.",
    keywords: [
      "sistema de inventario Panamá",
      "software de inventario Panamá",
      "control de inventario Panamá",
      "inventario para empresas Panamá"
    ],
    primaryCta: "Cotizar sistema de inventario",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Productos, categorías, existencias, entradas, salidas y ajustes",
      "Usuarios, permisos, filtros, historial y reportes",
      "Sistema construido según el flujo real de la empresa"
    ],
    heroPanelTitle: "El inventario necesita trazabilidad, no solo una lista en Excel.",
    heroPanelDescription:
      "Creamos paneles que ordenan datos, reducen errores y permiten consultar movimientos con más claridad.",
    benefitsTitle: "Más control para empresas que manejan productos o insumos",
    benefitsDescription:
      "Un sistema de inventario ayuda a saber qué entra, qué sale, quién lo registra y qué información necesita el equipo para decidir.",
    benefits: [
      "Catálogo de productos, insumos, unidades y categorías",
      "Movimientos de entrada, salida, ajuste o traslado según el flujo",
      "Alertas o reportes de bajo inventario según alcance",
      "Roles para administradores y usuarios operativos",
      "Filtros, búsqueda, exportaciones o reportes personalizados",
      "Posibilidad de integrarse con ventas, POS, reservas o logística por etapas"
    ],
    processTitle: "Proceso para crear un sistema de inventario",
    process: [
      {
        title: "Mapeo del flujo",
        description:
          "Entendemos qué productos se manejan, cómo entran, cómo salen y quién registra cada movimiento."
      },
      {
        title: "Definición de módulos",
        description:
          "Se establecen pantallas, permisos, reportes, filtros, alertas y datos obligatorios."
      },
      {
        title: "Desarrollo y pruebas",
        description:
          "Construimos el sistema con base de datos, panel administrativo y validaciones para reducir errores."
      },
      {
        title: "Entrega por etapas",
        description:
          "Se entrega una primera versión funcional y se ajusta según el uso real del equipo."
      }
    ],
    useCasesTitle: "Empresas que pueden necesitar inventario digital",
    useCasesDescription:
      "Aplica para restaurantes, tiendas, distribuidores, logística, talleres, academias con materiales o empresas con activos internos.",
    useCases: [
      {
        title: "Restaurantes y comercios",
        description:
          "Para controlar insumos, productos, recetas, existencias y consumo operativo."
      },
      {
        title: "Distribución y logística",
        description:
          "Para registrar mercancía, ubicaciones, movimientos, responsables y estados."
      },
      {
        title: "Empresas con activos internos",
        description:
          "Para equipos, herramientas, uniformes, documentos, préstamos o asignaciones."
      }
    ],
    faq: [
      {
        question: "¿Un sistema de inventario se puede hacer a medida?",
        answer:
          "Sí. Se define según productos, unidades, responsables, movimientos, reportes y reglas propias del negocio."
      },
      {
        question: "¿Puede conectarse con ventas o POS?",
        answer:
          "Sí, si se cotiza dentro del alcance. Puede integrarse por etapas con ventas, recetas, compras o reportes."
      },
      {
        question: "¿Incluye usuarios y permisos?",
        answer:
          "Sí. Se pueden crear roles para administrar, registrar movimientos o consultar información según necesidad."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Software POS", href: "/software-pos-panama" },
      { label: "Software para restaurantes", href: "/software-para-restaurantes-panama" }
    ],
    priceFrom: "$899"
  },
  {
    slug: "crm-para-empresas-panama",
    eyebrow: "CRM para empresas en Panamá",
    h1: "CRM para empresas en Panamá que necesitan ordenar clientes, oportunidades y seguimiento",
    intro:
      "Creamos CRM y paneles comerciales a medida para empresas que quieren centralizar prospectos, clientes, estados, notas, responsables, formularios y seguimiento de oportunidades.",
    metaTitle: "CRM para empresas en Panamá | LulabTech",
    metaDescription:
      "CRM para empresas en Panamá con clientes, prospectos, estados, responsables, seguimiento, formularios, reportes y panel administrativo desde $899.",
    keywords: [
      "CRM Panamá",
      "CRM para empresas Panamá",
      "sistema de clientes Panamá",
      "software comercial Panamá"
    ],
    primaryCta: "Cotizar CRM a medida",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Clientes, prospectos, estados, responsables, notas y seguimiento",
      "Formularios, filtros, reportes y panel administrativo",
      "Flujo adaptado al proceso comercial real de la empresa"
    ],
    heroPanelTitle: "Las oportunidades se pierden cuando viven en chats sueltos y hojas separadas.",
    heroPanelDescription:
      "Un CRM ayuda a ordenar quién preguntó, qué necesita, en qué estado está y cuál es el próximo paso del equipo.",
    benefitsTitle: "Un CRM propio puede ordenar ventas y atención sin forzar procesos genéricos",
    benefitsDescription:
      "No todas las empresas necesitan un software enorme. A veces necesitan un panel claro que centralice prospectos y seguimiento.",
    benefits: [
      "Registro de clientes, prospectos y contactos",
      "Estados comerciales: nuevo, contactado, cotizado, ganado o perdido",
      "Notas, responsables, fechas y próximos pasos",
      "Formularios conectados a la web o landing según alcance",
      "Reportes para medir oportunidades, fuentes y seguimiento",
      "Roles para equipo comercial, administración o gerencia"
    ],
    processTitle: "Proceso para crear un CRM a medida",
    process: [
      {
        title: "Proceso comercial actual",
        description:
          "Identificamos de dónde llegan los prospectos, cómo se atienden y en qué punto se pierde seguimiento."
      },
      {
        title: "Pipeline y campos",
        description:
          "Definimos estados, datos obligatorios, responsables, permisos, filtros y reportes necesarios."
      },
      {
        title: "Desarrollo del panel",
        description:
          "Construimos la herramienta con formularios, base de datos, vistas, acciones y controles."
      },
      {
        title: "Prueba con casos reales",
        description:
          "Ajustamos el flujo según cómo el equipo realmente atiende clientes y oportunidades."
      }
    ],
    useCasesTitle: "Cuándo conviene un CRM personalizado",
    useCasesDescription:
      "Aplica cuando la empresa necesita seguimiento, orden y visibilidad de sus oportunidades sin depender de memoria o chats.",
    useCases: [
      {
        title: "Empresas de servicios",
        description:
          "Para registrar consultas, cotizaciones, llamadas, seguimientos y cierres."
      },
      {
        title: "Inmobiliarias y asesores",
        description:
          "Para organizar prospectos, preferencias, propiedades, etapas y notas de contacto."
      },
      {
        title: "B2B y ventas consultivas",
        description:
          "Para procesos con varias conversaciones, documentos, cotizaciones y responsables internos."
      }
    ],
    faq: [
      {
        question: "¿Es mejor un CRM a medida o una plataforma ya hecha?",
        answer:
          "Depende del caso. Si necesitas algo estándar, una plataforma existente puede servir. Si tu flujo es muy específico, un CRM a medida puede encajar mejor."
      },
      {
        question: "¿Puede conectarse con formularios de la web?",
        answer:
          "Sí. Las solicitudes de formularios pueden alimentar el panel si se incluye dentro del alcance técnico."
      },
      {
        question: "¿Puede tener reportes?",
        answer:
          "Sí. Se pueden crear reportes por estado, responsable, fecha, fuente de contacto o etapa comercial."
      }
    ],
    relatedLinks: [
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Automatizaciones", href: "/automatizaciones-para-empresas-panama" },
      { label: "Landing pages", href: "/landing-pages-panama" }
    ],
    priceFrom: "$899"
  },
  {
    slug: "software-para-logistica-panama",
    eyebrow: "Software para logística en Panamá",
    h1: "Software para logística en Panamá: clientes, envíos, estados, documentos y reportes",
    intro:
      "Desarrollamos software logístico a medida para empresas que necesitan organizar clientes, envíos, rutas, estados, comprobantes, documentos, facturación operativa y reportes desde un panel centralizado.",
    metaTitle: "Software para logística en Panamá | LulabTech",
    metaDescription:
      "Software para logística en Panamá con clientes, envíos, estados, documentos, comprobantes, reportes, usuarios y panel administrativo desde $899.",
    keywords: [
      "software para logística Panamá",
      "sistema logístico Panamá",
      "software para envíos Panamá",
      "sistema para transporte Panamá"
    ],
    primaryCta: "Cotizar software logístico",
    secondaryCta: "Ver proyectos",
    heroBullets: [
      "Clientes, envíos, estados, documentos y comprobantes",
      "Panel administrativo con usuarios, filtros, historial y reportes",
      "Flujos adaptados a logística, casilleros, transporte o distribución"
    ],
    heroPanelTitle: "La logística necesita estados claros y datos centralizados.",
    heroPanelDescription:
      "Creamos sistemas para que la operación deje de depender de mensajes sueltos, archivos dispersos o controles manuales difíciles de auditar.",
    benefitsTitle: "Un sistema logístico ayuda a controlar operación, clientes y seguimiento",
    benefitsDescription:
      "El objetivo es que cada envío, documento o estado pueda consultarse con claridad y que el equipo tenga menos fricción operativa.",
    benefits: [
      "Módulos para clientes, envíos, estados, documentos y comprobantes",
      "Panel para administradores, empleados o perfiles específicos",
      "Filtros por fecha, cliente, estado, ruta, proveedor o tipo de servicio",
      "Historial de cambios y reportes según alcance",
      "Posibilidad de facturación, cotizaciones o carga de archivos",
      "Estructura escalable para casilleros, transporte, distribución o carga"
    ],
    processTitle: "Proceso para desarrollar software logístico",
    process: [
      {
        title: "Diagnóstico operativo",
        description:
          "Entendemos qué servicios maneja la empresa, qué estados usa, quién interviene y dónde se pierde información."
      },
      {
        title: "Definición de flujo",
        description:
          "Se diseñan módulos, roles, documentos, estados, reportes y permisos según la operación real."
      },
      {
        title: "Desarrollo por módulos",
        description:
          "Construimos una primera versión funcional con base de datos, panel y validaciones críticas."
      },
      {
        title: "Prueba y evolución",
        description:
          "La herramienta se ajusta con casos reales y puede crecer con facturación, clientes o seguimiento más avanzado."
      }
    ],
    useCasesTitle: "Operaciones logísticas donde aplica",
    useCasesDescription:
      "Puede adaptarse a casilleros, transporte interno, entregas, carga, distribución o empresas que manejan documentos y estados.",
    useCases: [
      {
        title: "Casilleros y paquetería",
        description:
          "Clientes, paquetes, contenedores, estados, comprobantes, facturación y panel administrativo."
      },
      {
        title: "Transporte y distribución",
        description:
          "Rutas, entregas, documentos, responsables, estados y reportes de operación."
      },
      {
        title: "Empresas con seguimiento documental",
        description:
          "Carga de archivos, comprobantes, aprobaciones, historial y control por usuario."
      }
    ],
    faq: [
      {
        question: "¿Es lo mismo que software para casilleros?",
        answer:
          "No necesariamente. Casilleros es un caso específico. Software logístico puede cubrir transporte, distribución, envíos, documentos o rutas según el flujo."
      },
      {
        question: "¿Puede tener acceso para clientes?",
        answer:
          "Sí, si se incluye en el alcance. Puede existir panel interno, consulta pública por código o acceso para clientes registrados."
      },
      {
        question: "¿Puede manejar documentos y comprobantes?",
        answer:
          "Sí. Se pueden crear módulos de carga, validación, historial y descarga de archivos según necesidad."
      }
    ],
    relatedLinks: [
      { label: "Software para casilleros", href: "/software-para-casilleros-panama" },
      { label: "Software a medida", href: "/software-a-medida-panama" },
      { label: "Sistemas de inventario", href: "/sistemas-de-inventario-panama" }
    ],
    priceFrom: "$899"
  },
];

const servicePagesEn: ServicePage[] = [
  {
    slug: "diseno-web-panama",
    eyebrow: "Web design in Panama",
    h1: "Web design in Panama for companies that want to look professional and sell more",
    intro:
      "We create professional websites for Panamanian businesses that need to communicate their offer better, build trust, and turn visitors into real inquiries through WhatsApp, forms, or email.",
    metaTitle: "Web design in Panama for companies | Lulab Technology",
    metaDescription:
      "Web design in Panama for companies, brands, and businesses that need a professional, responsive, clear, fast website prepared for local SEO.",
    keywords: ["web design Panama", "website design Panama", "professional websites Panama", "web agency Panama"],
    primaryCta: "Quote my website",
    secondaryCta: "View projects",
    heroPanelTitle: "A clear, fast digital presence ready to capture clients.",
    heroPanelDescription:
      "We organize your message, design a professional experience, and leave a foundation ready to grow with Google, WhatsApp, and digital campaigns.",
    heroBullets: [
      "Responsive design for mobile, tablet, and desktop",
      "Clear commercial structure to explain services and capture inquiries",
      "Foundation prepared for local SEO, WhatsApp, and digital campaigns"
    ],
    benefitsTitle: "A website designed so your business is understood quickly",
    benefitsDescription:
      "It is not just about looking good. Your website should organize your message, explain what you sell, and guide users toward contacting you.",
    benefits: [
      "Premium, modern visual hierarchy",
      "Commercial copy written for business owners",
      "Visible WhatsApp buttons and forms",
      "Sections for services, benefits, projects, FAQs, and contact",
      "Basic optimization for titles, meta descriptions, internal links, and semantic structure",
      "Adaptive design so the site does not break on smaller screens"
    ],
    processTitle: "Process for creating a professional website",
    process: [
      {
        title: "Business diagnosis",
        description:
          "We understand what you sell, who you sell to, what action you want to drive, and what the page must communicate from the first scroll."
      },
      {
        title: "Structure and content",
        description:
          "We organize the sections so visitors quickly understand your services, value, and how to contact you."
      },
      {
        title: "Responsive design and development",
        description:
          "We build a modern, clean, mobile-friendly experience with attention to aesthetics, clarity, and speed."
      },
      {
        title: "Launch and SEO foundation",
        description:
          "We leave the website ready to share, connect with WhatsApp, index on Google, and grow with content or campaigns."
      }
    ],
    useCasesTitle: "Ideal for businesses that need a serious digital presence",
    useCasesDescription:
      "It works for service companies, law firms, clinics, restaurants, academies, real estate, logistics, and personal brands that need to look more trustworthy.",
    useCases: [
      {
        title: "Informational websites",
        description:
          "To explain who you are, what services you offer, schedules, location, benefits, and contact in a simple professional structure."
      },
      {
        title: "Websites for lawyers",
        description:
          "To communicate practice areas, experience, trust, contact details, and consultation calls without looking generic."
      },
      {
        title: "Corporate websites",
        description:
          "For companies that need to show services, team, background, projects, certifications, and support channels."
      }
    ],
    faq: [
      {
        question: "Can a professional website help sell more?",
        answer:
          "It helps clients quickly understand what you do, trust your business more, and have a clear path to message you or request a quote."
      },
      {
        question: "Will the website be ready for Google?",
        answer:
          "Yes. We work on an on-page SEO foundation with titles, meta description, H1/H2 structure, sitemap, robots, and internal links."
      },
      {
        question: "Can I connect WhatsApp?",
        answer:
          "Yes. We can add buttons, pre-filled messages, and contact paths so users can message you without getting lost."
      }
    ],
    relatedLinks: [
      { label: "Landing pages in Panama", href: "/landing-pages-panama" },
      { label: "Company websites", href: "/paginas-web-corporativas-panama" },
      { label: "View projects", href: "/portafolio" }
    ]
  },
  {
    slug: "landing-pages-panama",
    eyebrow: "Landing pages in Panama",
    h1: "Landing pages in Panama to capture clients through WhatsApp, forms, and campaigns",
    intro:
      "We design landing pages focused on a clear offer, a visible call to action, and a direct path for users to message, request a quote, or leave their information.",
    metaTitle: "Landing pages in Panama for WhatsApp and campaigns | Lulab Technology",
    metaDescription:
      "Landing pages in Panama to capture clients from WhatsApp, forms, Meta Ads, and Google Ads with responsive design and a commercial focus.",
    keywords: ["landing pages Panama", "WhatsApp landing page Panama", "Google Ads landing page Panama", "one page website Panama"],
    primaryCta: "I want a landing page",
    secondaryCta: "View projects",
    heroPanelTitle: "One page focused on one action: getting the client to contact you.",
    heroPanelDescription:
      "We build a direct path between the ad, the offer, and WhatsApp or a form to reduce friction and capture real opportunities.",
    heroBullets: [
      "A page focused on a specific offer or campaign",
      "Clear CTA toward WhatsApp, form, or call",
      "Fast responsive design prepared for digital campaigns"
    ],
    benefitsTitle: "A landing page should explain, convince, and move users to action",
    benefitsDescription:
      "The landing removes distractions and focuses attention on one offer, service, or campaign to increase the probability of contact.",
    benefits: [
      "Strong hero with a clear value proposition",
      "Benefits and services explained without overwhelming users",
      "Form or WhatsApp visible throughout the page",
      "Trust section, FAQs, and final CTA",
      "Foundation to measure Meta Ads or Google Ads campaigns",
      "Mobile experience designed for users arriving from ads"
    ],
    processTitle: "How we work on a landing page",
    process: [
      {
        title: "Main offer",
        description:
          "We define which service, product, or promotion the landing should communicate to avoid scattered messaging."
      },
      {
        title: "Conversion path",
        description:
          "We define whether the user should write on WhatsApp, fill out a form, call, or request information."
      },
      {
        title: "Design and content",
        description:
          "We create a clear visual structure with persuasive copy and sections that reinforce trust."
      },
      {
        title: "Campaign-ready launch",
        description:
          "We leave it ready to share, measure, and connect with Meta Ads, Google Ads, or organic traffic."
      }
    ],
    useCasesTitle: "When a landing page makes sense",
    useCasesDescription:
      "It is ideal when you want to sell a specific service, validate an offer, launch a campaign, or convert traffic from social media and ads.",
    useCases: [
      {
        title: "Professional services",
        description:
          "Lawyers, clinics, advisors, real estate professionals, and consultants that need to explain an offer and capture inquiries."
      },
      {
        title: "Ad campaigns",
        description:
          "Meta Ads and Google Ads work better when the ad leads to a page aligned with the promise of the ad."
      },
      {
        title: "Businesses that sell through WhatsApp",
        description:
          "The landing can work as a professional introduction and filter before the client sends a message."
      }
    ],
    faq: [
      {
        question: "Is a landing page the same as a full website?",
        answer:
          "Not exactly. A landing page focuses on one main offer or action. A full website can include more pages, sections, and depth."
      },
      {
        question: "Does it work for Google Ads campaigns?",
        answer:
          "Yes. A landing page aligned with the search and the ad can improve message clarity and conversion."
      },
      {
        question: "Can it include a form and WhatsApp?",
        answer:
          "Yes. We can combine forms, WhatsApp, email, phone, and strategic buttons depending on the objective."
      }
    ],
    relatedLinks: [
      { label: "Web design in Panama", href: "/diseno-web-panama" },
      { label: "Google Ads in Panama", href: "/google-ads-panama" },
      { label: "View projects", href: "/portafolio" }
    ]
  },
  {
    slug: "paginas-web-empresas-panama",
    eyebrow: "Corporate websites",
    h1: "Company websites in Panama",
    intro:
      "We build corporate websites for companies that need a formal, clear, and trustworthy presence, with sections for services, team, experience, projects, and contact.",
    metaTitle: "Company websites in Panama | Lulab Technology",
    metaDescription:
      "Corporate websites for companies in Panama with professional design, services, contact, portfolio, basic SEO, and responsive experience.",
    keywords: ["company websites Panama", "corporate website Panama", "business website Panama", "corporate web design Panama"],
    primaryCta: "Create my company website",
    secondaryCta: "View projects",
    heroPanelTitle: "A corporate website that organizes your company and builds trust.",
    heroPanelDescription:
      "We present services, credibility, team, experience, and contact in a professional structure that is easy to understand quickly.",
    heroBullets: [
      "Formal structure to present the company, services, and background",
      "Premium clean design aligned with brand identity",
      "Clear contact through WhatsApp, forms, email, and social media"
    ],
    benefitsTitle: "A corporate website should communicate seriousness from the first impression",
    benefitsDescription:
      "For many companies, the website is the first validation point. It should look professional, load well, and explain the offer without confusing users.",
    benefits: [
      "Sections for services, company, benefits, projects, and contact",
      "Adaptive design for executives, clients, and mobile visitors",
      "Copy focused on credibility and commercial clarity",
      "Structure prepared for basic SEO and future internal pages",
      "Integration with WhatsApp, email, and forms",
      "Consistent visual foundation for companies that want to look more serious"
    ],
    processTitle: "Process for a corporate website",
    process: [
      {
        title: "Section map",
        description:
          "We define what the website should include: home, services, about the company, projects, contact, FAQs, and other required sections."
      },
      {
        title: "Corporate message",
        description:
          "We organize the content so the company communicates seriousness, experience, and value in a simple way."
      },
      {
        title: "Design and development",
        description:
          "We build a modern responsive experience consistent with the brand."
      },
      {
        title: "Delivery and launch",
        description:
          "We publish the website and leave clear paths to share it, measure it, and keep improving it."
      }
    ],
    useCasesTitle: "Types of companies that can benefit",
    useCasesDescription:
      "A corporate website works for businesses that need to explain services, build trust, and make professional contact easier.",
    useCases: [
      {
        title: "Law firms and consultancies",
        description:
          "Presentation of practice areas, experience, professional profile, and consultation channels."
      },
      {
        title: "Logistics and industrial companies",
        description:
          "Communication of services, processes, coverage, credibility, and commercial support."
      },
      {
        title: "Academies, clinics, and real estate",
        description:
          "Structures for programs, services, locations, bookings, contact, and institutional trust."
      }
    ],
    faq: [
      {
        question: "Can a corporate website have multiple pages?",
        answer:
          "Yes. It can be a complete landing page or a website with internal pages depending on the company size and SEO objective."
      },
      {
        question: "Can it include a portfolio or projects?",
        answer:
          "Yes. It can include a section or project page to show experience without inventing unsupported results or data."
      },
      {
        question: "Can the website be expanded later?",
        answer:
          "Yes. The structure can be prepared to add a blog, service pages, advanced forms, or integrations."
      }
    ],
    relatedLinks: [
      { label: "Web design in Panama", href: "/diseno-web-panama" },
      { label: "Custom software", href: "/software-a-medida-panama" },
      { label: "View projects", href: "/portafolio" }
    ]
  },
  {
    slug: "tiendas-online-panama",
    eyebrow: "Ecommerce in Panama",
    h1: "Online stores in Panama to sell products professionally",
    intro:
      "We create online stores and digital catalogs for businesses that sell through Instagram, WhatsApp, or physical stores and want to present products with more order, trust, and room to scale.",
    metaTitle: "Online stores in Panama and ecommerce | Lulab Technology",
    metaDescription:
      "Online stores in Panama to sell products with catalog, categories, cart, payments or WhatsApp, mobile experience, and structure to grow.",
    keywords: ["online stores Panama", "ecommerce Panama", "create online store Panama", "digital catalog Panama"],
    primaryCta: "Quote online store",
    secondaryCta: "View projects",
    heroPanelTitle: "An organized digital storefront to sell with more trust.",
    heroPanelDescription:
      "We turn products, categories, and inquiries into a clear experience for customers who buy from mobile, social media, or WhatsApp.",
    heroBullets: [
      "Product catalog with categories and clear product pages",
      "Options for cart, payments, or quote through WhatsApp",
      "Mobile design for customers buying from social media"
    ],
    benefitsTitle: "An online store should make buying or asking easy",
    benefitsDescription:
      "The goal is not just uploading products. The experience should organize the catalog, build trust, and reduce friction for the customer.",
    benefits: [
      "Catalog organized by categories",
      "Product pages with clear information",
      "Path toward cart, payment, form, or WhatsApp",
      "Responsive design focused on mobile purchases",
      "Structure to grow with more products and campaigns",
      "Foundation to connect metrics, Pixel, or Google depending on scope"
    ],
    processTitle: "Process for creating an online store",
    process: [
      {
        title: "Catalog definition",
        description:
          "We organize categories, products, attributes, photos, prices, and the contact or purchase method."
      },
      {
        title: "Shopping experience",
        description:
          "We define whether the flow will use cart, online payment, WhatsApp, form, or a combination."
      },
      {
        title: "Visual design",
        description:
          "We build a clear, fast, mobile-friendly store with attention to product presentation, trust, and navigation."
      },
      {
        title: "Launch and improvement",
        description:
          "The store is ready to share, connect with campaigns, and keep expanding products or sections."
      }
    ],
    useCasesTitle: "Ideal for businesses that want to formalize digital sales",
    useCasesDescription:
      "Especially useful if you currently sell through Instagram, WhatsApp, or direct support, but want a more organized and professional storefront.",
    useCases: [
      {
        title: "Catalogs with WhatsApp",
        description:
          "Clients view products, understand details, and message you with a clearer inquiry."
      },
      {
        title: "Stores with cart",
        description:
          "For businesses that want a more complete shopping experience with products and order process."
      },
      {
        title: "Brands scaling through campaigns",
        description:
          "A well-structured store helps receive ad traffic and present products more seriously."
      }
    ],
    faq: [
      {
        question: "Can the store sell through WhatsApp?",
        answer:
          "Yes. It can work as a professional catalog with WhatsApp buttons so customers can ask about specific products."
      },
      {
        question: "Can it include online payments?",
        answer:
          "Yes, depending on the scope and the payment gateway the business wants to use. It can also start with a simpler structure."
      },
      {
        question: "Does it work for businesses selling on Instagram?",
        answer:
          "Yes. The store helps organize products, build trust, and provide a professional link for campaigns and social media."
      }
    ],
    relatedLinks: [
      { label: "Landing pages in Panama", href: "/landing-pages-panama" },
      { label: "Google Ads in Panama", href: "/google-ads-panama" },
      { label: "Web design in Panama", href: "/diseno-web-panama" }
    ]
  },
  {
    slug: "software-a-medida-panama",
    eyebrow: "Custom software in Panama",
    h1: "Custom software in Panama to automate your company processes",
    intro:
      "We develop digital systems for companies that can no longer manage operations only with Excel, WhatsApp, or manual processes. We create panels, modules, bookings, inventories, reports, and custom workflows.",
    metaTitle: "Custom software in Panama for companies | Lulab Technology",
    metaDescription:
      "Custom software in Panama to automate processes: admin panels, bookings, inventories, lockers, restaurants, reports, and databases.",
    keywords: ["custom software Panama", "web systems Panama", "business software Panama", "process automation Panama"],
    primaryCta: "Quote custom system",
    secondaryCta: "View projects",
    heroPanelTitle: "A system designed around the real workflow of your operation.",
    heroPanelDescription:
      "We create panels, modules, users, reports, and databases to organize processes that should no longer live only in Excel or WhatsApp.",
    heroBullets: [
      "Admin panels, users, permissions, and reports",
      "Databases to organize information and reduce manual work",
      "Custom modules based on your company’s real workflow"
    ],
    benefitsTitle: "When Excel and WhatsApp are no longer enough, you need a system",
    benefitsDescription:
      "Custom software allows you to control processes, centralize data, and reduce operational errors with a tool designed for the way you work.",
    benefits: [
      "Modules for clients, products, bookings, payments, statuses, or reports",
      "Users with roles and permissions according to the team",
      "Admin panel to control operations",
      "Structured database to consult information quickly",
      "Exports, filters, statuses, and tracking",
      "Responsive design for use from computers or mobile devices depending on the case"
    ],
    processTitle: "Process for creating custom software",
    process: [
      {
        title: "Process discovery",
        description:
          "We understand how the company works today, where time is lost, and what information needs to be organized."
      },
      {
        title: "Module definition",
        description:
          "We define what screens, roles, reports, statuses, and flows the system needs."
      },
      {
        title: "Development by stages",
        description:
          "We build the system with attention to database, security, user experience, and testing."
      },
      {
        title: "Delivery and adjustments",
        description:
          "A first functional version is delivered and adjusted based on the team’s real use."
      }
    ],
    useCasesTitle: "Examples of software we can build",
    useCasesDescription:
      "Each system is quoted based on scope, modules, and complexity. The idea is to create a tool that adapts to the business, not the other way around.",
    useCases: [
      {
        title: "Software for lockers and logistics",
        description:
          "Clients, lockers, containers, shipments, statuses, receipts, billing, and admin panel."
      },
      {
        title: "Software for restaurants",
        description:
          "Sales, inventory, schedules, employees, reports, payment statements, and internal operational control."
      },
      {
        title: "Booking systems",
        description:
          "Services, availability, requests, approvals, emails, statuses, and admin panel."
      },
      {
        title: "Inventory systems",
        description:
          "Products, codes, locations, statuses, responsible users, transfers, and reports."
      }
    ],
    faq: [
      {
        question: "Is custom software different from a website?",
        answer:
          "Yes. A website communicates and captures clients. Custom software helps operate, manage information, and automate internal processes."
      },
      {
        question: "Can it be built in stages?",
        answer:
          "Yes. The healthiest approach is usually to build a first version with essential modules and then expand based on real use."
      },
      {
        question: "Can it include users and permissions?",
        answer:
          "Yes. We can create roles for administrators, employees, clients, or other profiles depending on the system flow."
      }
    ],
    relatedLinks: [
      { label: "Company websites", href: "/paginas-web-corporativas-panama" },
      { label: "Web design in Panama", href: "/diseno-web-panama" },
      { label: "View projects", href: "/portafolio" }
    ]
  },
  {
    slug: "google-ads-panama",
    eyebrow: "Google Ads in Panama",
    h1: "Google Ads setup in Panama for businesses that want more inquiries",
    intro:
      "We set up Google Ads search campaigns for businesses that want to appear when people are already looking for services like theirs. The campaign should connect to a clear website or landing page to convert better.",
    metaTitle: "Google Ads setup in Panama | Lulab Technology",
    metaDescription:
      "Google Ads setup in Panama: keywords, ads, location, extensions, and connection with landing page or website. Ad spend not included.",
    keywords: ["Google Ads Panama", "Google Ads setup Panama", "Google campaigns Panama", "Google advertising Panama"],
    primaryCta: "Set up Google Ads",
    secondaryCta: "View landing pages",
    heroPanelTitle: "Search campaigns connected to a page prepared to convert.",
    heroPanelDescription:
      "Advertising works better when keywords, ads, and landing page are aligned with a clear contact intention.",
    heroBullets: [
      "Initial keyword research and negative terms",
      "Location, ads, and campaign structure setup",
      "Connection with landing page, WhatsApp, or form"
    ],
    benefitsTitle: "Google Ads works better when the page is prepared to convert",
    benefitsDescription:
      "Activating ads is not enough. Search, ad, and page must be aligned so users quickly find what they need.",
    benefits: [
      "Search campaign setup according to service and location",
      "Ad groups organized by intent",
      "Ads with clear messages and calls to action",
      "Initial negative keywords to filter unhelpful searches",
      "Landing page or destination page recommendation",
      "Clarification that ad spend is paid separately and results are not guaranteed"
    ],
    processTitle: "What the initial setup includes",
    process: [
      {
        title: "Objective and service",
        description:
          "We define what the business wants to achieve and which service or product will be advertised."
      },
      {
        title: "Keywords and ads",
        description:
          "We organize keywords, initial negatives, headlines, descriptions, and calls to action."
      },
      {
        title: "Location and links",
        description:
          "We configure Panama targeting, schedules if applicable, and destination toward landing page, website, WhatsApp, or form."
      },
      {
        title: "Delivery and recommendations",
        description:
          "The campaign is prepared and key points are explained for measuring and optimizing later."
      }
    ],
    useCasesTitle: "Businesses that can use Google Ads",
    useCasesDescription:
      "Google Ads can help when there is search intent: people looking for lawyers, clinics, restaurants, technical services, courses, or business solutions.",
    useCases: [
      {
        title: "Professional services",
        description:
          "Lawyers, accountants, advisors, consultants, real estate professionals, and clinics looking for more direct inquiries."
      },
      {
        title: "Local businesses",
        description:
          "Restaurants, academies, home services, and companies with WhatsApp or phone support."
      },
      {
        title: "B2B companies",
        description:
          "Companies that sell industrial, logistics, technology, or specialized solutions."
      }
    ],
    faq: [
      {
        question: "Is the advertising budget included?",
        answer:
          "No. The amount paid to Google Ads is not included and is defined by the client according to their budget."
      },
      {
        question: "Are sales or leads guaranteed?",
        answer:
          "No guaranteed results are promised. We set up a correct foundation and recommend measuring, optimizing, and improving the destination page."
      },
      {
        question: "Do I need a landing page?",
        answer:
          "It is highly recommended. A focused landing page helps people arriving from Google understand the offer and contact with less friction."
      }
    ],
    relatedLinks: [
      { label: "Landing pages in Panama", href: "/landing-pages-panama" },
      { label: "Web design in Panama", href: "/diseno-web-panama" },
      { label: "View projects", href: "/portafolio" }
    ]
  }
];

export const servicePagesByLocale: Record<ServiceLocale, ServicePage[]> = {
  es: servicePagesEs,
  en: servicePagesEn
};

export const servicePages = servicePagesEs;
export const servicePageSlugs = servicePagesEs.map((page) => page.slug);

export function getServicePage(slug: string, locale: ServiceLocale = "es") {
  return servicePagesByLocale[locale].find((page) => page.slug === slug);
}

export function getServicePageOrThrow(slug: string, locale: ServiceLocale = "es") {
  const page = getServicePage(slug, locale);

  if (!page) {
    throw new Error(`Service page not found: ${slug}`);
  }

  return page;
}

export function createServicePageMetadata(slug: string): Metadata {
  const page = getServicePageOrThrow(slug, "es");
  const url = `${baseUrl}/${page.slug}`;

  return {
    title: {
      absolute: page.metaTitle
    },
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

export type PortfolioProject = {
  name: string;
  type: string;
  description: string;
  services: string[];
  image: string;
};

const projectPortfolioEs: PortfolioProject[] = [
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

const projectPortfolioEn: PortfolioProject[] = [
  {
    name: "Krasa Dermoestudio",
    type: "Beauty landing page",
    description:
      "Commercial landing page to present beauty services, reinforce visual trust, and make appointment requests easier.",
    services: ["Landing page", "Responsive design", "Contact CTA"],
    image: "/projects/landing/landing-02.png"
  },
  {
    name: "Nova Shipping Services",
    type: "Locker and logistics software",
    description:
      "Portal and admin system to organize clients, lockers, shipments, containers, statuses, and receipts.",
    services: ["Custom software", "Admin panel", "Client portal"],
    image: "/projects/software/software-01.png"
  },
  {
    name: "Biofest Panamá",
    type: "Tourism landing and bookings",
    description:
      "Visual experience to present tours, locations, bilingual information, and booking flow.",
    services: ["Landing page", "Bookings", "Bilingual ES/EN"],
    image: "/projects/landing/landing-04.png"
  },
  {
    name: "Quality Techno Services",
    type: "Industrial corporate website",
    description:
      "Corporate website to explain technical services, professional backing, and clear contact channels.",
    services: ["Corporate website", "Form", "WhatsApp"],
    image: "/projects/Corporate/corporate-02.png"
  },
  {
    name: "Solarled",
    type: "Solar energy landing page",
    description:
      "Commercial page to communicate solar services, certifications, benefits, and direct contact.",
    services: ["Landing page", "Visual design", "Commercial CTA"],
    image: "/projects/Corporate/corporate-03.png"
  },
  {
    name: "Transformación 360",
    type: "Booking system",
    description:
      "Web system to manage services, availability, reservations, statuses, and admin panel.",
    services: ["Custom software", "Bookings", "Admin panel"],
    image: "/projects/software/software-02.png"
  },
  {
    name: "Alcira Trigueros Asesora Legal Inmobiliaria",
    type: "Legal real estate website",
    description:
      "Digital presence to communicate legal and real estate services with a professional and elegant tone.",
    services: ["Corporate website", "Personal brand", "Initial SEO"],
    image: "/projects/Corporate/corporate-01.png"
  },
  {
    name: "ALAF International Academy",
    type: "Educational website",
    description:
      "Digital structure for academy, programs, institutional communication, and responsive experience.",
    services: ["Educational website", "Course structure", "Responsive"],
    image: "/projects/Corporate/corporate-04.png"
  }
];

export const projectPortfolioByLocale: Record<ServiceLocale, PortfolioProject[]> = {
  es: projectPortfolioEs,
  en: projectPortfolioEn
};

export const projectPortfolio = projectPortfolioEs;

export function getProjectPortfolio(locale: ServiceLocale = "es") {
  return projectPortfolioByLocale[locale];
}
