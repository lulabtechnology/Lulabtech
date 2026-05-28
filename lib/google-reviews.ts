export type GoogleReview = {
  authorName: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  reviewUri?: string;
};

export type GoogleReviewsData = {
  placeName: string;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews: GoogleReview[];
};

type LocalizedText = {
  text?: string;
  languageCode?: string;
};

type PlacesReview = {
  relativePublishTimeDescription?: string;
  text?: LocalizedText;
  originalText?: LocalizedText;
  rating?: number;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri?: string;
};

type PlacesResponse = {
  displayName?: LocalizedText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

const REVIEW_CACHE_SECONDS = 60 * 60 * 12;

function normalizePlaceId(placeId: string) {
  return placeId.replace(/^places\//, "").trim();
}

function getReviewText(review: PlacesReview) {
  return review.text?.text || review.originalText?.text || "";
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();

  if (!apiKey || !placeId) {
    return null;
  }

  const normalizedPlaceId = normalizePlaceId(placeId);
  const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(
    normalizedPlaceId
  )}?languageCode=es`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask":
          "displayName,rating,userRatingCount,googleMapsUri,reviews"
      },
      next: { revalidate: REVIEW_CACHE_SECONDS }
    });

    if (!response.ok) {
      console.warn("Google reviews request failed", response.status);
      return null;
    }

    const data = (await response.json()) as PlacesResponse;
    const reviews = (data.reviews || [])
      .map((review) => ({
        authorName: review.authorAttribution?.displayName || "Cliente de Google",
        authorUri: review.authorAttribution?.uri,
        rating: review.rating || 5,
        text: getReviewText(review),
        relativeTime: review.relativePublishTimeDescription,
        reviewUri: review.googleMapsUri
      }))
      .filter((review) => review.text.trim().length > 0)
      .slice(0, 5);

    return {
      placeName: data.displayName?.text || "LulabTech",
      rating: data.rating,
      userRatingCount: data.userRatingCount,
      googleMapsUri: data.googleMapsUri,
      reviews
    };
  } catch (error) {
    console.warn("Google reviews request failed", error);
    return null;
  }
}
