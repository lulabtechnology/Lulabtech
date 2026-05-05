import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { ServicePageStructuredData } from "@/components/seo/service-page-structured-data";
import { ServiceLandingPageContent } from "@/components/pages/service-landing-page-content";
import { getServicePageOrThrow } from "@/data/seo-pages";

export function ServiceLandingPage({ slug }: { slug: string }) {
  const page = getServicePageOrThrow(slug, "es");

  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <ServicePageStructuredData page={page} />
        <SitePreloader />
        <Navbar />
        <ServiceLandingPageContent slug={slug} />
        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
