import type { Metadata } from "next";
import SiteShell from "@/components/layout/SiteShell";
import PageHero from "@/components/ui/PageHero";
import ButtonLink from "@/components/ui/ButtonLink";
import ContactForm from "@/components/interactive/ContactForm";
import { contactOptions } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Lowe Automation for a free consultation about custom software, AI assistants, dashboards, monitoring systems, and business automation.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let’s find the manual work your business can automate."
        description="Reach out for a free consultation. We can talk through your workflow, identify bottlenecks, and decide what kind of software would create the most value."
      />

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.title} className="glass card-hover h-full rounded-3xl p-8">
                <Icon className="h-8 w-8 text-blue-300" />
                <h2 className="mt-6 text-2xl font-semibold">{option.title}</h2>
                <p className="mt-4 leading-7 text-gray-300">{option.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold">Contact information</h2>
          <p className="mt-5 leading-8 text-gray-300">
            Send a short message about your business, what feels repetitive,
            and what you would like to automate.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
            <p className="text-sm text-blue-200">Email</p>
            <a className="mt-2 block text-lg font-semibold text-white hover:text-blue-200" href="mailto:clintjlowe@gmail.com">
              clintjlowe@gmail.com
            </a>
          </div>

          <div className="mt-8">
            <ButtonLink href="/services" variant="secondary">
              Review Services
            </ButtonLink>
          </div>
        </div>

        <ContactForm />
      </section>
    </SiteShell>
  );
}
