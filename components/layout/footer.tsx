import { contactData } from "@/data/contact";
import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-ink-900">LulabTech</p>
          <p className="mt-2 max-w-md text-sm text-ink-600">
            Soluciones digitales premium con enfoque visual, claridad comercial y ejecución seria.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-ink-600 md:items-end">
          <a href={contactData.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-ink-900">
            WhatsApp
          </a>
          <a href={`mailto:${contactData.email}`} className="hover:text-ink-900">
            {contactData.email}
          </a>
          <span>© {new Date().getFullYear()} LulabTech</span>
        </div>
      </Container>
    </footer>
  );
}
