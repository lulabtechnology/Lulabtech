"use client";

import { useState } from "react";
import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import { comparisonOptions } from "@/data/services";

export default function SolutionSelector() {
  const [active, setActive] = useState(comparisonOptions[0]);

  return (
    <section className="shell section-space">
      <SectionIntro
        eyebrow="Elegir mejor"
        title="No todos los negocios necesitan la misma solución."
        description="Si todavía no tienes claro qué te conviene, aquí te ayudamos a identificar la estructura más adecuada según tu objetivo."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
        <div className="grid gap-4">
          {comparisonOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setActive(option)}
              className={`panel p-5 text-left transition ${active.id === option.id ? "border-brand-blue ring-2 ring-brand-blue/10" : ""}`}
            >
              <p className="text-base font-semibold text-slate-950">{option.label}</p>
            </button>
          ))}
        </div>

        <div className="panel flex flex-col justify-between p-8">
          <div>
            <p className="section-eyebrow">Recomendación</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{active.recommendation}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">{active.copy}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={active.href} className="btn-primary">Ver esta solución</Link>
            <a href={active.whatsappLink} className="btn-secondary" target="_blank" rel="noreferrer">Hablar por WhatsApp</a>
          </div>
        </div>
      </div>
    </section>
  );
}
