import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SitePreloader } from "@/components/layout/site-preloader";
import { StructuredData } from "@/components/seo/structured-data";
import { HeroSection } from "@/components/sections/hero";
import { CredibilityStrip } from "@/components/sections/credibility-strip";
import { ProjectShowcaseSection } from "@/components/sections/project-showcase";
import { ServicesSection } from "@/components/sections/services";
import { WhyLulabTechSection } from "@/components/sections/why-lulabtech";
import { ProcessSection } from "@/components/sections/process";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { QuoteFormSection } from "@/components/sections/quote-form-section";

export default function HomePage() {
  return (
    <div id="top" className="relative overflow-x-clip bg-white">
      <StructuredData />
      <SitePreloader />
      <Navbar />

      <main>
        <HeroSection />
        <CredibilityStrip />
        <ProjectShowcaseSection />
        <ServicesSection />
        <WhyLulabTechSection />
        <ProcessSection />
        <FinalCtaSection />
        <QuoteFormSection />
      </main>

      <Footer />
    </div>
  );
}
