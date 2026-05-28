import { NextResponse } from "next/server";
import { getGoogleReviews } from "@/lib/google-reviews";

export async function GET() {
  const data = await getGoogleReviews();

  if (!data) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "No se pudieron cargar reseñas. Revisa GOOGLE_PLACES_API_KEY y GOOGLE_PLACE_ID en Vercel, y haz redeploy."
      },
      { status: 200 }
    );
  }

  return NextResponse.json({ ok: true, ...data });
}
