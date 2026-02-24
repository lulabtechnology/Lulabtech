"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import {
  Monitor,
  Globe2,
  ShoppingBag,
  Bot,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Sparkles,
  ShieldCheck,
  Smartphone,
  Gauge,
} from "lucide-react";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#cotizacion", label: "Cotización" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "Equipo" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

const whatsappLink =
  "https://wa.me/50767069044?text=Hola%20Lulabtech,%20quiero%20cotizar%20una%20web.";
const contactPhone = "+507 67069044";
const contactEmail = "ventas@lulabtech.com";

const services = [
  {
    icon: Monitor,
    title: "Landing pages para campañas",
    description:
      "Páginas enfocadas en una sola oferta para captar leads, cotizaciones o ventas desde tráfico frío.",
    items: [
      "Propuesta de valor clara desde el primer scroll",
      "Bloques orientados a conversión y CTA directo",
      "Integración con WhatsApp o formulario",
      "Diseño premium, rápido y mobile-first",
    ],
  },
  {
    icon: Globe2,
    title: "Webs corporativas que generan confianza",
    description:
      "Sitios para empresas y profesionales que necesitan verse serios, explicar bien sus servicios y convertir mejor.",
    items: [
      "Arquitectura de contenido clara y profesional",
      "Secciones para autoridad, servicios y contacto",
      "Experiencia móvil cuidada para tráfico real",
      "Textos orientados a claridad comercial",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online listas para vender",
    description:
      "Catálogos y e-commerce pensados para vender por WhatsApp, correo o checkout según el flujo que use tu negocio.",
    items: [
      "Catálogo administrable por categorías",
      "Carrito y flujo de compra claros",
      "Integración con medios de pago según proveedor",
      "Panel simple para actualizar productos",
    ],
  },
  {
    icon: Bot,
    title: "Automatizaciones para ventas y soporte",
    description:
      "Automatizamos tareas repetitivas y respuestas frecuentes para que tu equipo responda mejor y venda con más orden.",
    items: [
      "Flujos de atención y seguimiento",
      "Automatización de respuestas frecuentes",
      "Calificación inicial de leads (si aplica)",
      "Integración como complemento de tu web, no como centro del mensaje",
    ],
  },
];

const solutionTypes = [
  {
    name: "Landing page",
    badge: "Para campañas, lanzamientos y captación",
    description:
      "Ideal cuando necesitas una página enfocada en una sola oferta, con mensaje directo y CTA claro para anuncios o tráfico desde redes.",
    features: [
      "Enfoque 100% en conversión",
      "Estructura corta y estratégica",
      "CTA a WhatsApp o formulario",
      "Pensada para tráfico frío de Meta/Google",
    ],
  },
  {
    name: "Web corporativa",
    badge: "Para marcas y negocios que necesitan confianza",
    description:
      "Recomendada para empresas que necesitan una presencia profesional, explicar sus servicios y elevar percepción de marca.",
    features: [
      "Contenido organizado por secciones",
      "Mensaje claro para generar confianza",
      "Diseño premium adaptable a crecimiento",
      "Ideal para pauta, referencias y ventas consultivas",
    ],
    highlight: true,
  },
  {
    name: "Tienda online",
    badge: "Para vender productos con mejor experiencia",
    description:
      "Pensada para negocios que necesitan catálogo, carrito y una experiencia más ordenada para vender todos los días.",
    features: [
      "Catálogo de productos y categorías",
      "Flujo de pedido claro",
      "Opciones de pago según tu operación",
      "Preparada para escalar con campañas",
    ],
  },
];

const quoteFactors = [
  "Tipo de proyecto (landing, corporativa, tienda o combinación)",
  "Cantidad de secciones y complejidad de diseño",
  "Integraciones necesarias (WhatsApp, formularios, analítica, pagos)",
  "Cantidad de productos/categorías (si es tienda)",
  "Tiempo de entrega y prioridad del proyecto",
  "Si partimos desde cero o mejoramos una web existente",
];

const steps = [
  {
    step: "Paso 1",
    title: "Definimos objetivo, alcance y prioridad",
    description:
      "Conversamos para entender qué vendes, qué quieres lograr (leads, reservas, ventas, imagen de marca) y qué tipo de web te conviene más.",
    extra:
      "Te enviamos una propuesta clara con alcance, tiempos y forma de trabajo.",
  },
  {
    step: "Paso 2",
    title: "Reserva del proyecto (50% inicial)",
    description:
      "Con el 50% adelantado bloqueamos agenda, organizamos contenido (textos, fotos, logos) y definimos dirección visual para arrancar con orden.",
    extra: "Nada se desarrolla a ciegas: primero alineamos diseño y estructura.",
  },
  {
    step: "Paso 3",
    title: "Diseño, desarrollo y revisión",
    description:
      "Maquetamos la web, optimizamos versión móvil y conectamos lo necesario (WhatsApp, formularios y herramientas clave según el proyecto).",
    extra: "Te mostramos avances navegables para revisión antes de lanzar.",
  },
  {
    step: "Paso 4",
    title: "Pago final y publicación",
    description:
      "Con el 50% restante realizamos configuración final y publicamos tu sitio en dominio con SSL y pruebas básicas de funcionamiento.",
    extra:
      "Te dejamos guía breve para cambios simples y uso básico del sitio.",
  },
];

const projects = [
  {
    tag: "Landing page",
    name: "Landing para lanzamiento de servicio",
    image: "/portafolio/landing-servicio.jpg",
    summary:
      "Estructura enfocada en propuesta de valor, beneficios y CTA para captación rápida desde campañas.",
  },
  {
    tag: "Web corporativa",
    name: "Sitio para estudio profesional",
    image: "/portafolio/web-estudio.jpg",
    summary:
      "Presentación más seria de marca y servicios, con narrativa pensada para confianza y decisión.",
  },
  {
    tag: "Tienda online",
    name: "Catálogo para tienda de productos",
    image: "/portafolio/tienda-productos.jpg",
    summary:
      "Experiencia de catálogo y compra orientada a claridad, navegación y ventas por canales digitales.",
  },
];

const trustPills = [
  {
    icon: ShieldCheck,
    title: "Cotización personalizada",
    text: "Sin precios públicos rígidos",
  },
  {
    icon: Smartphone,
    title: "Mobile-first real",
    text: "Pensado para tráfico desde anuncios",
  },
  {
    icon: Gauge,
    title: "Diseño + conversión",
    text: "Estructura clara y premium",
  },
  {
    icon: Sparkles,
    title: "Trabajo por fases",
    text: "50% / 50% con proceso ordenado",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const currentYear = new Date().getFullYear();

  const motionCfg = useMemo(() => {
    const fadeUp = (delay = 0, y = 20) =>
      prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
          };

    const fadeIn = (delay = 0) =>
      prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
          };

    const heroEnter = (delay = 0) =>
      prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0, y: 14, scale: 0.995 },
            animate: { opacity: 1, y: 0, scale: 1 },
            transition: { duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] },
          };

    const hoverLift = prefersReducedMotion
      ? {}
      : { whileHover: { y: -4, scale: 1.006 }, transition: { duration: 0.2 } };

    const hoverTiny = prefersReducedMotion
      ? {}
      : { whileHover: { y: -2 }, transition: { duration: 0.18 } };

    return { fadeUp, fadeIn, heroEnter, hoverLift, hoverTiny };
  }, [prefersReducedMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <main className="min-h-screen">
        {/* NAVBAR */}
        <header className="sticky top-0 z-30 border-b border-white/60 bg-white/85 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
          <div className="section-wrapper flex items-center justify-between py-3">
            <a href="#inicio" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-[var(--brand-primary)] shadow-[0_14px_28px_rgba(16,120,255,0.28)]">
                <Image
                  src="/logo-lulab.png"
                  alt="Lulabtech logo"
                  width={28}
                  height={28}
                  className="rounded-xl"
                  priority
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-semibold tracking-tight text-slate-900">
                  Lulabtech Studio
                </span>
                <span className="text-[11px] text-slate-500">
                  Landing pages · Webs · Tiendas · Automatizaciones
                </span>
              </div>
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/80 p-1 shadow-sm sm:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group relative rounded-full px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  <span>{item.label}</span>
                  <span className="pointer-events-none absolute inset-x-3 bottom-1 h-[2px] origin-left scale-x-0 rounded-full bg-sky-500 transition-transform duration-200 group-hover:scale-x-100" />
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={whatsappLink}
                className="hidden items-center gap-2 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-[11px] font-semibold text-white shadow-[0_14px_28px_rgba(16,184,128,0.30)] transition hover:-translate-y-[1px] hover:bg-emerald-400 sm:inline-flex"
              >
                Hablemos por WhatsApp
                <ArrowRight className="h-3 w-3" />
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 sm:hidden"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="border-t border-slate-200 bg-white/95 sm:hidden">
              <div className="section-wrapper flex flex-col gap-2 py-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-3 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={whatsappLink}
                  onClick={() => setMenuOpen(false)}
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-4 py-2.5 text-[11px] font-semibold text-white shadow-md shadow-emerald-300/60"
                >
                  Hablemos por WhatsApp
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          )}
        </header>

        {/* HERO */}
        <section
          id="inicio"
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-br from-sky-50 via-white to-emerald-50 pb-14 pt-8 sm:pb-20 sm:pt-12"
        >
          <div className="pointer-events-none absolute -top-24 -left-28 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.16),_transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute -top-8 -right-20 h-60 w-60 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,184,128,0.14),_transparent_70%)] blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center opacity-70">
            <div className="h-72 w-[42rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(16,120,255,0.12),_transparent_70%)]" />
          </div>

          <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:items-center">
            <m.div {...motionCfg.heroEnter(0)}>
              <span className="badge-soft mb-4">
                Estudio digital con base en Panamá · atención a clientes locales e
                internacionales
              </span>

              <h1 className="max-w-[14ch] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:max-w-[16ch] lg:text-5xl xl:text-[3.4rem] xl:leading-[1.02]">
                Webs y automatizaciones con enfoque en
                <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  ventas, confianza y presencia premium.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Diseñamos landing pages, webs corporativas y tiendas online para
                marcas que ya se mueven en redes, pero necesitan una presencia web
                seria, clara y lista para convertir mejor.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <m.a
                  {...motionCfg.hoverTiny}
                  href={whatsappLink}
                  className="btn-primary"
                >
                  Quiero cotizar mi proyecto
                  <ArrowRight className="ml-1 h-4 w-4" />
                </m.a>
                <m.a {...motionCfg.hoverTiny} href="#cotizacion" className="btn-ghost">
                  Ver cómo cotizamos
                </m.a>
              </div>

              <div className="mt-7 flex flex-wrap gap-2 text-[11px] text-slate-600">
                <span className="badge-soft bg-white/90 text-slate-700 ring-1 ring-slate-200/70">
                  Diseño premium
                </span>
                <span className="badge-soft bg-white/90 text-slate-700 ring-1 ring-slate-200/70">
                  Mobile-first real
                </span>
                <span className="badge-soft bg-white/90 text-slate-700 ring-1 ring-slate-200/70">
                  Cotización personalizada
                </span>
              </div>

              <div className="mt-9 hidden items-center gap-3 text-[11px] text-slate-500 md:flex">
                <span className="h-px w-10 bg-slate-300" />
                <span>Explora servicios, proceso y forma de trabajo</span>
              </div>
            </m.div>

            <m.div
              {...motionCfg.heroEnter(0.06)}
              className="glass-card relative overflow-hidden border-white/70 shadow-[0_26px_70px_rgba(15,23,42,0.14)]"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.20),_transparent_70%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-sky-100/30 to-transparent" />

              <div className="relative space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/60 bg-[var(--brand-primary)] shadow-[0_10px_20px_rgba(16,120,255,0.20)]">
                      <Image
                        src="/logo-lulab.png"
                        alt="Lulabtech logo"
                        width={34}
                        height={34}
                        className="rounded-xl"
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">
                        Lulabtech Studio
                      </p>
                      <p className="text-[11px] text-slate-500">
                        Diseño · Desarrollo · Automatización
                      </p>
                    </div>
                  </div>
                  <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
                    Hecho a medida
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50/90 p-3 shadow-inner">
                  <div className="flex items-center gap-2 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span className="ml-3 flex h-5 flex-1 items-center rounded-full border border-slate-200 bg-white/90 px-3 text-[10px] text-slate-400">
                      lulabtech.com/tu-proyecto
                    </span>
                  </div>

                  <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-2">
                      <div className="h-7 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 shadow-sm shadow-sky-300/60" />
                      <div className="h-3 rounded-full bg-slate-200" />
                      <div className="h-3 rounded-full bg-slate-200/80" />
                      <div className="mt-3 grid gap-2 sm:grid-cols-2">
                        <div className="h-12 rounded-2xl border border-slate-200 bg-white shadow-sm" />
                        <div className="h-12 rounded-2xl border border-slate-200 bg-white shadow-sm" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="h-20 rounded-2xl border border-slate-200 bg-slate-200/80" />
                      <div className="h-3 rounded-full bg-slate-200/80" />
                      <div className="h-3 w-4/5 rounded-full bg-slate-200/70" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 text-[11px] text-slate-600 sm:grid-cols-3">
                  <div className="rounded-2xl border border-slate-100 bg-sky-50/70 p-3">
                    <p className="text-[11px] text-slate-500">Pensado para campañas</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      +Conversión
                    </p>
                    <p className="mt-1 text-[11px]">
                      Estructuras claras para tráfico desde Meta Ads y Google.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-emerald-50/80 p-3">
                    <p className="text-[11px] text-slate-500">Pago por fases</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      50% / 50%
                    </p>
                    <p className="mt-1 text-[11px]">Mitad al iniciar · mitad al publicar.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-white p-3">
                    <p className="text-[11px] text-slate-500">Soporte humano</p>
                    <p className="mt-1 text-lg font-semibold text-slate-900">
                      Equipo real
                    </p>
                    <p className="mt-1 text-[11px]">
                      Acompañamiento claro en diseño, contenido y lanzamiento.
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500">
                  Contáctanos al{" "}
                  <a
                    href={whatsappLink}
                    className="font-semibold text-sky-700 underline underline-offset-2"
                  >
                    {contactPhone}
                  </a>{" "}
                  o al correo{" "}
                  <a
                    href={`mailto:${contactEmail}`}
                    className="font-semibold text-sky-700 underline underline-offset-2"
                  >
                    {contactEmail}
                  </a>
                  .
                </p>
              </div>
            </m.div>
          </div>

          {/* Trust strip */}
          <div className="section-wrapper mt-10">
            <m.div
              {...motionCfg.fadeUp(0.08)}
              className="grid gap-3 rounded-3xl border border-white/70 bg-white/75 p-3 shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur sm:grid-cols-2 lg:grid-cols-4"
            >
              {trustPills.map((pill) => (
                <div
                  key={pill.title}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-3"
                >
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <pill.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-slate-900">
                      {pill.title}
                    </p>
                    <p className="text-[10px] text-slate-500">{pill.text}</p>
                  </div>
                </div>
              ))}
            </m.div>
          </div>
        </section>

        {/* SERVICIOS */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="servicios"
          className="relative border-b border-slate-200 bg-sky-50/60 py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/70 to-transparent" />
          <div className="section-wrapper relative">
            <div className="max-w-2xl">
              <p className="section-title">Servicios principales</p>
              <h2 className="section-heading">
                Diseño, web y automatización para vender con mejor presencia.
              </h2>
              <p className="section-subtitle">
                Priorizamos claridad comercial, estética premium y ejecución
                técnica para que tu marca se vea seria y convierta mejor.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {services.map((service, index) => (
                <m.div
                  key={service.title}
                  {...motionCfg.fadeUp(index * 0.04, 16)}
                  {...motionCfg.hoverLift}
                  className="glass-card group flex h-full flex-col gap-4 border-white/70 bg-white/90 p-5 sm:p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-sky-100 bg-sky-50 text-sky-600 transition group-hover:scale-105">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-1 space-y-1.5 text-[11px] text-slate-600 sm:text-xs">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              ))}
            </div>
          </div>
        </m.section>

        {/* COTIZACIÓN / TIPOS DE PROYECTO */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="cotizacion"
          className="border-b border-slate-200 bg-white py-16 sm:py-20"
        >
          <div className="section-wrapper">
            <div className="max-w-3xl">
              <p className="section-title">Tipos de proyecto y cotización</p>
              <h2 className="section-heading">
                Cotizamos según alcance real, no con precios públicos rígidos.
              </h2>
              <p className="section-subtitle">
                Cada negocio tiene objetivos y necesidades distintas. Por eso
                trabajamos con cotización personalizada y una propuesta clara antes
                de iniciar.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {solutionTypes.map((type, index) => (
                <m.div
                  key={type.name}
                  {...motionCfg.fadeUp(index * 0.05, 16)}
                  {...motionCfg.hoverLift}
                  className={`relative flex h-full flex-col rounded-3xl border bg-white p-5 sm:p-6 ${
                    type.highlight
                      ? "border-sky-300 shadow-[0_18px_45px_rgba(56,189,248,0.18)]"
                      : "border-slate-200 shadow-sm"
                  }`}
                >
                  {type.highlight && (
                    <div className="absolute right-4 top-4 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 ring-1 ring-sky-300">
                      Más solicitado
                    </div>
                  )}

                  <p className="text-xs font-semibold text-slate-700">{type.name}</p>
                  <p className="mt-2 text-[11px] text-slate-500">{type.badge}</p>
                  <p className="mt-3 text-[11px] leading-relaxed text-slate-600">
                    {type.description}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[11px] text-slate-600">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex-1" />

                  <a
                    href={whatsappLink}
                    className={`mt-4 inline-flex items-center justify-center rounded-full px-4 py-2.5 text-[11px] font-semibold transition ${
                      type.highlight
                        ? "bg-[var(--brand-primary)] text-white shadow-lg shadow-sky-400/40 hover:bg-sky-600"
                        : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-white"
                    }`}
                  >
                    Cotizar este tipo de proyecto
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </m.div>
              ))}
            </div>

            <m.div
              {...motionCfg.fadeUp(0.05, 16)}
              className="mt-8 grid gap-5 rounded-3xl border border-slate-200 bg-slate-50/90 p-5 shadow-sm lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <p className="text-xs font-semibold text-slate-900">
                  ¿Qué define la cotización?
                </p>
                <p className="mt-2 text-[12px] text-slate-600">
                  Te enviamos una propuesta con alcance, tiempos y forma de
                  trabajo. Estos son los factores principales que evaluamos:
                </p>
                <ul className="mt-4 grid gap-2 text-[11px] text-slate-600 sm:grid-cols-2">
                  {quoteFactors.map((factor) => (
                    <li
                      key={factor}
                      className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2"
                    >
                      <CheckCircle2 className="mt-[1px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                      <span>{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-[11px] text-emerald-900">
                <p className="font-semibold">Forma de trabajo y pago</p>
                <p className="mt-2 text-emerald-800">
                  Mantenemos un esquema simple y claro:{" "}
                  <strong>50% para reservar e iniciar</strong> y{" "}
                  <strong>50% al aprobar y publicar</strong>.
                </p>
                <p className="mt-3 text-emerald-800">
                  Esto nos permite trabajar con agenda organizada, entregables
                  claros y sin improvisación.
                </p>
                <a
                  href={whatsappLink}
                  className="mt-4 inline-flex items-center rounded-full border border-emerald-300 bg-white px-4 py-2 font-semibold text-emerald-700 transition hover:bg-emerald-100"
                >
                  Solicitar cotización personalizada
                  <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </a>
              </div>
            </m.div>
          </div>
        </m.section>

        {/* PROCESO */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="proceso"
          className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
        >
          <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,1fr)]">
            <div>
              <p className="section-title">Proceso Lulabtech</p>
              <h2 className="section-heading">
                Simple, transparente y pensado para avanzar sin fricción.
              </h2>
              <p className="section-subtitle">
                Trabajamos por etapas. Sabes qué se está haciendo, qué necesitas
                enviar y qué sigue después. Sin tecnicismos innecesarios.
              </p>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-[11px] text-emerald-800 shadow-sm">
                <p className="font-semibold text-emerald-900">
                  Esquema de pago 50% / 50%
                </p>
                <p className="mt-1">
                  50% para reservar tu cupo y arrancar el proyecto · 50% al
                  aprobar el sitio y publicarlo en tu dominio.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-[11px] sm:text-xs">
              {steps.map((stepItem, index) => (
                <m.div
                  key={stepItem.title}
                  {...motionCfg.fadeUp(index * 0.04, 12)}
                  className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <span className="rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
                      {stepItem.step}
                    </span>
                    <span className="text-[10px] text-slate-400">
                      Etapa {index + 1} de 4
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-900">
                    {stepItem.title}
                  </p>
                  <p className="mt-1 text-slate-600">{stepItem.description}</p>
                  <p className="mt-1 text-[11px] text-slate-500">{stepItem.extra}</p>
                </m.div>
              ))}
            </div>
          </div>
        </m.section>

        {/* EQUIPO / DIRECCIÓN */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="equipo"
          className="relative border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 py-16 sm:py-20"
        >
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/60 to-transparent" />
          <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
            <div>
              <p className="section-title">Equipo y dirección</p>
              <h2 className="section-heading">
                Dirección creativa y ejecución técnica en el mismo equipo.
              </h2>
              <p className="section-subtitle">
                En Lulabtech trabajas con personas reales que entienden negocio,
                diseño y desarrollo. Nuestro enfoque es ayudarte a vender mejor con
                una web clara, rápida y bien presentada.
              </p>

              <ul className="mt-6 space-y-2 text-[11px] text-slate-600 sm:text-xs">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                  <span>
                    Te hablamos en lenguaje de negocio: objetivos, prioridades,
                    tiempos y resultados esperados.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                  <span>
                    Diseñamos pensando en campañas, experiencia móvil y
                    percepción de marca.
                  </span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                  <span>
                    Revisamos contigo el proyecto antes de publicar para que
                    salgas con confianza.
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-700">
                <m.a
                  {...motionCfg.hoverTiny}
                  href={whatsappLink}
                  className="btn-primary"
                >
                  Hablar con dirección por WhatsApp
                  <ArrowRight className="ml-1 h-3 w-3" />
                </m.a>
                <m.a
                  {...motionCfg.hoverTiny}
                  href={`mailto:${contactEmail}`}
                  className="btn-ghost text-[11px]"
                >
                  Escribir a {contactEmail}
                </m.a>
              </div>
            </div>

            <m.div
              {...motionCfg.fadeUp(0.08, 16)}
              className="glass-card relative overflow-hidden border-white/70 bg-white/90"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.22),_transparent)]" />
              <div className="relative">
                <p className="text-xs font-semibold text-sky-700">
                  Enfoque de trabajo
                </p>
                <p className="mt-3 text-sm font-semibold text-slate-950">
                  “Tu web debe verse tan seria como el servicio que ya vendes.”
                </p>
                <p className="mt-3 text-[11px] text-slate-600">
                  Diseñamos con criterio comercial: estructura clara, mensajes
                  entendibles, llamadas a la acción visibles y una experiencia que
                  se sienta premium desde móvil.
                </p>
                <p className="mt-4 text-[11px] text-slate-500">
                  El objetivo no es llenar de efectos. El objetivo es que tu marca
                  se vea mejor, comunique mejor y convierta mejor.
                </p>
              </div>
            </m.div>
          </div>
        </m.section>

        {/* PORTAFOLIO */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="portafolio"
          className="border-b border-slate-200 bg-white py-16 sm:py-20"
        >
          <div className="section-wrapper">
            <div className="max-w-2xl">
              <p className="section-title">Portafolio</p>
              <h2 className="section-heading">
                Tipos de proyectos que trabajamos con enfoque visual y comercial.
              </h2>
              <p className="section-subtitle">
                Esta sección presenta ejemplos visuales por tipo de proyecto para
                ayudarte a entender el estilo y la dirección que podemos
                desarrollar para tu marca.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {projects.map((project, index) => (
                <m.article
                  key={project.name}
                  {...motionCfg.fadeUp(index * 0.04, 16)}
                  {...motionCfg.hoverLift}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 767px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-900/25 to-transparent opacity-70" />
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                    <span className="mb-1 inline-flex w-fit rounded-full bg-sky-50 px-2 py-1 text-[10px] font-medium text-sky-700">
                      {project.tag}
                    </span>
                    <p className="text-[13px] font-semibold text-slate-900">
                      {project.name}
                    </p>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                      {project.summary}
                    </p>
                    <a
                      href={whatsappLink}
                      className="mt-3 inline-flex items-center text-[11px] font-semibold text-sky-700 transition hover:text-sky-800"
                    >
                      Quiero algo similar
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </m.article>
              ))}
            </div>
          </div>
        </m.section>

        {/* CONTACTO */}
        <m.section
          {...motionCfg.fadeUp(0)}
          id="contacto"
          className="bg-slate-50 pb-24 pt-16 sm:pb-20 sm:pt-20"
        >
          <div className="section-wrapper">
            <div className="glass-card relative overflow-hidden border-white/70 bg-gradient-to-r from-sky-50 via-white to-emerald-50 shadow-[0_24px_70px_rgba(15,23,42,0.10)]">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.24),_transparent)]" />
              <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-center">
                <div>
                  <p className="section-title">Cotización</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    ¿Listo/a para llevar tu marca a una web más seria, clara y
                    lista para convertir?
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    Escríbenos por WhatsApp y cuéntanos qué vendes, qué objetivo
                    tienes y qué tipo de proyecto te interesa. Te respondemos con
                    orientación clara y propuesta personalizada.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <m.a
                      {...motionCfg.hoverTiny}
                      href={whatsappLink}
                      className="btn-primary"
                    >
                      Empezar por WhatsApp
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </m.a>
                    <span className="text-[11px] text-slate-500">
                      Tiempo de respuesta habitual: menos de 24 horas.
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-600">
                    También puedes escribir a{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      className="font-semibold text-sky-700 underline underline-offset-2"
                    >
                      {contactEmail}
                    </a>{" "}
                    o al{" "}
                    <a
                      href={whatsappLink}
                      className="font-semibold text-sky-700 underline underline-offset-2"
                    >
                      {contactPhone}
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/85 p-4 text-[11px] text-slate-600 shadow-sm">
                  <p className="font-semibold text-slate-900">
                    ¿Qué incluimos en una cotización?
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                      <span>Resumen del proyecto y objetivo principal.</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                      <span>
                        Tipo de solución recomendada (landing, corporativa,
                        tienda, automatización).
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                      <span>
                        Alcance, entregables y forma de trabajo 50% / 50%.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[var(--brand-accent)]" />
                      <span>Tiempos tentativos de inicio y entrega.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-[11px] text-slate-500 sm:flex-row">
              <p>© {currentYear} Lulabtech Studio. Todos los derechos reservados.</p>
              <p className="text-[11px]">
                Contacto: {contactPhone} · {contactEmail}
              </p>
            </footer>
          </div>
        </m.section>

        {/* BOTÓN FLOTANTE WHATSAPP */}
        <a
          href={whatsappLink}
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(16,185,129,0.45)] transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:px-4"
          aria-label="Escríbenos por WhatsApp"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/90 text-[12px] font-bold">
            WA
          </span>
          <span className="hidden sm:inline">Escríbenos por WhatsApp</span>
        </a>
      </main>
    </LazyMotion>
  );
}
