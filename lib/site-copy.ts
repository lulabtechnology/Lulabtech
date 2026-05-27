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
  categoryLabel?: string;
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
        { label: "Portafolio", href: "/portafolio" },
        { label: "Servicios", href: "/servicios-panama" },
        { label: "Soluciones", href: "/#soluciones" },
        { label: "Proceso", href: "/#proceso" },
        { label: "Precios", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
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
      eyebrow: "Agencia de diseño web en Panamá",
      titleStart: "Diseño de páginas web en Panamá",
      titleGradient: "para empresas que quieren verse profesionales",
      titleEnd: "y convertir más.",
      description:
        "Creamos landing pages, páginas web corporativas, tiendas online y software a medida para negocios en Panamá. Diseñamos sitios rápidos, responsive, claros y preparados para captar clientes desde Google, WhatsApp y campañas digitales.",
      primaryCta: "Solicitar cotización",
      secondaryCta: "Hablar por WhatsApp",
      badges: ["Landing pages", "Webs corporativas", "Tiendas online", "Software a medida"],
      cards: [
        {
          title: "Tu negocio se entiende rápido",
          description:
            "Organizamos tus servicios para que el cliente sepa qué ofreces y cómo contactarte."
        },
        {
          title: "Diseñada para celular",
          description:
            "La web se adapta a móvil, tablet y escritorio para que el recorrido se sienta cómodo."
        },
        {
          title: "Lista para recibir clientes",
          description:
            "WhatsApp, formularios y llamados a la acción quedan claros desde el primer recorrido."
        }
      ],
      previewWindow: "Sitio web profesional",
      previewBadge: "LulabTech",
      previewTitle: "Una web profesional para presentar mejor tu negocio.",
      previewDescription:
        "Mostramos tus servicios, beneficios y canales de contacto de forma clara para que el visitante pueda cotizar sin confundirse.",
      sidePreviewAlt: "Vista previa de proyecto digital desarrollado por LulabTech",
      previewCards: [
        { eyebrow: "Landing pages", value: "Captación" },
        { eyebrow: "Web corporativa", value: "Autoridad" },
        { eyebrow: "Tienda online", value: "Venta digital" },
        { eyebrow: "Software", value: "Operación" }
      ],
      metrics: [
        { label: "Claridad", value: "Tu oferta se entiende mejor" },
        { label: "Contacto", value: "WhatsApp y formulario visibles" },
        { label: "Confianza", value: "Imagen más seria para tu marca" }
      ],
      nextStepLabel: "Contacto claro",
      nextStepTitle: "Da el siguiente paso",
      nextStepDescription:
        "Una ruta simple para que quien entra a tu sitio pueda pedir información o cotizar sin perderse."
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
    clients: {
      title: "Nuestros clientes",
      images: [
        { src: "/clients/remax.webp", alt: "Logo de cliente RE/MAX" },
        { src: "/clients/nova-shipping.webp", alt: "Logo de cliente Nova Shipping Services" },
        { src: "/clients/los-cholos.webp", alt: "Logo de cliente Los Cholos Salchipapería" },
        { src: "/clients/krasa-dermoestudio.webp", alt: "Logo de cliente Krasa Dermoestudio" },
        { src: "/clients/enis-caicedo.webp", alt: "Logo de cliente Enis Caicedo" },
        { src: "/clients/alcira-trigueros.webp", alt: "Logo de cliente Alcira Trigueros" },
        { src: "/clients/alaf-international-academy.webp", alt: "Logo de cliente ALAF International Academy" },
        { src: "/clients/reyes-echevers-petroni.webp", alt: "Logo de cliente Reyes Echevers Petroni" },
        { src: "/clients/fundacion-alada.webp", alt: "Logo de cliente Fundación Alada" },
        { src: "/clients/orthoclinix.webp", alt: "Logo de cliente OrthoClinix" },
        { src: "/clients/solmas.webp", alt: "Logo de cliente SOLMAS" },
        { src: "/clients/veranieras-flor.webp", alt: "Logo de cliente Veranieras" },
        { src: "/clients/servi-estufa.webp", alt: "Logo de cliente Servi-Estufa" },
        { src: "/clients/aa-law-firm.webp", alt: "Logo de cliente A&A Law Firm" },
        { src: "/clients/bd-logistic.webp", alt: "Logo de cliente B&D Logistic" },
        { src: "/clients/cerebritos.webp", alt: "Logo de cliente Cerebritos" },
        { src: "/clients/quality-techno-services.webp", alt: "Logo de cliente Quality Techno Services" }
      ]
    },
    projectShowcase: {
      eyebrow: "Portafolio",
      title:
        "Portafolio de páginas web, tiendas online y sistemas digitales",
      description:
        "Explora trabajos visuales de LulabTech en landing pages, páginas corporativas, tiendas online y sistemas digitales. Cada proyecto muestra una dirección más profesional, clara y preparada para captar oportunidades.",
      carouselDescription:
        "Desliza el carrusel para ver diferentes estilos de diseño web, estructura comercial y experiencias digitales desarrolladas para negocios reales.",
      allLabel: "Todos",
      categories: [
        {
          id: "landing",
          label: "Landing Pages",
          description:
            "Landing pages reales para servicios, campañas, turismo, salud, educación y negocios que necesitan captar consultas.",
          items: [
            {
              title: "Cardio Kids & English",
              subtitle: "Landing educativa",
              description:
                "Página de captación para explicar clases, beneficios y contacto directo con una presentación clara y responsive.",
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
          description:
            "Webs corporativas enfocadas en autoridad, estructura comercial y una presencia digital más sólida para empresas.",
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
          description:
            "Sistemas a medida para casilleros, restaurantes, reservas, inventarios, reportes y operaciones internas.",
          items: [
            {
              title: "NOVA Shipping Services",
              subtitle: "Software para casilleros",
              description:
                "Portal para organizar clientes, casilleros, envíos, contenedores, estados, comprobantes y operación logística.",
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
      ],
      projectBadge: "",
      previousAria: "Anterior en",
      nextAria: "Siguiente en",
      goToSlideAria: "Ir al slide",
      altPrefix: "Vista de"
    },
    services: {
      eyebrow: "Servicios",
      title:
        "Diseño web, landing pages, tiendas online y software para negocios en Panamá",
      description:
        "Soluciones digitales desarrolladas con claridad comercial, estética premium, experiencia responsive y una base SEO lista para crecer con Google, campañas, WhatsApp y automatización.",
      suffix: "A medida · claro · listo para crecer",
      items: [
        {
          title: "Landing pages",
          description:
            "Páginas de captación para campañas, WhatsApp, formularios, servicios profesionales y ofertas específicas."
        },
        {
          title: "Webs corporativas",
          description:
            "Páginas web para empresas en Panamá con secciones de servicios, equipo, respaldo, proyectos y contacto."
        },
        {
          title: "Webs para abogados",
          description:
            "Landing pages y webs legales con áreas de práctica, perfil profesional, confianza, WhatsApp y SEO local."
        },
        {
          title: "Tiendas online",
          description:
            "Ecommerce y catálogos digitales con productos, categorías, carrito, pagos o consulta directa por WhatsApp."
        },
        {
          title: "Software a la medida",
          description:
            "Sistemas para casilleros, restaurantes, reservas, inventarios, reportes, usuarios y procesos internos."
        },
        {
          title: "Automatizaciones",
          description:
            "Flujos digitales para ordenar formularios, notificaciones, reportes, seguimiento y tareas repetitivas."
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
        "En LulabTech cada bloque cumple una función real: ordenar la oferta, reforzar la percepción de marca y hacer que el siguiente paso sea mucho más claro.",
      valuePoints: [
        "Tu oferta se entiende más rápido.",
        "La marca se percibe más seria y mejor construida.",
        "Contactarte se vuelve más fácil y directo."
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
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Preguntas frecuentes sobre diseño de páginas web en Panamá",
      description:
        "Respuestas rápidas para negocios que están evaluando una landing page, página corporativa, tienda online, SEO inicial o sistema digital.",
      items: [
        {
          question: "¿LulabTech hace páginas web en Panamá?",
          answer:
            "Sí. LulabTech diseña páginas web en Panamá, landing pages, tiendas online y sistemas digitales para empresas, marcas personales y servicios profesionales que necesitan una presencia más seria y una ruta clara de contacto."
        },
        {
          question: "¿La web queda preparada para Google?",
          answer:
            "La web queda mejor organizada para Google y para el usuario: títulos claros, estructura correcta, sitemap, robots, datos estructurados, enlaces internos y contenido preparado para crecer con nuevas páginas de servicio."
        },
        {
          question: "¿Puedo conectar WhatsApp y formularios?",
          answer:
            "Sí. La web puede llevar botones de WhatsApp, formularios de cotización, enlaces a redes, correo y recorridos de contacto pensados para convertir visitantes en oportunidades reales."
        },
        {
          question: "¿Trabajan solo landing pages o también sistemas?",
          answer:
            "Trabajamos desde landing pages y páginas corporativas hasta tiendas online, sistemas de reservas, inventarios, paneles administrativos, automatizaciones y software a medida."
        },
        {
          question: "¿Qué tipo de negocios pueden trabajar con LulabTech?",
          answer:
            "Podemos trabajar con firmas legales, restaurantes, clínicas, academias, empresas logísticas, inmobiliarias, negocios de servicios, tiendas y marcas que necesitan mejorar su presencia digital."
        },
        {
          question: "¿Una landing page sirve para campañas de Google Ads o Meta Ads?",
          answer:
            "Sí. Una landing page bien estructurada ayuda a presentar una oferta específica, ordenar el mensaje, conectar WhatsApp o formularios y medir mejor las oportunidades generadas por campañas."
        },
        {
          question: "¿Pueden mejorar una web existente?",
          answer:
            "Sí. Podemos rediseñar, ordenar contenido, mejorar estructura visual, reforzar SEO inicial, optimizar rutas de contacto y preparar la web para una etapa de crecimiento más seria."
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
        "Diseño de páginas web en Panamá, landing pages, webs corporativas, tiendas online y software a medida con ejecución visual cuidada, estructura comercial y base SEO.",
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
        { label: "Portfolio", href: "/portafolio" },
        { label: "Services", href: "/servicios-panama" },
        { label: "Solutions", href: "/#soluciones" },
        { label: "Process", href: "/#proceso" },
        { label: "Pricing", href: "/cuanto-cuesta-una-pagina-web-en-panama" }
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
      eyebrow: "Web design agency in Panama",
      titleStart: "Web design in Panama",
      titleGradient: "for companies that want to look professional",
      titleEnd: "and convert better.",
      description:
        "We create landing pages, corporate websites, online stores and custom software for businesses in Panama. We design fast, responsive and clear websites prepared to capture clients from Google, WhatsApp and digital campaigns.",
      primaryCta: "Request a quote",
      secondaryCta: "Chat on WhatsApp",
      badges: ["Landing pages", "Corporate websites", "Online stores", "Custom software"],
      cards: [
        {
          title: "Your business is easy to understand",
          description:
            "We organize your services so visitors know what you offer and how to contact you."
        },
        {
          title: "Designed for mobile",
          description:
            "The website adapts to phone, tablet and desktop so the experience feels comfortable."
        },
        {
          title: "Ready to receive clients",
          description:
            "WhatsApp, forms and calls to action stay clear throughout the user journey."
        }
      ],
      previewWindow: "Professional website",
      previewBadge: "LulabTech",
      previewTitle: "A professional website to present your business better.",
      previewDescription:
        "We present your services, benefits and contact channels clearly so visitors can request a quote without confusion.",
      sidePreviewAlt: "Preview of a digital project built by LulabTech",
      previewCards: [
        { eyebrow: "Landing pages", value: "Lead capture" },
        { eyebrow: "Corporate website", value: "Authority" },
        { eyebrow: "Online store", value: "Digital sales" },
        { eyebrow: "Software", value: "Operations" }
      ],
      metrics: [
        { label: "Clarity", value: "Your offer is easier to understand" },
        { label: "Contact", value: "WhatsApp and forms are visible" },
        { label: "Trust", value: "A stronger image for your brand" }
      ],
      nextStepLabel: "Clear contact",
      nextStepTitle: "Take the next step",
      nextStepDescription:
        "A simple route so anyone landing on your website can ask for information or request a quote without getting lost."
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
    clients: {
      title: "Our clients",
      images: [
        { src: "/clients/remax.webp", alt: "RE/MAX client logo" },
        { src: "/clients/nova-shipping.webp", alt: "Nova Shipping Services client logo" },
        { src: "/clients/los-cholos.webp", alt: "Los Cholos Salchipapería client logo" },
        { src: "/clients/krasa-dermoestudio.webp", alt: "Krasa Dermoestudio client logo" },
        { src: "/clients/enis-caicedo.webp", alt: "Enis Caicedo client logo" },
        { src: "/clients/alcira-trigueros.webp", alt: "Alcira Trigueros client logo" },
        { src: "/clients/alaf-international-academy.webp", alt: "ALAF International Academy client logo" },
        { src: "/clients/reyes-echevers-petroni.webp", alt: "Reyes Echevers Petroni client logo" },
        { src: "/clients/fundacion-alada.webp", alt: "Fundación Alada client logo" },
        { src: "/clients/orthoclinix.webp", alt: "OrthoClinix client logo" },
        { src: "/clients/solmas.webp", alt: "SOLMAS client logo" },
        { src: "/clients/veranieras-flor.webp", alt: "Veranieras client logo" },
        { src: "/clients/servi-estufa.webp", alt: "Servi-Estufa client logo" },
        { src: "/clients/aa-law-firm.webp", alt: "A&A Law Firm client logo" },
        { src: "/clients/bd-logistic.webp", alt: "B&D Logistic client logo" },
        { src: "/clients/cerebritos.webp", alt: "Cerebritos client logo" },
        { src: "/clients/quality-techno-services.webp", alt: "Quality Techno Services client logo" }
      ]
    },
    projectShowcase: {
      eyebrow: "Portfolio",
      title:
        "Portfolio of websites, online stores and digital systems",
      description:
        "Explore visual work by LulabTech across landing pages, corporate websites, online stores and digital systems. Each project shows a clearer, more professional direction prepared to capture opportunities.",
      carouselDescription:
        "Swipe through the carousel to see different styles of web design, commercial structure and digital experiences built for real businesses.",
      allLabel: "All",
      categories: [
        {
          id: "landing",
          label: "Landing Pages",
          description:
            "Real landing pages for services, campaigns, tourism, health, education and businesses that need to capture inquiries.",
          items: [
            {
              title: "Cardio Kids & English",
              subtitle: "Educational landing",
              description:
                "Lead capture page to explain classes, benefits and direct contact with a clear responsive presentation.",
              image: "/projects/landing/landing-01.png"
            },
            {
              title: "Krasa Dermoestudio",
              subtitle: "Aesthetic landing",
              description:
                "Commercial design to present services, build visual trust and make appointment requests easier.",
              image: "/projects/landing/landing-02.png"
            },
            {
              title: "Chabonnet Comercial",
              subtitle: "Real estate landing",
              description:
                "High-impact structure to explain the offer, receive inquiries and guide visitors toward contact.",
              image: "/projects/landing/landing-03.png"
            },
            {
              title: "Biofest Panamá",
              subtitle: "Tourism landing",
              description:
                "Visual experience to present tours, locations, bookings and bilingual communication in an organized way.",
              image: "/projects/landing/landing-04.png"
            }
          ]
        },
        {
          id: "corporate",
          label: "Corporate Websites",
          description:
            "Corporate websites focused on authority, commercial structure and a stronger digital presence for companies.",
          items: [
            {
              title: "Alcira Trigueros",
              subtitle: "Legal real estate website",
              description:
                "Professional presence to communicate legal and real estate services with a serious, elegant tone.",
              image: "/projects/Corporate/corporate-01.png"
            },
            {
              title: "Quality Techno Services",
              subtitle: "Industrial website",
              description:
                "Corporate website to present technical services, professional proof and clear contact channels.",
              image: "/projects/Corporate/corporate-02.png"
            },
            {
              title: "Solarled",
              subtitle: "Solar energy website",
              description:
                "Commercial page to explain solar services, certifications, benefits and direct contact.",
              image: "/projects/Corporate/corporate-03.png"
            },
            {
              title: "ALAF International Academy",
              subtitle: "Educational website",
              description:
                "Structure for academy programs, institutional communication and responsive student experience.",
              image: "/projects/Corporate/corporate-04.png"
            }
          ]
        },
        {
          id: "software",
          label: "Software and Portals",
          description:
            "Custom systems for lockers, restaurants, bookings, inventories, reports and internal operations.",
          items: [
            {
              title: "NOVA Shipping Services",
              subtitle: "Locker software",
              description:
                "Portal to organize clients, lockers, shipments, containers, statuses, receipts and logistics operations.",
              image: "/projects/software/software-01.png"
            },
            {
              title: "Transformación 360",
              subtitle: "Booking system",
              description:
                "System for services, availability, requests, confirmations, statuses and an admin panel.",
              image: "/projects/software/software-02.png"
            },
            {
              title: "Los Cholos Cafetería",
              subtitle: "Restaurant software",
              description:
                "Internal solution to organize sales, operational data, reports and business control.",
              image: "/projects/software/software-03.png"
            },
            {
              title: "Biofest Bookings",
              subtitle: "Booking management",
              description:
                "Digital flow for requests, receipts, visitor communication and booking administration.",
              image: "/projects/software/software-04.png"
            }
          ]
        }
      ],
      projectBadge: "",
      previousAria: "Previous in",
      nextAria: "Next in",
      goToSlideAria: "Go to slide",
      altPrefix: "View of"
    },
    services: {
      eyebrow: "Services",
      title:
        "Web design, landing pages, online stores and software for businesses in Panama",
      description:
        "Digital solutions built with commercial clarity, premium aesthetics, responsive experience and an SEO foundation ready to grow with Google, campaigns, WhatsApp and automation.",
      suffix: "Tailored · clear · ready to grow",
      items: [
        {
          title: "Landing pages",
          description:
            "Lead capture pages for campaigns, WhatsApp, forms, professional services and specific offers."
        },
        {
          title: "Corporate websites",
          description:
            "Websites for companies in Panama with services, team, proof, projects and contact sections."
        },
        {
          title: "Websites for lawyers",
          description:
            "Legal landing pages and websites with practice areas, professional profile, trust signals, WhatsApp and local SEO."
        },
        {
          title: "Online stores",
          description:
            "Ecommerce and digital catalogs with products, categories, cart, payments or direct WhatsApp inquiries."
        },
        {
          title: "Custom software",
          description:
            "Systems for lockers, restaurants, bookings, inventories, reports, users and internal processes."
        },
        {
          title: "Automations",
          description:
            "Digital workflows to organize forms, notifications, reports, follow-up and repetitive tasks."
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
        "At LulabTech, every block serves a real purpose: organize the offer, strengthen brand perception and make the next step much clearer.",
      valuePoints: [
        "Your offer becomes easier to understand quickly.",
        "The brand feels more solid and better built.",
        "Getting in touch becomes easier and more direct."
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
    faq: {
      eyebrow: "FAQ",
      title: "FAQ about web design in Panama",
      description:
        "Quick answers for businesses evaluating a landing page, corporate website, online store, initial SEO or digital system.",
      items: [
        {
          question: "Does LulabTech build websites in Panama?",
          answer:
            "Yes. LulabTech designs websites in Panama, landing pages, online stores and digital systems for companies, personal brands and professional services that need a stronger presence and a clear contact path."
        },
        {
          question: "Will the website be prepared for Google?",
          answer:
            "The foundation is organized with semantic structure, search-oriented copy, metadata, sitemap, robots, structured data and an architecture prepared to grow with internal pages and SEO content."
        },
        {
          question: "Can WhatsApp and forms be connected?",
          answer:
            "Yes. The website can include WhatsApp buttons, quote forms, social links, email and contact journeys designed to turn visitors into real opportunities."
        },
        {
          question: "Do you only build landing pages or also systems?",
          answer:
            "We work from landing pages and corporate websites to online stores, booking systems, inventory platforms, admin dashboards, automations and custom software."
        },
        {
          question: "What type of businesses can work with LulabTech?",
          answer:
            "We can work with law firms, restaurants, clinics, academies, logistics companies, real estate businesses, service providers, stores and brands that need a stronger digital presence."
        },
        {
          question: "Can a landing page be used for Google Ads or Meta Ads campaigns?",
          answer:
            "Yes. A well-structured landing page helps present a specific offer, organize the message, connect WhatsApp or forms and measure opportunities generated by campaigns more clearly."
        },
        {
          question: "Can you improve an existing website?",
          answer:
            "Yes. We can redesign, organize content, improve visual structure, strengthen initial SEO, optimize contact paths and prepare the website for a more serious growth stage."
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
        "Web design in Panama, landing pages, corporate websites, online stores and custom software with polished visuals, commercial structure and SEO foundation.",
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
