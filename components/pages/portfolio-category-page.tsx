import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { TopOfferBar } from "@/components/layout/top-offer-bar";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { StructuredData } from "@/components/seo/structured-data";
import { PortfolioCategoryPageContent } from "@/components/pages/portfolio-category-page-content";

export function PortfolioCategoryPage({ category }: { category: string }) {
  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <StructuredData />
        <SitePreloader />
        <TopOfferBar />
        <Navbar />
        <PortfolioCategoryPageContent category={category} />
        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
