import { AlertTriangle, CheckCircle2, CloudCog, DollarSign, RefreshCcw, Unplug, Wrench } from "lucide-react";
import Reveal from "./Reveal";

const oldWay = [
  { icon: DollarSign, title: "$100k+ upfront capex", text: "Legacy vendors demand a massive cheque before a single bag or visitor is tracked." },
  { icon: Unplug, title: "Complex integrations", text: "Months of custom middleware to reach your HMS, DCS or airline messaging stack." },
  { icon: Wrench, title: "Hardware obsolescence", text: "You own aging readers and gates, and you pay again to replace them." },
];

const zyncWay = [
  { icon: CheckCircle2, title: "Zero upfront hardware cost", text: "A small setup fee, then one predictable monthly fee. No capex approval cycle." },
  { icon: CloudCog, title: "Pay-per-lane, cloud-integrated", text: "Add lanes as you grow. Our cloud connects to your HMS or airline systems." },
  { icon: RefreshCcw, title: "Lifetime hardware replacement", text: "Hardware, software and spares stay on our books and are refreshed for you." },
];

export default function ProblemSolution() {
  return (
    <section aria-labelledby="shift-heading" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-primary-soft">The shift</p>
        <h2 id="shift-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
          Stop buying infrastructure. Start subscribing to outcomes.
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
