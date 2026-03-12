import {
  Bot,
  Globe,
  LayoutTemplate,
  ShoppingBag,
  BarChart3,
  Smartphone,
  MessageCircleMore,
  ArrowRight,
} from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

export const services = [
  {
    slug: "landing-pages",
    title: "Landing Pages",
    shortTitle: "Landing Pages",
    icon: LayoutTemplate,
    eyebrow: "Para campañas, servicios y captación directa",
    description:
      "Páginas enfocadas en una sola oferta, pensadas para explicar con claridad y convertir con menos distracción.",
    idealFor:
      "Ideal para campañas, lanzamientos, servicios puntuales y negocios que necesitan una estructura directa para captar consultas.",
    bullets: [
      "Narrativa enfocada en una sola acción",
      "CTA estratégicos a WhatsApp o formulario",
      "Jerarquía visual clara desde el primer scroll",
      "Versión móvil cuidada de verdad",
    ],
    useCases: [
      "Campañas publicitarias",
      "Servicios específicos",
      "Lanzamientos y promociones",
      "Captación de leads",
    ],
    benefitTitle: "Una landing bien pensada no distrae: guía.",
    benefitCopy:
      "La clave está en dejar claro qué ofreces, por qué conviene y qué debe hacer el usuario después.",
    whatsappMessage:
      "Hola LulabTech, me interesa cotizar una landing page para captar clientes o presentar una oferta específica.",
  },
  {
    slug: "webs-corporativas",
    title: "Webs Corporativas",
    shortTitle: "Webs Corporativas",
    icon: Globe,
    eyebrow: "Para empresas, profesionales y marcas",
    description:
      "Sitios para negocios que necesitan una presencia más seria, más clara y más confiable.",
    idealFor:
      "Perfectas para presentar servicios, fortalecer marca y facilitar el contacto desde Google, redes o referencias.",
    bullets: [
      "Arquitectura clara de servicios y mensajes",
      "Bloques de confianza y autoridad",
      "Experiencia premium en desktop y mobile",
      "Base sólida para crecer con SEO",
    ],
    useCases: [
      "Empresas con varios servicios",
      "Marcas personales y profesionales",
      "Negocios que quieren verse más serios",
      "Rediseños de webs desactualizadas",
    ],
    benefitTitle: "Cuando tu negocio ya tiene nivel, tu web también debería reflejarlo.",
    benefitCopy:
      "Una web corporativa bien estructurada ordena la oferta, mejora percepción y reduce fricción comercial.",
    whatsappMessage:
      "Hola LulabTech, me interesa cotizar una web corporativa para presentar mejor mi negocio, servicios o marca.",
  },
  {
    slug: "tiendas-online",
    title: "Tiendas Online",
    shortTitle: "Tiendas Online",
    icon: ShoppingBag,
    eyebrow: "Para vender productos con más orden",
    description:
      "Tiendas y catálogos web pensados para vender con mejor experiencia, mejor presentación y mejor estructura.",
    idealFor:
      "Ideales para negocios que hoy venden por redes o WhatsApp y necesitan una experiencia más profesional.",
    bullets: [
      "Catálogo mejor organizado",
      "Experiencia de compra o consulta más clara",
      "Rutas a WhatsApp o checkout según el caso",
      "Base preparada para campañas y crecimiento",
    ],
    useCases: [
      "Catálogos digitales",
      "Tiendas con varios productos",
      "Marcas que venden por Instagram",
      "Negocios que quieren profesionalizar ventas",
    ],
    benefitTitle: "No todos necesitan el mismo ecommerce, pero sí una mejor estructura para vender.",
    benefitCopy:
      "En algunos casos conviene una tienda completa; en otros, un catálogo bien diseñado con contacto directo puede ser el mejor primer paso.",
    whatsappMessage:
      "Hola LulabTech, me interesa cotizar una tienda online o catálogo web para vender mis productos con una presentación más profesional.",
  },
  {
    slug: "automatizaciones",
    title: "Automatizaciones",
    shortTitle: "Automatizaciones",
    icon: Bot,
    eyebrow: "Para ordenar procesos y atención",
    description:
      "Soluciones digitales para responder mejor, reducir tareas repetitivas y ganar eficiencia real.",
    idealFor:
      "Ideales para negocios que ya tienen movimiento y necesitan más orden en atención, seguimiento o flujos repetitivos.",
    bullets: [
      "Flujos simples y aterrizados",
      "Más velocidad de respuesta",
      "Menos fricción operativa",
      "Integración útil con la web o captación",
    ],
    useCases: [
      "Atención por WhatsApp",
      "Seguimiento de leads",
      "Formularios y respuestas automáticas",
      "Procesos manuales repetitivos",
    ],
    benefitTitle: "Automatizar no es complicar: es diseñar mejor cómo responde tu negocio.",
    benefitCopy:
      "Solo tiene sentido cuando la automatización quita fricción, mejora experiencia y ahorra tiempo real.",
    whatsappMessage:
      "Hola LulabTech, me interesa una automatización para mejorar atención, seguimiento o procesos en mi negocio.",
  },
];

export const comparisonOptions = [
  {
    id: "captar",
    label: "Quiero captar clientes para un servicio específico",
    recommendation: "Landing Page",
    copy:
      "Si tu foco está en una sola oferta, campaña o servicio, lo más eficiente suele ser una landing page enfocada y directa.",
    href: "/servicios/landing-pages",
    whatsappLink: buildWhatsappLink(
      "Hola LulabTech, quiero captar clientes para un servicio específico y me gustaría saber si me conviene una landing page."
    ),
  },
  {
    id: "presentar",
    label: "Necesito presentar mejor mi negocio o empresa",
    recommendation: "Web Corporativa",
    copy:
      "Cuando necesitas una presencia más completa para explicar servicios y transmitir confianza, una web corporativa suele ser la mejor ruta.",
    href: "/servicios/webs-corporativas",
    whatsappLink: buildWhatsappLink(
      "Hola LulabTech, necesito presentar mejor mi negocio o empresa y quiero saber si me conviene una web corporativa."
    ),
  },
  {
    id: "vender",
    label: "Quiero vender productos o mostrar un catálogo serio",
    recommendation: "Tienda Online",
    copy:
      "Si vendes productos, una tienda online o catálogo web puede ayudarte a ordenar mejor la experiencia y presentar mejor tu marca.",
    href: "/servicios/tiendas-online",
    whatsappLink: buildWhatsappLink(
      "Hola LulabTech, vendo productos y quiero saber si me conviene una tienda online o un catálogo web."
    ),
  },
  {
    id: "automatizar",
    label: "Quiero ordenar atención, respuestas o procesos repetitivos",
    recommendation: "Automatización",
    copy:
      "Cuando hay tareas repetitivas o mucha fricción en atención y seguimiento, una automatización útil puede marcar una gran diferencia.",
    href: "/servicios/automatizaciones",
    whatsappLink: buildWhatsappLink(
      "Hola LulabTech, quiero ordenar atención, respuestas o procesos repetitivos y me gustaría conversar sobre automatización."
    ),
  },
];

export const homeDifferentiators = [
  {
    icon: BarChart3,
    title: "Diseño con intención comercial",
    text: "Cada bloque debe ayudar a entender mejor, confiar más y avanzar con claridad.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first real",
    text: "La experiencia móvil se cuida desde el inicio, no como un ajuste al final.",
  },
  {
    icon: MessageCircleMore,
    title: "Contacto bien pensado",
    text: "WhatsApp, correo y formularios organizados según el servicio de interés.",
  },
  {
    icon: ArrowRight,
    title: "Propuesta personalizada",
    text: "Cada proyecto se trabaja según alcance, objetivo y tipo de negocio.",
  },
];
