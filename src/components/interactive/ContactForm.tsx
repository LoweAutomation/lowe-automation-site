"use client";

import { useMemo, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");

  const mailto = useMemo(() => {
    const subject = encodeURIComponent("Lowe Automation Consultation Request");
    const body = encodeURIComponent(
      `Name: ${name}\nBusiness: ${business}\n\nWhat I want to automate:\n${message}`
    );
    return `mailto:clintjlowe@gmail.com?subject=${subject}&body=${body}`;
  }, [name, business, message]);

  return (
    <form className="glass rounded-3xl p-8 md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm text-gray-300">Name</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="text-sm text-gray-300">Business</span>
          <input
            value={business}
            onChange={(event) => setBusiness(event.target.value)}
            className="mt-2 w-full rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
            placeholder="Company or project"
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="text-sm text-gray-300">What do you want to automate?</span>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={7}
          className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-[#020617]/70 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-400"
          placeholder="Tell me about your manual work, reports, tracking, dashboards, customer workflows, or AI system idea."
        />
      </label>

      <p className="mt-5 text-sm leading-6 text-gray-400">
        This button opens your email app with the message filled in. For launch,
        this can be connected to Resend, Formspree, EmailJS, or a Next.js server action.
      </p>

      <a
        href={mailto}
        className="mt-6 inline-flex rounded-full bg-blue-500 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-400"
      >
        Send by Email
      </a>
    </form>
  );
}
