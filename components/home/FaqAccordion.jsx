"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FaqAccordion({ eyebrow, title, items = [] }) {
  const [open, setOpen] = useState(0);

  return (
    <section className="pb-20 md:pb-28">
      <div className="shell">
        <div className="max-w-3xl">
          <span className="section-eyebrow">{eyebrow}</span>
          <h2 className="section-heading mt-4">{title}</h2>
        </div>

        <div className="mt-10 space-y-4">
          {items.map((item, index) => {
            const isOpen = open === index;

            return (
              <div key={item.question} className="panel overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
                >
                  <span className="text-base font-semibold text-slate-950 md:text-lg">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-500 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-5 py-5 md:px-6">
                    <p className="text-sm leading-7 text-slate-600 md:text-base">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
