import Image from "next/image";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { contactData } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-12 sm:py-14">
        <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-50/40 p-6 shadow-soft sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div>
              <div className="relative h-12 w-[180px] sm:h-14 sm:w-[210px]">
                <Image
                  src="/brand/lulabtech-logo.png"
                  alt="LulabTech"
                  fill
                  className="object-contain object-left"
                />
              </div>

              <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-ink-900 sm:text-3xl">
                Soluciones digitales premium para marcas que quieren verse mejor y convertir más.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-ink-600 sm:text-base">
                Landing pages, webs corporativas, tiendas online y software a la medida
                con una ejecución visual más cuidada, más clara y más comercial.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={contactData.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </ButtonLink>

                <ButtonLink href={`mailto:${contactData.email}`} variant="outline">
                  <Mail className="h-4 w-4" />
                  {contactData.email}
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Navegación
                </p>
                <nav className="mt-4 grid gap-3">
                  {navigationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 transition hover:text-ink-900"
                    >
                      {item.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Contacto
                </p>

                <div className="mt-4 grid gap-4">
                  <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Email
                    </p>
                    <a
                      href={`mailto:${contactData.email}`}
                      className="mt-2 block break-all text-sm font-semibold text-ink-900"
                    >
                      {contactData.email}
                    </a>
                  </div>

                  <div className="rounded-[22px] border border-slate-200 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                      Canal directo
                    </p>
                    <a
                      href={contactData.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-sm font-semibold text-ink-900"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-ink-500 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} LulabTech. Todos los derechos reservados.</p>
            <p>Diseño premium · enfoque comercial · experiencia responsive</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
