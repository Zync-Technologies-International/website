import { AlertTriangle, CheckCircle2, CloudCog, DollarSign, RefreshCcw, Unplug, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const oldWay = [
  { icon: DollarSign, title: "$100k+ upfront capex", text: "Legacy vendors want the full amount before a single bag or visitor is tracked." },
  { icon: Unplug, title: "Complex integrations", text: "Each connection to your HMS or airline messaging system is its own integration project." },
  { icon: Wrench, title: "Hardware obsolescence", text: "You own the readers and gates, so replacing them when they age is your cost." },
];

const zyncWay = [
  { icon: CheckCircle2, title: "Zero upfront hardware cost", text: "You pay a setup fee per lane and a monthly fee after that. There is no hardware purchase to approve." },
  { icon: CloudCog, title: "Pay per lane, integrated via the cloud", text: "You add lanes as you need them. Our cloud connects to your HMS or airline systems." },
  { icon: RefreshCcw, title: "Lifetime hardware replacement", text: "Zync owns the hardware and replaces it when it fails or ages." },
];

export default function ProblemSolution() {
  return (
    <section aria-labelledby="shift-heading" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-primary-soft">The shift</p>
        <h2 id="shift-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
          Pay per lane instead of buying the hardware.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-3xl border border-danger/30 bg-linear-to-b from-danger/10 to-transparent p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-danger/15 text-danger">
                <AlertTriangle aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-danger">Legacy vendors</p>
                <h3 className="text-xl font-bold text-fg">The Old Way</h3>
              </div>
            </div>
            <ul className="mt-8 space-y-6">
              {oldWay.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-danger" />
                  <div>
                    <p className="font-semibold text-fg">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="h-full rounded-3xl border border-accent/35 bg-linear-to-b from-accent/10 to-primary/5 p-7 shadow-[0_0_60px_-24px_rgb(52_211_153/0.5)] sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent-soft">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <p className="eyebrow text-accent-soft">Hardware-as-a-Service</p>
                <h3 className="text-xl font-bold text-fg">The Zync Way</h3>
              </div>
            </div>
            <ul className="mt-8 space-y-6">
              {zyncWay.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent-soft" />
                  <div>
                    <p className="font-semibold text-fg">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
