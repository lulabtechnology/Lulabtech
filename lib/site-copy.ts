export type Locale = "es" | "en";

export const projectTypeOptions = [
  "landing-page",
  "corporate-website",
  "online-store",
  "custom-software",
  "automation",
  "not-sure"
] as const;

export type ProjectTypeOption = (typeof projectTypeOptions)[number];

export type ProjectItem = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  description: string;
  items: ProjectItem[];
};

const projectTypeLabels = {
  es: {
    "landing-page": "Landing page",
    "corporate-website": "Web corporativa",
    "online-store": "Tienda online",
    "custom-software": "Software a la medida",
    automation: "Automatización / solución digital",
    "not-sure": "Aún no lo tengo claro"
  },
  en: {
    "landing-page": "Landing page",
    "corporate-website": "Corporate website",
    "online-store": "Online store",
    "custom-software": "Custom software",
    automation: "Automation / digital solution",
    "not-sure": "I am not sure yet"
  }
} satisfies Record<Locale, Record<ProjectTypeOption, string>>;

export function getProjectTypeLabel(option: string, locale: Locale = "es") {
  if (option in projectTypeLabels[locale]) {
    return projectTypeLabels[locale][option as ProjectTypeOption];
  }

  return option;
}

export const siteCopy = {
  es: {
    navigation: {
      items: [
        { label: "Proyectos", href: "#proyectos" },
        { label: "Servicios", href: "#servicios" },
        { label: "Por qué LulabTech", href: "#por-que-lulabtech" },
        { label: "Proceso", href: "#proceso" }
      ],
      whatsapp: "WhatsApp",
      quote: "Solicitar cotización",
      menuAria: "Abrir menú"
    },
    mobileMenu: {
      title: "LulabTech",
      description:
        "Soluciones digitales premium para marcas que quieren verse mejor y convertir más."
    },
    hero: {
      eyebrow: "Experiencias digitales premium",
      titleStart: "Soluciones digitales que se ven",
      titleGradient: "premium",
      titleEnd: "y convierten con intención.",
      description:
        "Diseñamos y desarrollamos landing pages, webs corporativas, tiendas online y software a la medida con una dirección visual más premium, claridad comercial y ejecución técnica seria.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Hablar por WhatsApp",
      badges: ["Landing pages", "Webs corporativas", "Tiendas online", "Software a medida"],
      cards: [
        {
          title: "Oferta bien explicada",
          description:
            "Estructura, jerarquía y copy pensados para que el visitante entienda rápido."
        },
        {
          title: "Presencia más seria",
          description:
            "Visual limpio y dirección de marca para proyectar más nivel y confianza."
        },
        {
          title: "Contacto mejor guiado",
          description:
            "CTA visibles, WhatsApp directo y recorrido pensado para cotizar sin fricción."
        }
      ],
      previewWindow: "Vista de propuesta",
      previewBadge: "Preview real",
      previewTitle: "Diseño visual fuerte, oferta clara y contacto directo.",
      previewDescription:
        "Así se ve una landing pensada para proyectar más nivel y facilitar la acción.",
      previewCards: [
        { eyebrow: "Landing pages", value: "Captación" },
        { eyebrow: "Web corporativa", value: "Autoridad" },
        { eyebrow: "Tienda online", value: "Venta digital" },
        { eyebrow: "Software", value: "Operación clara" }
      ],
      metrics: [
        { label: "Imagen de marca", value: "Más sólida y mejor presentada" },
        { label: "Mobile", value: "Bien resuelto desde el primer scroll" },
        { label: "Ruta de contacto", value: "CTA claros y recorrido mejor pensado" }
      ],
      nextStepLabel: "Siguiente paso",
      nextStepTitle: "Cotización clara",
      nextStepDescription:
        "El objetivo no es solo que se vea bien, sino dejar claro qué haces y cómo contactarte."
    },
    credibility: [
      {
        title: "Diseño con intención",
        description:
          "Cada bloque está pensado para elevar percepción, ordenar el mensaje y empujar la conversión."
      },
      {
        title: "Experiencia rápida",
        description:
          "Base moderna, ligera y responsive para que el sitio se sienta fluido y serio."
      },
      {
        title: "Confianza de marca",
        description:
          "Visual limpio, estructura premium y mejor claridad para marcas que quieren verse a otro nivel."
      }
    ],
    projectShowcase: {
      eyebrow: "Proyectos",
      title:
        "Experiencias digitales diseñadas para verse mejor y comunicar con más fuerza",
      description:
        "Una muestra visual de los tipos de soluciones que desarrollamos para marcas que buscan un nivel superior de presencia digital.",
      categories: [
        {
          id: "landing",
          label: "Landing Pages",
          description:
            "Landing pages diseñadas para presentar valor con claridad, elevar percepción y empujar la conversión.",
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
          description:
            "Webs corporativas enfocadas en autoridad, estructura comercial y una presencia digital más sólida.",
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
          description:
            "Tiendas online con mejor experiencia visual, recorrido de compra más claro y enfoque comercial.",
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
          description:
            "Software a la medida con interfaces modernas, organización inteligente y sensación profesional.",
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
      ],
      projectBadge: "Proyecto",
      previousAria: "Anterior en",
      nextAria: "Siguiente en",
      goToSlideAria: "Ir al slide",
      altPrefix: "Vista de"
    },
    services: {
      eyebrow: "Capacidades",
      title:
        "Soluciones pensadas para presentar mejor la marca y mover al usuario a la acción",
      description:
        "Landing pages, webs corporativas, tiendas online, software y automatizaciones desarrolladas con claridad comercial y una ejecución más cuidada.",
      suffix: "A medida · claro · listo para crecer",
      items: [
        {
          title: "Landing pages",
          description:
            "Páginas de alto impacto para campañas, captación de leads y lanzamientos."
        },
        {
          title: "Webs corporativas",
          description:
            "Sitios profesionales que transmiten autoridad, confianza y claridad comercial."
        },
        {
          title: "Tiendas online",
          description:
            "E-commerce con enfoque en conversión, experiencia de compra y escalabilidad."
        },
        {
          title: "Software a la medida",
          description:
            "Herramientas digitales hechas según procesos, necesidades y objetivos reales."
        },
        {
          title: "Automatizaciones",
          description:
            "Flujos y soluciones digitales para ahorrar tiempo y mejorar operaciones."
        }
      ]
    },
    why: {
      eyebrow: "Por qué LulabTech",
      title:
        "Una web no solo debe verse bien: debe dejar más claro tu valor y mover mejor al usuario",
      description:
        "Trabajamos la parte visual, la estructura comercial y la experiencia para que el sitio no se quede en algo bonito, sino útil para tu negocio.",
      panelEyebrow: "Lo que cambia",
      panelTitle:
        "Una presencia más cuidada, un mensaje más claro y un contacto mejor guiado.",
      panelDescription:
        "En LulabTech cada bloque tiene una función concreta: ordenar la oferta, reforzar la percepción de marca y acercar al visitante al siguiente paso.",
      valuePoints: [
        "Se entiende mejor lo que ofreces.",
        "La marca se percibe más seria.",
        "El contacto queda más fácil de tomar."
      ],
      focusLabel: "Enfoque",
      focusValue: "Diseño, estructura y copy trabajando juntos.",
      resultLabel: "Resultado",
      resultValue: "Más claridad, más confianza y una mejor ruta hacia cotizar.",
      items: [
        {
          title: "Diseño con mejor criterio",
          description:
            "No es solo estética: cuidamos composición, jerarquía y detalle para que la marca se sienta mejor construida."
        },
        {
          title: "Mensaje más fácil de entender",
          description:
            "Ordenamos el contenido para que el visitante entienda qué haces, por qué importa y qué paso debe dar."
        },
        {
          title: "Experiencia más fluida",
          description:
            "Responsive real, carga cuidada y recorrido visual limpio para que todo se sienta más sólido."
        },
        {
          title: "Solución hecha para el negocio",
          description:
            "Cada proyecto responde al objetivo comercial y al tipo de usuario, no a una plantilla genérica."
        },
        {
          title: "Presencia más confiable",
          description:
            "Diseño, estructura y tecnología alineados para transmitir más seriedad y respaldo profesional."
        }
      ]
    },
    process: {
      eyebrow: "Proceso",
      title:
        "Un flujo claro para pasar de idea a una presencia digital lista para moverse con tu negocio",
      description:
        "Así trabajamos para aterrizar la idea, ordenar la experiencia y dejar el proyecto listo para salir con buena base visual y técnica.",
      stepPrefix: "Paso",
      items: [
        {
          step: "01",
          title: "Descubrimiento",
          description:
            "Se define el objetivo, la conversión principal, el mensaje y el tipo de solución ideal."
        },
        {
          step: "02",
          title: "Diseño de experiencia",
          description:
            "Se organiza la estructura visual y comercial para que el recorrido del usuario tenga sentido."
        },
        {
          step: "03",
          title: "Desarrollo",
          description:
            "Construcción responsive, motion elegante y base técnica lista para producción."
        },
        {
          step: "04",
          title: "Lanzamiento",
          description:
            "Se publica, se revisa y queda lista para captar oportunidades reales."
        }
      ]
    },
    finalCta: {
      badge: "Hablemos",
      title:
        "Si ya tienes clara la idea, te ayudamos a aterrizarla con mejor diseño, estructura y ejecución.",
      description:
        "Cuéntanos si necesitas una landing, una web corporativa, una tienda online o software a la medida y te guiamos hacia la solución correcta.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Hablar por WhatsApp",
      projectTypesLabel: "Tipos de proyecto",
      bullets: ["Landing pages", "Webs corporativas", "Tiendas online", "Software a medida"],
      helper:
        "La idea es simple: que el sitio se vea mejor, se entienda más rápido y deje un camino de contacto mucho más claro."
    },
    quoteSection: {
      eyebrow: "Cotización",
      title: "Solicita una propuesta para tu proyecto",
      description:
        "Déjanos los datos clave y te responderemos para aterrizar alcance, tiempos y el siguiente paso con claridad."
    },
    form: {
      badge: "Cotización formal",
      title: "Cuéntanos lo que quieres construir",
      description:
        "Déjanos los datos clave de tu proyecto y te contactaremos por correo o WhatsApp para continuar la conversación.",
      fields: {
        name: "Nombre",
        brand: "Empresa / Marca",
        email: "Email",
        whatsapp: "WhatsApp",
        projectType: "Tipo de proyecto",
        budget: "Presupuesto estimado",
        message: "Mensaje"
      },
      placeholders: {
        name: "Tu nombre",
        brand: "Nombre de tu marca",
        email: "tu@correo.com",
        whatsapp: "+507 6706-9044",
        projectType: "Selecciona una opción",
        budget: "Opcional",
        message:
          "Cuéntanos qué quieres lograr, qué tipo de proyecto tienes en mente y cualquier detalle importante."
      },
      required: "requerido",
      directContactBadge: "Contacto directo",
      directContactTitle: "También puedes escribirnos por WhatsApp o por correo.",
      directContactDescription:
        "Si prefieres ir directo, aquí tienes dos formas claras de empezar la conversación con LulabTech.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Chat directo para contarnos tu idea y el tipo de proyecto que necesitas.",
      whatsappButton: "Abrir WhatsApp",
      emailTitle: "Correo",
      emailDescription:
        "Ideal si quieres enviar contexto, referencias o detalles del alcance.",
      emailButton: "Enviar correo",
      nextBadgeTitle: "Qué pasa después",
      nextBadgeDescription:
        "Revisamos tu mensaje, entendemos el tipo de proyecto y te respondemos con el siguiente paso más conveniente.",
      nextSteps: [
        {
          label: "01",
          title: "Revisión",
          description: "Leemos lo que necesitas y entendemos el contexto del proyecto."
        },
        {
          label: "02",
          title: "Contacto",
          description: "Te escribimos por correo o WhatsApp para aclarar detalles clave."
        },
        {
          label: "03",
          title: "Propuesta",
          description: "Aterrizamos alcance, tiempos y la mejor dirección para avanzar."
        }
      ],
      footnoteStart: "Al enviar este formulario, tu solicitud llegará a",
      submitIdle: "Enviar solicitud",
      submitLoading: "Enviando...",
      success: "Tu solicitud fue enviada correctamente. Pronto revisaremos tu información.",
      errorGeneric: "Ocurrió un error inesperado al enviar el formulario.",
      validationGeneric: "Hay campos que necesitan corrección.",
      directEmail: "Correo"
    },
    footer: {
      title:
        "Soluciones digitales premium para marcas que quieren verse mejor y convertir más.",
      description:
        "Landing pages, webs corporativas, tiendas online y software a la medida con una ejecución visual más cuidada, más clara y más comercial.",
      navigation: "Navegación",
      contact: "Contacto",
      email: "Email",
      directChannel: "Canal directo",
      whatsapp: "WhatsApp",
      rights: "Todos los derechos reservados.",
      bottom: "Diseño premium · enfoque comercial · experiencia responsive"
    },
    preloader: {
      aria: "Cargando sitio",
      title: "LulabTech",
      subtitle: "Diseño premium, estructura clara y ejecución seria."
    }
  },
  en: {
    navigation: {
      items: [
        { label: "Projects", href: "#proyectos" },
        { label: "Services", href: "#servicios" },
        { label: "Why LulabTech", href: "#por-que-lulabtech" },
        { label: "Process", href: "#proceso" }
      ],
      whatsapp: "WhatsApp",
      quote: "Request a quote",
      menuAria: "Open menu"
    },
    mobileMenu: {
      title: "LulabTech",
      description:
        "Premium digital solutions for brands that want to look stronger and convert better."
    },
    hero: {
      eyebrow: "Premium digital experiences",
      titleStart: "Digital solutions that look",
      titleGradient: "premium",
      titleEnd: "and convert with intention.",
      description:
        "We design and build landing pages, corporate websites, online stores and custom software with stronger visual direction, clearer commercial structure and solid technical execution.",
      primaryCta: "Request a quote",
      secondaryCta: "Chat on WhatsApp",
      badges: ["Landing pages", "Corporate websites", "Online stores", "Custom software"],
      cards: [
        {
          title: "Clearer offer",
          description:
            "Structure, hierarchy and copy shaped so visitors understand the value quickly."
        },
        {
          title: "Stronger presence",
          description:
            "Clean visuals and sharper brand direction to project more confidence and level."
        },
        {
          title: "Guided contact",
          description:
            "Visible CTAs, direct WhatsApp and a smoother path toward the quote request."
        }
      ],
      previewWindow: "Project preview",
      previewBadge: "Real preview",
      previewTitle: "Strong visual design, clearer offer and direct contact.",
      previewDescription:
        "This is how a landing page looks when it is built to elevate perception and drive action.",
      previewCards: [
        { eyebrow: "Landing pages", value: "Lead capture" },
        { eyebrow: "Corporate website", value: "Authority" },
        { eyebrow: "Online store", value: "Digital sales" },
        { eyebrow: "Software", value: "Clear operations" }
      ],
      metrics: [
        { label: "Brand image", value: "Stronger and better presented" },
        { label: "Mobile", value: "Well resolved from the first scroll" },
        { label: "Contact path", value: "Clear CTAs and a smarter route" }
      ],
      nextStepLabel: "Next step",
      nextStepTitle: "Clear quote request",
      nextStepDescription:
        "The goal is not only to look good, but to make what you do and how to contact you immediately clear."
    },
    credibility: [
      {
        title: "Design with intention",
        description:
          "Every block is built to elevate perception, organize the message and support conversion."
      },
      {
        title: "Fast experience",
        description:
          "A modern, lightweight and responsive foundation so the site feels fluid and serious."
      },
      {
        title: "Brand trust",
        description:
          "Clean visuals, premium structure and better clarity for brands that want to look a level above."
      }
    ],
    projectShowcase: {
      eyebrow: "Projects",
      title:
        "Digital experiences designed to look better and communicate with more strength",
      description:
        "A visual sample of the types of solutions we build for brands looking for a stronger digital presence.",
      categories: [
        {
          id: "landing",
          label: "Landing Pages",
          description:
            "Landing pages built to present value clearly, elevate perception and push conversion.",
          items: [
            {
              title: "Lead capture landing",
              subtitle: "Premium conversion",
              description:
                "A design focused on offer clarity, visual authority and direct contact.",
              image: "/projects/landing/landing-01.png"
            },
            {
              title: "Commercial landing",
              subtitle: "Digital campaign",
              description:
                "Structured to present value fast and move the user toward a quote request.",
              image: "/projects/landing/landing-02.png"
            },
            {
              title: "Brand landing",
              subtitle: "Visual impact",
              description:
                "Premium composition with stronger hierarchy, narrative and digital presence.",
              image: "/projects/landing/landing-03.png"
            },
            {
              title: "Strategic landing",
              subtitle: "Clear CTA",
              description:
                "Designed to elevate perception and enable immediate commercial action.",
              image: "/projects/landing/landing-04.png"
            }
          ]
        },
        {
          id: "corporate",
          label: "Corporate Websites",
          description:
            "Corporate websites focused on authority, commercial structure and a stronger digital presence.",
          items: [
            {
              title: "Premium corporate website",
              subtitle: "Brand authority",
              description:
                "A site built to communicate seriousness, trust and a stronger business presentation.",
              image: "/projects/Corporate/corporate-01.png"
            },
            {
              title: "Institutional website",
              subtitle: "Clear communication",
              description:
                "A clean structure to explain services, value and professional backing more clearly.",
              image: "/projects/Corporate/corporate-02.png"
            },
            {
              title: "Business website",
              subtitle: "Solid presence",
              description:
                "An ordered design focused on reputation, clarity and premium experience.",
              image: "/projects/Corporate/corporate-03.png"
            },
            {
              title: "Firm website",
              subtitle: "Visual trust",
              description:
                "A serious and elegant composition to reinforce credibility and premium perception.",
              image: "/projects/Corporate/corporate-04.png"
            }
          ]
        },
        {
          id: "ecommerce",
          label: "Online Stores",
          description:
            "Online stores with a stronger visual experience, clearer buying journey and commercial focus.",
          items: [
            {
              title: "Premium e-commerce",
              subtitle: "Digital sales",
              description:
                "A design oriented toward catalog structure, buying experience and commercial presentation.",
              image: "/projects/ecommerce/ecommerce-01.png"
            },
            {
              title: "Modern online store",
              subtitle: "Shopping UX",
              description:
                "A clean layout designed for fluid navigation, clearer products and better conversion.",
              image: "/projects/ecommerce/ecommerce-02.png"
            },
            {
              title: "E-commerce catalog",
              subtitle: "Scalability",
              description:
                "A premium visual experience for brands that need to sell with more order and presence.",
              image: "/projects/ecommerce/ecommerce-03.png"
            },
            {
              title: "Digital storefront",
              subtitle: "Commercial performance",
              description:
                "An interface focused on perceived value, trust and a clearer buying journey.",
              image: "/projects/ecommerce/ecommerce-04.png"
            }
          ]
        },
        {
          id: "software",
          label: "Custom Software",
          description:
            "Custom software with modern interfaces, smart organization and a professional feel.",
          items: [
            {
              title: "Operations dashboard",
              subtitle: "Tailored solution",
              description:
                "An interface built for internal processes, visual control and more efficient operations.",
              image: "/projects/software/software-01.png"
            },
            {
              title: "Enterprise system",
              subtitle: "Optimized workflows",
              description:
                "A modern design to centralize information, metrics and team workflow.",
              image: "/projects/software/software-02.png"
            },
            {
              title: "Digital platform",
              subtitle: "Clear operations",
              description:
                "A visual architecture focused on order, productivity and professional experience.",
              image: "/projects/software/software-03.png"
            },
            {
              title: "Management software",
              subtitle: "Scale and control",
              description:
                "A premium composition that shows a serious, clean system ready to grow.",
              image: "/projects/software/software-04.png"
            }
          ]
        }
      ],
      projectBadge: "Project",
      previousAria: "Previous in",
      nextAria: "Next in",
      goToSlideAria: "Go to slide",
      altPrefix: "View of"
    },
    services: {
      eyebrow: "Capabilities",
      title:
        "Solutions built to present the brand better and move the user toward action",
      description:
        "Landing pages, corporate websites, online stores, software and automations developed with commercial clarity and more refined execution.",
      suffix: "Tailored · clear · ready to grow",
      items: [
        {
          title: "Landing pages",
          description:
            "High-impact pages for campaigns, lead generation and launches."
        },
        {
          title: "Corporate websites",
          description:
            "Professional sites that communicate authority, trust and commercial clarity."
        },
        {
          title: "Online stores",
          description:
            "E-commerce focused on conversion, shopping experience and scalability."
        },
        {
          title: "Custom software",
          description:
            "Digital tools built around real processes, needs and business goals."
        },
        {
          title: "Automations",
          description:
            "Flows and digital solutions designed to save time and improve operations."
        }
      ]
    },
    why: {
      eyebrow: "Why LulabTech",
      title:
        "A website should not only look good: it should make your value clearer and move the user better",
      description:
        "We work on the visual layer, the commercial structure and the experience so the site becomes useful for the business, not just attractive.",
      panelEyebrow: "What changes",
      panelTitle:
        "A more polished presence, a clearer message and a better guided contact path.",
      panelDescription:
        "At LulabTech, every block has a concrete purpose: organize the offer, reinforce brand perception and bring the visitor closer to the next step.",
      valuePoints: [
        "What you offer becomes easier to understand.",
        "The brand feels more serious.",
        "The contact path becomes easier to take."
      ],
      focusLabel: "Approach",
      focusValue: "Design, structure and copy working together.",
      resultLabel: "Result",
      resultValue: "More clarity, more trust and a better route toward the quote.",
      items: [
        {
          title: "Design with stronger judgment",
          description:
            "It is not just aesthetics: we take care of composition, hierarchy and detail so the brand feels better built."
        },
        {
          title: "Message that is easier to understand",
          description:
            "We organize the content so the visitor understands what you do, why it matters and what step to take next."
        },
        {
          title: "More fluid experience",
          description:
            "True responsiveness, polished loading and a clean visual journey that feels more solid."
        },
        {
          title: "Solution shaped for the business",
          description:
            "Every project responds to the commercial goal and the type of user, not to a generic template."
        },
        {
          title: "More reliable presence",
          description:
            "Design, structure and technology aligned to communicate more seriousness and professional backing."
        }
      ]
    },
    process: {
      eyebrow: "Process",
      title:
        "A clear flow to move from an idea to a digital presence ready to grow with your business",
      description:
        "This is how we translate the idea, structure the experience and leave the project ready to launch with a strong visual and technical base.",
      stepPrefix: "Step",
      items: [
        {
          step: "01",
          title: "Discovery",
          description:
            "We define the goal, the main conversion, the message and the ideal type of solution."
        },
        {
          step: "02",
          title: "Experience design",
          description:
            "We organize the visual and commercial structure so the user journey makes sense."
        },
        {
          step: "03",
          title: "Development",
          description:
            "Responsive build, elegant motion and a technical base ready for production."
        },
        {
          step: "04",
          title: "Launch",
          description:
            "It goes live, gets reviewed and is left ready to capture real opportunities."
        }
      ]
    },
    finalCta: {
      badge: "Let’s talk",
      title:
        "If you already have the idea clear, we can shape it with better design, structure and execution.",
      description:
        "Tell us whether you need a landing page, a corporate website, an online store or custom software and we will guide you toward the right solution.",
      primaryCta: "Request a quote",
      secondaryCta: "Chat on WhatsApp",
      projectTypesLabel: "Project types",
      bullets: ["Landing pages", "Corporate websites", "Online stores", "Custom software"],
      helper:
        "The idea is simple: make the site look stronger, feel clearer and leave a much easier path to contact."
    },
    quoteSection: {
      eyebrow: "Quote",
      title: "Request a proposal for your project",
      description:
        "Leave the key project details and we will reply to define scope, timing and the next step with clarity."
    },
    form: {
      badge: "Formal quote",
      title: "Tell us what you want to build",
      description:
        "Leave the key details of your project and we will contact you by email or WhatsApp to continue the conversation.",
      fields: {
        name: "Name",
        brand: "Company / Brand",
        email: "Email",
        whatsapp: "WhatsApp",
        projectType: "Project type",
        budget: "Estimated budget",
        message: "Message"
      },
      placeholders: {
        name: "Your name",
        brand: "Your brand name",
        email: "you@email.com",
        whatsapp: "+507 6706-9044",
        projectType: "Select an option",
        budget: "Optional",
        message:
          "Tell us what you want to achieve, what kind of project you have in mind and any important detail."
      },
      required: "required",
      directContactBadge: "Direct contact",
      directContactTitle: "You can also reach out by WhatsApp or email.",
      directContactDescription:
        "If you prefer to go straight to the point, here are two clear ways to start the conversation with LulabTech.",
      whatsappTitle: "WhatsApp",
      whatsappDescription:
        "Direct chat to tell us about your idea and the kind of project you need.",
      whatsappButton: "Open WhatsApp",
      emailTitle: "Email",
      emailDescription:
        "Ideal if you want to send context, references or scope details.",
      emailButton: "Send email",
      nextBadgeTitle: "What happens next",
      nextBadgeDescription:
        "We review your message, understand the type of project and reply with the most convenient next step.",
      nextSteps: [
        {
          label: "01",
          title: "Review",
          description: "We read what you need and understand the project context."
        },
        {
          label: "02",
          title: "Contact",
          description: "We reach out by email or WhatsApp to clarify key details."
        },
        {
          label: "03",
          title: "Proposal",
          description: "We define scope, timing and the best direction to move forward."
        }
      ],
      footnoteStart: "By sending this form, your request will be delivered to",
      submitIdle: "Send request",
      submitLoading: "Sending...",
      success: "Your request was sent successfully. We will review it shortly.",
      errorGeneric: "An unexpected error occurred while sending the form.",
      validationGeneric: "Some fields need your attention.",
      directEmail: "Email"
    },
    footer: {
      title:
        "Premium digital solutions for brands that want to look stronger and convert better.",
      description:
        "Landing pages, corporate websites, online stores and custom software with more refined, clearer and more commercial execution.",
      navigation: "Navigation",
      contact: "Contact",
      email: "Email",
      directChannel: "Direct channel",
      whatsapp: "WhatsApp",
      rights: "All rights reserved.",
      bottom: "Premium design · commercial focus · responsive experience"
    },
    preloader: {
      aria: "Loading site",
      title: "LulabTech",
      subtitle: "Premium design, clear structure and serious execution."
    }
  }
} as const;
