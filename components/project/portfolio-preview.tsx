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

function getScreenshotUrl(url: string) {
  const normalized = url.startsWith("http") ? url : `https://${url}`;
  // Espera varios segundos antes de capturar para evitar que salga el preloader.
  return `https://image.thum.io/get/width/1500/crop/930/wait/8/noanimate/${normalized}`;
}

const themeMap: Record<PortfolioProject["type"], string> = {
  corporativa: "from-[#08162F] via-[#0B2550] to-[#0C6DB8]",
  landing: "from-[#1B1034] via-[#5A2D91] to-[#E89A2B]",
  software: "from-[#071E20] via-[#0B5A5A] to-[#34A89F]"
};

function InitialsFallback({ project, domain, compact }: { project: PortfolioProject; domain: string; compact?: boolean }) {
  const initials = project.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");

  return (
    <div className={cn("flex h-full w-full items-end bg-gradient-to-br p-5 text-white", themeMap[project.type])}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.24),transparent_34%)]" />
      <div className="relative">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border border-white/20 bg-white/15 text-2xl font-semibold backdrop-blur-md">
          {initials}
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/75">{project.typeLabel}</p>
        <h3 className={cn(compact ? "mt-2 text-xl" : "mt-3 text-2xl", "font-semibold leading-tight")}>{project.name}</h3>
        <p className="mt-2 text-sm text-white/85">{domain}</p>
      </div>
    </div>
  );
}

export function PortfolioPreview({ project, compact = false }: PortfolioPreviewProps) {
  const [hasError, setHasError] = useState(false);
  const domain = useMemo(() => getDomain(project.url), [project.url]);
  const previewUrl = useMemo(() => project.screenshotSrc ?? getScreenshotUrl(project.url), [project.screenshotSrc, project.url]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-slate-100">
      {!hasError ? (
        <img
          src={previewUrl}
          alt={`Captura visual del proyecto ${project.name}`}
          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setHasError(true)}
        />
      ) : (
        <InitialsFallback project={project} domain={domain} compact={compact} />
      )}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 backdrop-blur-md">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
          {project.typeLabel}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/78 via-black/35 to-transparent p-4 sm:p-5">
        <div className="max-w-[92%]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75">{project.industry}</p>
          <p className={cn(compact ? "mt-2 text-lg" : "mt-3 text-xl", "font-semibold leading-tight text-white")}>{project.name}</p>
          <p className="mt-1 text-sm text-white/82">{domain}</p>
        </div>
      </div>
    </div>
  );
}
