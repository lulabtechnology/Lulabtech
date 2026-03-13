import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

type SectionShellProps = React.HTMLAttributes<HTMLElement> & {
  id?: string;
  containerClassName?: string;
};

export function SectionShell({
  id,
  className,
  containerClassName,
  children,
  ...props
}: SectionShellProps) {
  return (
    <section id={id} className={cn("section-padding relative", className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
