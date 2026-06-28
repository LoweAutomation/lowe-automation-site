import { process } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProcessPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <SectionHeader
          eyebrow="Process"
          title="Simple process. Serious execution."
          description="From first conversation to launch, the work stays focused on building useful software that solves the right problem."
        />
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {process.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <div className="flex items-center justify-between">
                  <Icon className="h-8 w-8 text-blue-300" />
                  <p className="text-sm text-blue-300">0{index + 1}</p>
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 leading-7 text-gray-300">
                  {step.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
