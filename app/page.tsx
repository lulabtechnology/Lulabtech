import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SitePreloader } from "@/components/layout/site-preloader";
import { TopOfferBar } from "@/components/layout/top-offer-bar";
import { StructuredData } from "@/components/seo/structured-data";
import { HeroSection } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { ProjectShowcaseSection } from "@/components/sections/project-showcase";
import { ServicesSection } from "@/components/sections/services";
import { SeoGrowthSection } from "@/components/sections/seo-growth-section";
import { SolutionUseCasesSection } from "@/components/sections/solution-use-cases";
import { PhaseThreeSeoSection } from "@/components/sections/phase-three-seo-section";
import { PhaseFiveNavigationSection } from "@/components/sections/phase-five-navigation-section";
import { WhyLulabTechSection } from "@/components/sections/why-lulabtech";
import { ProcessSection } from "@/components/sections/process";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { QuoteFormSection } from "@/components/sections/quote-form-section";
import { SiteLanguageProvider } from "@/components/providers/site-language";

export default function HomePage() {
  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <StructuredData />
        <SitePreloader />
        <TopOfferBar />
        <Navbar />

        <main>
          <HeroSection />
          <CredibilityStrip />
          <GoogleReviewsSection />
          <ProjectShowcaseSection />
          <ServicesSection />
          <SeoGrowthSection />
          <SolutionUseCasesSection />
          <PhaseThreeSeoSection />
          <PhaseFiveNavigationSection />
          <WhyLulabTechSection />
          <ProcessSection />
          <FaqSection />
          <FinalCtaSection />
          <QuoteFormSection />
        </main>

        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
