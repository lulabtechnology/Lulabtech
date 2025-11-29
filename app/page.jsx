"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Monitor,
  Globe2,
  ShoppingBag,
  Bot,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#equipo", label: "El calvo" },
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
    title: "Landing pages que convierten",
    description:
      "Perfectas para campañas de Instagram, lanzamientos puntuales o capturar leads de un solo producto/servicio.",
    items: [
      "Una sola página enfocada 100% a la conversión",
      "Sección hero con propuesta de valor clara",
      "Bloques de beneficios + prueba social",
      "Botón directo a WhatsApp o formulario",
    ],
  },
  {
    icon: Globe2,
    title: "Webs corporativas",
    description:
      "Sitios pensados para mostrar quién eres, qué haces y por qué confiar en tu marca.",
    items: [
      "Estructura pensada para empresas y profesionales",
      "Hasta 5 secciones principales",
      "Integración con redes sociales y formularios",
      "Textos y estructura pensados para explicar rápido qué haces.",
    ],
  },
  {
    icon: ShoppingBag,
    title: "Tiendas online",
    description:
      "Tu catálogo disponible 24/7 para vender por WhatsApp, email o pasarelas de pago.",
    items: [
      "Catálogo administrable por categorías",
      "Carrito que envía el pedido a WhatsApp o correo",
      "Soporte para pasarela de pago (según país/proveedor)",
      "Panel sencillo para actualizar productos",
    ],
  },
  {
    icon: Bot,
    title: "Business bots & chatbots",
    description:
      "Automatizamos respuestas frecuentes y flujos simples para que tu equipo se enfoque en cerrar ventas.",
    items: [
      "Bots para WhatsApp, web o redes sociales",
      "Flujos guiados para calificar leads",
      "Entrega de información clave 24/7",
      "Soporte en español adaptado a tu marca",
    ],
  },
];

const plans = [
  {
    name: "Landing page",
    price: "desde $150",
    badge: "Ideal para campañas y lanzamientos",
    description:
      "Para probar una idea, lanzar un servicio o centralizar el tráfico de anuncios.",
    features: [
      "One-page responsive (móvil primero)",
      "Sección hero, servicios, prueba social y CTA",
      "Integración con WhatsApp o formulario",
      "Entrega estimada: 5–7 días hábiles",
    ],
  },
  {
    name: "Web corporativa",
    price: "desde $300",
    badge: "Para empresas y marcas en crecimiento",
    description:
      "Presencia sólida en internet para mostrar tu negocio y generar confianza.",
    features: [
      "Hasta 5 secciones (Inicio, Servicios, Nosotros, Contacto, etc.)",
      "Blog o sección de novedades básica",
      "Optimización básica de velocidad y rendimiento",
      "Configuración de dominio y hosting incluido",
    ],
    highlight: true,
  },
  {
    name: "Tienda online",
    price: "desde $500",
    badge: "Pensada para vender todos los días",
    description:
      "Catálogo ordenado, fácil de navegar, listo para vender por WhatsApp o checkout.",
    features: [
      "Catálogo de productos con categorías",
      "Carrito que envía el pedido a WhatsApp o correo",
      "Integración con pasarela de pago (según proveedor)",
      "Entrenamiento corto para que la puedas manejar",
    ],
  },
];

const steps = [
  {
    step: "Paso 1",
    title: "Definimos lo que quieres lograr",
    description:
      "Conversamos para entender tu negocio, objetivo principal (reservas, leads, ventas, etc.) y escogemos el tipo de web ideal.",
    extra: "Aquí te enviamos la propuesta formal y el monto a invertir.",
  },
  {
    step: "Paso 2",
    title: "Reserva del proyecto (50% inicial)",
    description:
      "Con el 50% adelantado bloqueamos agenda, organizamos el contenido (textos, fotos, logotipos) y te presentamos el wireframe y paleta de colores.",
    extra: "Nada se programa hasta que estés cómodo con el diseño.",
  },
  {
    step: "Paso 3",
    title: "Diseño, desarrollo y pruebas",
    description:
      "Maquetamos la web con animaciones suaves, preparamos la versión móvil y conectamos lo necesario (WhatsApp, formularios, analítica).",
    extra:
      "Te mostramos avances navegables para que los revises antes del lanzamiento.",
  },
  {
    step: "Paso 4",
    title: "Pago final y lanzamiento en tu dominio",
    description:
      "Se realiza el 50% restante y configuramos tu dominio (DNS, hosting y SSL) para que tu web quede online con tu nombre.",
    extra:
      "Hacemos pruebas finales y te dejamos una mini-guía para que no dependas de nadie para cambios simples.",
  },
];

const projects = [
  {
    tag: "Landing page",
    name: "Landing para lanzamiento de servicio",
    image: "/portafolio/landing-servicio.jpg",
  },
  {
    tag: "Web corporativa",
    name: "Sitio para estudio profesional",
    image: "/portafolio/web-estudio.jpg",
  },
  {
    tag: "Tienda online",
    name: "Catálogo para tienda de productos",
    image: "/portafolio/tienda-productos.jpg",
  },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="section-wrapper flex items-center justify-between py-3">
          {/* Logo + nombre */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--brand-primary)] shadow-lg shadow-sky-300/60">
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
                Landing pages · Webs · Tiendas · Bots
              </span>
            </div>
          </div>

          {/* Menú desktop */}
          <nav className="hidden items-center gap-6 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative text-xs font-medium text-slate-600 transition hover:text-slate-950"
              >
                <span>{item.label}</span>
                <span className="pointer-events-none absolute left-0 top-full mt-1 h-[2px] w-0 bg-sky-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + menú móvil */}
          <div className="flex items-center gap-2">
            <a
              href={whatsappLink}
              className="hidden items-center gap-2 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-emerald-300/80 transition hover:-translate-y-[1px] hover:bg-emerald-400 sm:inline-flex"
            >
              Hablemos por WhatsApp
              <ArrowRight className="h-3 w-3" />
            </a>

            {/* Botón hamburguesa solo en móvil */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 sm:hidden"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Panel del menú móvil */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white/95 sm:hidden">
            <div className="section-wrapper flex flex-col gap-2 py-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappLink}
                onClick={() => setMenuOpen(false)}
                className="mt-1 inline-flex items-center justify-center rounded-full bg-[var(--brand-accent)] px-4 py-2 text-[11px] font-semibold text-white shadow-md shadow-emerald-300/70"
              >
                Hablemos por WhatsApp
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <motion.section
        id="inicio"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 pb-16 pt-10 sm:pb-24 sm:pt-14"
      >
        {/* blobs parallax */}
        <motion.div
          style={{ y: blobY }}
          className="pointer-events-none absolute -top-24 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.35),_transparent)] blur-3xl"
        />
        <motion.div
          style={{ y: blobY2 }}
          className="pointer-events-none absolute -top-10 -right-32 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,184,128,0.35),_transparent)] blur-3xl"
        />
        <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 flex justify-center opacity-40">
          <div className="h-64 w-[34rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(16,120,255,0.25),_transparent_70%)]" />
        </div>

        <div className="section-wrapper grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1.1fr)] lg:items-center">
          {/* Texto hero */}
          <div>
            <span className="badge-soft mb-4">
              Estudio digital con base en Panamá · proyectos online
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Webs y automatizaciones que convierten{" "}
              <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-emerald-500 bg-clip-text text-transparent">
                seguidores en clientes.
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Creamos landing pages, webs corporativas, tiendas online y
              chatbots pensados para personas que venden{" "}
              <span className="font-medium text-sky-700">
                todos los días en Instagram y WhatsApp
              </span>
              , pero necesitan una presencia web seria que se vea “wow”.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappLink}
                className="btn-primary"
              >
                Quiero cotizar ahora
                <ArrowRight className="ml-1 h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                href="#planes"
                className="btn-ghost"
              >
                Ver planes y precios
              </motion.a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-slate-600">
              <span className="badge-soft bg-sky-50 text-sky-800">
                Landing pages desde $150
              </span>
              <span className="badge-soft bg-sky-50 text-sky-800">
                Webs corporativas desde $300
              </span>
              <span className="badge-soft bg-sky-50 text-sky-800">
                Tiendas online desde $500
              </span>
            </div>

            <div className="mt-10 hidden items-center gap-3 text-[11px] text-slate-500 md:flex">
              <span className="h-px w-10 bg-slate-300" />
              <span>Desplaza para ver cómo trabajamos</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300">
                <span className="animate-bounce text-xs">↓</span>
              </span>
            </div>
          </div>

          {/* Mockup hero */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="glass-card relative overflow-hidden"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.28),_transparent)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--brand-primary)]">
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

              {/* mockup tipo navegador */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 shadow-sm">
                <div className="flex items-center gap-2 pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  <span className="ml-3 h-5 flex-1 rounded-full bg-white/80 px-3 text-[10px] text-slate-400 flex items-center">
                    lulabtech.com/tu-proyecto
                  </span>
                </div>

                <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-2">
                    <div className="h-7 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600" />
                    <div className="h-3 rounded-full bg-slate-200" />
                    <div className="h-3 rounded-full bg-slate-200/80" />
                    <div className="mt-3 grid gap-2 sm:grid-cols-2">
                      <div className="h-12 rounded-2xl bg-white shadow-sm" />
                      <div className="h-12 rounded-2xl bg-white shadow-sm" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="h-20 rounded-2xl bg-slate-200" />
                    <div className="h-3 rounded-full bg-slate-200/80" />
                    <div className="h-3 rounded-full bg-slate-200/70 w-4/5" />
                  </div>
                </div>
              </div>

              <div className="grid gap-4 text-[11px] text-slate-600 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-sky-50/60 p-3">
                  <p className="text-[11px] text-slate-500">
                    Pensado para redes
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    +Ventas
                  </p>
                  <p className="mt-1 text-[11px]">
                    Webs diseñadas para campañas de Meta Ads.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-emerald-50/70 p-3">
                  <p className="text-[11px] text-slate-500">
                    Pago por fases
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    50% / 50%
                  </p>
                  <p className="mt-1 text-[11px]">
                    Mitad al iniciar · mitad al lanzar.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white p-3">
                  <p className="text-[11px] text-slate-500">Soporte humano</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    Equipo real
                  </p>
                  <p className="mt-1 text-[11px]">
                    Te acompaña un equipo de personas reales que entiende tu
                    negocio y tu contexto, no un bot.
                  </p>
                </div>
              </div>

              <p className="mt-1 text-[11px] text-slate-500">
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
          </motion.div>
        </div>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section
        id="servicios"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-200 bg-sky-50/70 py-16 sm:py-20"
      >
        <div className="section-wrapper">
          <div className="max-w-2xl">
            <p className="section-title">Qué hacemos</p>
            <h2 className="section-heading">
              Una sola casa para tu landing, web, tienda y bots.
            </h2>
            <p className="section-subtitle">
              No hacemos webs genéricas. Cada proyecto parte de tu realidad:
              qué vendes, cómo cobras y por dónde llega tu cliente ideal.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card flex h-full flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 sm:text[13px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-600 sm:text-xs">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PLANES */}
      <motion.section
        id="planes"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="section-wrapper">
          <div className="max-w-2xl">
            <p className="section-title">Planes y precios</p>
            <h2 className="section-heading">
              Elige el tipo de proyecto que mejor encaja contigo.
            </h2>
            <p className="section-subtitle">
              Todos los proyectos se trabajan con 50% al iniciar y 50% al
              entregar, con contrato simple y fechas claras.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07, duration: 0.6 }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: plan.highlight
                    ? "0 22px 60px rgba(56,189,248,0.45)"
                    : "0 18px 40px rgba(15,23,42,0.12)",
                }}
                className={`relative flex h-full flex-col rounded-3xl border bg-white p-6 text-sm ${
                  plan.highlight
                    ? "border-sky-300 shadow-[0_20px_60px_rgba(56,189,248,0.35)]"
                    : "border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-4 top-4 rounded-full bg-sky-50 px-3 py-1 text-[11px] font-semibold text-sky-700 ring-1 ring-sky-300">
                    Más elegido
                  </div>
                )}

                <p className="text-xs font-semibold text-slate-700">
                  {plan.name}
                </p>
                <p className="mt-2 text-xl font-semibold text-slate-950">
                  {plan.price}
                </p>
                <p className="mt-1 text-[11px] text-slate-500">
                  {plan.badge}
                </p>
                <p className="mt-3 text-[11px] text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-[11px] text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex-1" />

                <a
                  href={whatsappLink}
                  className={`mt-4 inline-flex items-center justify-center rounded-full px-4 py-2 text-[11px] font-semibold transition ${
                    plan.highlight
                      ? "bg-[var(--brand-primary)] text-white shadow-lg shadow-sky-400/60 hover:bg-sky-600"
                      : "border border-slate-200 bg-slate-50 text-slate-800 hover:bg-white"
                  }`}
                >
                  Cotizar este tipo de proyecto
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROCESO */}
      <motion.section
        id="proceso"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-200 bg-slate-50 py-16 sm:py-20"
      >
        <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <div>
            <p className="section-title">Proceso Lulabtech</p>
            <h2 className="section-heading">
              Simple, transparente y sin sorpresas en el camino.
            </h2>
            <p className="section-subtitle">
              Nos gusta trabajar con claridad: sabes qué se está haciendo, en
              qué etapa vamos y qué viene después. Sin tecnicismos raros.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-[11px] text-emerald-800">
              <p className="font-semibold text-emerald-900">
                Esquema de pago 50% / 50%
              </p>
              <p className="mt-1">
                50% para reservar tu cupo y arrancar el proyecto · 50% al
                aprobar el sitio y publicarlo en tu dominio.
              </p>
            </div>
          </div>

          <div className="space-y-5 text-[11px] sm:text-xs">
            {steps.map((stepItem, index) => (
              <motion.div
                key={stepItem.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.06, duration: 0.6 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-4"
              >
                <div className="mb-1 flex items-center justify_between gap-2">
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
                <p className="mt-1 text-[11px] text-slate-500">
                  {stepItem.extra}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EQUIPO / EL CALVO */}
      <motion.section
        id="equipo"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 py-16 sm:py-20"
      >
        <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">
          <div>
            <p className="section-title">Quién está detrás</p>
            <h2 className="section-heading">
              El calvo detrás de Lulabtech (que realmente hace el trabajo).
            </h2>
            <p className="section-subtitle">
              Detrás de Lulabtech hay un equipo que mezcla estrategia, diseño y
              desarrollo. Hablas con personas reales que piensan la experiencia
              completa de tu cliente y arman el sitio contigo, no con un bot.
            </p>

            <ul className="mt-6 space-y-2 text-[11px] text-slate-600 sm:text-xs">
              <li className="flex gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                <span>
                  Te hablamos en lenguaje normal, no en código: números, ventas
                  y objetivos.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                <span>
                  Diseñamos webs pensadas para rendir bien en campañas reales,
                  no solo para verse bonitas.
                </span>
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                <span>
                  Si algo no te gusta, lo ajustamos: el objetivo es que te
                  sientas orgulloso/a de compartir tu web.
                </span>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-[11px] text-slate-700">
              <a href={whatsappLink} className="btn-primary">
                Hablar directo con el calvo
                <ArrowRight className="ml-1 h-3 w-3" />
              </a>
              <a
                href={`mailto:${contactEmail}`}
                className="btn-ghost text-[11px]"
              >
                O escribir a {contactEmail}
              </a>
            </div>
          </div>

          <div className="glass-card relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.35),_transparent)]" />
            <div className="relative">
              <p className="text-xs font-semibold text-sky-700">
                Mini manifiesto
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-950">
                “La web no es un lujo: es la versión más seria de tu Instagram.”
              </p>
              <p className="mt-3 text-[11px] text-slate-600">
                Por eso cada proyecto se diseña como si fuera para nosotros:
                limpio, directo, sin cosas innecesarias, pero con los detalles
                justos para que la gente diga “wow” cuando entra.
              </p>
              <p className="mt-4 text-[11px] text-slate-500">
                Y sí, si nos escribes por WhatsApp, te responden humanos de
                verdad: café en mano, revisando tu caso y moviendo bloques de
                código para que tu marca se vea brutal.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* PORTAFOLIO */}
      <motion.section
        id="portafolio"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="border-b border-slate-200 bg-white py-16 sm:py-20"
      >
        <div className="section-wrapper">
          <div className="max-w-2xl">
            <p className="section-title">Trabajos</p>
            <h2 className="section-heading">
              Una vitrina para mostrar resultados reales.
            </h2>
            <p className="section-subtitle">
              Aquí irán los proyectos que ya creaste. Por ahora dejamos
              espacios listos para que solo reemplaces las imágenes en la
              carpeta <code>/public/portafolio</code>.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05, duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-slate-50"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                  <div className="absolute inset-3 rounded-2xl border border-slate-300 bg-slate-900/80">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="rounded-2xl object-cover opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <span className="mb-1 inline-flex w-fit rounded-full bg-sky-50 px-2 py-1 text-[10px] font-medium text-sky-700">
                    {project.tag}
                  </span>
                  <p className="text-[13px] font-semibold text-slate-900">
                    {project.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    Reemplaza esta imagen por una captura real de tu proyecto.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-slate-500">
            ✱ Tip: usa mockups limpios (laptops, móviles) para presentar tus
            trabajos de forma más aspiracional.
          </p>
        </div>
      </motion.section>

      {/* CONTACTO */}
      <motion.section
        id="contacto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-50 py-16 sm:py-20"
      >
        <div className="section-wrapper">
          <div className="glass-card relative overflow-hidden border-slate-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,_rgba(16,120,255,0.35),_transparent)]" />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="section-title">Es tu turno</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-slate-950">
                  ¿Lista/o para que tu marca tenga una web que se vea tan bien
                  como lo que ya haces en Instagram?
                </h2>
                <p className="mt-4 text-sm text-slate-600">
                  Escríbenos por WhatsApp, cuéntanos qué vendes y qué idea
                  tienes en mente. Te respondemos con una propuesta clara, sin
                  tecnicismos, en un lenguaje de negocios.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <motion.a
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href={whatsappLink}
                    className="btn-primary"
                  >
                    Empezar por WhatsApp
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </motion.a>
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
                  o llamar / escribir al{" "}
                  <a
                    href={whatsappLink}
                    className="font-semibold text-sky-700 underline underline-offset-2"
                  >
                    {contactPhone}
                  </a>
                  .
                </p>
              </div>

              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white/80 p-4 text-[11px] text-slate-600">
                <p className="font-semibold text-slate-900">
                  ¿Qué enviaremos en la cotización?
                </p>
                <ul className="space-y-1.5">
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                    <span>Resumen del proyecto y objetivo principal.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                    <span>
                      Tipo de web recomendada (landing, corporativa, tienda).
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                    <span>Precio detallado y forma de pago 50% / 50%.</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                    <span>Fechas tentativas de inicio y entrega.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-[11px] text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Lulabtech Studio. Todos los derechos
              reservados.
            </p>
            <p className="text-[11px]">
              Contacto: {contactPhone} · {contactEmail}
            </p>
          </footer>
        </div>
      </motion.section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href={whatsappLink}
        className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-[0_18px_40px_rgba(16,185,129,0.7)] transition hover:-translate-y-1 hover:bg-emerald-400"
      >
        <span className="relative flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-70" />
          <span className="relative text-[13px]">WA</span>
        </span>
        <span className="hidden sm:inline">Escríbenos por WhatsApp</span>
      </a>
    </main>
  );
}
