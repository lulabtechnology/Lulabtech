import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="shell py-12">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-2xl font-semibold text-slate-950">LulabTech</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Webs premium pensadas para comunicar mejor y convertir con más
              claridad.
            </p>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Landing pages, webs corporativas, tiendas online y automatizaciones
              para negocios que quieren verse más serios y vender con menos fricción.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Navegación
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/servicios" className="text-sm text-slate-700 hover:text-slate-950">
                Servicios
              </Link>
              <Link href="/proyectos" className="text-sm text-slate-700 hover:text-slate-950">
                Proyectos
              </Link>
              <Link
                href="/sobre-lulabtech"
                className="text-sm text-slate-700 hover:text-slate-950"
              >
                Sobre LulabTech
              </Link>
              <Link href="/contacto" className="text-sm text-slate-700 hover:text-slate-950">
                Contacto
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Contacto
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:ventas@lulabtech.com"
                className="text-sm text-slate-700 hover:text-slate-950"
              >
                ventas@lulabtech.com
              </a>
              <a
                href="https://wa.me/50767069044?text=Hola%20LulabTech%2C%20quiero%20informaci%C3%B3n%20sobre%20un%20proyecto."
                className="text-sm text-slate-700 hover:text-slate-950"
              >
                WhatsApp
              </a>
              <span className="text-sm text-slate-700">+507 6706-9044</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
