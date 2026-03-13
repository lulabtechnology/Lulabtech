"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Container } from "../ui/container";

const navigation = [
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/sobre", label: "Sobre LulabTech" },
  { href: "/contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full">
      <Container className="pt-4">
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? "surface rounded-[28px] border border-white/70"
              : "rounded-[28px] border border-transparent"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-3 md:px-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative h-11 w-auto">
                <Image
                  src="/logo-lulab.png"
                  alt="LulabTech"
                  width={170}
                  height={44}
                  className="h-11 w-auto object-contain"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-white text-[var(--text-strong)] shadow-sm"
                        : "text-[var(--text-main)] hover:bg-white/70 hover:text-[var(--text-strong)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://wa.me/50767069044"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                WhatsApp
              </a>
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
              </Link>
            </div>

            <button
              type="button"
              aria-label="Abrir menú"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-soft)] bg-white/80 text-[var(--text-strong)] md:hidden"
            >
              <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-[var(--border-soft)] px-4 pb-4 pt-2 md:hidden">
              <nav className="flex flex-col gap-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "bg-white text-[var(--text-strong)] shadow-sm"
                          : "text-[var(--text-main)] hover:bg-white/70"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="https://wa.me/50767069044"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary w-full"
                >
                  WhatsApp
                </a>
                <Link href="/contacto" className="btn-primary w-full">
                  Solicitar cotización
                </Link>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
