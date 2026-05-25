import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("automatizaciones-para-empresas-panama");

export default function Page() {
  return <ServiceLandingPage slug="automatizaciones-para-empresas-panama" />;
}
