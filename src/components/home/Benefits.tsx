import { benefits } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Why it matters"
        title="Automation is not about replacing people. It is about removing wasted effort."
        description="The right system gives you more speed, consistency, visibility, and control."
        centered
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <div key={benefit.title} className="glass card-hover h-full rounded-3xl p-7">
              <Icon className="h-8 w-8 text-blue-300" />
              <h3 className="mt-5 text-xl font-semibold">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{benefit.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
