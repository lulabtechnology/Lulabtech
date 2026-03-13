"use client";

import { useMemo, useState } from "react";
import { Loader2, Mail, MessageCircle, Send, Sparkles } from "lucide-react";
import { contactData } from "@/data/contact";
import { projectTypeOptions } from "@/lib/validations";
import { Button, ButtonLink } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { StatusMessage } from "@/components/ui/status-message";
import { Textarea } from "@/components/ui/textarea";

type FormValues = {
  name: string;
  brand: string;
  email: string;
  whatsapp: string;
  projectType: string;
  budget: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  brand: "",
  email: "",
  whatsapp: "",
  projectType: "",
  budget: "",
  message: ""
};

export function QuoteForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const canSubmit = useMemo(() => {
    return (
      values.name.trim() &&
      values.brand.trim() &&
      values.email.trim() &&
      values.whatsapp.trim() &&
      values.projectType.trim() &&
      values.message.trim()
    );
  }, [values]);

  function setField<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    setStatus(null);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus(null);
    setErrors({});

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = (await response.json()) as {
        ok: boolean;
        message: string;
        errors?: FormErrors;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        setStatus({
          type: "error",
          message: result.message || "No se pudo enviar la solicitud."
        });
        return;
      }

      setValues(initialValues);
      setStatus({
        type: "success",
        message:
          "Tu solicitud fue enviada correctamente. Pronto revisaremos tu información."
      });
    } catch {
      setStatus({
        type: "error",
        message: "Ocurrió un error inesperado al enviar el formulario."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="mb-6">
          <div className="inline-flex items-center rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">
            Cotización formal
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-ink-900 sm:text-3xl">
            Cuéntanos lo que quieres construir
          </h3>
          <p className="mt-3 text-sm leading-6 text-ink-600 sm:text-base">
            Déjanos los datos clave de tu proyecto y te contactaremos por correo o
            WhatsApp para continuar la conversación.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Nombre"
              required
              error={errors.name}
              htmlFor="quote-name"
            >
              <Input
                id="quote-name"
                name="name"
                value={values.name}
                onChange={(e) => setField("name", e.target.value)}
                placeholder="Tu nombre"
                autoComplete="name"
              />
            </Field>

            <Field
              label="Empresa / Marca"
              required
              error={errors.brand}
              htmlFor="quote-brand"
            >
              <Input
                id="quote-brand"
                name="brand"
                value={values.brand}
                onChange={(e) => setField("brand", e.target.value)}
                placeholder="Nombre de tu marca"
                autoComplete="organization"
              />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Email"
              required
              error={errors.email}
              htmlFor="quote-email"
            >
              <Input
                id="quote-email"
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => setField("email", e.target.value)}
                placeholder="tu@correo.com"
                autoComplete="email"
              />
            </Field>

            <Field
              label="WhatsApp"
              required
              error={errors.whatsapp}
              htmlFor="quote-whatsapp"
            >
              <Input
                id="quote-whatsapp"
                name="whatsapp"
                value={values.whatsapp}
                onChange={(e) => setField("whatsapp", e.target.value)}
                placeholder="+507 6000-0000"
                autoComplete="tel"
              />
            </Field>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Tipo de proyecto"
              required
              error={errors.projectType}
              htmlFor="quote-project-type"
            >
              <Select
                id="quote-project-type"
                name="projectType"
                value={values.projectType}
                onChange={(e) => setField("projectType", e.target.value)}
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                {projectTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </Field>

            <Field
              label="Presupuesto estimado"
              error={errors.budget}
              htmlFor="quote-budget"
            >
              <Input
                id="quote-budget"
                name="budget"
                value={values.budget}
                onChange={(e) => setField("budget", e.target.value)}
                placeholder="Opcional"
              />
            </Field>
          </div>

          <Field
            label="Mensaje"
            required
            error={errors.message}
            htmlFor="quote-message"
          >
            <Textarea
              id="quote-message"
              name="message"
              value={values.message}
              onChange={(e) => setField("message", e.target.value)}
              placeholder="Cuéntanos qué quieres lograr, qué tipo de proyecto tienes en mente y cualquier detalle importante."
            />
          </Field>

          {status ? (
            <StatusMessage type={status.type} message={status.message} />
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-6 text-ink-500">
              Al enviar este formulario, tu solicitud llegará a{" "}
              <span className="font-semibold text-ink-700">{contactData.email}</span>.
            </p>

            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting || !canSubmit}
              className="w-full sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Enviar solicitud
                </>
              )}
            </Button>
          </div>
        </form>
      </div>

      <div className="grid gap-6">
        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-ink-950 via-ink-900 to-brand-900 p-6 text-white shadow-elevated sm:p-8">
          <div className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Contacto directo
          </div>

          <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
            También puedes escribirnos por WhatsApp o correo.
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">
            Si ya tienes claro lo que quieres, puedes ir directo al canal que te
            resulte más cómodo.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm text-white/90">
                    Respuesta directa para iniciar la conversación.
                  </p>
                </div>
              </div>

              <ButtonLink
                href={contactData.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="mt-5 w-full border-white/15 bg-white/10 text-white hover:bg-white/14"
              >
                Abrir WhatsApp
              </ButtonLink>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/8 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                    Correo
                  </p>
                  <p className="mt-1 break-all text-sm text-white/90">
                    {contactData.email}
                  </p>
                </div>
              </div>

              <ButtonLink
                href={`mailto:${contactData.email}`}
                variant="outline"
                className="mt-5 w-full border-white/15 bg-white/10 text-white hover:bg-white/14"
              >
                Enviar correo
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
              <Sparkles className="h-5 w-5" />
            </div>

            <div>
              <h4 className="text-lg font-semibold text-ink-900">
                Qué recibirá LulabTech
              </h4>
              <p className="mt-2 text-sm leading-6 text-ink-600">
                Nombre, marca, email, WhatsApp, tipo de proyecto, presupuesto
                estimado y mensaje. Todo llega ordenado al correo de ventas.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-slate-200 bg-slate-50/80 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              Integración
            </p>
            <p className="mt-3 text-sm leading-6 text-ink-700">
              Esta fase ya queda lista para trabajar con Resend en Vercel usando:
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Tag>RESEND_API_KEY</Tag>
              <Tag>RESEND_FROM_EMAIL</Tag>
              <Tag>CONTACT_TO_EMAIL</Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  required,
  error,
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <div className="mb-2 flex items-center gap-2">
        <span className="text-sm font-semibold text-ink-900">{label}</span>
        {required ? (
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-700">
            requerido
          </span>
        ) : null}
      </div>

      {children}

      {error ? <p className="mt-2 text-sm font-medium text-rose-600">{error}</p> : null}
    </label>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
      {children}
    </span>
  );
}
