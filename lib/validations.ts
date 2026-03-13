import { z } from "zod";

export const projectTypeOptions = [
  "Landing page",
  "Web corporativa",
  "Tienda online",
  "Software a la medida",
  "Automatización / solución digital",
  "Aún no lo tengo claro"
] as const;

export const quoteSchema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  brand: z.string().min(2, "Ingresa tu empresa o marca"),
  email: z.string().email("Ingresa un email válido"),
  whatsapp: z.string().min(7, "Ingresa tu WhatsApp"),
  projectType: z.string().min(1, "Selecciona un tipo de proyecto"),
  budget: z.string().optional(),
  message: z.string().min(10, "Cuéntanos un poco más sobre el proyecto")
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
