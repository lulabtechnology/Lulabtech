import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, quiero solicitar una propuesta para mi proyecto."
);

export default function FinalCta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="panel-dark relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-[rgba(38,120,242,0.16)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[rgba(32,183,132,0.12)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <Sparkles className="h-3.5 w-3.5 text-brand-green" />
                Proyecto nuevo
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Si tu marca necesita verse a otro nivel, armemos algo que realmente lo refleje.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                Cuéntanos qué estás construyendo y te ayudamos a definir una propuesta mucho más fuerte visualmente, más clara comercialmente y mejor preparada para convertir.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
              <div className="grid gap-3">
                <Link href="/contacto" className="btn-primary w-full">
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href={whatsappHref} className="btn-secondary w-full">
                  Hablar por WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-300">
                Sin precios fijos publicados. Cada proyecto se cotiza según estructura, alcance y objetivo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
