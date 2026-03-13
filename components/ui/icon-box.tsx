import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconBoxProps = {
  icon: LucideIcon;
  className?: string;
};

export function IconBox({ icon: Icon, className }: IconBoxProps) {
  return (
    <div
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100",
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </div>
  );
}
