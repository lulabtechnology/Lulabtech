"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { serviceSolutions } from "@/data/services";

export default function SolutionSelector() {
  const [active, setActive] = useState(serviceSolutions[0].id);

  const current = useMemo(
    () => serviceSolutions.find((item) => item.id === active) ?? serviceSolutions[0],
    [active]
  );

  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="panel overflow-hidden p-6 md:p-8">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Ruta recomendada</span>
            <h2 className="section-heading mt-4">
              No todos los negocios necesitan la misma solución.
            </h2>
            <p className="section-copy mt-5">
              Si todavía no tienes claro qué te conviene, aquí te ayudamos a
              identificar el tipo de estructura más adecuada según tu objetivo.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-3">
              {serviceSolutions.map((item) => {
                const isActive = item.id === active;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(item.id)}
                    className={`rounded-3xl border px-5 py-5 text-left transition ${
                      isActive
                        ? "border-brand-blue bg-[rgba(16,120,255,0.06)] shadow-soft"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <p className="text-sm font-semibold text-slate-950">
                      {item.question}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.hint}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                Recomendación
              </p>
              <h3 className="mt-4 text-3xl font-semibold">{current.recommendation}</h3>
              <p className="mt-5 text-sm leading-7 text-slate-200 md:text-base">
                {current.description}
              </p>

              <ul className="mt-6 space-y-3">
                {current.points.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href={current.pageHref} className="btn-primary">
                  Ver esta solución
                </Link>
                <Link href={current.whatsappHref} className="btn-secondary">
                  Hablar por WhatsApp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
