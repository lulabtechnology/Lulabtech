import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import { buildWhatsappLink, contactEmail } from "@/lib/site";

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, quiero solicitar una propuesta para mi proyecto."
);

export default function FinalCta() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="panel-dark relative overflow-hidden px-6 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-[rgba(22,119,255,0.16)] blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[rgba(17,194,138,0.12)] blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
                Cotización personalizada
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Si tu marca necesita una presencia digital más seria, este es el momento de dar el siguiente paso.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                Puedes enviarnos una solicitud formal desde el formulario o escribirnos por WhatsApp si quieres avanzar más rápido. No mostramos precios porque cada proyecto se cotiza según lo que realmente necesita.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 md:p-6">
              <div className="grid gap-4">
                <div className="rounded-[22px] border border-white/10 bg-black/10 p-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-brand-blue" />
                    <p className="text-sm font-semibold text-white">Correo de leads</p>
                  </div>
                  <p className="mt-3 break-all text-sm leading-6 text-slate-200">
                    {contactEmail}
                  </p>
                </div>

                <div className="rounded-[22px] border border-white/10 bg-black/10 p-4">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-4 w-4 text-brand-green" />
                    <p className="text-sm font-semibold text-white">Ruta rápida</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-200">
                    WhatsApp directo para consultas iniciales y proyectos con intención inmediata.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contacto" className="btn-primary">
                  Solicitar cotización
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href={whatsappHref} className="btn-dark">
                  Hablar por WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
