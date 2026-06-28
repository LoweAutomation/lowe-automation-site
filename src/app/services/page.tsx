import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Packages from "@/components/home/Packages";
import CTA from "@/components/home/CTA";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business automation, AI assistants, custom software, dashboards, and monitoring systems from Lowe Automation.",
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Software and automation services for growing businesses."
        description="Lowe Automation helps businesses replace slow manual work with custom systems, dashboards, AI assistants, alerts, and internal tools."
      />
      <ServicesGrid compact />
      <ProcessTimeline />
      <Packages />
      <CTA />
    </SiteShell>
  );
}
