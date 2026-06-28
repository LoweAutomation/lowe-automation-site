import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  showArrow?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  showArrow = false,
}: ButtonLinkProps) {
  const classes = {
    primary:
      "bg-blue-500 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400 hover:shadow-blue-400/30",
    secondary:
      "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10",
    ghost: "text-blue-200 hover:text-white",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition ${classes}`}
    >
      {children}
      {showArrow ? <ArrowRight className="h-4 w-4" /> : null}
    </Link>
  );
}
