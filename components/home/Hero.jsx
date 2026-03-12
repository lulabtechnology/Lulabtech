import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { buildWhatsappLink } from "@/lib/site";

export default function Hero() {
  return (
    <section className="shell grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center lg:pb-28 lg:pt-20">
      <div>
        <p className="section-eyebrow">Estudio digital para negocios que quieren verse mejor, comunicar con más claridad y vender con menos fricción</p>
        <h1 className="hero-title mt-6 max-w-4xl">
          Diseñamos webs premium que hacen que tu negocio se vea al nivel de lo que ya ofrece.
        </h1>
        <p className="section-copy mt-6 max-w-2xl text-base md:text-lg">
          Creamos landing pages, webs corporativas, tiendas online y automatizaciones para marcas, empresas y negocios que necesitan una presencia digital más seria, más clara y mejor pensada para convertir.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <PrimaryButton href="/contacto">Solicitar cotización</PrimaryButton>
          <SecondaryButton href="/servicios">Ver servicios</SecondaryButton>
          <SecondaryButton href={buildWhatsappLink("Hola LulabTech, quiero hablar sobre mi proyecto.")}>Hablar por WhatsApp</SecondaryButton>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-600">
          <span className="chip">Propuesta personalizada</span>
          <span className="chip">Enfoque en conversión</span>
          <span className="chip">Experiencia mobile-first</span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -left-6 top-10 h-44 w-44 rounded-full bg-brand-green/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-brand-blue/18 blur-3xl" />
        <div className="panel relative overflow-hidden p-5 md:p-7">
          <div className="rounded-[28px] border border-slate-200 bg-slate-950 px-4 py-3 text-xs text-slate-300">
            lulabtech.com — preview premium
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr,0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-soft">
              <div className="h-3 w-24 rounded-full bg-slate-200" />
              <div className="mt-4 h-8 w-4/5 rounded-full bg-slate-950/90" />
              <div className="mt-3 h-3 w-full rounded-full bg-slate-200" />
              <div className="mt-2 h-3 w-5/6 rounded-full bg-slate-200" />
              <div className="mt-6 flex gap-2">
                <div className="h-10 w-36 rounded-full bg-brand-blue" />
                <div className="h-10 w-28 rounded-full border border-slate-200 bg-white" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="h-3 w-16 rounded-full bg-slate-300" />
                  <div className="mt-3 h-10 rounded-2xl bg-white" />
                </div>
                <div className="rounded-2xl bg-slate-100 p-4">
                  <div className="h-3 w-16 rounded-full bg-slate-300" />
                  <div className="mt-3 h-10 rounded-2xl bg-white" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">Responsive</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">Diseño premium, limpio y optimizado para móvil desde el inicio.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">SEO-ready</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">Arquitectura preparada para crecer con páginas de servicio, FAQs y casos.</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">Contacto estratégico</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">WhatsApp, correo y formularios organizados por intención de servicio.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
