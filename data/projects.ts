export type ProjectItem = {
  slug: string;
  title: string;
  categoryLabel: string;
  description: string;
  tag: string;
  imageHint: string;
  imageRecommendedPath: string;
  href?: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  intro: string;
  projects: ProjectItem[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "landing-pages",
    label: "Landing Pages",
    intro:
      "Showcase para páginas enfocadas en campañas, captación y conversión.",
    projects: [
      {
        slug: "landing-project-01",
        title: "Proyecto 01",
        categoryLabel: "Landing Page",
        description:
          "Placeholder para una landing page con enfoque en captación, mensaje claro y CTA fuerte.",
        tag: "captación / campaña",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/landing/project-01-cover.webp",
        href: "#",
      },
      {
        slug: "landing-project-02",
        title: "Proyecto 02",
        categoryLabel: "Landing Page",
        description:
          "Placeholder para una landing page con una dirección visual más premium y mejor estructura comercial.",
        tag: "landing premium",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/landing/project-02-cover.webp",
        href: "#",
      },
      {
        slug: "landing-project-03",
        title: "Proyecto 03",
        categoryLabel: "Landing Page",
        description:
          "Placeholder para una landing page orientada a claridad, conversión y percepción de marca.",
        tag: "conversión",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/landing/project-03-cover.webp",
        href: "#",
      },
    ],
  },
  {
    id: "webs-corporativas",
    label: "Webs Corporativas",
    intro:
      "Showcase para sitios corporativos con una presencia más seria, clara y mejor posicionada.",
    projects: [
      {
        slug: "corporate-project-01",
        title: "Proyecto 01",
        categoryLabel: "Web Corporativa",
        description:
          "Placeholder para una web corporativa con jerarquía visual limpia, mejor estructura y más percepción premium.",
        tag: "corporativo",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/corporate/project-01-cover.webp",
        href: "#",
      },
      {
        slug: "corporate-project-02",
        title: "Proyecto 02",
        categoryLabel: "Web Corporativa",
        description:
          "Placeholder para una web institucional enfocada en confianza, claridad del mensaje y dirección visual profesional.",
        tag: "marca / empresa",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/corporate/project-02-cover.webp",
        href: "#",
      },
      {
        slug: "corporate-project-03",
        title: "Proyecto 03",
        categoryLabel: "Web Corporativa",
        description:
          "Placeholder para una web empresarial que necesita verse más actual, más ordenada y más sólida.",
        tag: "presencia premium",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/corporate/project-03-cover.webp",
        href: "#",
      },
    ],
  },
  {
    id: "tiendas-online",
    label: "Tiendas Online",
    intro:
      "Showcase para ecommerce con mejor orden visual, mejor presentación de producto y una experiencia más limpia.",
    projects: [
      {
        slug: "store-project-01",
        title: "Proyecto 01",
        categoryLabel: "Tienda Online",
        description:
          "Placeholder para una tienda online con catálogo más claro, presentación premium y estructura comercial mejor resuelta.",
        tag: "ecommerce",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/store/project-01-cover.webp",
        href: "#",
      },
      {
        slug: "store-project-02",
        title: "Proyecto 02",
        categoryLabel: "Tienda Online",
        description:
          "Placeholder para un ecommerce con fichas de producto más cuidadas y mejor experiencia de compra.",
        tag: "catálogo / venta",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/store/project-02-cover.webp",
        href: "#",
      },
      {
        slug: "store-project-03",
        title: "Proyecto 03",
        categoryLabel: "Tienda Online",
        description:
          "Placeholder para una tienda orientada a claridad, conversión y mejor percepción de marca.",
        tag: "shop premium",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/store/project-03-cover.webp",
        href: "#",
      },
    ],
  },
  {
    id: "automatizaciones",
    label: "Automatizaciones",
    intro:
      "Showcase para soluciones, dashboards o flujos que organizan mejor procesos y reducen fricción operativa.",
    projects: [
      {
        slug: "automation-project-01",
        title: "Proyecto 01",
        categoryLabel: "Automatización",
        description:
          "Placeholder para una automatización enfocada en optimizar procesos y reducir tareas manuales.",
        tag: "workflow / sistema",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/automation/project-01-cover.webp",
        href: "#",
      },
      {
        slug: "automation-project-02",
        title: "Proyecto 02",
        categoryLabel: "Automatización",
        description:
          "Placeholder para una solución interna, dashboard o flujo de trabajo con una presentación más profesional.",
        tag: "dashboard",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/automation/project-02-cover.webp",
        href: "#",
      },
      {
        slug: "automation-project-03",
        title: "Proyecto 03",
        categoryLabel: "Automatización",
        description:
          "Placeholder para una automatización orientada a orden, eficiencia y mejor experiencia operativa.",
        tag: "proceso / eficiencia",
        imageHint: "Sube aquí la imagen real del proyecto",
        imageRecommendedPath: "/projects/automation/project-03-cover.webp",
        href: "#",
      },
    ],
  },
];
