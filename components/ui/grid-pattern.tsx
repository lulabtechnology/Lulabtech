import { cn } from "@/lib/utils";

type GridPatternProps = {
  className?: string;
};

export function GridPattern({ className }: GridPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 bg-grid-brand opacity-40", className)}
    />
  );
}
