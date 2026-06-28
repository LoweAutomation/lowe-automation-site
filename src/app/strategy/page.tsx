import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import Benefits from "@/components/home/Benefits";
import Industries from "@/components/home/Industries";
import RoiCalculator from "@/components/interactive/RoiCalculator";
import CTA from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Strategy",
  description:
    "How Lowe Automation identifies, designs, and builds automation systems that save businesses time.",
};

export default function StrategyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Strategy"
        title="The best automation starts with the work your team already hates doing."
        description="You do not need a perfect technical idea. You need a clear look at repeated tasks, bottlenecks, missed opportunities, and where software can create leverage."
      />
      <Benefits />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <RoiCalculator />
      </section>
      <Industries />
      <CTA />
    </SiteShell>
  );
}
