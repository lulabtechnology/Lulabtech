import { PageHero } from "../../components/sections/page-hero";
import { Container } from "../../components/ui/container";

const pillars = [
  {
    title: "Criterio visual",
    text: "Diseño con intención, no solo para llenar una pantalla."
  },
  {
    title: "Claridad estructural",
    text: "Mensajes mejor ordenados para que una marca se entienda más rápido."
  },
  {
    title: "Percepción premium",
    text: "Cada detalle visual debe ayudar a que el negocio se vea mejor posicionado."
  }
];

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="sobre LulabTech"
        title="Un estudio digital enfocado en elevar cómo se perciben las marcas."
        description="LulabTech combina dirección visual, estructura y enfoque comercial para construir experiencias digitales más claras, modernas y mejor pensadas."
      />

      <section className="section-padding pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr]">
            <div className="surface rounded-[30px] p-6 md:p-7">
              <h2 className="text-3xl font-semibold tracking-[-0.04em]">
                No buscamos solo hacer una web.
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[var(--text-main)]">
                Buscamos construir una presencia digital que ayude a una marca a verse
                más seria, más actual y más alineada con lo que realmente ofrece.
              </p>
            </div>

            <div className="grid gap-5">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="surface rounded-[28px] p-6">
                  <h3 className="text-xl font-semibold tracking-[-0.04em]">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--text-main)]">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
