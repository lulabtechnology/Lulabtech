import { ServiceLandingPage } from "@/components/pages/service-landing-page";
import { createServicePageMetadata } from "@/data/seo-pages";

export const metadata = createServicePageMetadata("google-ads-panama");

export default function Page() {
  return <ServiceLandingPage slug="google-ads-panama" />;
}
