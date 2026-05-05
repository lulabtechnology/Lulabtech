import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { StructuredData } from "@/components/seo/structured-data";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { GridPattern } from "@/components/ui/grid-pattern";
import { projectPortfolio } from "@/data/seo-pages";
import { WHATSAPP_URL } from "@/lib/constants";

export function ProjectsPage() {
  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <StructuredData />
        <SitePreloader />
        <Navbar />

        <main>
          <section className="relative overflow-hidden bg-gradient-to-b from-white via-brand-50/35 to-white py-16 sm:py-20 lg:py-24">
            <GridPattern className="opacity-20" />
            <Container className="relative">
              <div className="mx-auto max-w-4xl text-center">
                <span className="eyebrow">Portafolio LulabTech</span>
                <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] text-ink-900 sm:text-5xl lg:text-[4rem]">
                  Proyectos de diseño web, software y presencia digital para negocios en Panamá
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-ink-600 sm:text-lg">
                  Una selección de proyectos y soluciones trabajadas por LulabTech: landing pages, webs corporativas, sistemas para casilleros, reservas y presencia digital para empresas.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" size="lg">
                    <MessageCircle className="h-4 w-4" />
                    Cotizar un proyecto similar
                  </ButtonLink>
                  <ButtonLink href="/#servicios" variant="outline" size="lg">
                    Ver servicios
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>
            </Container>
          </section>

          <section className="py-16 sm:py-20">
            <Container>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projectPortfolio.map((project) => (
                  <article
                    key={project.name}
                    className="group overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-elevated"
                  >
                    <div className="border-b border-slate-200 bg-slate-50/90 px-4 py-3">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        </div>
                        <span className="truncate text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <Image
                        src={project.image}
                        alt={`Proyecto de LulabTech: ${project.name}`}
                        fill
                        className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                    </div>

                    <div className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                        {project.type}
                      </p>
                      <h2 className="mt-2 text-xl font-semibold leading-tight text-ink-900">
                        {project.name}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-ink-600">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span
                            key={service}
                            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-ink-700"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-brand-600" />
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-12 rounded-[34px] border border-slate-200 bg-gradient-to-br from-[#07142D] via-[#0E2554] to-brand-700 p-7 text-white shadow-elevated sm:p-8 lg:p-10">
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-100">
                      ¿Quieres algo parecido?
                    </p>
                    <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight sm:text-4xl">
                      Creamos una solución ajustada a tu negocio, no una plantilla genérica.
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                      Podemos ayudarte con una página informativa, una web corporativa, una tienda online o un sistema a medida para casilleros, restaurantes, reservas, inventario y más.
                    </p>
                  </div>
                  <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="outline" size="lg" className="border-white/20 bg-white text-ink-900 hover:bg-white/90">
                    Hablar por WhatsApp
                    <ArrowUpRight className="h-4 w-4" />
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink-600">
                <Link className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href="/diseno-web-panama">Diseño web</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href="/landing-pages-panama">Landing pages</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href="/paginas-web-empresas-panama">Webs corporativas</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href="/tiendas-online-panama">Ecommerce</Link>
                <Link className="rounded-full border border-slate-200 px-4 py-2 hover:text-brand-700" href="/software-a-medida-panama">Software a medida</Link>
              </div>
            </Container>
          </section>
        </main>

        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
