import { services } from "@/data/site";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ServicesPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Services"
            title="Practical software for real business problems."
            description="Each service is designed around outcomes: saving time, reducing friction, and making your operation easier to run."
          />
          <ButtonLink href="/services" variant="secondary" showArrow>
            See All Services
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.06}>
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.06]">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 transition group-hover:bg-blue-500/20">
                  <Icon className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-blue-200">{service.tagline}</p>
                <p className="mt-4 leading-7 text-gray-300">
                  {service.description}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
