import { cn } from "@/lib/utils";

type StatusMessageProps = {
  type?: "success" | "error" | "info";
  message: string;
  className?: string;
};

const styles = {
  success: "border-emerald-200 bg-emerald-50 text-emerald-700",
  error: "border-rose-200 bg-rose-50 text-rose-700",
  info: "border-brand-200 bg-brand-50 text-brand-700"
};

export function StatusMessage({
  type = "info",
  message,
  className
}: StatusMessageProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border px-4 py-3 text-sm font-medium",
        styles[type],
        className
      )}
    >
      {message}
    </div>
  );
}
