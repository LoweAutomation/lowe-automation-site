import { projects } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ProjectsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Portfolio"
          title="Systems that prove the business model."
          description="These projects demonstrate AI assistants, monitoring engines, dashboards, alerts, automation, and practical software architecture."
        />
        {!compact ? (
          <ButtonLink href="/projects" variant="secondary" showArrow>
            View Case Studies
          </ButtonLink>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <article key={project.title} className="glass card-hover flex h-full flex-col rounded-3xl p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                <Icon className="h-8 w-8 text-blue-300" />
              </div>
              <p className="mt-6 text-sm text-blue-300">{project.category}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-gray-300">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.features.slice(0, 4).map((feature) => (
                  <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    {feature}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
