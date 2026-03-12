import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import PremiumValue from "@/components/home/PremiumValue";
import ServiceMatrix from "@/components/home/ServiceMatrix";
import SolutionSelector from "@/components/home/SolutionSelector";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProofSection from "@/components/home/ProofSection";
import ProcessSection from "@/components/home/ProcessSection";
import FaqAccordion from "@/components/home/FaqAccordion";
import FinalCta from "@/components/home/FinalCta";
import { homeFaqs } from "@/data/faqs";
import { projects } from "@/data/projects";

export const metadata = {
  title: "LulabTech | Diseño web premium para negocios en Panamá",
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más seria, clara y orientada a conversión.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PremiumValue />
      <ServiceMatrix />
      <SolutionSelector />
      <FeaturedProjects projects={projects.slice(0, 3)} />
      <ProofSection />
      <ProcessSection />
      <FaqAccordion
        eyebrow="Preguntas frecuentes"
        title="Resolvemos dudas antes de que pierdas tiempo"
        items={homeFaqs}
      />
      <FinalCta />
    </>
  );
}
