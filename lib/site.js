export const siteUrl = "https://lulabtech.com";
export const brandName = "LulabTech";
export const contactEmail = "ventas@lulabtech.com";
export const contactPhone = "+507 6706-9044";
export const whatsappNumber = "50767069044";

export function buildWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
}) {
  const fullTitle = title ? `${title} | ${brandName}` : `${brandName} | Diseño web, landing pages y tiendas online en Panamá`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: brandName,
      locale: "es_PA",
      type: "website",
      images: [
        {
          url: absoluteUrl("/logo-lulab.png"),
          width: 512,
          height: 512,
          alt: `${brandName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl("/logo-lulab.png")],
    },
  };
}
