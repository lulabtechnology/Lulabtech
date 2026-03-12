import SectionIntro from "@/components/ui/SectionIntro";
import { homeDifferentiators } from "@/data/services";

export default function Differentiators() {
  return (
    <section className="shell section-space">
      <SectionIntro
        eyebrow="Por qué LulabTech"
        title="No diseñamos para llenar espacio. Diseñamos para que tu negocio comunique mejor y convierta con menos fricción."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {homeDifferentiators.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title} className="panel p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
