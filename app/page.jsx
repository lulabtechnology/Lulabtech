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
import SectionReveal from "@/components/ui/SectionReveal";
import { homeFaqs } from "@/data/faqs";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Diseño web premium para negocios en Panamá",
  description:
    "Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que necesitan una presencia digital más seria, clara y orientada a conversión.",
  path: "/",
  keywords: [
    "diseño web premium panamá",
    "agencia digital premium panamá",
    "landing pages para negocios",
    "web corporativa profesional",
    "desarrollo web panamá",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />

      <SectionReveal>
        <TrustStrip />
      </SectionReveal>

      <SectionReveal>
        <PremiumValue />
      </SectionReveal>

      <SectionReveal>
        <ServiceMatrix />
      </SectionReveal>

      <SectionReveal>
        <SolutionSelector />
      </SectionReveal>

      <SectionReveal>
        <FeaturedProjects projects={projects.slice(0, 3)} />
      </SectionReveal>

      <SectionReveal>
        <ProofSection />
      </SectionReveal>

      <SectionReveal>
        <ProcessSection />
      </SectionReveal>

      <SectionReveal>
        <FaqAccordion
          eyebrow="Preguntas frecuentes"
          title="Resolvemos dudas antes de que pierdas tiempo"
          items={homeFaqs}
        />
      </SectionReveal>

      <SectionReveal>
        <FinalCta />
      </SectionReveal>
    </>
  );
}
