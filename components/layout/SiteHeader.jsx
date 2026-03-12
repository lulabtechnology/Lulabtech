"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-lulabtech", label: "Sobre LulabTech" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl">
      <div className="shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue shadow-soft">
            <Image src="/logo-lulab.png" alt="Logo de LulabTech" width={30} height={30} priority />
          </span>
          <span className="hidden sm:block">
            <strong className="block text-sm font-semibold tracking-tight text-slate-950">LulabTech</strong>
            <span className="block text-xs text-slate-500">Estudio digital premium</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-950">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={buildWhatsappLink("Hola LulabTech, quiero solicitar una cotización para mi proyecto.")} className="btn-primary" target="_blank" rel="noreferrer">
            Solicitar cotización
          </a>
        </div>

        <button className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="shell flex flex-col gap-2 py-4">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={buildWhatsappLink("Hola LulabTech, quiero solicitar una cotización para mi proyecto.")} className="btn-primary mt-2 justify-center" target="_blank" rel="noreferrer">
              Solicitar cotización
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
