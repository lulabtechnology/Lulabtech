import SectionIntro from "@/components/ui/SectionIntro";
import ContactCta from "@/components/home/ContactCta";
import { buildMetadata } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Sobre LulabTech",
  path: "/sobre-lulabtech",
  description:
    "Conoce el enfoque de LulabTech, un estudio digital enfocado en diseño web, estructura clara, experiencia premium y soluciones orientadas a conversión.",
  keywords: ["estudio digital en Panamá", "agencia digital Panamá", "equipo de diseño web"],
});

export default function SobrePage() {
  return (
    <main>
      <section className="shell section-space grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <SectionIntro
          eyebrow="Sobre LulabTech"
          title="LulabTech es un estudio digital enfocado en diseñar webs más claras, más serias y más útiles para vender."
        />
        <div className="space-y-6">
          <div className="panel p-7">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">No buscamos llenar internet de páginas bonitas pero vacías.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Buscamos construir presencia digital que ayude a negocios reales a comunicar mejor, verse más sólidos y facilitar el contacto con clientes potenciales.</p>
          </div>
          <div className="panel p-7">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">Diseño, estructura y enfoque comercial deben trabajar juntos.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Para nosotros, una buena web no solo se mide por cómo se ve. También se mide por qué tan claro comunica, qué tan bien representa la marca y qué tan fácil hace que el usuario avance.</p>
          </div>
          <div className="panel p-7">
            <h2 className="text-xl font-semibold tracking-tight text-slate-950">Cada proyecto parte de una necesidad distinta.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">Por eso no trabajamos con la misma solución para todos. Evaluamos el tipo de negocio, el objetivo, el contexto y el nivel de estructura que realmente conviene.</p>
          </div>
        </div>
      </section>
      <ContactCta />
    </main>
  );
}
