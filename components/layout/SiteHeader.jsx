"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, MessageCircle, X } from "lucide-react";
import { buildWhatsappLink } from "@/lib/site";

const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre-lulabtech", label: "Sobre LulabTech" },
  { href: "/contacto", label: "Contacto" },
];

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, me interesa una cotización para mi proyecto."
);

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 md:px-6">
      <div
        className={`mx-auto max-w-7xl rounded-[26px] border transition-all duration-300 ${
          scrolled
            ? "border-white/55 bg-white/72 shadow-[0_24px_70px_rgba(2,8,23,0.12)] backdrop-blur-2xl"
            : "border-white/30 bg-white/48 backdrop-blur-xl"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-7">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm">
              <Image
                src="/logo-lulab.png"
                alt="LulabTech"
                fill
                className="object-contain p-2 transition duration-300 group-hover:scale-105"
                sizes="44px"
                priority
              />
            </div>

            <div className="min-w-0">
              <div className="text-sm font-semibold leading-none tracking-[0.18em] text-slate-500">
                STUDIO DIGITAL
              </div>
              <div className="mt-1 text-lg font-semibold leading-none text-slate-950">
                LulabTech
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-700 transition duration-300 hover:bg-white hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-secondary">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <Link href="/contacto" className="btn-primary">
              Solicitar cotización
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/70 bg-white/90 text-slate-900 shadow-sm lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-[rgba(4,12,27,0.42)] px-3 pt-[104px] backdrop-blur-md sm:px-4">
          <div className="mx-auto max-w-7xl">
            <div className="panel overflow-hidden rounded-[30px] border-white/50 p-4 shadow-[0_34px_80px_rgba(2,8,23,0.18)]">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[22px] border border-transparent bg-white/60 px-4 py-4 text-base font-medium text-slate-800 transition hover:border-slate-200 hover:bg-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-secondary w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
                <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Solicitar cotización
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
