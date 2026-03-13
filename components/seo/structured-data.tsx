import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export function StructuredData() {
  const sameAs = [`https://wa.me/${WHATSAPP_NUMBER}`];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: SITE_NAME,
        url: baseUrl,
        email: CONTACT_EMAIL,
        sameAs
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: SITE_NAME,
        publisher: {
          "@id": `${baseUrl}/#organization`
        },
        inLanguage: "es"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: SITE_NAME,
        url: baseUrl,
        email: CONTACT_EMAIL,
        areaServed: "Panamá",
        serviceType: [
          "Landing pages",
          "Webs corporativas",
          "Tiendas online",
          "Software a la medida",
          "Automatizaciones"
        ],
        provider: {
          "@id": `${baseUrl}/#organization`
        }
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
