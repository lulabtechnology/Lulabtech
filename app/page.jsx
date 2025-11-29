"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Monitor,
  Globe2,
  ShoppingBag,
  Bot,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const navItems = [
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#proceso", label: "Proceso" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" }
];

// 👇 Cambia este link por tu número de WhatsApp real
const whatsappLink =
  "https://wa.me/50760000000?text=Hola%20Lulabtech,%20quiero%20cotizar%20una%20web.";

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
      "Botón directo a WhatsApp o formulario"
    ]
  },
  {
    icon: Globe2,
    title: "Webs corporativas",
    description:
      "Sitios pensados para mostrar quién eres, qué haces y por qué confiar en tu marca.",
    items: [
      "Estructura pensada para empresas y profesionales",
      "Hasta 5 secciones principales (Inicio, Servicios, Nosotros, etc.)",
      "Integración con redes sociales y formularios",
      "SEO básico on-page"
    ]
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
      "Panel sencillo para actualizar productos"
    ]
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
      "Soporte en español adaptado a tu marca"
    ]
  }
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
      "Entrega estimada: 5–7 días hábiles"
    ]
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
      "Optimización básica de velocidad y SEO on-page",
      "Configuración de dominio y hosting incluido"
    ],
    highlight: true
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
      "Entrenamiento corto para que la puedas manejar"
    ]
  }
];

const steps = [
  {
    step: "Paso 1",
    title: "Llamada rápida y definición de objetivo",
    description:
      "Hablamos 20–30 minutos para entender tu negocio, objetivo principal (reservas, leads, ventas, etc.) y escogemos el tipo de web ideal.",
    extra: "Aquí te enviamos la propuesta formal y el monto a invertir."
  },
  {
    step: "Paso 2",
    title: "Reserva del proyecto (50% inicial)",
    description:
      "Con el 50% adelantado bloqueamos agenda, organizamos el contenido (textos, fotos, logotipos) y te presentamos el wireframe y paleta de colores.",
    extra: "Nada se programa hasta que estés cómodo con el diseño."
  },
  {
    step: "Paso 3",
    title: "Diseño, desarrollo y pruebas",
    description:
      "Maquetamos la web con animaciones suaves, preparamos la versión móvil y conectamos lo necesario (WhatsApp, formularios, analítica).",
    extra: "Te mostramos avances navegables para que los revises antes del lanzamiento."
  },
  {
    step: "Paso 4",
    title: "Lanzamiento + 50% final",
    description:
      "Publicamos en tu dominio, hacemos pruebas finales y cerramos con una mini-guía de uso para que no dependas de nadie para cambios simples.",
    extra: "El 50% restante se paga contra entrega aprobada."
  }
];

const projects = [
  {
    tag: "Landing page",
    name: "Landing para lanzamiento de servicio",
    image: "/portafolio/landing-servicio.jpg"
  },
  {
    tag: "Web corporativa",
    name: "Sitio para estudio profesional",
    image: "/portafolio/web-estudio.jpg"
  },
  {
    tag: "Tienda online",
    name: "Catálogo para tienda de productos",
    image: "/portafolio/tienda-productos.jpg"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#020617]/80 backdrop-blur">
        <div className="section-wrapper flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--brand-primary)] shadow-lg shadow-sky-500/40">
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
              <span className="text-sm font-semibold tracking-tight">
                Lulabtech Studio
              </span>
              <span className="text-[11px] text-slate-400">
                Landing pages · Webs · Tiendas · Bots
              </span>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-xs sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            className="hidden items-center gap-2 rounded-full bg-[var(--brand-accent)] px-4 py-2 text-[11px] font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-300 sm:inline-flex"
          >
            Hablemos por WhatsApp
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <motion.section
        id="inicio"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#020617] via-[#020617] to-[#081021] pb-16 pt-10 sm:pb-24 sm:pt-14"
      >
        <div className="pointer-events-none absolute inset-x-0 -top-32 -z-10 flex justify-center opacity-60">
          <div className="h-64 w-[32rem] rounded-full bg-[radial-gradient(circle_at_top,_rgba(16,120,255,0.3),_transparent_70%)]" />
        </div>

        <div className="section-wrapper grid gap-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-center">
          {/* Texto hero */}
          <div>
            <span className="badge-soft mb-4">
              Estudio digital con base en Panamá · proyectos online
            </span>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Webs y automatizaciones que convierten{" "}
              <span className="text-sky-300">seguidores en clientes.</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Creamos landing pages, webs corporativas, tiendas online y
              chatbots pensados para personas que venden{" "}
              <span className="font-medium text-sky-200">
                todos los días en Instagram y WhatsApp
              </span>
              , pero necesitan una presencia web seria que se vea “wow”.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href={whatsappLink} className="btn-primary">
                Quiero cotizar ahora
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
              <a href="#planes" className="btn-ghost">
                Ver planes y precios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-[11px] text-slate-300">
              <span className="badge-soft bg-white/5 text-[11px]">
                Landing pages desde $150
              </span>
              <span className="badge-soft bg-white/5 text-[11px]">
                Webs corporativas desde $300
              </span>
              <span className="badge-soft bg-white/5 text-[11px]">
                Tiendas online desde $500
              </span>
            </div>
          </div>

          {/* Tarjeta logo + stats */}
          <div className="glass-card relative overflow-hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,120,255,0.18),_transparent_60%)]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-[var(--brand-primary)]">
                    <Image
                      src="/logo-lulab.png"
                      alt="Lulabtech logo"
                      width={40}
                      height={40}
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      Lulabtech Studio
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Diseño · Desarrollo · Automatización
                    </p>
                  </div>
                </div>
                <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-300">
                  Hecho a medida
                </div>
              </div>

              <div className="grid gap-4 text-xs text-slate-200 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-3">
                  <p className="text-[11px] text-slate-400">
                    Pensado para redes
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    +Ventas
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Webs diseñadas para campañas de Meta Ads.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <p className="text-[11px] text-slate-400">
                    Pago por fases
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    50% / 50%
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Mitad al iniciar · mitad al lanzar.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/5 p-3">
                  <p className="text-[11px] text-slate-400">Acompañamiento</p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    Soporte
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Guía básica para que puedas autogestionar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section
        id="servicios"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="border-b border-white/5 bg-[var(--brand-soft)]/40 py-16 sm:py-20"
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
            {services.map((service) => (
              <div
                key={service.title}
                className="glass-card flex h-full flex-col gap-4 bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--brand-primary)]/15 text-[var(--brand-accent)]">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 sm:text-[13px]">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-2 space-y-1.5 text-[11px] text-slate-300 sm:text-xs">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 text-[var(--brand-accent)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PLANES Y PRECIOS */}
      <motion.section
        id="planes"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="border-b border-white/5 bg-[#020617] py-16 sm:py-20"
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
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col rounded-3xl border bg-white/[0.02] p-6 text-sm ${
                  plan.highlight
                    ? "border-sky-400/70 shadow-[0_20px_60px_rgba(56,189,248,0.4)]"
                    : "border-white/10"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-4 top-4 rounded-full bg-sky-400/10 px-3 py-1 text-[11px] font-semibold text-sky-300 ring-1 ring-sky-400/40">
                    Más elegido
                  </div>
                )}

                <p className="text-xs font-semibold text-slate-300">
                  {plan.name}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  {plan.price}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">
                  {plan.badge}
                </p>
                <p className="mt-3 text-[11px] text-slate-300">
                  {plan.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
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
                      ? "bg-[var(--brand-primary)] text-white shadow-lg shadow-sky-500/40 hover:bg-sky-400"
                      : "border border-white/15 bg-white/5 text-slate-100 hover:bg-white/10"
                  }`}
                >
                  Cotizar este tipo de proyecto
                  <ArrowRight className="ml-1 h-3 w-3" />
                </a>
              </div>
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
        transition={{ duration: 0.7 }}
        className="border-b border-white/5 bg-[var(--brand-soft)]/60 py-16 sm:py-20"
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

            <div className="mt-6 rounded-2xl border border-emerald-400/40 bg-emerald-400/5 p-4 text-[11px] text-emerald-100">
              <p className="font-semibold text-emerald-200">
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
              <div
                key={stepItem.title}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-300">
                    {stepItem.step}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    Etapa {index + 1} de 4
                  </span>
                </div>
                <p className="text-xs font-semibold text-white">
                  {stepItem.title}
                </p>
                <p className="mt-1 text-slate-300">{stepItem.description}</p>
                <p className="mt-1 text-[11px] text-slate-400">
                  {stepItem.extra}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PORTAFOLIO / PLACEHOLDERS */}
      <motion.section
        id="portafolio"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="border-b border-white/5 bg-[#020617] py-16 sm:py-20"
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
            {projects.map((project) => (
              <div
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <span className="mb-1 inline-flex w-fit rounded-full bg-white/5 px-2 py-1 text-[10px] font-medium text-sky-300">
                    {projects.tag}
                  </span>
                  <p className="text-[13px] font-semibold text-white">
                    {project.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Reemplaza esta imagen por una captura real de tu proyecto.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-slate-500">
            ✱ Tip: usa mockups limpios (laptops, móviles) para presentar tus
            trabajos de forma más aspiracional.
          </p>
        </div>
      </motion.section>

      {/* CTA FINAL / CONTACTO */}
      <motion.section
        id="contacto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-[radial-gradient(circle_at_top,_rgba(16,120,255,0.35),_#020617)] py-16 sm:py-20"
      >
        <div className="section-wrapper">
          <div className="glass-card relative overflow-hidden bg-gradient-to-r from-[var(--brand-primary)]/15 via-[#020617] to-[#020617]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--brand-primary)]/25 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
              <div>
                <p className="section-title">Es tu turno</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-white">
                  ¿Lista/o para que tu marca tenga una web que se vea tan bien
                  como lo que ya haces en Instagram?
                </h2>
                <p className="mt-4 text-sm text-slate-200">
                  Escríbenos por WhatsApp, cuéntanos qué vendes y qué idea
                  tienes en mente. Te respondemos con una propuesta clara, sin
                  tecnicismos, en un lenguaje de negocios.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a href={whatsappLink} className="btn-primary">
                    Empezar por WhatsApp
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                  <span className="text-[11px] text-slate-300">
                    Tiempo de respuesta habitual: menos de 24 horas.
                  </span>
                </div>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-black/20 p-4 text-[11px] text-slate-200">
                <p className="font-semibold text-slate-100">
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

          <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-[11px] text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Lulabtech Studio. Todos los derechos reservados.</p>
            <p className="text-[11px]">
              Hecho con Next.js, Tailwind y mucho cariño panameño.
            </p>
          </footer>
        </div>
      </motion.section>
    </main>
  );
}
