import { servicePages } from "@/data/seo-pages";
import { flatServiceHubLinks } from "@/data/service-hub";
import { CONTACT_EMAIL, INSTAGRAM_URL, SITE_DESCRIPTION, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const services = servicePages.map((page) => ({
  name: page.eyebrow,
  url: `${baseUrl}/${page.slug}`,
  description: page.metaDescription
}));

const navigationLinks = [
  { name: "Inicio", url: baseUrl },
  { name: "Servicios", url: `${baseUrl}/servicios-panama` },
  { name: "Proyectos", url: `${baseUrl}/proyectos` },
  ...flatServiceHubLinks.map((link) => ({
    name: link.label,
    url: `${baseUrl}${link.href}`
  }))
];

const faqs = [
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
];

const seoTopics = Array.from(
  new Set([
    "diseño de páginas web en Panamá",
    "desarrollo web Panamá",
    "agencia de diseño web Panamá",
    "páginas informativas Panamá",
    "páginas para abogados Panamá",
    "diseño web para clínicas Panamá",
    "diseño web para inmobiliarias Panamá",
    "landing pages Panamá",
    "páginas web corporativas Panamá",
    "tiendas online Panamá",
    "ecommerce Panamá",
    "software a medida Panamá",
    "software POS Panamá",
    "software para casilleros",
    "software para restaurantes",
    "sistemas de reservas",
    "automatizaciones para empresas",
    "mantenimiento web Panamá",
    "SEO inicial",
    "Google Ads Panamá",
    "Meta Ads",
    "formularios de cotización",
    "WhatsApp para negocios",
    ...servicePages.flatMap((page) => page.keywords)
  ])
);

export function StructuredData() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: SITE_NAME,
        alternateName: "Lulab Technology",
        url: baseUrl,
        email: CONTACT_EMAIL,
        logo: `${baseUrl}/brand/lulabtech-logo.png`,
        image: `${baseUrl}/og/og-cover.png`,
        sameAs: [INSTAGRAM_URL]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#professional-service`,
        name: SITE_NAME,
        alternateName: "Lulab Technology",
        url: baseUrl,
        email: CONTACT_EMAIL,
        telephone: `+${WHATSAPP_NUMBER}`,
        image: `${baseUrl}/og/og-cover.png`,
        logo: `${baseUrl}/brand/lulabtech-logo.png`,
        description: SITE_DESCRIPTION,
        keywords: seoTopics.join(", "),
        knowsAbout: seoTopics,
        areaServed: [
          {
            "@type": "Country",
            name: "Panamá"
          },
          {
            "@type": "City",
            name: "Ciudad de Panamá"
          }
        ],
        address: {
          "@type": "PostalAddress",
          addressCountry: "PA",
          addressRegion: "Panamá"
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: CONTACT_EMAIL,
            telephone: `+${WHATSAPP_NUMBER}`,
            areaServed: "PA",
            availableLanguage: ["es", "en"]
          }
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios de diseño web, software y marketing digital",
          itemListElement: services.map((service, index) => ({
            "@type": "Offer",
            "@id": `${baseUrl}/#catalog-offer-${index + 1}`,
            itemOffered: {
              "@id": `${baseUrl}/#service-${index + 1}`
            }
          }))
        },
        provider: {
          "@id": `${baseUrl}/#organization`
        },
        makesOffer: services.map((service, index) => ({
          "@type": "Offer",
          "@id": `${baseUrl}/#offer-${index + 1}`,
          itemOffered: {
            "@id": `${baseUrl}/#service-${index + 1}`
          },
          areaServed: "Panamá"
        }))
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_NAME,
        description:
          "Agencia de diseño web en Panamá especializada en landing pages, páginas corporativas, tiendas online, software a medida y SEO inicial.",
        keywords: seoTopics.join(", "),
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        inLanguage: "es-PA"
      },
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/#webpage`,
        url: baseUrl,
        name: "Diseño de páginas web en Panamá | LulabTech",
        description: SITE_DESCRIPTION,
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/#professional-service`
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${baseUrl}/og/og-cover.png`
        },
        inLanguage: "es-PA"
      },
      ...services.map((service, index) => ({
        "@type": "Service",
        "@id": `${baseUrl}/#service-${index + 1}`,
        name: service.name,
        description: service.description,
        serviceType: service.name,
        url: service.url,
        areaServed: "Panamá",
        audience: {
          "@type": "BusinessAudience",
          name: "Empresas, emprendedores y profesionales en Panamá"
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: whatsappUrl,
          servicePhone: {
            "@type": "ContactPoint",
            telephone: `+${WHATSAPP_NUMBER}`
          }
        },
        provider: {
          "@id": `${baseUrl}/#professional-service`
        }
      })),
      {
        "@type": "ItemList",
        "@id": `${baseUrl}/#services-list`,
        name: "Servicios digitales de LulabTech",
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          item: `${baseUrl}/#service-${index + 1}`
        }))
      },
      {
        "@type": "SiteNavigationElement",
        "@id": `${baseUrl}/#site-navigation`,
        name: navigationLinks.map((link) => link.name),
        url: navigationLinks.map((link) => link.url)
      },
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: baseUrl
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data)
      }}
    />
  );
}
