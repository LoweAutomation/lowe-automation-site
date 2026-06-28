import ButtonLink from "@/components/ui/ButtonLink";

export default function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass relative overflow-hidden rounded-3xl border-blue-500/30 bg-blue-500/10 p-10 text-center md:p-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.28),transparent_55%)]" />
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">
          Start Here
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold md:text-5xl">
          Ready to turn manual work into software?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-300">
          Let’s talk about what your business is doing manually and what automation
          could save you time, money, and effort.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact" showArrow>
            Book a Free Consultation
          </ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
