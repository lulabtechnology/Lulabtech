import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("landing-pages-panama");

export default function Page() {
  return <ServiceLandingPage slug="landing-pages-panama" />;
}
