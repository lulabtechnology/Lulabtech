import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function PrimaryButton({ href, children, className = "" }) {
  const base = `btn-primary ${className}`.trim();
  if (href.startsWith("http")) {
    return (
      <a href={href} className={base} target="_blank" rel="noreferrer">
        {children}
        <ArrowRight className="h-4 w-4" />
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function SecondaryButton({ href, children, className = "" }) {
  const base = `btn-secondary ${className}`.trim();
  if (href.startsWith("http")) {
    return (
      <a href={href} className={base} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
