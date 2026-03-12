"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const options = [
  {
    id: "landing",
    label: "Landing Page",
    whatsapp:
      "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20landing%20page%20para%20mi%20negocio.",
  },
  {
    id: "corporativa",
    label: "Web Corporativa",
    whatsapp:
      "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20web%20corporativa%20para%20mi%20negocio.",
  },
  {
    id: "tienda",
    label: "Tienda Online",
    whatsapp:
      "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20cotizar%20una%20tienda%20online%20o%20cat%C3%A1logo%20web.",
  },
  {
    id: "automatizacion",
    label: "Automatización",
    whatsapp:
      "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20me%20interesa%20una%20automatizaci%C3%B3n%20para%20mi%20negocio.",
  },
  {
    id: "nose",
    label: "No estoy seguro todavía",
    whatsapp:
      "https://wa.me/50767069044?text=Hola%20LulabTech%2C%20todav%C3%ADa%20no%20tengo%20claro%20qu%C3%A9%20tipo%20de%20soluci%C3%B3n%20necesita%20mi%20negocio.",
  },
];

export default function ContactPageContent() {
  const [selected, setSelected] = useState(options[0].id);

  const current = useMemo(
    () => options.find((item) => item.id === selected) ?? options[0],
    [selected]
  );

  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">Contacto</span>
          <h1 className="section-heading mt-4">
            Cuéntanos qué necesita tu negocio y te ayudamos a definir la mejor
            solución.
          </h1>
          <p className="section-copy mt-5 max-w-3xl">
            Puedes escribirnos por WhatsApp para una conversación más rápida o
            enviarnos tu solicitud por correo si prefieres una consulta más
            estructurada.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="panel p-6 md:p-7">
            <h2 className="text-2xl font-semibold text-slate-950">
              ¿Qué te interesa?
            </h2>

            <div className="mt-6 grid gap-3">
              {options.map((option) => {
                const active = option.id === selected;

                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelected(option.id)}
                    className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${
                      active
                        ? "border-brand-blue bg-[rgba(16,120,255,0.06)] text-slate-950 shadow-soft"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold text-slate-950">
                Trabajamos por propuesta personalizada
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Definimos el alcance según el tipo de proyecto, el objetivo y la
                estructura real que necesite tu negocio.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-soft md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
              Servicio seleccionado
            </p>
            <h2 className="mt-4 text-3xl font-semibold">{current.label}</h2>

            <p className="mt-5 text-sm leading-7 text-slate-200 md:text-base">
              La forma más rápida de avanzar ahora mismo es escribirnos por
              WhatsApp con tu necesidad. También puedes enviarnos un correo más
              estructurado si prefieres explicar el proyecto con más detalle.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={current.whatsapp} className="btn-primary">
                Hablar por WhatsApp
              </Link>

              <a
                href="mailto:ventas@lulabtech.com?subject=Consulta%20desde%20LulabTech&body=Hola%20LulabTech%2C%20quiero%20solicitar%20informaci%C3%B3n%20sobre%20un%20proyecto."
                className="btn-secondary"
              >
                Enviar correo
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Correo
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100">
                  ventas@lulabtech.com
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
                  WhatsApp
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-100">
                  +507 6706-9044
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
