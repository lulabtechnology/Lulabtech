"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  item: ProjectItem;
  categoryLabel: string;
};

export function ProjectCard({ item, categoryLabel }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group h-full rounded-[30px] border border-slate-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
      <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            {categoryLabel}
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand-50 via-white to-accent-50">
          {!imageError ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
              onError={() => setImageError(true)}
            />
          ) : null}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/55 via-ink-950/10 to-transparent" />

          {imageError ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <div className="rounded-full border border-brand-200 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700 backdrop-blur">
                Placeholder listo
              </div>
              <p className="mt-4 max-w-xs text-sm font-medium text-ink-700">
                Sube tu imagen luego en esta ruta:
              </p>
              <p className="mt-2 break-all rounded-2xl bg-white/70 px-3 py-2 text-xs text-ink-600 backdrop-blur">
                {item.image}
              </p>
            </div>
          ) : null}

          <div className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-700 backdrop-blur">
            Editable
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <div className="rounded-[20px] border border-white/20 bg-white/12 p-4 backdrop-blur-md">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/80">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <div className="rounded-full bg-white/14 p-2 text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
