"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { ProjectItem } from "@/lib/site-copy";
import { ProjectCard } from "@/components/project/project-card";
import { useSiteLanguage } from "@/components/providers/site-language";

type ProjectCarouselProps = {
  title: string;
  description: string;
  items: readonly ProjectItem[];
};

export function ProjectCarousel({ title, description, items }: ProjectCarouselProps) {
  const { copy } = useSiteLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(items.length);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="rounded-[34px] border border-slate-200 bg-white p-5 shadow-soft sm:p-6 lg:p-7">
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <div className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            {title}
          </div>
          <p className="mt-3 text-sm leading-6 text-ink-600 sm:text-[15px]">{description}</p>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-ink-600">
            {String(selectedIndex + 1).padStart(2, "0")} / {" "}
            {String(Math.max(snapCount, items.length)).padStart(2, "0")}
          </span>

          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-700 transition hover:bg-slate-50 hover:text-ink-900"
            aria-label={`${copy.projectShowcase.previousAria} ${title}`}
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-700 transition hover:bg-slate-50 hover:text-ink-900"
            aria-label={`${copy.projectShowcase.nextAria} ${title}`}
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {items.map((item) => (
            <div
              key={`${title}-${item.title}`}
              className="min-w-0 flex-[0_0_88%] pl-4 sm:flex-[0_0_68%] lg:flex-[0_0_48%] xl:flex-[0_0_40%]"
            >
              <ProjectCard item={item} categoryLabel={title} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: Math.max(snapCount, items.length) }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`${copy.projectShowcase.goToSlideAria} ${index + 1} ${copy.projectShowcase.nextAria.toLowerCase()} ${title}`}
            className={`h-2.5 rounded-full transition-all ${
              selectedIndex === index
                ? "w-9 bg-brand-600"
                : "w-2.5 bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
