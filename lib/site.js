export const siteUrl = "https://www.lulabtech.com";
export const brandName = "LulabTech";
export const contactEmail = "ventas@lulabtech.com";
export const contactPhone = "+507 6706-9044";
export const whatsappNumber = "50767069044";

export const defaultTitle =
  "Diseño web premium, landing pages, tiendas online y automatización";

export const defaultDescription =
  "LulabTech crea experiencias web premium, landing pages, webs corporativas, tiendas online y automatizaciones para marcas que quieren una presencia digital más sólida, moderna y mejor pensada.";

export const defaultOgImage = "/opengraph-image";
export const defaultTwitterImage = "/twitter-image";

export function buildWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}

export function buildMetadata({
  title,
  description = defaultDescription,
  path = "/",
  keywords = [],
} = {}) {
  const fullTitle = title ? `${title} | ${brandName}` : `${brandName} | ${defaultTitle}`;
  const canonical = absoluteUrl(path);

  return {
    metadataBase: new URL(siteUrl),
    title: fullTitle,
    description,
    keywords,
    applicationName: brandName,
    alternates: {
      canonical,
    },
    category: "technology",
    creator: brandName,
    publisher: brandName,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [
        { url: "/icon", type: "image/png", sizes: "32x32" },
        { url: "/icon", type: "image/png", sizes: "192x192" },
      ],
      shortcut: ["/icon"],
      apple: [{ url: "/icon", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: brandName,
      locale: "es",
      type: "website",
      images: [
        {
          url: absoluteUrl(defaultOgImage),
          width: 1200,
          height: 630,
          alt: `${brandName} - diseño web premium`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [absoluteUrl(defaultTwitterImage)],
    },
  };
}
