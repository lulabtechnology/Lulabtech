import { HomeCapabilitiesPreview } from "../components/sections/home-capabilities-preview";
import { HomeCtaBand } from "../components/sections/home-cta-band";
import { HomeDifferentiators } from "../components/sections/home-differentiators";
import { HomeHero } from "../components/sections/home-hero";
import { HomeIntro } from "../components/sections/home-intro";
import { HomeProcess } from "../components/sections/home-process";
import { HomeProofStrip } from "../components/sections/home-proof-strip";
import { HomeShowcasePreview } from "../components/sections/home-showcase-preview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProofStrip />
      <HomeIntro />
      <HomeCapabilitiesPreview />
      <HomeShowcasePreview />
      <HomeDifferentiators />
      <HomeProcess />
      <HomeCtaBand />
    </>
  );
}
