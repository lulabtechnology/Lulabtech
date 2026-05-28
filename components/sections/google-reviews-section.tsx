import { getGoogleReviews } from "@/lib/google-reviews";
import { GoogleReviewsClient } from "@/components/sections/google-reviews-client";

export async function GoogleReviewsSection() {
  const data = await getGoogleReviews();

  return <GoogleReviewsClient data={data} />;
}
