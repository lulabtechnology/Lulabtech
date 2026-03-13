export type ProjectItem = {
  slug: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  href?: string;
};

export const projects: ProjectItem[] = [
  {
    slug: "krasa",
    category: "Dermoestética premium",
    title: "Krása",
    description:
      "Dirección visual más refinada, estética premium y una experiencia que transmite confianza, sofisticación y especialización.",
    tag: "branding + web",
    href: "#",
  },
  {
    slug: "quality-techno",
    category: "Solución tecnológica",
    title: "Quality Techno",
    description:
      "Una presencia más clara y corporativa para una propuesta tecnológica que necesita orden, estructura y una percepción profesional sólida.",
    tag: "web corporativa",
    href: "#",
  },
  {
    slug: "nova-shipping-services",
    category: "Logística y portal",
    title: "Nova Shipping Services",
    description:
      "Base visual más seria y mejor organizada para una operación con procesos, paneles y una experiencia más alineada con profesionalismo.",
    tag: "portal + sistema",
    href: "#",
  },
];
