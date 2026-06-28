export default function Problem() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="glass overflow-hidden rounded-3xl">
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
              The Problem
            </p>
            <h2 className="mt-5 max-w-4xl text-3xl font-bold md:text-5xl">
              Most businesses lose hours every week to manual work that software could handle.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
              Reports, spreadsheets, website checks, follow-ups, inventory tracking,
              customer requests, competitor research, and daily admin tasks can all be
              improved with the right system.
            </p>
          </div>

          <div className="border-t border-white/10 bg-white/[0.03] p-8 lg:border-l lg:border-t-0 md:p-12">
            {[
              "Manual reporting",
              "Repeated website checks",
              "Missed inventory or competitor changes",
              "Slow customer follow-up",
              "Disconnected spreadsheets and tools",
              "Team knowledge stuck in people’s heads",
            ].map((item) => (
              <div key={item} className="mb-4 rounded-2xl border border-white/10 bg-[#020617]/55 p-4 text-gray-300">
                <span className="text-blue-300">→</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
