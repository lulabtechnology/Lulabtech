import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("software-para-casilleros-panama");

export default function Page() {
  return <ServiceLandingPage slug="software-para-casilleros-panama" />;
}
