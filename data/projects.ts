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
        title: "Eurides Young",
        subtitle: "Traducción profesional",
        description: "Landing enfocada en credibilidad, claridad de oferta y contacto directo para cotizaciones rápidas.",
        image: "/projects/landing/landing-01.png"
      },
      {
        title: "Landing Proyecto 02",
        subtitle: "Captación premium",
        description: "Espacio listo para reemplazar por tu siguiente landing real.",
        image: "/projects/landing/landing-02.png"
      },
      {
        title: "Landing Proyecto 03",
        subtitle: "Campaña digital",
        description: "Preparado para mostrar una propuesta clara con enfoque en conversión.",
        image: "/projects/landing/landing-03.png"
      },
      {
        title: "Landing Proyecto 04",
        subtitle: "Visual impactante",
        description: "Listo para sustituir por un screenshot final de tu cuarto proyecto.",
        image: "/projects/landing/landing-04.png"
      }
    ]
  },
  {
    id: "corporate",
    label: "Webs Corporativas",
    items: [
      {
        title: "Solmas Legal",
        subtitle: "Firma boutique",
        description: "Web corporativa pensada para autoridad, confianza y una presentación más seria de la firma.",
        image: "/projects/Corporate/corporate-01.png"
      },
      {
        title: "Corporate Proyecto 02",
        subtitle: "Marca y autoridad",
        description: "Espacio listo para reemplazar por otra web corporativa real.",
        image: "/projects/Corporate/corporate-02.png"
      },
      {
        title: "Corporate Proyecto 03",
        subtitle: "Experiencia ordenada",
        description: "Preparado para mostrar otro sitio corporativo con presencia premium.",
        image: "/projects/Corporate/corporate-03.png"
      },
      {
        title: "Corporate Proyecto 04",
        subtitle: "Comunicación clara",
        description: "Listo para sustituir por una captura final de proyecto corporativo.",
        image: "/projects/Corporate/corporate-04.png"
      }
    ]
  },
  {
    id: "ecommerce",
    label: "Tiendas Online",
    items: [
      {
        title: "Ecommerce Proyecto 01",
        subtitle: "Venta digital",
        description: "Espacio listo para mostrar catálogo o tienda final.",
        image: "/projects/ecommerce/ecommerce-01.png"
      },
      {
        title: "Ecommerce Proyecto 02",
        subtitle: "UX de compra",
        description: "Tarjeta preparada para presentar experiencia e-commerce.",
        image: "/projects/ecommerce/ecommerce-02.png"
      },
      {
        title: "Ecommerce Proyecto 03",
        subtitle: "Escalabilidad",
        description: "Perfecto para mostrar una tienda moderna y limpia.",
        image: "/projects/ecommerce/ecommerce-03.png"
      },
      {
        title: "Ecommerce Proyecto 04",
        subtitle: "Performance comercial",
        description: "Contenido listo para caso real futuro.",
        image: "/projects/ecommerce/ecommerce-04.png"
      }
    ]
  },
  {
    id: "software",
    label: "Software a la Medida",
    items: [
      {
        title: "Software Proyecto 01",
        subtitle: "Solución personalizada",
        description: "Espacio reservado para dashboard o sistema real.",
        image: "/projects/software/software-01.png"
      },
      {
        title: "Software Proyecto 02",
        subtitle: "Procesos optimizados",
        description: "Listo para mostrar software hecho a medida.",
        image: "/projects/software/software-02.png"
      },
      {
        title: "Software Proyecto 03",
        subtitle: "Operación digital",
        description: "Bloque preparado para screenshots y copy real.",
        image: "/projects/software/software-03.png"
      },
      {
        title: "Software Proyecto 04",
        subtitle: "Escala y control",
        description: "Tarjeta lista para un sistema futuro.",
        image: "/projects/software/software-04.png"
      }
    ]
  }
];
