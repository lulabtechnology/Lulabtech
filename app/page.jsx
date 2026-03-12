import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import ValueBlock from "@/components/home/ValueBlock";
import AudienceGrid from "@/components/home/AudienceGrid";
import ServicesGrid from "@/components/home/ServicesGrid";
import SolutionSelector from "@/components/home/SolutionSelector";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Differentiators from "@/components/home/Differentiators";
import ProcessSteps from "@/components/home/ProcessSteps";
import FaqAccordion from "@/components/ui/FaqAccordion";
import SectionIntro from "@/components/ui/SectionIntro";
import ContactCta from "@/components/home/ContactCta";
import { homeFaqs } from "@/data/faqs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <ValueBlock />
      <AudienceGrid />
      <ServicesGrid />
      <SolutionSelector />
      <FeaturedProjects />
      <Differentiators />
      <ProcessSteps />
      <section className="shell section-space">
        <SectionIntro eyebrow="Preguntas frecuentes" title="Preguntas frecuentes antes de solicitar tu propuesta" />
        <div className="mt-10"><FaqAccordion items={homeFaqs} /></div>
      </section>
      <ContactCta />
    </main>
  );
}
