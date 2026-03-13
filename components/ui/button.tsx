import Link from "next/link";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 shadow-elevated border border-brand-600",
  secondary:
    "bg-ink-900 text-white hover:bg-ink-800 border border-ink-900",
  ghost:
    "bg-transparent text-ink-800 hover:bg-slate-100 border border-transparent",
  outline:
    "bg-white text-ink-900 hover:bg-slate-50 border border-slate-200"
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm sm:text-[15px]",
  lg: "h-12 px-6 text-[15px]"
};

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseProps;
type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseProps & {
    href: string;
  };

const sharedClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 disabled:pointer-events-none disabled:opacity-60";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(sharedClasses, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export function ButtonLink({
  href,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonLinkProps) {
  const isExternal = href.startsWith("http");

  const classes = cn(sharedClasses, variantClasses[variant], sizeClasses[size], className);

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props} />
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {props.children}
    </Link>
  );
}
