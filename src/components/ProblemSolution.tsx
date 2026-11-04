import { AlertTriangle, CheckCircle2, CloudCog, DollarSign, RefreshCcw, Unplug, Wrench, XCircle } from "lucide-react";
import Reveal from "./Reveal";

const oldWay = [
  { icon: DollarSign, title: "$100k+ upfront capex", text: "Legacy vendors demand a massive cheque before a single bag or visitor is tracked." },
  { icon: Unplug, title: "Complex integrations", text: "Months of custom middleware to reach your HMS, DCS or airline messaging stack." },
  { icon: Wrench, title: "Hardware obsolescence", text: "You own aging readers and gates, and you pay again to replace them." },
];

const zyncWay = [
  { icon: CheckCircle2, title: "Zero upfront costs", text: "A small setup fee, then one predictable monthly fee. No capex approval cycle." },
  { icon: CloudCog, title: "Pay-per-lane, cloud-integrated", text: "Add lanes as you grow. Our cloud connects to your HMS or airline systems." },
  { icon: RefreshCcw, title: "Lifetime hardware replacement", text: "Hardware, software and spares stay on our books and are refreshed for you." },
];

export default function ProblemSolution() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">The shift</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Stop buying infrastructure. Start subscribing to outcomes.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-full rounded-3xl border border-red-500/25 bg-linear-to-b from-red-500/8 to-transparent p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                <AlertTriangle className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white">The Old Way</h3>
            </div>
            <ul className="mt-8 space-y-6">
              {oldWay.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-red-400" />
                  <div>
                    <p className="font-semibold text-zinc-100">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <XCircle className="absolute right-6 top-6 h-5 w-5 text-red-500/40" />
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative h-full rounded-3xl border border-emerald-400/30 bg-linear-to-b from-emerald-400/8 to-cyan-400/3 p-7 shadow-[0_0_60px_-24px_rgba(16,185,129,0.5)] sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold text-white">The Zync Way</h3>
            </div>
            <ul className="mt-8 space-y-6">
              {zyncWay.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <Icon className="mt-1 h-5 w-5 shrink-0 text-emerald-300" />
                  <div>
                    <p className="font-semibold text-zinc-100">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-400">{text}</p>
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
