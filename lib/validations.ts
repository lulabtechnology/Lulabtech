import { z } from "zod";
import { projectTypeOptions } from "@/lib/site-copy";

const isValidProjectType = (value: string) =>
  projectTypeOptions.includes(value as (typeof projectTypeOptions)[number]);

export const quoteSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ingresa tu nombre")
    .max(100, "Tu nombre es demasiado largo"),
  brand: z
    .string()
    .trim()
    .min(2, "Ingresa tu empresa o marca")
    .max(120, "El nombre de la empresa es demasiado largo"),
  email: z
    .string()
    .trim()
    .email("Ingresa un email válido")
    .max(120, "El email es demasiado largo"),
  whatsapp: z
    .string()
    .trim()
    .min(7, "Ingresa tu WhatsApp")
    .max(30, "El WhatsApp es demasiado largo"),
  projectType: z
    .string()
    .trim()
    .refine(isValidProjectType, "Selecciona un tipo de proyecto válido"),
  budget: z
    .string()
    .trim()
    .max(80, "El presupuesto es demasiado largo")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Cuéntanos un poco más sobre el proyecto")
    .max(2000, "El mensaje es demasiado largo")
});

export type QuoteFormValues = z.infer<typeof quoteSchema>;
