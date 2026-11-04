import { useEffect, useState } from "react";
import { Menu, Waypoints, X } from "lucide-react";

const links = [
  { label: "Industries", href: "#industries" },
  { label: "Products", href: "#pricing" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-ink/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-cyan-400/20 to-emerald-400/20 ring-1 ring-cyan-400/40">
            <Waypoints className="h-4 w-4 text-cyan-300" />
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.9)]" />
          </span>
          <span className="text-lg font-extrabold tracking-tight text-white">
            Zync<span className="text-gradient"> Technologies</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-950 shadow-[0_0_0_0_rgba(16,185,129,0)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_28px_4px_rgba(16,185,129,0.45)] sm:inline-block"
          >
            Book a Demo
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-zinc-300 hover:bg-white/5 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink/95 px-5 pb-5 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col py-2">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-zinc-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-emerald-950"
          >
            Book a Demo
          </a>
        </div>
      )}
    </header>
  );
}
