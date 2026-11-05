import { HeartPulse, Luggage, ScanLine } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Product = {
  code: string;
  name: string;
  market: string;
  text: string;
  icon: LucideIcon;
  tone: "primary" | "accent";
};

const products: Product[] = [
  {
    code: "BAG-KIT",
    name: "Baggage Tracking Kit",
    market: "Aviation",
    text: "RFID read points for IATA R753 baggage reconciliation, from check-in to arrival.",
    icon: Luggage,
    tone: "primary",
  },
  {
    code: "MED-KIT",
    name: "Medical Asset Kit",
    market: "Healthcare",
    text: "Real-time tracking of mobile assets such as wheelchairs and scanners across the hospital.",
    icon: HeartPulse,
    tone: "accent",
  },
  {
    code: "GATE-S",
    name: "Speed Gate",
    market: "Aviation & Healthcare",
    text: "RFID-controlled speed gate for secure, high-throughput access to restricted areas.",
    icon: ScanLine,
    tone: "primary",
  },
];

export default function Products() {
  return (
    <section id="products" aria-labelledby="products-heading" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-primary-soft">Products</p>
        <h2 id="products-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
          One platform, three kits.
        </h2>
        <p className="mt-4 text-muted">
          Every kit ships with Zync's edge controller and runs on the same cloud dashboard, so you can start with one
          use case and add the next without a new vendor.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-6 md:grid-cols-3">
        {products.map(({ code, name, market, text, icon: Icon, tone }, i) => (
          <li key={code}>
            <Reveal delay={i * 0.08} className="h-full">
              <article className="glass h-full rounded-3xl p-7 transition-colors duration-300 hover:border-white/25">
                <span
                  aria-hidden="true"
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                    tone === "accent" ? "bg-accent/10 text-accent-soft" : "bg-primary/10 text-primary-soft"
                  }`}
                >
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-6 font-mono text-xs font-semibold tracking-widest text-primary-soft">{code}</p>
                <h3 className="mt-1 text-lg font-bold text-fg">{name}</h3>
                <p className="mt-1 text-xs font-medium text-muted">{market}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
