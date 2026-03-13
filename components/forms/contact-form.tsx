"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  service: string;
  budget: string;
  message: string;
  website: string; // honeypot
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  service: "",
  budget: "",
  message: "",
  website: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [serverState, setServerState] = useState<"idle" | "success" | "error">("idle");

  const isDisabled = useMemo(() => {
    return (
      isSubmitting ||
      !form.name.trim() ||
      !form.email.trim() ||
      !form.whatsapp.trim() ||
      !form.service.trim() ||
      !form.message.trim()
    );
  }, [form, isSubmitting]);

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setServerMessage("");
    setServerState("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as { ok: boolean; message?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "No se pudo enviar la solicitud.");
      }

      setServerState("success");
      setServerMessage(
        data.message || "Tu solicitud fue enviada correctamente."
      );
      setForm(initialState);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Ocurrió un error al enviar la solicitud.";

      setServerState("error");
      setServerMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 md:grid-cols-2">
      <div>
        <label className="label" htmlFor="name">
          Nombre *
        </label>
        <input
          id="name"
          className="form-input"
          type="text"
          placeholder="Tu nombre"
          value={form.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="company">
          Empresa o marca
        </label>
        <input
          id="company"
          className="form-input"
          type="text"
          placeholder="Nombre de tu marca"
          value={form.company}
          onChange={(e) => updateField("company", e.target.value)}
        />
      </div>

      <div>
        <label className="label" htmlFor="email">
          Email *
        </label>
        <input
          id="email"
          className="form-input"
          type="email"
          placeholder="correo@empresa.com"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="whatsapp">
          WhatsApp *
        </label>
        <input
          id="whatsapp"
          className="form-input"
          type="text"
          placeholder="+507 67069044"
          value={form.whatsapp}
          onChange={(e) => updateField("whatsapp", e.target.value)}
          required
        />
      </div>

      <div>
        <label className="label" htmlFor="service">
          Servicio de interés *
        </label>
        <select
          id="service"
          className="form-select"
          value={form.service}
          onChange={(e) => updateField("service", e.target.value)}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Landing Page">Landing Page</option>
          <option value="Web Corporativa">Web Corporativa</option>
          <option value="Tienda Online">Tienda Online</option>
          <option value="Automatización">Automatización</option>
          <option value="Otro / No estoy seguro">Otro / No estoy seguro</option>
        </select>
      </div>

      <div>
        <label className="label" htmlFor="budget">
          Presupuesto estimado (opcional)
        </label>
        <input
          id="budget"
          className="form-input"
          type="text"
          placeholder="Referencia opcional"
          value={form.budget}
          onChange={(e) => updateField("budget", e.target.value)}
        />
      </div>

      <div className="md:col-span-2">
        <label className="label" htmlFor="message">
          Mensaje / necesidades *
        </label>
        <textarea
          id="message"
          className="form-textarea"
          placeholder="Cuéntanos qué necesitas, qué deseas mejorar y qué tipo de proyecto tienes en mente."
          value={form.message}
          onChange={(e) => updateField("message", e.target.value)}
          required
        />
      </div>

      {/* Honeypot */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={(e) => updateField("website", e.target.value)}
        />
      </div>

      <div className="md:col-span-2">
        <div className="mb-4 rounded-[20px] border border-[var(--border-soft)] bg-white/70 p-4 text-sm leading-7 text-[var(--text-main)]">
          Tu solicitud llegará directamente a <strong>ventas@lulabtech.com</strong>.
          No publicamos precios porque cada proyecto requiere una evaluación distinta.
        </div>

        {serverMessage ? (
          <div
            className={`mb-4 rounded-[20px] border px-4 py-3 text-sm font-medium ${
              serverState === "success"
                ? "border-[rgba(18,184,167,0.28)] bg-[rgba(18,184,167,0.08)] text-[var(--text-strong)]"
                : "border-[rgba(255,99,71,0.25)] bg-[rgba(255,99,71,0.08)] text-[var(--text-strong)]"
            }`}
          >
            {serverMessage}
          </div>
        ) : null}

        <button type="submit" className="btn-primary" disabled={isDisabled}>
          {isSubmitting ? "Enviando..." : "Enviar solicitud"}
        </button>
      </div>
    </form>
  );
}
