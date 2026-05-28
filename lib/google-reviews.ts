export type GoogleReview = {
  authorName: string;
  authorUri?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  reviewUri?: string;
  authorPhotoUri?: string;
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

type LegacyReview = {
  author_name?: string;
  author_url?: string;
  profile_photo_url?: string;
  rating?: number;
  relative_time_description?: string;
  text?: string;
};

type LegacyPlacesResponse = {
  status?: string;
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    url?: string;
    reviews?: LegacyReview[];
  };
  error_message?: string;
};

const REVIEW_CACHE_SECONDS = 60 * 60 * 12;

function normalizePlaceId(placeId: string) {
  return placeId.replace(/^places\//, "").trim();
}

function getReviewText(review: PlacesReview) {
  return review.text?.text || review.originalText?.text || "";
}

function normalizeText(text?: string) {
  return (text || "").replace(/\s+/g, " ").trim();
}

function normalizeReviews(reviews: GoogleReview[]) {
  return reviews
    .map((review) => ({ ...review, text: normalizeText(review.text) }))
    .filter((review) => review.text.length > 0)
    .slice(0, 5);
}

async function getReviewsFromPlacesApi(apiKey: string, placeId: string): Promise<GoogleReviewsData | null> {
  const endpoint = `https://places.googleapis.com/v1/places/${encodeURIComponent(
    normalizePlaceId(placeId)
  )}?languageCode=es`;

  const response = await fetch(endpoint, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "displayName,rating,userRatingCount,googleMapsUri,reviews"
    },
    next: { revalidate: REVIEW_CACHE_SECONDS }
  });

  if (!response.ok) {
    console.warn("Google Places API reviews request failed", response.status);
    return null;
  }

  const data = (await response.json()) as PlacesResponse;
  const reviews = normalizeReviews(
    (data.reviews || []).map((review) => ({
      authorName: review.authorAttribution?.displayName || "Cliente de Google",
      authorUri: review.authorAttribution?.uri,
      rating: review.rating || 5,
      text: getReviewText(review),
      relativeTime: review.relativePublishTimeDescription,
      reviewUri: review.googleMapsUri,
      authorPhotoUri: review.authorAttribution?.photoUri
    }))
  );

  return {
    placeName: data.displayName?.text || "LulabTech",
    rating: data.rating,
    userRatingCount: data.userRatingCount,
    googleMapsUri: data.googleMapsUri,
    reviews
  };
}

async function getReviewsFromLegacyApi(apiKey: string, placeId: string): Promise<GoogleReviewsData | null> {
  const params = new URLSearchParams({
    place_id: normalizePlaceId(placeId),
    fields: "name,rating,user_ratings_total,url,reviews",
    language: "es",
    key: apiKey
  });

  const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?${params}`, {
    next: { revalidate: REVIEW_CACHE_SECONDS }
  });

  if (!response.ok) {
    console.warn("Google legacy Place Details reviews request failed", response.status);
    return null;
  }

  const data = (await response.json()) as LegacyPlacesResponse;

  if (data.status && data.status !== "OK") {
    console.warn("Google legacy Place Details returned", data.status, data.error_message || "");
    return null;
  }

  const result = data.result;

  if (!result) {
    return null;
  }

  const reviews = normalizeReviews(
    (result.reviews || []).map((review) => ({
      authorName: review.author_name || "Cliente de Google",
      authorUri: review.author_url,
      rating: review.rating || 5,
      text: review.text || "",
      relativeTime: review.relative_time_description,
      reviewUri: review.author_url,
      authorPhotoUri: review.profile_photo_url
    }))
  );

  return {
    placeName: result.name || "LulabTech",
    rating: result.rating,
    userRatingCount: result.user_ratings_total,
    googleMapsUri: result.url,
    reviews
  };
}

export async function getGoogleReviews(): Promise<GoogleReviewsData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const placesApiData = await getReviewsFromPlacesApi(apiKey, placeId);

    if (placesApiData?.reviews.length) {
      return placesApiData;
    }

    const legacyApiData = await getReviewsFromLegacyApi(apiKey, placeId);

    if (legacyApiData?.reviews.length) {
      return legacyApiData;
    }

    return placesApiData || legacyApiData;
  } catch (error) {
    console.warn("Google reviews request failed", error);

    try {
      return await getReviewsFromLegacyApi(apiKey, placeId);
    } catch (legacyError) {
      console.warn("Google reviews fallback request failed", legacyError);
      return null;
    }
  }
}
