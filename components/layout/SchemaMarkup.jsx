import { absoluteUrl, contactEmail, contactPhone, brandName } from "@/lib/site";

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: brandName,
    url: absoluteUrl("/"),
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
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
