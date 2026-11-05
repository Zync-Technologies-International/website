import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, ScanLine } from "lucide-react";
import Reveal from "./Reveal";

type Model = "capex" | "haas";

const CAPEX_PRICE = 6500;
const SETUP = 750;
const MONTHLY = 230;
const TERM = 36; // illustrative contract term used for the total-value line
const HAAS_TOTAL = SETUP + MONTHLY * TERM;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

const compareRows = [
  { label: "Upfront cost per lane", capex: usd(CAPEX_PRICE), haas: `${usd(SETUP)} setup` },
  { label: "Recurring cost per lane", capex: "Maintenance, billed extra", haas: `${usd(MONTHLY)} / month, all-in` },
  { label: "Hardware ownership & replacement", capex: "You own and replace it", haas: "Zync-owned, replaced for you" },
  { label: "Cloud software", capex: "Priced separately", haas: "Included" },
  { label: "Active SLA", capex: "Priced separately", haas: "Included" },
] as const;

export default function Pricing() {
  const [model, setModel] = useState<Model>("haas");
  const [lanes, setLanes] = useState(4);

  return (
    <section id="pricing" aria-labelledby="pricing-heading" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent-soft">HaaS economics</p>
        <h2 id="pricing-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
          GATE-S Speed Gate: two ways to own it.
        </h2>
      </Reveal>

      {/* Model toggle: two pressed-state buttons (no orphan tab roles) */}
      <Reveal delay={0.08} className="mt-10 flex justify-center">
        <div role="group" aria-label="Pricing model" className="glass relative inline-flex rounded-full p-1">
          {(
            [
              ["capex", "Traditional Capex"],
              ["haas", "Zync HaaS"],
            ] as const
          ).map(([key, label]) => {
            const on = model === key;
            return (
              <button
                key={key}
                type="button"
                aria-pressed={on}
                onClick={() => setModel(key)}
                className="relative min-h-11 rounded-full px-5 text-sm font-semibold sm:px-7"
              >
                {on && (
                  <motion.span
                    layoutId="pricing-pill"
                    className={`absolute inset-0 rounded-full ${
                      key === "haas" ? "bg-accent shadow-[0_0_24px_2px_rgb(52_211_153/0.5)]" : "bg-slate-600"
                    }`}
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className={`relative transition-colors ${on ? (key === "haas" ? "text-on-accent" : "text-fg") : "text-muted"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Product + lane control */}
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary-soft">
                <ScanLine className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-xs font-semibold tracking-widest text-primary-soft">GATE-S</p>
                <h3 className="text-xl font-bold text-fg">Speed Gate Lane</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              RFID-controlled speed gate with a Kerala-engineered edge controller and cloud dashboard.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-fg-soft">
              {["Speed-gate lane hardware", "RFID reader & edge controller", "Cloud dashboard", "HMS / airline integrations"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check aria-hidden="true" className="h-4 w-4 text-accent-soft" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <label htmlFor="lanes" className="flex items-center justify-between text-sm font-medium text-fg-soft">
                Number of lanes
                <output htmlFor="lanes" className="rounded-md bg-white/10 px-2.5 py-1 font-mono font-semibold text-fg">
                  {lanes}
                </output>
              </label>
              <input
                id="lanes"
                type="range"
                min={1}
                max={20}
                value={lanes}
                aria-valuetext={`${lanes} ${lanes === 1 ? "lane" : "lanes"}`}
                onChange={(e) => setLanes(Number(e.target.value))}
                className="mt-3 h-6 w-full accent-accent"
              />
            </div>
          </div>
        </Reveal>

        {/* The math */}
        <Reveal delay={0.08} className="lg:col-span-3">
          <div
            aria-live="polite"
            className={`relative h-full overflow-hidden rounded-3xl border p-7 transition-colors duration-500 sm:p-9 ${
              model === "haas"
                ? "border-accent/40 bg-linear-to-br from-accent/10 to-primary/5 shadow-[0_0_70px_-20px_rgb(52_211_153/0.55)]"
                : "border-line bg-white/[0.03]"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              {model === "capex" ? (
                <motion.div
                  key="capex"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="eyebrow text-muted">Traditional Capex</p>
                  <p className="mt-3 text-5xl font-extrabold tracking-tight text-fg sm:text-6xl">
                    {usd(CAPEX_PRICE * lanes)}
                    <span className="ml-2 text-base font-medium text-muted">upfront + maintenance</span>
                  </p>
                  <dl className="mt-8 space-y-4 text-sm">
                    <Row label={`${lanes} × GATE-S @ ${usd(CAPEX_PRICE)}`} value={usd(CAPEX_PRICE * lanes)} />
                    <Row label="Maintenance & software" value="Extra, on top" soft />
                    <Row label="Integration & obsolescence risk" value="Yours" soft />
                  </dl>
                  <p className="mt-8 flex items-center gap-2 text-sm text-muted">
                    <Minus aria-hidden="true" className="h-4 w-4" /> Cash leaves your balance sheet on day one.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="haas"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="eyebrow text-accent-soft">Zync HaaS</p>
                  <p className="mt-3 text-5xl font-extrabold tracking-tight text-fg sm:text-6xl">
                    {usd(SETUP * lanes)}
                    <span className="ml-2 text-base font-medium text-muted">setup</span>
                  </p>
                  <p className="text-gradient mt-1 text-2xl font-bold">+ {usd(MONTHLY * lanes)} / month</p>
                  <dl className="mt-8 space-y-4 text-sm">
                    <Row label={`${lanes} × ${usd(SETUP)} setup`} value={usd(SETUP * lanes)} />
                    <Row label={`${lanes} × ${usd(MONTHLY)} per month`} value={`${usd(MONTHLY * lanes)} / mo`} />
                    <Row label={`Total over ${TERM} months (illustrative)`} value={usd(HAAS_TOTAL * lanes)} />
                  </dl>
                  <ul className="mt-8 grid gap-3 text-sm text-fg sm:grid-cols-3">
                    {["Hardware", "Cloud software", "Active SLA"].map((x) => (
                      <li key={x} className="flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2.5">
                        <Check aria-hidden="true" className="h-4 w-4 text-accent-soft" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>

      {/* Feature comparison table */}
      <Reveal delay={0.05} className="mt-8">
        <div className="glass overflow-x-auto rounded-3xl">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
            <caption className="sr-only">Traditional capex compared with Zync HaaS, per GATE-S lane</caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="px-6 py-4 font-medium text-muted">Per GATE-S lane</th>
                <th scope="col" className="px-6 py-4 font-semibold text-fg-soft">Traditional Capex</th>
                <th scope="col" className="bg-accent/10 px-6 py-4 font-semibold text-accent-soft">Zync HaaS</th>
              </tr>
            </thead>
            <tbody>
              {compareRows.map((r) => (
                <tr key={r.label} className="border-b border-line last:border-0">
                  <th scope="row" className="px-6 py-4 font-medium text-fg-soft">{r.label}</th>
                  <td className="px-6 py-4 text-muted">{r.capex}</td>
                  <td className="bg-accent/10 px-6 py-4 font-medium text-fg">{r.haas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-muted">
        Indicative pricing per lane for a standard GATE-S configuration. The {TERM}-month total is illustrative. Final
        quotes depend on site, certification and local requirements.
      </p>
    </section>
  );
}

function Row({ label, value, soft }: { label: string; value: string; soft?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
      <dt className="text-muted">{label}</dt>
      <dd className={`text-right font-semibold ${soft ? "text-fg-soft" : "text-fg"}`}>{value}</dd>
    </div>
  );
}
