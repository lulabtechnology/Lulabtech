import { cn } from "@/lib/utils";

type GlowOrbProps = {
  className?: string;
};

export function GlowOrb({ className }: GlowOrbProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full bg-brand-400/20 blur-3xl",
        className
      )}
      aria-hidden="true"
    />
  );
}
