export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  items: ProjectItem[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "landing",
    label: "Landing Pages",
    items: [
      {
        title: "Landing de captación",
        subtitle: "Conversión premium",
        description:
          "Diseño enfocado en claridad de oferta, autoridad visual y contacto directo.",
        image: "/projects/landing/landing-01.png"
      },
      {
        title: "Landing comercial",
        subtitle: "Campaña digital",
        description:
          "Estructura pensada para presentar valor rápido y mover al usuario a cotizar.",
        image: "/projects/landing/landing-02.png"
      },
      {
        title: "Landing de marca",
        subtitle: "Impacto visual",
        description:
          "Composición premium con mejor jerarquía, narrativa y presencia digital.",
        image: "/projects/landing/landing-03.png"
      },
      {
        title: "Landing estratégica",
        subtitle: "CTA claro",
        description:
          "Diseñada para elevar percepción y facilitar una acción comercial inmediata.",
        image: "/projects/landing/landing-04.png"
      }
    ]
  },
  {
    id: "corporate",
    label: "Webs Corporativas",
    items: [
      {
        title: "Web corporativa premium",
        subtitle: "Autoridad de marca",
        description:
          "Sitio pensado para transmitir seriedad, confianza y mejor presentación del negocio.",
        image: "/projects/Corporate/corporate-01.png"
      },
      {
        title: "Web institucional",
        subtitle: "Comunicación clara",
        description:
          "Estructura limpia para explicar mejor servicios, propuesta y respaldo profesional.",
        image: "/projects/Corporate/corporate-02.png"
      },
      {
        title: "Web empresarial",
        subtitle: "Presencia sólida",
        description:
          "Diseño ordenado con enfoque en reputación, claridad y experiencia premium.",
        image: "/projects/Corporate/corporate-03.png"
      },
      {
        title: "Web de firma",
        subtitle: "Confianza visual",
        description:
          "Composición seria y elegante para reforzar credibilidad y percepción de nivel.",
        image: "/projects/Corporate/corporate-04.png"
      }
    ]
  },
  {
    id: "ecommerce",
    label: "Tiendas Online",
    items: [
      {
        title: "E-commerce premium",
        subtitle: "Venta digital",
        description:
          "Diseño orientado a catálogo, experiencia de compra y presentación comercial.",
        image: "/projects/ecommerce/ecommerce-01.png"
      },
      {
        title: "Tienda online moderna",
        subtitle: "UX de compra",
        description:
          "Layout limpio pensado para navegación fluida, productos claros y mejor conversión.",
        image: "/projects/ecommerce/ecommerce-02.png"
      },
      {
        title: "Catálogo e-commerce",
        subtitle: "Escalabilidad",
        description:
          "Experiencia visual premium para marcas que necesitan vender con más orden y presencia.",
        image: "/projects/ecommerce/ecommerce-03.png"
      },
      {
        title: "Storefront digital",
        subtitle: "Performance comercial",
        description:
          "Interfaz enfocada en valor percibido, confianza y recorrido de compra más claro.",
        image: "/projects/ecommerce/ecommerce-04.png"
      }
    ]
  },
  {
    id: "software",
    label: "Software a la Medida",
    items: [
      {
        title: "Dashboard operativo",
        subtitle: "Solución personalizada",
        description:
          "Interfaz diseñada para procesos internos, control visual y operación más eficiente.",
        image: "/projects/software/software-01.png"
      },
      {
        title: "Sistema empresarial",
        subtitle: "Procesos optimizados",
        description:
          "Diseño moderno para centralizar información, métricas y flujo de trabajo.",
        image: "/projects/software/software-02.png"
      },
      {
        title: "Plataforma digital",
        subtitle: "Operación clara",
        description:
          "Arquitectura visual enfocada en orden, productividad y experiencia profesional.",
        image: "/projects/software/software-03.png"
      },
      {
        title: "Software de gestión",
        subtitle: "Escala y control",
        description:
          "Composición premium para mostrar un sistema serio, limpio y listo para crecer.",
        image: "/projects/software/software-04.png"
      }
    ]
  }
];
