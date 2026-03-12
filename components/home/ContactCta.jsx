import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { buildWhatsappLink } from "@/lib/site";

export default function ContactCta() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="rounded-[36px] bg-slate-950 px-6 py-12 text-white md:px-10 md:py-14">
          <p className="section-eyebrow text-brand-green">Contacto</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Cuéntanos qué necesitas y te ayudamos a definir la mejor solución para tu negocio.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Puedes escribirnos por WhatsApp para avanzar más rápido o enviarnos tu solicitud por correo/formulario si prefieres una consulta más estructurada.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contacto" className="bg-white text-slate-950 hover:bg-slate-100">Enviar solicitud</PrimaryButton>
            <SecondaryButton href={buildWhatsappLink("Hola LulabTech, quiero conversar sobre mi proyecto.")} className="border-white/15 bg-white/5 text-white hover:bg-white/10">
              Hablar por WhatsApp
            </SecondaryButton>
          </div>
          <p className="mt-6 text-sm text-slate-400">Trabajamos por propuesta personalizada según el tipo de proyecto, el objetivo y el alcance real que necesite tu negocio.</p>
        </div>
      </div>
    </section>
  );
}
