import { Activity, ArrowRight, Briefcase, HeartPulse, Luggage, PlaneTakeoff, ShieldCheck, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Industry = {
  tag: string;
  title: string;
  text: string;
  accent: "primary" | "accent";
  icons: LucideIcon[];
  points: string[];
};

const industries: Industry[] = [
  {
    tag: "BAG-KIT",
    title: "Aviation",
    text: "IATA R753 compliant baggage reconciliation. 5 critical read points from check-in to arrival.",
    accent: "primary",
    icons: [Luggage, PlaneTakeoff, Briefcase],
    points: [
      "Five read points, check-in through arrival",
      "Messaging into airline and airport systems",
      "Built for mid-tier airports",
    ],
  },
  {
    tag: "MED-KIT & Access",
    title: "Medical",
    text: "Real-time tracking for expensive mobile assets (wheelchairs, scanners) and secure access gates for restricted hospital wings.",
    accent: "accent",
    icons: [HeartPulse, Stethoscope, Activity],
    points: [
      "Live location of wheelchairs and scanners",
      "Secure gates for restricted wings",
      "Connects to your HMS through our cloud",
    ],
  },
];

const styles = {
  primary: {
    hover: "hover:border-primary/50 hover:shadow-[0_0_60px_-12px_rgb(34_211_238/0.4)]",
    chip: "bg-primary/10 text-primary-soft ring-primary/30",
    icon: "bg-primary/10 text-primary-soft",
    check: "text-primary-soft",
  },
  accent: {
    hover: "hover:border-accent/50 hover:shadow-[0_0_60px_-12px_rgb(52_211_153/0.4)]",
    chip: "bg-accent/10 text-accent-soft ring-accent/30",
    icon: "bg-accent/10 text-accent-soft",
    check: "text-accent-soft",
  },
} as const;

export default function Industries() {
  return (
    <section id="industries" aria-labelledby="industries-heading" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow text-accent-soft">Industries we serve</p>
        <h2 id="industries-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
          Where every second and every asset counts.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {industries.map((ind, i) => {
          const s = styles[ind.accent];
          return (
            <Reveal key={ind.title} delay={i * 0.1}>
              <article className={`glass flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 sm:p-9 ${s.hover}`}>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex gap-2" aria-hidden="true">
                    {ind.icons.map((Icon, idx) => (
                      <span key={idx} className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.icon}`}>
                        <Icon className="h-5 w-5" />
                      </span>
                    ))}
                  </div>
                  <span className={`rounded-full px-3 py-1.5 font-mono text-xs font-semibold ring-1 ${s.chip}`}>{ind.tag}</span>
                </div>

                <h3 className="mt-8 text-2xl font-bold tracking-tight text-fg">{ind.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{ind.text}</p>

                <ul className="mt-6 space-y-3 border-t border-line pt-6">
                  {ind.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm text-fg-soft">
                      <ShieldCheck aria-hidden="true" className={`mt-0.5 h-4 w-4 shrink-0 ${s.check}`} />
                      {p}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="group mt-auto inline-flex min-h-11 items-center gap-2 pt-7 text-sm font-semibold text-fg transition-colors hover:text-primary-soft"
                >
                  Request a {ind.title.toLowerCase()} demo
                  <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
