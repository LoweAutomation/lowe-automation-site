import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import CTA from "@/components/home/CTA";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and portfolio systems from Lowe Automation, including Jarvis AI Assistant, Retail Intelligence Platform, and Competitor Monitoring Dashboard.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Projects"
        title="Real systems built around automation, AI, and business intelligence."
        description="These projects show the type of practical software Lowe Automation can build for businesses: assistants, dashboards, monitoring tools, alerts, and workflow systems."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="glass overflow-hidden rounded-3xl">
                <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className="border-b border-white/10 bg-white/[0.03] p-8 lg:border-b-0 lg:border-r md:p-10">
                    <Icon className="h-10 w-10 text-blue-300" />
                    <p className="mt-6 text-sm text-blue-300">{project.category}</p>
                    <h2 className="mt-4 text-3xl font-bold md:text-4xl">{project.title}</h2>
                    <p className="mt-5 leading-8 text-gray-300">{project.description}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-7 p-8 md:p-10">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Problem</p>
                      <p className="mt-3 leading-8 text-gray-300">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Solution</p>
                      <p className="mt-3 leading-8 text-gray-300">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Business use</p>
                      <p className="mt-3 leading-8 text-gray-300">{project.businessUse}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Outcome</p>
                      <p className="mt-3 leading-8 text-gray-300">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTA />
    </SiteShell>
  );
}
