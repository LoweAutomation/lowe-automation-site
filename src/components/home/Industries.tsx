import { industries } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Industries() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Who it helps"
        title="Built for operators who know there has to be a better way."
        description="If your work depends on repeated checks, reports, spreadsheets, messages, or disconnected tools, automation can help."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-4">
        {industries.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="glass card-hover h-full rounded-3xl p-7">
              <Icon className="h-8 w-8 text-blue-300" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-300">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
