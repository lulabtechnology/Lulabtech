import { projects } from "@/data/projects";

export default function ProjectsGrid() {
  return (
    <div className="shell section-space">
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.slug} className="panel overflow-hidden p-6">
            <div className="h-56 rounded-[28px] bg-[radial-gradient(circle_at_top_left,rgba(16,120,255,0.15),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(16,184,128,0.12),transparent_28%),linear-gradient(180deg,#f8fafc,#eef2ff)]" />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue">{project.type}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">{project.title}</h2>
            <p className="mt-2 text-sm text-slate-500">{project.industry}</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">{project.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
