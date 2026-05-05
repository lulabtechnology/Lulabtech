import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export function StructuredData() {
  const sameAs = [`https://wa.me/${WHATSAPP_NUMBER}`];

  const services = [
    "Diseño de páginas web en Panamá",
    "Landing pages en Panamá",
    "Páginas web corporativas",
    "Tiendas online",
    "Software a medida",
    "Automatizaciones digitales",
    "SEO inicial",
    "Google Ads"
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: SITE_NAME,
        url: baseUrl,
        email: CONTACT_EMAIL,
        sameAs,
        logo: `${baseUrl}/brand/lulabtech-logo.png`
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_NAME,
        description:
          "Agencia de diseño web en Panamá especializada en landing pages, páginas corporativas, tiendas online y software a medida.",
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        inLanguage: "es-PA"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#professional-service`,
        name: SITE_NAME,
        url: baseUrl,
        email: CONTACT_EMAIL,
        areaServed: {
          "@type": "Country",
          name: "Panamá"
        },
        serviceType: services,
        provider: {
          "@id": `${baseUrl}/#organization`
        }
      },
      ...services.map((service, index) => ({
        "@type": "Service",
        "@id": `${baseUrl}/#service-${index + 1}`,
        name: service,
        areaServed: "Panamá",
        provider: {
          "@id": `${baseUrl}/#organization`
        }
      })),
      {
        "@type": "FAQPage",
        "@id": `${baseUrl}/#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "¿LulabTech hace páginas web en Panamá?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. LulabTech trabaja páginas web, landing pages, tiendas online y sistemas digitales para negocios que necesitan una presencia más profesional y una ruta clara de contacto."
            }
          },
          {
            "@type": "Question",
            name: "¿La web queda preparada para Google?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La base se deja ordenada con estructura, textos, metadata y rendimiento. Luego se puede escalar con páginas internas, contenido SEO y optimización continua."
            }
          },
          {
            "@type": "Question",
            name: "¿Puedo conectar WhatsApp y formularios?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sí. La web puede llevar botones de WhatsApp, formularios de cotización, enlaces a redes, correos y rutas de contacto pensadas para convertir mejor."
            }
          },
          {
            "@type": "Question",
            name: "¿Trabajan solo landing pages o también sistemas?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "LulabTech trabaja desde landing pages y páginas corporativas hasta tiendas online, sistemas de reservas, inventarios, paneles administrativos y automatizaciones."
            }
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
