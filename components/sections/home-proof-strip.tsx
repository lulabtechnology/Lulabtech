import { Container } from "../ui/container";

const items = [
  "estructura pensada para conversión",
  "experiencia premium en desktop y mobile",
  "dirección visual más clara y más seria",
  "sin precios públicos, con cotización personalizada"
];

export function HomeProofStrip() {
  return (
    <section className="pb-6 md:pb-10">
      <Container>
        <div className="surface grid gap-3 rounded-[30px] p-4 md:grid-cols-2 lg:grid-cols-4 md:p-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/70 bg-white/70 px-4 py-4 text-sm font-medium text-[var(--text-main)]"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
