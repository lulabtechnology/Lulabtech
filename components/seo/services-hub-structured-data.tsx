import { serviceHubClusters } from "@/data/service-hub";
import { CONTACT_EMAIL, SITE_NAME, WHATSAPP_NUMBER } from "@/lib/constants";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.lulabtech.com";

export function ServicesHubStructuredData() {
  const url = `${baseUrl}/servicios-panama`;
  const itemListElement = serviceHubClusters.flatMap((cluster) =>
    cluster.links.map((link) => ({
      name: link.label,
      url: `${baseUrl}${link.href}`,
      description: link.description,
      cluster: cluster.title
    }))
  );

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Servicios de diseño web, software y SEO en Panamá | LulabTech",
        description:
          "Servicios de LulabTech en Panamá: diseño web, landing pages, webs corporativas, ecommerce, software a medida, POS, reservas, CRM, inventario y SEO.",
        isPartOf: {
          "@id": `${baseUrl}/#website`
        },
        about: {
          "@id": `${baseUrl}/#professional-service`
        },
        inLanguage: "es-PA"
      },
      {
        "@type": "ItemList",
        "@id": `${url}#service-directory`,
        name: "Directorio de servicios digitales de LulabTech",
        itemListElement: itemListElement.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          url: item.url,
          description: item.description
        }))
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#professional-service`,
        name: SITE_NAME,
        url: baseUrl,
        email: CONTACT_EMAIL,
        telephone: `+${WHATSAPP_NUMBER}`,
        areaServed: "Panamá"
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
            name: "Servicios en Panamá",
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
