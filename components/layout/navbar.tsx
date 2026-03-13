import { navigationItems } from "@/data/navigation";
import { NAV_ANCHORS } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const quoteHref = `#${NAV_ANCHORS.quote}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <Container className="relative flex h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-accent-500 text-base font-bold text-white shadow-soft">
            L
          </div>
          <div className="leading-none">
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
              Premium Digital
            </span>
            <span className="block text-lg font-bold text-ink-900">LulabTech</span>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-600 transition hover:text-ink-900"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={quoteHref}>Solicitar cotización</ButtonLink>
        </div>

        <MobileMenu quoteHref={quoteHref} />
      </Container>
    </header>
  );
}
