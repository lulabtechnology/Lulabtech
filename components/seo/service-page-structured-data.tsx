import type { ServicePage } from "@/data/seo-pages";
import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export function ServicePageStructuredData({ page }: { page: ServicePage }) {
  const url = `${baseUrl}/${page.slug}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

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
        }
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
