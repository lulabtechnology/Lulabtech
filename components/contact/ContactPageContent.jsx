"use client";

import { useMemo, useState } from "react";
import { contactEmail, buildWhatsappLink } from "@/lib/site";

const options = [
  {
    key: "landing",
    label: "Landing Page",
    text: "Hola LulabTech, me interesa cotizar una landing page para captar clientes o presentar una oferta específica.",
  },
  {
    key: "corporativa",
    label: "Web Corporativa",
    text: "Hola LulabTech, me interesa cotizar una web corporativa para presentar mejor mi negocio, servicios o marca.",
  },
  {
    key: "tienda",
    label: "Tienda Online",
    text: "Hola LulabTech, me interesa cotizar una tienda online o catálogo web para vender mis productos con una presentación más profesional.",
  },
  {
    key: "automatizacion",
    label: "Automatización",
    text: "Hola LulabTech, me interesa una automatización para mejorar atención, seguimiento o procesos en mi negocio.",
  },
  {
    key: "nose",
    label: "No estoy seguro todavía",
    text: "Hola LulabTech, no tengo claro todavía qué tipo de solución necesita mi negocio y quisiera orientación.",
  },
];

export default function ContactPageContent() {
  const [selected, setSelected] = useState(options[0]);
  const whatsappLink = useMemo(() => buildWhatsappLink(selected.text), [selected]);

  return (
    <section className="shell section-space grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
      <div>
        <p className="section-eyebrow">Contacto</p>
        <h1 className="hero-title mt-6">Cuéntanos qué necesita tu negocio y te ayudamos a definir la mejor solución.</h1>
        <p className="section-copy mt-6">
          Puedes escribirnos por WhatsApp para una conversación más rápida o enviarnos tu solicitud por correo/formulario si prefieres una consulta más estructurada.
        </p>
        <div className="panel mt-8 p-6">
          <h2 className="text-lg font-semibold tracking-tight text-slate-950">Canales</h2>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            <a href={`mailto:${contactEmail}`} className="block">{contactEmail}</a>
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="block">WhatsApp según el servicio elegido</a>
          </div>
        </div>
      </div>

      <div className="panel p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">¿Qué te interesa?</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {options.map((option) => (
            <button
              key={option.key}
              type="button"
              onClick={() => setSelected(option)}
              className={`rounded-2xl border px-4 py-4 text-left text-sm font-medium transition ${selected.key === option.key ? "border-brand-blue bg-brand-blue text-white" : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-white"}`}
            >
              {option.label}
            </button>
          ))}
        </div>

        <form className="mt-8 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-medium text-slate-700">
              Nombre
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-brand-blue" placeholder="Tu nombre" />
            </label>
            <label className="text-sm font-medium text-slate-700">
              Negocio o marca
              <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-brand-blue" placeholder="Nombre de tu negocio" />
            </label>
          </div>
          <label className="text-sm font-medium text-slate-700">
            ¿Qué necesitas?
            <textarea rows="5" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-brand-blue" placeholder="Cuéntanos brevemente qué quieres lograr" />
          </label>
          <label className="text-sm font-medium text-slate-700">
            Web actual o Instagram (opcional)
            <input className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none ring-0 focus:border-brand-blue" placeholder="https://..." />
          </label>
          <p className="text-sm leading-7 text-slate-500">Este formulario puede conectarse luego a un backend o servicio de email. Por ahora queda la estructura premium y la ruta de WhatsApp contextual.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink} className="btn-primary" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
            <a href={`mailto:${contactEmail}?subject=Solicitud%20de%20propuesta%20-%20${encodeURIComponent(selected.label)}`} className="btn-secondary">Enviar por correo</a>
          </div>
        </form>
      </div>
    </section>
  );
}
