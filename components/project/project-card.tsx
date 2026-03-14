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

        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 88vw, (max-width: 1024px) 62vw, 34vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/22 via-black/6 to-transparent" />

          <div className="absolute bottom-4 left-4 right-4">
            <div className="rounded-[20px] border border-white/20 bg-black/18 p-4 backdrop-blur-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>

                <div className="rounded-full bg-white/15 p-2 text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-white/92">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
