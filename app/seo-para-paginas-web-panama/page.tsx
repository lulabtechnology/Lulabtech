import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("seo-para-paginas-web-panama");

export default function Page() {
  return <ServiceLandingPage slug="seo-para-paginas-web-panama" />;
}
