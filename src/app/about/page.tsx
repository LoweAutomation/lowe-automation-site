import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Industries from "@/components/home/Industries";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Lowe Automation builds practical software, AI systems, dashboards, and automation tools for real business problems.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About"
        title="Lowe Automation builds practical software for real business problems."
        description="The mission is simple: help businesses save time, reduce repetitive work, and use software more intelligently. Every system should be useful, maintainable, and built around how the business actually operates."
      />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Practical", "Systems should solve real problems, not just look impressive."],
            ["Modern", "Built with clean code, scalable structure, and modern web technology."],
            ["Useful", "Every feature should save time, reduce friction, or improve decisions."],
          ].map(([title, description]) => (
            <div key={title} className="glass card-hover h-full rounded-3xl p-8">
              <h2 className="text-2xl font-semibold">{title}</h2>
              <p className="mt-4 leading-7 text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <Industries />
      <CTA />
    </SiteShell>
  );
}
