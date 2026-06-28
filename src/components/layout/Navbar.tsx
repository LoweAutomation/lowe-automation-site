import Link from "next/link";
import MobileMenu from "@/components/layout/MobileMenu";
import { navItems } from "@/data/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#020617]/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 font-bold text-white shadow-lg shadow-blue-500/30">
            LA
          </span>
          <span className="text-lg font-bold tracking-tight">Lowe Automation</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-blue-500 md:inline-flex"
        >
          Book a Call
        </Link>

        <MobileMenu />
      </div>
    </header>
  );
}
