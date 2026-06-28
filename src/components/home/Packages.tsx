import { packages } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import ButtonLink from "@/components/ui/ButtonLink";

export default function Packages() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <SectionHeader
        eyebrow="Offers"
        title="Clear ways to start."
        description="Start small with an audit, build one high-value system, or keep improving automation over time."
        centered
      />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <div key={pkg.name} className={`glass card-hover rounded-3xl p-8 ${index === 1 ? "border-blue-400/40 bg-blue-500/10" : ""}`}>
            <p className="text-sm text-blue-300">{pkg.bestFor}</p>
            <h3 className="mt-4 text-2xl font-semibold">{pkg.name}</h3>
            <p className="mt-4 leading-7 text-gray-300">{pkg.description}</p>
            <div className="mt-7 space-y-3">
              {pkg.items.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-gray-300">
                  <span className="text-blue-300">✓</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact" variant={index === 1 ? "primary" : "secondary"} showArrow>
                Start Here
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
