import { process } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessTimeline() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Process"
        title="Simple process. Serious execution."
        description="From first conversation to launch, the work stays focused on building useful software that solves the right problem."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-5">
        {process.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="glass card-hover h-full rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-blue-300" />
                <p className="text-sm text-blue-300">0{index + 1}</p>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-gray-300">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
