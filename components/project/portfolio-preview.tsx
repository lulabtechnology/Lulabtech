"use client";

import { useMemo, useState } from "react";
import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type PortfolioPreviewProps = {
  project: PortfolioProject;
  compact?: boolean;
};

function getDomain(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function getPreviewUrl(url: string) {
  return `https://image.thum.io/get/width/1400/crop/900/noanimate/${url}`;
}

const themeMap: Record<PortfolioProject["type"], string> = {
  corporativa: "from-[#08162F]/88 via-[#0B2550]/58 to-[#0C6DB8]/20",
  landing: "from-[#1B1034]/88 via-[#5A2D91]/58 to-[#E89A2B]/18",
  software: "from-[#071E20]/88 via-[#0B5A5A]/58 to-[#34A89F]/18"
};

export function PortfolioPreview({ project, compact = false }: PortfolioPreviewProps) {
  const [hasError, setHasError] = useState(false);
  const domain = useMemo(() => getDomain(project.url), [project.url]);
  const previewUrl = useMemo(() => getPreviewUrl(project.url), [project.url]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      {!hasError ? (
        <img
          src={previewUrl}
          alt={`Vista previa de ${project.name}`}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className={cn("flex h-full w-full items-end bg-gradient-to-br p-5 text-white", themeMap[project.type])}>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">{project.typeLabel}</p>
            <h3 className={cn(compact ? "mt-2 text-xl" : "mt-3 text-2xl", "font-semibold leading-tight")}>{project.name}</h3>
            <p className="mt-2 text-sm text-white/85">{domain}</p>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {project.typeLabel}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/78 via-black/45 to-transparent p-4 sm:p-5">
        <div className="max-w-[92%]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">{project.industry}</p>
          <p className={cn(compact ? "mt-2 text-lg" : "mt-3 text-xl", "font-semibold leading-tight text-white")}>{project.name}</p>
          <p className="mt-1 text-sm text-white/80">{domain}</p>
        </div>
      </div>
    </div>
  );
}
