import Link from "next/link";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import { projects } from "@/data/projects";
import { buildMetadata, buildWhatsappLink } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Proyectos",
  description:
    "Showcase de proyectos y estructuras visuales creadas para marcas que necesitaban una presencia digital más fuerte, más limpia y mejor presentada.",
  path: "/proyectos",
  keywords: [
    "proyectos web",
    "portfolio agencia digital",
    "casos de diseño web",
    "showcase web premium",
  ],
});

const whatsappHref = buildWhatsappLink(
  "Hola LulabTech, vi sus proyectos y quiero cotizar algo similar."
);

export default function ProyectosPage() {
  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">Portfolio</span>
          <h1 className="section-heading mt-4">
            Proyectos mostrados con más presencia visual y una sensación mucho más premium.
          </h1>
          <p className="section-copy mt-5 max-w-3xl">
            Esta sección ahora sí funciona como showcase. Aquí la idea es que los proyectos se sientan protagonistas y no simples tarjetas de texto.
          </p>
        </div>

        <div className="mt-10">
          <FeaturedProjects projects={projects} />
        </div>

        <div className="mt-12 panel-dark px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                ¿Quieres algo con este nivel de presentación?
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
                Cuéntanos qué estás construyendo y armamos una propuesta visual y estratégica mucho más alineada con el nivel que quieres proyectar.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href="/contacto" className="btn-primary">
                Solicitar cotización
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
