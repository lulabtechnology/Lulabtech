const wa = (text) =>
  `https://wa.me/50767069044?text=${encodeURIComponent(text)}`;

export const services = [
  {
    slug: "landing-pages",
    title: "Landing Pages",
    kicker: "Captación y campañas",
    badge: "Conversión",
    shortDescription:
      "Páginas enfocadas en una sola oferta, pensadas para captar mejor y distraer menos.",
    highlights: [
      "Ideales para campañas, lanzamientos, servicios puntuales o validación de oferta.",
      "Narrativa clara desde el primer scroll con CTA directo y jerarquía comercial.",
      "Integración con WhatsApp, formularios o rutas de contacto más eficientes.",
    ],
    whatsappHref: wa(
      "Hola LulabTech, me interesa cotizar una landing page para captar clientes o presentar una oferta específica."
    ),
  },
  {
    slug: "webs-corporativas",
    title: "Webs Corporativas",
    kicker: "Confianza y presencia",
    badge: "Autoridad",
    shortDescription:
      "Sitios para empresas, profesionales y marcas que necesitan una presencia más seria, clara y confiable.",
    highlights: [
      "Perfectas para presentar servicios, ordenar mejor la información y elevar percepción de marca.",
      "Diseñadas para referencias, Google, redes sociales y ventas consultivas.",
      "Experiencia mobile-first cuidada para el tráfico real que llega desde celular.",
    ],
    whatsappHref: wa(
      "Hola LulabTech, me interesa cotizar una web corporativa para presentar mejor mi negocio, servicios o marca."
    ),
  },
  {
    slug: "tiendas-online",
    title: "Tiendas Online",
    kicker: "Catálogo y venta",
    badge: "Ecommerce",
    shortDescription:
      "Tiendas y catálogos digitales pensados para vender con mejor experiencia, más orden y una presentación más sólida.",
    highlights: [
      "Desde vitrinas simples hasta estructuras listas para crecer con productos y categorías.",
      "Mejor claridad para catálogo, experiencia de compra o contacto por WhatsApp.",
      "Base pensada para campañas y una operación más ordenada.",
    ],
    whatsappHref: wa(
      "Hola LulabTech, me interesa cotizar una tienda online o catálogo web para vender mis productos."
    ),
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones",
    kicker: "Orden y eficiencia",
    badge: "Soporte",
    shortDescription:
      "Soluciones digitales para responder mejor, ordenar procesos y reducir fricción comercial.",
    highlights: [
      "Ideales para negocios que ya tienen movimiento y necesitan ganar eficiencia.",
      "Útiles para atención, seguimiento, captación y tareas repetitivas.",
      "Complementan una web mejor pensada en lugar de reemplazarla.",
    ],
    whatsappHref: wa(
      "Hola LulabTech, me interesa una automatización para mejorar atención, seguimiento o procesos en mi negocio."
    ),
  },
];

export const serviceSolutions = [
  {
    id: "captar",
    question: "Quiero captar clientes para un servicio específico",
    hint: "Campañas, lanzamientos, captación de leads o validación de oferta.",
    recommendation: "Landing Page",
    description:
      "La mejor ruta suele ser una landing page enfocada, directa y pensada para convertir tráfico en consultas reales.",
    points: [
      "Una sola propuesta clara",
      "CTA directo a WhatsApp o formulario",
      "Pensada para tráfico frío y campañas",
    ],
    pageHref: "/servicios/landing-pages",
    whatsappHref: wa(
      "Hola LulabTech, quiero orientación para una landing page enfocada en captar clientes."
    ),
  },
  {
    id: "presentar",
    question: "Necesito presentar mejor mi negocio o empresa",
    hint: "Más confianza, mejor imagen, mejor explicación de servicios.",
    recommendation: "Web Corporativa",
    description:
      "Lo más conveniente suele ser una web corporativa con estructura clara, jerarquía visual y una propuesta mejor organizada.",
    points: [
      "Mejor percepción de marca",
      "Servicios bien explicados",
      "Base sólida para referencias y ventas consultivas",
    ],
    pageHref: "/servicios/webs-corporativas",
    whatsappHref: wa(
      "Hola LulabTech, quiero orientación para una web corporativa para mi negocio."
    ),
  },
  {
    id: "vender",
    question: "Quiero vender productos o mostrar un catálogo serio",
    hint: "Más orden, mejor presentación y una experiencia más profesional.",
    recommendation: "Tienda Online",
    description:
      "Una tienda online o un catálogo web puede ayudarte a vender con más orden y una mejor experiencia.",
    points: [
      "Productos y categorías mejor organizados",
      "Experiencia más clara para el cliente",
      "Más preparada para campañas y crecimiento",
    ],
    pageHref: "/servicios/tiendas-online",
    whatsappHref: wa(
      "Hola LulabTech, quiero orientación para una tienda online o catálogo web."
    ),
  },
  {
    id: "automatizar",
    question: "Quiero mejorar atención, seguimiento o procesos repetitivos",
    hint: "Respuestas, seguimiento, formularios, tareas repetitivas.",
    recommendation: "Automatización",
    description:
      "Una automatización bien implementada puede ayudarte a responder mejor y operar con menos fricción.",
    points: [
      "Menos pasos manuales",
      "Mayor orden en atención o seguimiento",
      "Complemento útil para tu operación digital",
    ],
    pageHref: "/servicios/automatizaciones",
    whatsappHref: wa(
      "Hola LulabTech, quiero orientación para una automatización para mi negocio."
    ),
  },
];
