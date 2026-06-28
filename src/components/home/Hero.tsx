import { ArrowRight, Bot, LineChart, Radar, Workflow } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import MetricCard from "@/components/ui/MetricCard";
import { heroStats } from "@/data/site";

const commandCards = [
  {
    icon: Bot,
    title: "AI Assistant",
    text: "Summarize documents, answer questions, draft responses.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Reports, follow-ups, alerts, and internal processes.",
  },
  {
    icon: Radar,
    title: "Monitoring Engine",
    text: "Track websites, inventory, competitors, and price changes.",
  },
  {
    icon: LineChart,
    title: "Decision Dashboard",
    text: "Turn scattered signals into clear business visibility.",
  },
];

export default function Hero() {
  return (
    <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-36 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <p className="reveal inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-blue-200">
          Custom Software • AI Systems • Business Automation
        </p>

        <h1 className="reveal reveal-delay-1 mt-7 max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl">
          Build the software your business wishes it already had.
        </h1>

        <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
          Lowe Automation builds AI assistants, dashboards, monitoring systems,
          and workflow automation for companies that want to save time, reduce
          manual work, and move faster.
        </p>

        <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
          <ButtonLink href="/contact" showArrow>
            Book a Free Consultation
          </ButtonLink>
          <ButtonLink href="/projects" variant="secondary">
            View Case Studies
          </ButtonLink>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
          {heroStats.map((stat) => (
            <MetricCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-8 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="glass relative rounded-[2rem] p-5 shadow-2xl shadow-blue-950/50">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#030712] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm text-blue-300">Automation Command Center</p>
                <p className="mt-1 text-xs text-gray-500">Live system concept</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                Online
              </span>
            </div>

            <div className="grid gap-4">
              {commandCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`glass animate-float rounded-2xl p-5`}
                    style={{ animationDelay: `${index * 0.35}s` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl bg-blue-500/10 p-3">
                        <Icon className="h-6 w-6 text-blue-300" />
                      </div>
                      <div>
                        <p className="font-semibold">{card.title}</p>
                        <p className="mt-1 text-sm text-gray-400">{card.text}</p>
                      </div>
                      <ArrowRight className="ml-auto h-4 w-4 text-gray-500" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">
              <p className="text-sm text-blue-200">Suggested automation</p>
              <p className="mt-2 text-lg font-semibold">
                Replace weekly manual reports with a live dashboard and automated alerts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
