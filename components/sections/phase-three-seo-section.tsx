import Link from "next/link";
import { ArrowUpRight, ClipboardList, GraduationCap, PackageCheck, RefreshCw, Truck, Utensils, UsersRound } from "lucide-react";
import { SectionShell } from "@/components/layout/section-shell";
import { SectionHeading } from "@/components/ui/section-heading";

const pathways = [
  {
    title: "Restaurantes y gastronomía",
    description:
      "Páginas para restaurantes, menú digital, presencia local, pedidos por WhatsApp y conexión natural con software POS.",
    href: "/paginas-web-para-restaurantes-panama",
    icon: Utensils
  },
  {
    title: "Academias y educación",
    description:
      "Webs para cursos, diplomados, tutorías y centros de capacitación que necesitan captar interesados con más orden.",
    href: "/paginas-web-para-academias-panama",
    icon: GraduationCap
  },
  {
    title: "Eventos, ferias y congresos",
    description:
      "Landing o web completa para comunicar fecha, sede, agenda, participantes, formularios y contactos oficiales.",
    href: "/paginas-web-para-eventos-panama",
    icon: ClipboardList
  },
  {
    title: "Rediseño web",
    description:
      "Para empresas que ya tienen sitio, pero necesitan verse más profesionales, mejorar mobile, SEO y rutas de contacto.",
    href: "/rediseno-web-panama",
    icon: RefreshCw
  },
  {
    title: "Inventario y operación",
    description:
      "Sistemas para productos, insumos, entradas, salidas, responsables, reportes y control interno.",
    href: "/sistemas-de-inventario-panama",
    icon: PackageCheck
  },
  {
    title: "CRM y seguimiento comercial",
    description:
      "Paneles para clientes, prospectos, estados, responsables, notas, formularios y oportunidades de venta.",
    href: "/crm-para-empresas-panama",
    icon: UsersRound
  },
  {
    title: "Logística y envíos",
    description:
      "Software para clientes, envíos, estados, documentos, comprobantes, rutas y reportes operativos.",
    href: "/software-para-logistica-panama",
    icon: Truck
  }
];

export function PhaseThreeSeoSection() {
  return (
    <SectionShell className="bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
        <SectionHeading
          eyebrow="SEO por sector y operación"
          title="Nuevas rutas para búsquedas más específicas en Panamá"
          description="Además de posicionar servicios generales, la web ahora conecta soluciones por industria y por problema operativo: restaurantes, academias, eventos, inventario, CRM y logística. Esto ayuda a captar búsquedas más cercanas a una intención real de cotización."
        />

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {pathways.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-slate-50/70 to-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-elevated"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-ink-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-700" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight text-ink-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-600">{item.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-8 rounded-[30px] border border-slate-200 bg-slate-50/80 p-5 sm:p-6">
        <p className="text-sm leading-7 text-ink-700">
          Esta capa de interlinking no cambia la estética principal: refuerza el posicionamiento con páginas útiles, contenido comercial real y enlaces internos hacia servicios relacionados para que Google entienda mejor cada línea de negocio.
        </p>
      </div>
    </SectionShell>
  );
}
