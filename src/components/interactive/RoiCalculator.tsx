"use client";

import { useMemo, useState } from "react";

export default function RoiCalculator() {
  const [hours, setHours] = useState(8);
  const [rate, setRate] = useState(40);
  const [people, setPeople] = useState(2);

  const result = useMemo(() => {
    const weekly = hours * rate * people;
    const monthly = weekly * 4.33;
    const yearly = weekly * 52;
    return { weekly, monthly, yearly };
  }, [hours, rate, people]);

  return (
    <div className="glass rounded-3xl p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-300">
          ROI Calculator
        </p>
        <h2 className="mt-4 text-3xl font-bold">
          Estimate the cost of manual work.
        </h2>
        <p className="mt-4 leading-7 text-gray-300">
          This simple calculator shows why even small automations can matter.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <label>
          <span className="text-sm text-gray-300">Hours wasted per week</span>
          <input
            className="mt-4 w-full"
            type="range"
            min="1"
            max="40"
            value={hours}
            onChange={(event) => setHours(Number(event.target.value))}
          />
          <p className="mt-2 text-2xl font-bold">{hours}</p>
        </label>

        <label>
          <span className="text-sm text-gray-300">Estimated hourly value</span>
          <input
            className="mt-4 w-full"
            type="range"
            min="15"
            max="150"
            value={rate}
            onChange={(event) => setRate(Number(event.target.value))}
          />
          <p className="mt-2 text-2xl font-bold">${rate}</p>
        </label>

        <label>
          <span className="text-sm text-gray-300">People affected</span>
          <input
            className="mt-4 w-full"
            type="range"
            min="1"
            max="15"
            value={people}
            onChange={(event) => setPeople(Number(event.target.value))}
          />
          <p className="mt-2 text-2xl font-bold">{people}</p>
        </label>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-gray-400">Weekly cost</p>
          <p className="mt-2 text-2xl font-bold">${Math.round(result.weekly).toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-sm text-gray-400">Monthly cost</p>
          <p className="mt-2 text-2xl font-bold">${Math.round(result.monthly).toLocaleString()}</p>
        </div>
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 p-5">
          <p className="text-sm text-blue-200">Yearly cost</p>
          <p className="mt-2 text-2xl font-bold">${Math.round(result.yearly).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}
