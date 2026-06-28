import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="site-bg relative min-h-screen overflow-hidden text-white">
      <div className="grid-bg pointer-events-none fixed inset-0 -z-10" />
      <div className="animate-pulse-glow pointer-events-none fixed left-1/2 top-0 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
