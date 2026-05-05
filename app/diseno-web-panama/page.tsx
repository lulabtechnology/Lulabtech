import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("diseno-web-panama");

export default function Page() {
  return <ServiceLandingPage slug="diseno-web-panama" />;
}
