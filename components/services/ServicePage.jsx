import Link from "next/link";
import SectionIntro from "@/components/ui/SectionIntro";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { buildWhatsappLink } from "@/lib/site";
import { projects } from "@/data/projects";

export default function ServicePage({ service, pageTitle, pageDescription, faqItems, extraSection }) {
  const Icon = service.icon;

  return (
    <>
      <section className="shell grid gap-10 pb-20 pt-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
        <div>
          <p className="section-eyebrow">{service.eyebrow}</p>
          <h1 className="hero-title mt-6">{pageTitle}</h1>
          <p className="section-copy mt-6 max-w-2xl text-base md:text-lg">{pageDescription}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton href="/contacto">Solicitar cotización</PrimaryButton>
            <SecondaryButton href={buildWhatsappLink(service.whatsappMessage)}>Hablar por WhatsApp</SecondaryButton>
          </div>
        </div>
        <div className="panel p-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
            <Icon className="h-7 w-7" />
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">{service.benefitTitle}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{service.benefitCopy}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-brand-green" /> <span>{bullet}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="shell section-space">
        <SectionIntro eyebrow="Cuándo conviene" title={`¿Cuándo conviene ${service.shortTitle === "Automatizaciones" ? "automatizar" : `una ${service.shortTitle.toLowerCase().slice(0, -1)}`}?`} description={service.idealFor} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {service.useCases.map((item) => (
            <div key={item} className="panel p-5 text-sm font-medium text-slate-700">{item}</div>
          ))}
        </div>
      </section>

      <section className="shell section-space grid gap-8 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
        <SectionIntro eyebrow="Enfoque LulabTech" title={service.benefitTitle} description={service.benefitCopy} />
        <div className="panel p-8">
          <h3 className="text-lg font-semibold tracking-tight text-slate-950">Qué incluye nuestro enfoque</h3>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex gap-3"><span className="mt-2 h-2 w-2 rounded-full bg-brand-blue" /> <span>{bullet}</span></li>
            ))}
          </ul>
          {extraSection ? <div className="mt-8 border-t border-slate-200 pt-8">{extraSection}</div> : null}
        </div>
      </section>

      <section className="shell section-space">
        <SectionIntro eyebrow="Proyectos relacionados" title="Ejemplos de estructuras que ayudan a ver mejor la dirección del servicio" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="panel p-6">
              <div className="h-44 rounded-[24px] bg-[radial-gradient(circle_at_top_left,rgba(16,120,255,0.14),transparent_30%),linear-gradient(180deg,#f8fafc,#eef2ff)]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">{project.type}</p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-slate-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shell section-space">
        <SectionIntro eyebrow="Preguntas frecuentes" title="Resolvemos dudas comunes antes de solicitar una propuesta" />
        <div className="mt-10"><FaqAccordion items={faqItems} /></div>
      </section>

      <section className="section-space">
        <div className="shell">
          <div className="rounded-[36px] bg-slate-950 px-6 py-12 text-white md:px-10 md:py-14">
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              {service.shortTitle === "Landing Pages" && "Si tienes una oferta clara y necesitas una página enfocada en convertir mejor, una landing page puede ser la estructura correcta para empezar."}
              {service.shortTitle === "Webs Corporativas" && "Si tu negocio ya tiene nivel, tu presencia digital también debería reflejarlo."}
              {service.shortTitle === "Tiendas Online" && "Si tus productos merecen una mejor presentación y una experiencia más sólida, una tienda online o catálogo web puede ser el siguiente paso correcto."}
              {service.shortTitle === "Automatizaciones" && "Si tu negocio ya tiene procesos que te quitan tiempo o generan desorden, una automatización bien planteada puede ayudarte más de lo que parece."}
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="/contacto" className="bg-white text-slate-950 hover:bg-slate-100">Solicitar cotización</PrimaryButton>
              <SecondaryButton href={buildWhatsappLink(service.whatsappMessage)} className="border-white/15 bg-white/5 text-white hover:bg-white/10">Hablar por WhatsApp</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
