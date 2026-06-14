import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioCategoryPage } from "@/components/pages/portfolio-category-page";
import { getPortfolioSectionById, getPortfolioSectionIdBySlug, portfolioSectionCopy, portfolioSectionSlugs } from "@/data/portfolio-sections";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return portfolioSectionSlugs.map((category) => ({ category }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const sectionId = getPortfolioSectionIdBySlug(category);
  const section = sectionId ? getPortfolioSectionById("es", sectionId) : null;

  if (!section) {
    return {
      title: "Portafolio LulabTech"
    };
  }

  return {
    title: {
      absolute: `${section.title} | Portafolio LulabTech`
    },
    description: `${section.description} ${section.priceNote}`,
    alternates: {
      canonical: `/portafolio/${section.slug}`
    },
    openGraph: {
      type: "website",
      url: `https://www.lulabtech.com/portafolio/${section.slug}`,
      title: `${section.title} | Portafolio LulabTech`,
      description: section.description,
      siteName: "LulabTech",
      locale: "es_PA",
      images: [
        {
          url: section.coverSrc,
          width: 941,
          height: 1672,
          alt: section.coverAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${section.title} | Portafolio LulabTech`,
      description: section.description,
      images: [section.coverSrc]
    }
  };
}

export default async function Page({ params }: PageProps) {
  const { category } = await params;
  const exists = portfolioSectionCopy.es.some((section) => section.slug === category);

  if (!exists) notFound();

  return <PortfolioCategoryPage category={category} />;
}
