"use client";

import { ArrowUpRight, MessageCircle, ShieldCheck, Star } from "lucide-react";
import { contactData } from "@/data/contact";
import type { GoogleReviewsData } from "@/lib/google-reviews";
import { useSiteLanguage } from "@/components/providers/site-language";
import { Reveal } from "@/components/motion/reveal";
import { Stagger } from "@/components/motion/stagger";
import { SectionShell } from "@/components/layout/section-shell";
import { ButtonLink } from "@/components/ui/button";
import { GridPattern } from "@/components/ui/grid-pattern";
import { trackEvent } from "@/lib/tracking";

const fallbackMapsUrl = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || "";

type GoogleReviewsClientProps = {
  data: GoogleReviewsData | null;
};

function formatRating(value?: number) {
  if (!value) return "5.0";
  return value.toFixed(1);
}

function formatReviewCount(value?: number, locale: "es" | "en" = "es") {
  if (!value) return locale === "es" ? "reseñas verificadas" : "verified reviews";
  return `${new Intl.NumberFormat(locale === "es" ? "es-PA" : "en-US").format(value)} ${
    locale === "es" ? "reseñas" : "reviews"
  }`;
}

function Stars({ rating }: { rating: number }) {
  const roundedRating = Math.max(1, Math.min(5, Math.round(rating)));

  return (
    <div className="flex items-center gap-1" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={
            index < roundedRating
              ? "h-4 w-4 fill-amber-400 text-amber-400"
              : "h-4 w-4 text-slate-300"
          }
        />
      ))}
    </div>
  );
}

function InitialAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-50 text-sm font-bold text-brand-700 ring-1 ring-brand-100">
      {initials || "G"}
    </div>
  );
}

export function GoogleReviewsClient({ data }: GoogleReviewsClientProps) {
  const { copy, locale } = useSiteLanguage();
  const reviewsCopy = copy.googleReviews;
  const mapsUrl = data?.googleMapsUri || fallbackMapsUrl;
  const hasReviews = Boolean(data?.reviews.length);

  if (!hasReviews && !mapsUrl) {
    return null;
  }

  return (
    <SectionShell className="overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white">
      <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-white p-6 shadow-elevated sm:p-8 lg:p-10">
        <GridPattern className="opacity-20" />

        <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-[#0A1227] via-[#0E1D45] to-[#12397A] p-6 text-white shadow-soft sm:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
              <ShieldCheck className="h-3.5 w-3.5" />
              {reviewsCopy.eyebrow}
            </div>

            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {reviewsCopy.title}
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/82 sm:text-base">
              {reviewsCopy.description}
            </p>

            <div className="mt-7 rounded-[26px] border border-white/15 bg-white/10 p-5 backdrop-blur">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                    {data?.placeName || "LulabTech"}
                  </p>
                  <div className="mt-2 flex items-center gap-3">
                    <span className="text-5xl font-semibold tracking-tight text-white">
                      {formatRating(data?.rating)}
                    </span>
                    <div>
                      <Stars rating={data?.rating || 5} />
                      <p className="mt-2 text-sm font-medium text-white/78">
                        {formatReviewCount(data?.userRatingCount, locale)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-semibold text-white">
                  Google Maps
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {mapsUrl ? (
                <ButtonLink
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="lg"
                  onClick={() => trackEvent("click_google_reviews", { source: "reviews_section" })}
                  className="border-white/20 bg-white text-ink-900 hover:bg-white/90"
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
                className="border border-white/15 bg-white/10 text-white hover:bg-white/15"
              >
                <MessageCircle className="h-4 w-4" />
                {reviewsCopy.whatsappCta}
              </ButtonLink>
            </div>

            <p className="mt-5 text-xs leading-5 text-white/58">
              {reviewsCopy.attribution}
            </p>
          </Reveal>

          <Stagger className="grid gap-4 sm:grid-cols-2" delay={0.08}>
            {(data?.reviews || []).map((review) => (
              <article
                key={`${review.authorName}-${review.text.slice(0, 24)}`}
                className="flex h-full flex-col rounded-[26px] border border-slate-200 bg-white/95 p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex items-start gap-3">
                  <InitialAvatar name={review.authorName} />
                  <div className="min-w-0">
                    {review.authorUri ? (
                      <a
                        href={review.authorUri}
                        target="_blank"
                        rel="noreferrer"
                        className="block truncate text-sm font-semibold text-ink-900 transition hover:text-brand-700"
                      >
                        {review.authorName}
                      </a>
                    ) : (
                      <p className="truncate text-sm font-semibold text-ink-900">{review.authorName}</p>
                    )}
                    <p className="mt-1 text-xs font-medium text-ink-500">
                      {review.relativeTime || reviewsCopy.verifiedLabel}
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <Stars rating={review.rating} />
                </div>

                <p className="mt-4 flex-1 text-sm leading-7 text-ink-700">“{review.text}”</p>

                {review.reviewUri ? (
                  <a
                    href={review.reviewUri}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-700 transition hover:text-brand-800"
                  >
                    {reviewsCopy.readOnGoogle}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : null}
              </article>
            ))}
          </Stagger>
        </div>
      </div>
    </SectionShell>
  );
}
