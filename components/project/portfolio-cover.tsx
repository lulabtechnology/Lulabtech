import type { PortfolioProject } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type PortfolioCoverProps = {
  project: PortfolioProject;
  compact?: boolean;
};

const themeMap: Record<PortfolioProject["type"], { shell: string; accent: string; badge: string; glow: string }> = {
  corporativa: {
    shell: "from-[#08162F] via-[#0B2550] to-[#1A4E9D]",
    accent: "bg-white/10 text-white/90",
    badge: "bg-white/14 text-white",
    glow: "bg-brand-300/25"
  },
  landing: {
    shell: "from-[#291046] via-[#5C2D91] to-[#F0A63A]",
    accent: "bg-white/12 text-white/90",
    badge: "bg-white/16 text-white",
    glow: "bg-accent-200/30"
  },
  software: {
    shell: "from-[#051F1D] via-[#0B5D57] to-[#3AA39B]",
    accent: "bg-white/12 text-white/90",
    badge: "bg-white/16 text-white",
    glow: "bg-emerald-200/30"
  }
};

function getDomain(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function PortfolioCover({ project, compact = false }: PortfolioCoverProps) {
  const theme = themeMap[project.type];
  const domain = getDomain(project.url);

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        "bg-gradient-to-br",
        theme.shell
      )}
    >
      <div className={cn("absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl", theme.glow)} />
      <div className={cn("absolute -bottom-14 left-0 h-40 w-40 rounded-full blur-3xl", theme.glow)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.22),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]" />

      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/75" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/55" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
        </div>

        <div className={cn("mt-4 inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]", theme.badge)}>
          {project.typeLabel}
        </div>

        <div className="mt-5 max-w-[90%]">
          <p className={cn("text-[11px] font-semibold uppercase tracking-[0.18em]", theme.accent)}>
            {project.industry}
          </p>
          <h3 className={cn(compact ? "mt-2 text-xl" : "mt-3 text-2xl sm:text-[1.7rem]", "text-balance font-semibold leading-tight text-white")}>
            {project.name}
          </h3>
        </div>

        <div className="mt-auto rounded-[22px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                Proyecto publicado
              </p>
              <p className="mt-1 text-sm font-medium text-white/95">{domain}</p>
            </div>
            <div className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90">
              LulabTech
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
