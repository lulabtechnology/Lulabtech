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
        title: "Cardio Kids & English",
        subtitle: "Landing educativa",
        description:
          "Página de captación para explicar clases, beneficios y contacto directo con una presentación clara.",
        image: "/projects/landing/landing-01.png"
      },
      {
        title: "Krasa Dermoestudio",
        subtitle: "Landing estética",
        description:
          "Diseño comercial para presentar servicios, generar confianza visual y facilitar solicitudes de cita.",
        image: "/projects/landing/landing-02.png"
      },
      {
        title: "Chabonnet Comercial",
        subtitle: "Landing inmobiliaria",
        description:
          "Estructura de alto impacto para explicar la oferta, recibir consultas y dirigir al visitante al contacto.",
        image: "/projects/landing/landing-03.png"
      },
      {
        title: "Biofest Panamá",
        subtitle: "Landing turística",
        description:
          "Experiencia visual para presentar tours, locaciones, reservas y comunicación bilingüe de forma ordenada.",
        image: "/projects/landing/landing-04.png"
      }
    ]
  },
  {
    id: "corporate",
    label: "Webs Corporativas",
    items: [
      {
        title: "Alcira Trigueros",
        subtitle: "Web legal inmobiliaria",
        description:
          "Presencia profesional para comunicar servicios legales e inmobiliarios con tono serio y elegante.",
        image: "/projects/Corporate/corporate-01.png"
      },
      {
        title: "Quality Techno Services",
        subtitle: "Web industrial",
        description:
          "Sitio corporativo para presentar servicios técnicos, respaldo profesional y canales de contacto claros.",
        image: "/projects/Corporate/corporate-02.png"
      },
      {
        title: "Solarled",
        subtitle: "Web de energía solar",
        description:
          "Página comercial para explicar servicios solares, certificaciones, beneficios y contacto directo.",
        image: "/projects/Corporate/corporate-03.png"
      },
      {
        title: "ALAF International Academy",
        subtitle: "Web educativa",
        description:
          "Estructura para academia, programas, comunicación institucional y experiencia responsive para estudiantes.",
        image: "/projects/Corporate/corporate-04.png"
      }
    ]
  },
  {
    id: "software",
    label: "Software y Portales",
    items: [
      {
        title: "NOVA Shipping Services",
        subtitle: "Software para casilleros",
        description:
          "Portal para organizar clientes, casilleros, envíos, contenedores, estados y comprobantes.",
        image: "/projects/software/software-01.png"
      },
      {
        title: "Transformación 360",
        subtitle: "Sistema de reservas",
        description:
          "Sistema para servicios, disponibilidad, solicitudes, confirmaciones, estados y panel administrativo.",
        image: "/projects/software/software-02.png"
      },
      {
        title: "Los Cholos Cafetería",
        subtitle: "Software para restaurante",
        description:
          "Solución interna para ordenar ventas, datos operativos, reportes y control del negocio.",
        image: "/projects/software/software-03.png"
      },
      {
        title: "Biofest Reservas",
        subtitle: "Gestión de reservas",
        description:
          "Flujo digital para solicitudes, comprobantes, comunicación con visitantes y administración de reservas.",
        image: "/projects/software/software-04.png"
      }
    ]
  }
];
