import Link from "next/link";
import { contactEmail, contactPhone, buildWhatsappLink } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/70">
      <div className="shell grid gap-10 py-14 md:grid-cols-[1.2fr,0.8fr,0.8fr]">
        <div>
          <p className="section-eyebrow">LulabTech</p>
          <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-950">Webs premium pensadas para comunicar mejor y convertir con más claridad.</h3>
          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-600">
            Landing pages, webs corporativas, tiendas online y automatizaciones para negocios que quieren verse más serios y vender con menos fricción.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Navegación</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <Link href="/servicios">Servicios</Link>
            <Link href="/proyectos">Proyectos</Link>
            <Link href="/sobre-lulabtech">Sobre LulabTech</Link>
            <Link href="/contacto">Contacto</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contacto</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            <a href={buildWhatsappLink("Hola LulabTech, quiero conversar sobre mi proyecto.")} target="_blank" rel="noreferrer">WhatsApp</a>
            <span>{contactPhone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
