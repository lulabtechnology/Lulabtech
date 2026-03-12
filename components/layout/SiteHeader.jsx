"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-lulabtech", label: "Sobre LulabTech" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition ${
        scrolled
          ? "border-b border-slate-200 bg-white/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="shell">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-lg font-semibold tracking-tight text-slate-950">
              LulabTech
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
            aria-label="Abrir menú"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="pb-5 lg:hidden">
            <div className="panel p-4">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4">
                <Link
                  href="/contacto"
                  onClick={() => setOpen(false)}
                  className="btn-primary w-full"
                >
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
