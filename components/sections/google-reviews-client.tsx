"use client";

import { ArrowUpRight, MessageCircle, Star } from "lucide-react";
import { contactData } from "@/data/contact";
import type { GoogleReviewsData, GoogleReview } from "@/lib/google-reviews";
import { useSiteLanguage } from "@/components/providers/site-language";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { trackEvent } from "@/lib/tracking";
import { cn } from "@/lib/utils";

const fallbackMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "";

const avatarColorClasses = [
  "bg-[#f4511e]",
  "bg-[#1a73e8]",
  "bg-[#34a853]",
  "bg-[#a142f4]",
  "bg-[#fbbc04] text-ink-900",
  "bg-[#009688]",
  "bg-[#3f7ee8]",
  "bg-[#ea4335]",
  "bg-[#2e7d32]"
];

type GoogleReviewsClientProps = {
  data: GoogleReviewsData | null;
};

function formatRating(value?: number) {
  if (!value) return null;
  return value.toFixed(1);
}

function formatReviewCount(value?: number, locale: "es" | "en" = "es") {
  if (!value) return locale === "es" ? "Reseñas verificadas" : "Verified reviews";

  return `${locale === "es" ? "Basado en" : "Based on"} ${new Intl.NumberFormat(
    locale === "es" ? "es-PA" : "en-US"
  ).format(value)}+ ${locale === "es" ? "reseñas" : "reviews"}`;
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex h-5 w-5 items-center justify-center text-base font-black", className)}
      aria-label="Google"
    >
      <span className="text-[#4285F4]">G</span>
    </span>
  );
}

function Stars({ rating = 5, size = "sm" }: { rating?: number; size?: "sm" | "md" }) {
  const roundedRating = Math.max(1, Math.min(5, Math.round(rating)));
  const iconSize = size === "md" ? "h-5 w-5" : "h-4 w-4";

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            iconSize,
            index < roundedRating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-white/20"
          )}
        />
      ))}
    </div>
  );
}

function InitialAvatar({ review, index }: { review: GoogleReview; index: number }) {
  const initial = review.authorName.trim().charAt(0).toUpperCase() || "G";

  if (review.authorPhotoUri) {
    return (
      <img
        src={review.authorPhotoUri}
        alt={`Foto de ${review.authorName}`}
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-white/10"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white ring-1 ring-white/10",
        avatarColorClasses[index % avatarColorClasses.length]
      )}
    >
      {initial}
    </div>
  );
}

function ReviewCard({ review, index, readOnGoogle }: { review: GoogleReview; index: number; readOnGoogle: string }) {
  const content = (
    <article className="group flex h-full min-h-[220px] flex-col rounded-2xl border border-white/10 bg-white/[0.055] p-5 text-left shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-lime-300/50 hover:bg-white/[0.075]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <InitialAvatar review={review} index={index} />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">{review.authorName}</p>
            <p className="mt-0.5 text-xs font-medium text-white/48">{review.relativeTime || readOnGoogle}</p>
          </div>
        </div>

        <GoogleMark className="opacity-90" />
      </div>

      <div className="mt-5">
        <Stars rating={review.rating} />
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-white/76">{review.text}</p>

      {review.reviewUri ? (
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-lime-300 opacity-0 transition duration-300 group-hover:opacity-100">
          {readOnGoogle}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      ) : null}
    </article>
  );

  if (review.reviewUri) {
    return (
      <a href={review.reviewUri} target="_blank" rel="noreferrer" className="block h-full">
        {content}
      </a>
    );
  }

  return content;
}

function EmptyReviewsCard({ mapsUrl, copy }: { mapsUrl: string; copy: ReturnType<typeof useSiteLanguage>["copy"]["googleReviews"] }) {
  return (
    <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.045] p-7 text-center sm:col-span-2 lg:col-span-3">
      <p className="mx-auto max-w-2xl text-sm leading-7 text-white/64">{copy.emptyState}</p>
      {mapsUrl ? (
        <ButtonLink
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          variant="outline"
          size="lg"
          onClick={() => trackEvent("click_google_reviews", { source: "reviews_empty_state" })}
          className="mt-5 border-white/10 bg-white text-ink-950 hover:bg-lime-300"
        >
          {copy.googleCta}
          <ArrowUpRight className="h-4 w-4" />
        </ButtonLink>
      ) : null}
    </div>
  );
}

export function GoogleReviewsClient({ data }: GoogleReviewsClientProps) {
  const { copy, locale } = useSiteLanguage();
  const reviewsCopy = copy.googleReviews;
  const mapsUrl = data?.googleMapsUri || fallbackMapsUrl;
  const rating = formatRating(data?.rating);
  const reviews = data?.reviews || [];

  if (!data && !mapsUrl) {
    return null;
  }

  return (
    <SectionShell
      id="resenas-google"
      className="overflow-hidden bg-[#07080A] py-20 text-white sm:py-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-lime-300/10 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(190,255,36,0.12),transparent_34%),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:auto,42px_42px,42px_42px] opacity-80" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-lime-300">
            {reviewsCopy.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            {locale === "es" ? (
              <>
                Lo que dicen en <span className="text-lime-300">Google</span>
              </>
            ) : (
              <>
                What they say on <span className="text-lime-300">Google</span>
              </>
            )}
          </h2>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-white/58">
            <span className="text-xl font-bold text-white/42">Google</span>
            {rating ? <span className="text-3xl font-black tracking-tight text-white">{rating}</span> : null}
            <Stars rating={data?.rating || 5} size="md" />
            <span className="text-sm font-medium">{formatReviewCount(data?.userRatingCount, locale)}</span>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3" delay={0.06}>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <ReviewCard
                key={`${review.authorName}-${review.text.slice(0, 30)}`}
                review={review}
                index={index}
                readOnGoogle={reviewsCopy.readOnGoogle}
              />
            ))
          ) : (
            <EmptyReviewsCard mapsUrl={mapsUrl} copy={reviewsCopy} />
          )}
        </Stagger>

        <Reveal className="mt-10 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          {mapsUrl ? (
            <ButtonLink
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              variant="outline"
              size="lg"
              onClick={() => trackEvent("click_google_reviews", { source: "reviews_section" })}
              className="border-white/10 bg-white text-ink-950 hover:bg-lime-300"
            >
              {reviewsCopy.googleCta}
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          ) : null}

          <ButtonLink
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            variant="ghost"
            size="lg"
            onClick={() => trackEvent("click_whatsapp_reviews")}
            className="border border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            {reviewsCopy.whatsappCta}
          </ButtonLink>
        </Reveal>

        <p className="relative mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-white/38">
          {reviewsCopy.attribution}
        </p>
      </div>
    </SectionShell>
  );
}
