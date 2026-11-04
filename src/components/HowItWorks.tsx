import { Cloud, Cpu, Globe2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

type Step = { n: string; icon: LucideIcon; title: string; text: string; where: string };

const steps: Step[] = [
  {
    n: "01",
    icon: Globe2,
    title: "Global Sourcing",
    text: "Raw mechanicals sourced from trusted OEMs in Coimbatore & China.",
    where: "Coimbatore · China",
  },
  {
    n: "02",
    icon: Cpu,
    title: "Kerala Engineering",
    text: "Firmware flashing, custom edge-controller PCB integration, and QA at our Kerala hub.",
    where: "Kerala, India",
  },
  {
    n: "03",
    icon: Cloud,
    title: "Cloud Deployment",
    text: "Seamless connection to the client's HMS or Airline messaging systems via our proprietary cloud dashboard.",
    where: "Your facility",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-ink-2 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">The Integration Bridge</h2>
          <p className="mt-4 text-zinc-400">
            Commodity hardware in, proprietary intelligence added, and a running system out.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* connector line (desktop) */}
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-linear-to-r from-cyan-400/0 via-cyan-400/50 to-emerald-400/0 md:block" />
          {/* connector line (mobile) */}
          <div className="absolute bottom-8 left-8 top-8 w-px bg-linear-to-b from-cyan-400/50 to-emerald-400/50 md:hidden" />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map(({ n, icon: Icon, title, text, where }, i) => (
              <Reveal key={n} delay={i * 0.15}>
                <li className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                  <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-ink-2 shadow-[0_0_30px_-4px_rgba(34,211,238,0.5)]">
                    <Icon className="h-7 w-7 text-cyan-300" />
                    <span className="absolute -right-2 -top-2 rounded-md bg-emerald-400 px-1.5 py-0.5 text-[10px] font-extrabold text-emerald-950">
                      {n}
                    </span>
                  </span>
                  <div className="glass rounded-2xl p-6 md:mt-6 md:w-full">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">{where}</p>
                    <h3 className="mt-2 text-lg font-bold text-white">
                      Step {i + 1}: {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
