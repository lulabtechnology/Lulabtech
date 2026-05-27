export type ServiceHubLink = {
  label: string;
  href: string;
  description: string;
  price?: string;
};

export type ServiceHubCluster = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  links: ServiceHubLink[];
};

export const serviceHubClusters: ServiceHubCluster[] = [
  {
    id: "web-seo",
    eyebrow: "Web + SEO local",
    title: "Diseño web y posicionamiento inicial",
    description:
      "Opciones para empresas que necesitan presencia profesional, explicación clara de servicios, base SEO y contacto directo por WhatsApp o formulario.",
    links: [
      {
        label: "Diseño web en Panamá",
        href: "/diseno-web-panama",
        description: "Servicio principal para empresas que necesitan una web profesional, clara y orientada a captar consultas en Panamá."
      },
      {
        label: "Landing pages en Panamá",
        href: "/landing-pages-panama",
        description: "Páginas de conversión para campañas, ofertas, servicios o captación rápida.",
        price: "Desde $149"
      },
      {
        label: "Páginas web corporativas",
        href: "/paginas-web-corporativas-panama",
        description: "Webs para empresas que necesitan comunicar servicios, respaldo, equipo y confianza.",
        price: "Desde $299"
      },
      {
        label: "Desarrollo web en Panamá",
        href: "/desarrollo-web-panama",
        description: "Desarrollo de sitios modernos, responsive y preparados para crecer con SEO y campañas."
      },
      {
        label: "Agencia de diseño web",
        href: "/agencia-de-diseno-web-panama",
        description: "Servicio para negocios que buscan un equipo que combine estrategia comercial, diseño visual y desarrollo técnico."
      },
      {
        label: "SEO para páginas web",
        href: "/seo-para-paginas-web-panama",
        description: "Mejoras iniciales para ordenar títulos, contenido, estructura, enlaces internos y señales básicas para Google."
      },
      {
        label: "Mantenimiento web",
        href: "/mantenimiento-web-panama",
        description: "Soporte, ajustes, revisiones, cambios simples y cuidado posterior del sitio."
      },
      {
        label: "Rediseño web",
        href: "/rediseno-web-panama",
        description: "Mejoras visuales, mobile, estructura comercial y SEO para webs que ya existen.",
        price: "Desde $299"
      }
    ]
  },
  {
    id: "software-operativo",
    eyebrow: "Software operativo",
    title: "Sistemas digitales y paneles administrativos",
    description:
      "Soluciones para negocios que necesitan controlar reservas, inventario, clientes, ventas, logística, documentos o procesos internos.",
    links: [
      {
        label: "Software a medida",
        href: "/software-a-medida-panama",
        description: "Sistemas diseñados según el flujo real de la empresa, con paneles y módulos propios.",
        price: "Desde $899"
      },
      {
        label: "Software para restaurantes",
        href: "/software-para-restaurantes-panama",
        description: "Control de ventas, caja, productos, empleados, reportes e inventario para restaurantes.",
        price: "Desde $899"
      },
      {
        label: "Software POS",
        href: "/software-pos-panama",
        description: "Sistema punto de venta para registrar ventas, métodos de pago, cierres y reportes."
      },
      {
        label: "Sistemas de reservas",
        href: "/sistemas-de-reservas-panama",
        description: "Reservas con servicios, disponibilidad, estados, correos, aprobaciones y panel admin.",
        price: "Desde $899"
      },
      {
        label: "Sistemas de inventario",
        href: "/sistemas-de-inventario-panama",
        description: "Control de productos, insumos, entradas, salidas, stock y reportes internos."
      },
      {
        label: "CRM para empresas",
        href: "/crm-para-empresas-panama",
        description: "Seguimiento de prospectos, clientes, estados, responsables, notas y oportunidades."
      },
      {
        label: "Automatizaciones para empresas",
        href: "/automatizaciones-para-empresas-panama",
        description: "Procesos digitales para reducir tareas manuales y ordenar operaciones repetitivas."
      }
    ]
  },
  {
    id: "industrias",
    eyebrow: "Webs por industria",
    title: "Páginas especializadas por tipo de negocio",
    description:
      "Páginas con intención de búsqueda más específica para sectores donde la confianza visual y la claridad comercial son decisivas.",
    links: [
      {
        label: "Diseño web para abogados",
        href: "/diseno-web-para-abogados-panama",
        description: "Webs serias para firmas legales, abogados independientes y servicios jurídicos.",
        price: "Desde $149"
      },
      {
        label: "Diseño web para clínicas",
        href: "/diseno-web-para-clinicas-panama",
        description: "Sitios para clínicas, consultorios, odontología, estética y salud con enfoque de confianza."
      },
      {
        label: "Diseño web para inmobiliarias",
        href: "/diseno-web-para-inmobiliarias-panama",
        description: "Webs para agentes e inmobiliarias con propiedades, marca personal y contacto directo."
      },
      {
        label: "Páginas web para restaurantes",
        href: "/paginas-web-para-restaurantes-panama",
        description: "Webs para restaurantes, menús, ubicación, delivery, WhatsApp y presencia local."
      },
      {
        label: "Páginas web para academias",
        href: "/paginas-web-para-academias-panama",
        description: "Páginas para cursos, diplomados, tutorías, academias y centros de formación."
      },
      {
        label: "Páginas web para eventos",
        href: "/paginas-web-para-eventos-panama",
        description: "Landing o web para ferias, congresos, eventos, participantes, agenda y formularios."
      }
    ]
  },
  {
    id: "ventas-digitales",
    eyebrow: "Venta digital",
    title: "Catálogos, ecommerce y precios web",
    description:
      "Opciones para clientes que comparan precios, necesitan vender productos o quieren entender qué tipo de web les conviene.",
    links: [
      {
        label: "Tiendas online en Panamá",
        href: "/tiendas-online-panama",
        description: "Ecommerce o catálogo digital para productos, categorías, WhatsApp, carrito o pagos.",
        price: "Desde $499"
      },
      {
        label: "Cuánto cuesta una página web",
        href: "/cuanto-cuesta-una-pagina-web-en-panama",
        description: "Guía comercial de precios desde landing, web corporativa, ecommerce y software."
      },
      {
        label: "Proyectos de LulabTech",
        href: "/portafolio",
        description: "Casos visuales y ejemplos de landing pages, webs corporativas y software."
      }
    ]
  },
  {
    id: "logistica",
    eyebrow: "Logística y operación",
    title: "Software para logística, casilleros y control interno",
    description:
      "Opciones para empresas que manejan envíos, clientes, casilleros, estados, documentos, comprobantes o procesos operativos.",
    links: [
      {
        label: "Software para casilleros",
        href: "/software-para-casilleros-panama",
        description: "Sistemas para casilleros, clientes, estados, comprobantes, facturación y panel admin.",
        price: "Desde $899"
      },
      {
        label: "Software para logística",
        href: "/software-para-logistica-panama",
        description: "Control de envíos, rutas, documentos, estados, pagos y reportes operativos."
      },
      {
        label: "Software a medida",
        href: "/software-a-medida-panama",
        description: "Para operaciones que necesitan una solución propia porque su proceso no encaja en una herramienta genérica."
      }
    ]
  }
];

export const hubFeaturedPaths = [
  {
    title: "Quiero una web para captar clientes",
    description: "Empieza por landing pages, web corporativa o diseño web general según el alcance del negocio.",
    links: ["/landing-pages-panama", "/paginas-web-corporativas-panama", "/diseno-web-panama"]
  },
  {
    title: "Quiero ordenar mi operación",
    description: "Revisa software a medida, POS, inventario, CRM o reservas si necesitas panel administrativo.",
    links: ["/software-a-medida-panama", "/software-pos-panama", "/sistemas-de-inventario-panama"]
  },
  {
    title: "Quiero una solución por industria",
    description: "Elige opciones específicas para abogados, clínicas, inmobiliarias, restaurantes, academias o eventos.",
    links: ["/diseno-web-para-abogados-panama", "/diseno-web-para-clinicas-panama", "/paginas-web-para-restaurantes-panama"]
  }
];

export const flatServiceHubLinks = serviceHubClusters.flatMap((cluster) => cluster.links);

export function findServiceHubLink(href: string) {
  return flatServiceHubLinks.find((link) => link.href === href);
}
