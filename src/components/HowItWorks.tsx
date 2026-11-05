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
    <section id="how-it-works" aria-labelledby="how-heading" className="relative py-20 sm:py-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-bg-alt to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-primary-soft">How it works</p>
          <h2 id="how-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
            The Integration Bridge
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-linear-to-r from-primary/0 via-primary/50 to-accent/0 md:block" />
          <div aria-hidden="true" className="absolute bottom-8 left-8 top-8 w-px bg-linear-to-b from-primary/50 to-accent/50 md:hidden" />

          <ol className="grid gap-10 md:grid-cols-3 md:gap-6">
            {steps.map(({ n, icon: Icon, title, text, where }, i) => (
              <li key={n} className="relative flex gap-5 md:flex-col md:items-center md:text-center">
                <Reveal delay={i * 0.12} className="contents">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-primary/40 bg-bg-alt shadow-[0_0_30px_-4px_rgb(34_211_238/0.5)]"
                  >
                    <Icon className="h-7 w-7 text-primary-soft" />
                    <span className="absolute -right-2 -top-2 rounded-md bg-accent px-1.5 py-0.5 font-mono text-[11px] font-bold text-on-accent">
                      {n}
                    </span>
                  </span>
                </Reveal>
                <Reveal delay={i * 0.12 + 0.05} className="md:mt-6 md:w-full">
                  <div className="glass h-full rounded-2xl p-6">
                    <p className="eyebrow text-accent-soft">{where}</p>
                    <h3 className="mt-2 text-lg font-bold text-fg">
                      Step {i + 1}: {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
