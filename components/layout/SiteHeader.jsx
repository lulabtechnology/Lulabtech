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
        className={`mx-auto max-w-7xl rounded-[24px] border transition-all duration-300 ${
          scrolled
            ? "border-white/10 bg-[rgba(7,17,29,0.82)] shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
            : "border-white/8 bg-[rgba(7,17,29,0.55)] backdrop-blur-xl"
        }`}
      >
        <div className="flex h-[76px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-7">
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm">
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
              <div className="text-[11px] font-semibold leading-none tracking-[0.22em] text-slate-400">
                LULABTECH
              </div>
              <div className="mt-1 text-base font-semibold leading-none text-white">
                Premium Digital Studio
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-200 transition duration-300 hover:bg-white/8 hover:text-white"
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
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/6 text-white lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 bg-[rgba(4,10,18,0.62)] px-3 pt-[104px] backdrop-blur-md sm:px-4">
          <div className="mx-auto max-w-7xl">
            <div className="panel-dark overflow-hidden rounded-[30px] p-4 shadow-[0_34px_80px_rgba(0,0,0,0.28)]">
              <div className="flex flex-col gap-2">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-[22px] border border-white/8 bg-white/5 px-4 py-4 text-base font-medium text-white transition hover:border-white/12 hover:bg-white/8"
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
