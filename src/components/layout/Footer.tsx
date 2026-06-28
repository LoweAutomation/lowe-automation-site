import Link from "next/link";
import { navItems, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-14 text-sm text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 font-bold text-white">
              LA
            </span>
            <p className="font-semibold text-white">Lowe Automation</p>
          </div>
          <p className="mt-5 max-w-md leading-7">
            Custom software, AI assistants, dashboards, monitoring systems, and
            business automation for companies that want to save time and work faster.
          </p>
        </div>

        <div>
          <p className="font-semibold text-white">Pages</p>
          <div className="mt-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Services</p>
          <div className="mt-4 flex flex-col gap-3">
            {services.slice(0, 4).map((item) => (
              <Link key={item.title} href="/services" className="hover:text-white">
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-white">Contact</p>
          <a
            href="mailto:clintjlowe@gmail.com"
            className="mt-4 block text-blue-300 hover:text-blue-200"
          >
            clintjlowe@gmail.com
          </a>
          <p className="mt-8">© 2026 Lowe Automation.</p>
        </div>
      </div>
    </footer>
  );
}
