import { Activity, Briefcase, DoorClosed, HeartPulse, Luggage, PlaneTakeoff, ShieldCheck, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Industry = {
  tag: string;
  title: string;
  text: string;
  accent: "cyan" | "emerald";
  icons: LucideIcon[];
  points: string[];
};

const industries: Industry[] = [
  {
    tag: "BAG-KIT",
    title: "Aviation",
    text: "IATA R753 compliant baggage reconciliation. 5 critical read points from check-in to arrival.",
    accent: "cyan",
    icons: [Luggage, PlaneTakeoff, Briefcase],
    points: ["Check-in, make-up, loading, transfer, arrival", "BSM/BPM messaging to airline systems", "Built for mid-tier airports and ground handlers"],
  },
  {
    tag: "MED-KIT & Access",
    title: "Medical",
    text: "Real-time tracking for expensive mobile assets (wheelchairs, scanners) and secure access gates for restricted hospital wings.",
    accent: "emerald",
    icons: [HeartPulse, Stethoscope, Activity],
    points: ["Live location of wheelchairs, pumps and scanners", "Credential-based gates for restricted wings", "Connects to your HMS through our cloud"],
  },
];

const styles = {
  cyan: {
    ring: "hover:border-cyan-400/50 hover:shadow-[0_0_60px_-12px_rgba(34,211,238,0.4)]",
    chip: "bg-cyan-400/10 text-cyan-300 ring-cyan-400/30",
    icon: "text-cyan-300 bg-cyan-400/10",
    dot: "text-cyan-300",
  },
  emerald: {
    ring: "hover:border-emerald-400/50 hover:shadow-[0_0_60px_-12px_rgba(16,185,129,0.4)]",
    chip: "bg-emerald-400/10 text-emerald-300 ring-emerald-400/30",
    icon: "text-emerald-300 bg-emerald-400/10",
    dot: "text-emerald-300",
  },
} as const;

export default function Industries() {
  return (
    <section id="industries" className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Industries we serve</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Where every second and every asset counts.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {industries.map((ind, i) => {
          const s = styles[ind.accent];
          return (
            <Reveal key={ind.title} delay={i * 0.12}>
              <article
                className={`glass group h-full rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 sm:p-9 ${s.ring}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-2">
                    {ind.icons.map((Icon, idx) => (
                      <span key={idx} className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                    ))}
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-bold ring-1 ${s.chip}`}>{ind.tag}</span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">{ind.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-400">{ind.text}</p>

                <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                  {ind.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-zinc-300">
                      <ShieldCheck className={`mt-0.5 h-4 w-4 shrink-0 ${s.dot}`} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-cyan-300"
                >
                  <DoorClosed className="h-4 w-4" />
                  Request a {ind.title.toLowerCase()} demo
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
