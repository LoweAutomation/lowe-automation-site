import SiteShell from "@/components/layout/SiteShell";
import Hero from "@/components/home/Hero";
import Problem from "@/components/home/Problem";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProjectsGrid from "@/components/home/ProjectsGrid";
import Benefits from "@/components/home/Benefits";
import Industries from "@/components/home/Industries";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Packages from "@/components/home/Packages";
import CTA from "@/components/home/CTA";
import RoiCalculator from "@/components/interactive/RoiCalculator";

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Problem />
      <ServicesGrid />
      <ProjectsGrid />
      <Benefits />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <RoiCalculator />
      </section>
      <Industries />
      <ProcessTimeline />
      <Packages />
      <CTA />
    </SiteShell>
  );
}
