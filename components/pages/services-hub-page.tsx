import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { TopOfferBar } from "@/components/layout/top-offer-bar";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { StructuredData } from "@/components/seo/structured-data";
import { ServicesHubStructuredData } from "@/components/seo/services-hub-structured-data";
import { ServicesHubPageContent } from "@/components/pages/services-hub-page-content";

export function ServicesHubPage() {
  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <StructuredData />
        <ServicesHubStructuredData />
        <SitePreloader />
        <TopOfferBar />
        <Navbar />
        <ServicesHubPageContent />
        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
