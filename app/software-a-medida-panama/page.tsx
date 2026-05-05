import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("software-a-medida-panama");

export default function Page() {
  return <ServiceLandingPage slug="software-a-medida-panama" />;
}
