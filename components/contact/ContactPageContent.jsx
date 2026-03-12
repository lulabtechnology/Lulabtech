"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircle,
  Send,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import { buildWhatsappLink, contactEmail, contactPhone } from "@/lib/site";

const serviceOptions = [
  { value: "landing-page", label: "Landing Page" },
  { value: "web-corporativa", label: "Web Corporativa" },
  { value: "tienda-online", label: "Tienda Online" },
  { value: "automatizacion", label: "Automatización" },
  { value: "no-seguro", label: "No estoy seguro todavía" },
];

const budgetOptions = [
  { value: "", label: "Selecciona un rango (opcional)" },
  { value: "menos-500", label: "Menos de $500" },
  { value: "500-1000", label: "$500 - $1,000" },
  { value: "1000-2500", label: "$1,000 - $2,500" },
  { value: "2500-5000", label: "$2,500 - $5,000" },
  { value: "5000-mas", label: "Más de $5,000" },
  { value: "prefiero-no-indicar", label: "Prefiero no indicarlo todavía" },
];

const initialForm = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  service: "landing-page",
  budget: "",
  message: "",
  website: "", // honeypot anti-spam
};

export default function ContactPageContent() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "idle",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const selectedServiceLabel = useMemo(() => {
    return (
      serviceOptions.find((option) => option.value === form.service)?.label ??
      "Servicio"
    );
  }, [form.service]);

  const whatsappHref = useMemo(() => {
    const message = `Hola LulabTech, quiero solicitar una cotización formal.

Nombre: ${form.name || "-"}
Empresa: ${form.company || "-"}
Servicio de interés: ${selectedServiceLabel}
Presupuesto estimado: ${
      budgetOptions.find((item) => item.value === form.budget)?.label || "-"
    }

Necesidad del proyecto:
${form.message || "-"}`;

    return buildWhatsappLink(message);
  }, [form.name, form.company, form.service, form.budget, form.message, selectedServiceLabel]);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus({ type: "idle", message: "" });

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus({
        type: "error",
        message: "Completa al menos nombre, correo y una breve descripción del proyecto.",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "No se pudo enviar la solicitud.");
      }

      setStatus({
        type: "success",
        message:
          "Tu solicitud fue enviada correctamente. Revisaremos tu proyecto y te contactaremos pronto.",
      });

      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Hubo un problema enviando tu solicitud. Intenta nuevamente o escríbenos por WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section-space">
      <div className="shell">
        <div className="max-w-4xl">
          <span className="section-eyebrow">Solicitar cotización</span>
          <h1 className="section-heading mt-4">
            Cuéntanos qué necesita tu negocio y armemos una propuesta más seria, más clara y mejor pensada.
          </h1>
          <p className="section-copy mt-5 max-w-3xl">
            Si quieres una conversación rápida, puedes escribirnos por WhatsApp. Si prefieres una solicitud formal, completa el formulario y envíanos el contexto de tu proyecto.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="panel-dark relative overflow-hidden p-6 md:p-8">
            <div className="pointer-events-none absolute -left-8 top-0 h-40 w-40 rounded-full bg-[rgba(22,119,255,0.16)] blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-36 w-36 rounded-full bg-[rgba(17,194,138,0.12)] blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-300">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-green" />
                Solicitud formal
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white md:text-4xl">
                Envíanos los detalles del proyecto y te respondemos con una ruta más clara.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 md:text-base">
                No trabajamos con precios fijos publicados porque cada proyecto cambia según alcance, estructura y objetivo. Por eso el enfoque correcto aquí es una cotización personalizada.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <BriefcaseBusiness className="h-5 w-5 text-brand-blue" />
                    <p className="text-sm font-semibold text-white">Brief más claro</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Servicio, contexto y necesidad principal en un solo envío.
                  </p>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <Clock3 className="h-5 w-5 text-brand-green" />
                    <p className="text-sm font-semibold text-white">Más orden al responder</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Ideal para cotizaciones formales y proyectos con más detalle.
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/[0.05] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Contacto directo
                </p>

                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-black/10 p-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-brand-blue" />
                      <p className="text-sm font-semibold text-white">Correo</p>
                    </div>
                    <p className="mt-3 break-all text-sm leading-6 text-slate-200">
                      {contactEmail}
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-black/10 p-4">
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-4 w-4 text-brand-green" />
                      <p className="text-sm font-semibold text-white">WhatsApp</p>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-200">
                      {contactPhone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-dark w-full sm:w-auto">
                  <MessageCircle className="h-4 w-4" />
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="panel p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Nombre completo"
                  required
                  value={form.name}
                  onChange={(value) => updateField("name", value)}
                  placeholder="Tu nombre"
                />

                <Field
                  label="Empresa o marca"
                  value={form.company}
                  onChange={(value) => updateField("company", value)}
                  placeholder="Nombre de tu empresa"
                  icon={Building2}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field
                  label="Correo electrónico"
                  type="email"
                  required
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="tunombre@empresa.com"
                  icon={Mail}
                />

                <Field
                  label="WhatsApp"
                  value={form.whatsapp}
                  onChange={(value) => updateField("whatsapp", value)}
                  placeholder="+507 ..."
                  icon={MessageCircle}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <SelectField
                  label="Servicio de interés"
                  value={form.service}
                  onChange={(value) => updateField("service", value)}
                  options={serviceOptions}
                />

                <SelectField
                  label="Presupuesto estimado"
                  value={form.budget}
                  onChange={(value) => updateField("budget", value)}
                  options={budgetOptions}
                  icon={WalletCards}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-900">
                  Cuéntanos sobre tu proyecto <span className="text-brand-blue">*</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  rows={6}
                  placeholder="Describe brevemente qué necesitas, qué objetivo tiene el proyecto y cualquier detalle importante."
                  className="w-full rounded-[22px] border border-slate-200 bg-white px-4 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-[rgba(22,119,255,0.10)]"
                  required
                />
              </div>

              <input
                type="text"
                name="website"
                value={form.website}
                onChange={(event) => updateField("website", event.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="rounded-[24px] border border-slate-200/80 bg-white/80 p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-green" />
                  <p className="text-sm leading-7 text-slate-600">
                    Este formulario está pensado para solicitudes con intención seria. Mientras mejor nos expliques tu proyecto, mejor podremos orientarte.
                  </p>
                </div>
              </div>

              {status.type !== "idle" ? (
                <div
                  className={`rounded-[20px] border px-4 py-4 text-sm ${
                    status.type === "success"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                      : "border-rose-200 bg-rose-50 text-rose-800"
                  }`}
                >
                  {status.message}
                </div>
              ) : null}

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="submit" disabled={loading} className="btn-primary disabled:cursor-not-allowed disabled:opacity-70">
                  {loading ? "Enviando solicitud..." : "Solicitar cotización"}
                  <Send className="h-4 w-4" />
                </button>

                <Link href="/" className="btn-secondary">
                  Volver al inicio
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
  icon: Icon,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">
        {label} {required ? <span className="text-brand-blue">*</span> : null}
      </label>

      <div className="relative">
        {Icon ? (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="h-4 w-4" />
          </div>
        ) : null}

        <input
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-[22px] border border-slate-200 bg-white py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-300 focus:ring-4 focus:ring-[rgba(22,119,255,0.10)] ${
            Icon ? "pl-11 pr-4" : "px-4"
          }`}
          required={required}
        />
      </div>
    </div>
  );
}

function SelectField({ label, value, onChange, options, icon: Icon }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-900">
        {label}
      </label>

      <div className="relative">
        {Icon ? (
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            <Icon className="h-4 w-4" />
          </div>
        ) : null}

        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full appearance-none rounded-[22px] border border-slate-200 bg-white py-3.5 text-sm text-slate-900 outline-none transition focus:border-slate-300 focus:ring-4 focus:ring-[rgba(22,119,255,0.10)] ${
            Icon ? "pl-11 pr-10" : "px-4 pr-10"
          }`}
        >
          {options.map((option) => (
            <option key={option.value || option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
          <ArrowRight className="h-4 w-4 rotate-90" />
        </div>
      </div>
    </div>
  );
}
