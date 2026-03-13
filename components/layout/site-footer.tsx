import Image from "next/image";
import Link from "next/link";
import { Container } from "../ui/container";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--border-soft)]/80 py-12">
      <Container>
        <div className="surface rounded-[32px] px-6 py-8 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
            <div>
              <div className="mb-4">
                <Image
                  src="/logo-lulab.png"
                  alt="LulabTech"
                  width={180}
                  height={46}
                  className="h-11 w-auto object-contain"
                />
              </div>

              <p className="max-w-md text-sm leading-7 text-[var(--text-main)]">
                Diseñamos experiencias digitales más claras, más premium y mejor
                pensadas para marcas que necesitan elevar percepción, estructura y conversión.
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                Navegación
              </h3>
              <div className="flex flex-col gap-3 text-sm text-[var(--text-main)]">
                <Link href="/">Inicio</Link>
                <Link href="/servicios">Servicios</Link>
                <Link href="/proyectos">Proyectos</Link>
                <Link href="/sobre">Sobre LulabTech</Link>
                <Link href="/contacto">Contacto</Link>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-soft)]">
                Contacto
              </h3>
              <div className="flex flex-col gap-3 text-sm text-[var(--text-main)]">
                <a href="mailto:ventas@lulabtech.com">ventas@lulabtech.com</a>
                <a href="https://wa.me/50767069044" target="_blank" rel="noreferrer">
                  +507 67069044
                </a>
                <span>Sin precios publicados. Cotización personalizada.</span>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--border-soft)] pt-5 text-sm text-[var(--text-soft)]">
            © {new Date().getFullYear()} LulabTech. Todos los derechos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}
