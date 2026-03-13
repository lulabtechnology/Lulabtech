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
        title: "Landing Placeholder 01",
        subtitle: "Captación premium",
        description: "Espacio listo para reemplazar con tu proyecto real.",
        image: "/projects/landing/landing-01.png"
      },
      {
        title: "Landing Placeholder 02",
        subtitle: "Campaña digital",
        description: "Tarjeta editable con imagen, nombre y descripción.",
        image: "/projects/landing/landing-02.png"
      },
      {
        title: "Landing Placeholder 03",
        subtitle: "Conversión clara",
        description: "Preparado para mostrar oferta, diseño y enfoque comercial.",
        image: "/projects/landing/landing-03.png"
      },
      {
        title: "Landing Placeholder 04",
        subtitle: "Visual impactante",
        description: "Listo para sustituir por screenshots finales.",
        image: "/projects/landing/landing-04.png"
      }
    ]
  },
  {
    id: "corporate",
    label: "Webs Corporativas",
    items: [
      {
        title: "Corporate Placeholder 01",
        subtitle: "Presencia sólida",
        description: "Espacio para mostrar una web corporativa destacada.",
        image: "/projects/Corporate/corporate-01.png"
      },
      {
        title: "Corporate Placeholder 02",
        subtitle: "Marca y autoridad",
        description: "Diseñado para verse premium desde el primer vistazo.",
        image: "/projects/Corporate/corporate-02.png"
      },
      {
        title: "Corporate Placeholder 03",
        subtitle: "Experiencia ordenada",
        description: "Bloque listo para contenido real.",
        image: "/projects/Corporate/corporate-03.png"
      },
      {
        title: "Corporate Placeholder 04",
        subtitle: "Comunicación clara",
        description: "Preparado para reemplazar imagen y texto fácilmente.",
        image: "/projects/Corporate/corporate-04.png"
      }
    ]
  },
  {
    id: "ecommerce",
    label: "Tiendas Online",
    items: [
      {
        title: "Ecommerce Placeholder 01",
        subtitle: "Venta digital",
        description: "Espacio listo para mostrar catálogo o tienda final.",
        image: "/projects/ecommerce/ecommerce-01.png"
      },
      {
        title: "Ecommerce Placeholder 02",
        subtitle: "UX de compra",
        description: "Tarjeta preparada para presentar experiencia e-commerce.",
        image: "/projects/ecommerce/ecommerce-02.png"
      },
      {
        title: "Ecommerce Placeholder 03",
        subtitle: "Escalabilidad",
        description: "Perfecto para mostrar una tienda moderna y limpia.",
        image: "/projects/ecommerce/ecommerce-03.png"
      },
      {
        title: "Ecommerce Placeholder 04",
        subtitle: "Performance comercial",
        description: "Contenido editable para caso real futuro.",
        image: "/projects/ecommerce/ecommerce-04.png"
      }
    ]
  },
  {
    id: "software",
    label: "Software a la Medida",
    items: [
      {
        title: "Software Placeholder 01",
        subtitle: "Solución personalizada",
        description: "Espacio reservado para dashboard o sistema real.",
        image: "/projects/software/software-01.png"
      },
      {
        title: "Software Placeholder 02",
        subtitle: "Procesos optimizados",
        description: "Listo para mostrar software hecho a medida.",
        image: "/projects/software/software-02.png"
      },
      {
        title: "Software Placeholder 03",
        subtitle: "Operación digital",
        description: "Bloque preparado para screenshots y copy real.",
        image: "/projects/software/software-03.png"
      },
      {
        title: "Software Placeholder 04",
        subtitle: "Escala y control",
        description: "Tarjeta editable para un sistema futuro.",
        image: "/projects/software/software-04.png"
      }
    ]
  }
];
