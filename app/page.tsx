import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SitePreloader } from "@/components/layout/site-preloader";
import { StructuredData } from "@/components/seo/structured-data";
import { HeroSection } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { ProjectShowcaseSection } from "@/components/sections/project-showcase";
import { ServicesSection } from "@/components/sections/services";
import { SolutionUseCasesSection } from "@/components/sections/solution-use-cases";
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
        <Navbar />

        <main>
          <HeroSection />
          <CredibilityStrip />
          <ProjectShowcaseSection />
          <ServicesSection />
          <SolutionUseCasesSection />
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
