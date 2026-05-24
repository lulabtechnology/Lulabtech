import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("diseno-web-para-abogados-panama");

export default function Page() {
  return <ServiceLandingPage slug="diseno-web-para-abogados-panama" />;
}
