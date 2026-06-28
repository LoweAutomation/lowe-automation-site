import { services } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";

export default function ServicesGrid({ compact = false }: { compact?: boolean }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeader
          eyebrow="Services"
          title="Practical software for real business problems."
          description="Each service is focused on outcomes: saving time, reducing mistakes, increasing visibility, and making operations easier to run."
        />
        {!compact ? (
          <ButtonLink href="/services" variant="secondary" showArrow>
            See All Services
          </ButtonLink>
        ) : null}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <article key={service.title} className="glass card-hover h-full rounded-3xl p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10">
                <Icon className="h-8 w-8 text-blue-300" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-blue-200">{service.tagline}</p>
              <p className="mt-4 leading-7 text-gray-300">{service.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {service.outcomes.map((outcome) => (
                  <span key={outcome} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
                    {outcome}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
