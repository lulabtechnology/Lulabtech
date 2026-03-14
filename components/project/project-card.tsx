"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectItem;
  categoryLabel: string;
};

export function ProjectCard({ item, categoryLabel }: ProjectCardProps) {
  return (
    <article className="group h-full overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="border-b border-slate-200 bg-slate-50/90 px-4 py-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            {categoryLabel}
          </span>
        </div>
      </div>

      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
          sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 44vw"
        />

        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/6" />

        <div className="absolute left-4 top-4 rounded-full border border-white/80 bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700 backdrop-blur">
          Proyecto
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
              {item.subtitle}
            </p>
            <h3 className="mt-2 text-lg font-semibold leading-tight text-ink-900">
              {item.title}
            </h3>
          </div>

          <div className="rounded-full border border-slate-200 bg-white p-2 text-ink-700 transition group-hover:border-brand-200 group-hover:text-brand-700">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="mt-3 text-sm leading-6 text-ink-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}
