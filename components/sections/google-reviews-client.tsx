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
  "bg-brand-600",
  "bg-accent-500",
  "bg-ink-800",
  "bg-[#2563eb]",
  "bg-[#0ea5e9]",
  "bg-[#14b8a6]",
  "bg-[#6366f1]",
  "bg-[#0891b2]",
  "bg-[#059669]"
];

type GoogleReviewsClientProps = {
  data: GoogleReviewsData | null;
};

type GoogleReviewsCopy = {
  eyebrow: string;
  title: string;
  description: string;
  googleCta: string;
  whatsappCta: string;
  attribution: string;
  readOnGoogle: string;
  emptyState: string;
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
      className={cn(
        "inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-base font-black shadow-soft",
        className
      )}
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
            index < roundedRating ? "fill-[#fbbc04] text-[#fbbc04]" : "text-slate-300"
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
        className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white shadow-soft"
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-black text-white ring-2 ring-white shadow-soft",
        avatarColorClasses[index % avatarColorClasses.length]
      )}
    >
      {initial}
    </div>
  );
}

function ReviewCard({ review, index, readOnGoogle }: { review: GoogleReview; index: number; readOnGoogle: string }) {
  const content = (
    <article className="group flex h-full min-h-[250px] flex-col rounded-[28px] border border-slate-200/80 bg-white/90 p-6 text-left shadow-[0_22px_70px_rgba(14,118,255,0.09)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-[0_26px_80px_rgba(14,118,255,0.14)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <InitialAvatar review={review} index={index} />
          <div className="min-w-0">
            <p className="truncate text-sm font-black text-ink-900">{review.authorName}</p>
            <p className="mt-0.5 text-xs font-semibold text-ink-500">{review.relativeTime || readOnGoogle}</p>
          </div>
        </div>

        <GoogleMark className="opacity-95" />
      </div>

      <div className="mt-5">
        <Stars rating={review.rating} />
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-ink-700">{review.text}</p>

      {review.reviewUri ? (
        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-brand-700 opacity-0 transition duration-300 group-hover:opacity-100">
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

function EmptyReviewsCard({ mapsUrl, copy }: { mapsUrl: string; copy: GoogleReviewsCopy }) {
  return (
    <div className="rounded-[28px] border border-dashed border-brand-200 bg-white/80 p-7 text-center shadow-soft sm:col-span-2 lg:col-span-3">
      <p className="mx-auto max-w-2xl text-sm leading-7 text-ink-600">{copy.emptyState}</p>
      {mapsUrl ? (
        <ButtonLink
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          variant="primary"
          size="lg"
          onClick={() => trackEvent("click_google_reviews", { source: "reviews_empty_state" })}
          className="mt-5 min-w-[220px] border-brand-600 bg-brand-600 text-white hover:bg-brand-700"
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
      className="overflow-hidden bg-gradient-to-b from-white via-brand-50/50 to-white py-20 text-ink-900 sm:py-24"
      containerClassName="relative"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-120px] h-[420px] w-[420px] rounded-full bg-accent-300/20 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 bg-brand-grid bg-[size:42px_42px] opacity-45" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-brand-100 bg-white/80 px-4 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-brand-700 shadow-soft">
            {reviewsCopy.eyebrow}
          </p>

          <h2 className="mt-5 text-balance text-4xl font-black tracking-tight text-ink-950 sm:text-5xl lg:text-6xl">
            {reviewsCopy.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-600">
            {reviewsCopy.description}
          </p>

          <div className="mx-auto mt-8 flex w-fit max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-slate-200 bg-white/90 px-5 py-3 text-ink-600 shadow-soft">
            <span className="text-base font-black text-ink-700">Google</span>
            {rating ? <span className="text-3xl font-black tracking-tight text-ink-950">{rating}</span> : null}
            <Stars rating={data?.rating || 5} size="md" />
            <span className="text-sm font-semibold text-ink-500">{formatReviewCount(data?.userRatingCount, locale)}</span>
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
              variant="primary"
              size="lg"
              onClick={() => trackEvent("click_google_reviews", { source: "reviews_section" })}
              className="min-w-[230px] border-brand-600 bg-brand-600 text-white shadow-elevated hover:bg-brand-700"
            >
              {reviewsCopy.googleCta}
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          ) : null}

          <ButtonLink
            href={contactData.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="lg"
            onClick={() => trackEvent("click_whatsapp_reviews")}
            className="min-w-[230px] border-brand-200 bg-white text-brand-700 shadow-soft hover:border-brand-300 hover:bg-brand-50"
          >
            <MessageCircle className="h-4 w-4" />
            {reviewsCopy.whatsappCta}
          </ButtonLink>
        </Reveal>

        <p className="relative mx-auto mt-7 max-w-2xl text-center text-xs leading-6 text-ink-500">
          {reviewsCopy.attribution}
        </p>
      </div>
    </SectionShell>
  );
}
