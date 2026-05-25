import type { ServicePage } from "@/data/seo-pages";
import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

const priceFromBySlug: Record<string, string> = {
  "landing-pages-panama": "149",
  "paginas-web-corporativas-panama": "299",
  "tiendas-online-panama": "499",
  "software-a-medida-panama": "899",
  "software-para-restaurantes-panama": "899",
  "software-para-casilleros-panama": "899",
  "diseno-web-para-abogados-panama": "149",
  "sistemas-de-reservas-panama": "899",
  "cuanto-cuesta-una-pagina-web-en-panama": "149",
  "desarrollo-web-panama": "299",
  "agencia-de-diseno-web-panama": "149",
  "diseno-web-para-clinicas-panama": "299",
  "diseno-web-para-inmobiliarias-panama": "299",
  "software-pos-panama": "899",
  "automatizaciones-para-empresas-panama": "899",
  "paginas-web-para-restaurantes-panama": "149",
  "paginas-web-para-academias-panama": "299",
  "paginas-web-para-eventos-panama": "299",
  "rediseno-web-panama": "299",
  "sistemas-de-inventario-panama": "899",
  "crm-para-empresas-panama": "899",
  "software-para-logistica-panama": "899",
};

export function ServicePageStructuredData({ page }: { page: ServicePage }) {
  const url = `${baseUrl}/${page.slug}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  const priceFrom = page.priceFrom?.replace(/[^0-9.]/g, "") || priceFromBySlug[page.slug];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: page.h1,
        description: page.metaDescription,
        serviceType: page.eyebrow,
        areaServed: {
          "@type": "Country",
          name: "Panamá"
        },
        provider: {
          "@type": "ProfessionalService",
          "@id": `${baseUrl}/#professional-service`,
          name: SITE_NAME,
          url: baseUrl,
          email: CONTACT_EMAIL,
          telephone: `+${WHATSAPP_NUMBER}`
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: whatsappUrl,
          servicePhone: {
            "@type": "ContactPoint",
            telephone: `+${WHATSAPP_NUMBER}`
          }
        },
        offers: priceFrom
          ? {
              "@type": "Offer",
              priceCurrency: "USD",
              price: priceFrom,
              availability: "https://schema.org/InStock",
              areaServed: "Panamá",
              url
            }
          : undefined
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${url}#service`
        },
        inLanguage: "es-PA"
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: baseUrl
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.eyebrow,
            item: url
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
