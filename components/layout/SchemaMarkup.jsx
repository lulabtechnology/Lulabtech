import {
  absoluteUrl,
  brandName,
  contactEmail,
  contactPhone,
  defaultDescription,
} from "@/lib/site";

export default function SchemaMarkup() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: brandName,
      url: absoluteUrl("/"),
      logo: absoluteUrl("/logo-lulab.png"),
      image: absoluteUrl("/logo-lulab.png"),
      email: contactEmail,
      telephone: contactPhone,
      sameAs: [],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: brandName,
      url: absoluteUrl("/"),
      description: defaultDescription,
      inLanguage: "es",
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: brandName,
      url: absoluteUrl("/"),
      description: defaultDescription,
      email: contactEmail,
      telephone: contactPhone,
      image: absoluteUrl("/logo-lulab.png"),
      areaServed: ["Panamá", "Latinoamérica"],
      serviceType: [
        "Landing Pages",
        "Webs Corporativas",
        "Tiendas Online",
        "Automatizaciones",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "PA",
      },
    },
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
