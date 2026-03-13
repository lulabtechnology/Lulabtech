import { Container } from "../ui/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 md:pb-14 md:pt-14">
      <div className="hero-orb hero-orb--blue left-[-120px] top-[120px] h-[260px] w-[260px]" />
      <div className="hero-orb hero-orb--teal right-[-80px] top-[70px] h-[240px] w-[240px]" />

      <Container>
        <div className="surface-strong relative overflow-hidden rounded-[36px] px-6 py-12 md:px-10 md:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,115,255,0.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(18,184,167,0.12),transparent_35%)]" />

          <div className="relative z-10 max-w-3xl">
            <span className="section-kicker">{eyebrow}</span>
            <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-main)]">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
