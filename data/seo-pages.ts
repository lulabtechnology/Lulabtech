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
      { label: "Ver proyectos", href: "/proyectos" }
    ]
  }
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
      { label: "Company websites", href: "/paginas-web-empresas-panama" },
      { label: "View projects", href: "/proyectos" }
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
      { label: "View projects", href: "/proyectos" }
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
          "Yes. It can include a section or project page to show experience without inventing fake results or data."
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
      { label: "View projects", href: "/proyectos" }
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
      { label: "Company websites", href: "/paginas-web-empresas-panama" },
      { label: "Web design in Panama", href: "/diseno-web-panama" },
      { label: "View projects", href: "/proyectos" }
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
      { label: "View projects", href: "/proyectos" }
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
