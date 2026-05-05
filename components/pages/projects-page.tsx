import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SitePreloader } from "@/components/layout/site-preloader";
import { SiteLanguageProvider } from "@/components/providers/site-language";
import { StructuredData } from "@/components/seo/structured-data";
import { ProjectsPageContent } from "@/components/pages/projects-page-content";

export function ProjectsPage() {
  return (
    <SiteLanguageProvider>
      <div id="top" className="relative overflow-x-clip bg-white">
        <StructuredData />
        <SitePreloader />
        <Navbar />
        <ProjectsPageContent />
        <Footer />
      </div>
    </SiteLanguageProvider>
  );
}
