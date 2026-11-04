import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Minus, ScanLine } from "lucide-react";
import Reveal from "./Reveal";

type Model = "capex" | "haas";

const CAPEX_PRICE = 6500;
const SETUP = 750;
const MONTHLY = 230;
const TERM = 36;
const HAAS_TOTAL = SETUP + MONTHLY * TERM; // 9,030

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Pricing() {
  const [model, setModel] = useState<Model>("haas");
  const [lanes, setLanes] = useState(4);

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300">Products & HaaS economics</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          GATE-S Speed Gate, two ways to own it.
        </h2>
      </Reveal>

      {/* Toggle */}
      <Reveal delay={0.1} className="mt-10 flex justify-center">
        <div role="tablist" aria-label="Pricing model" className="glass relative inline-flex rounded-full p-1">
          {(
            [
              ["capex", "Traditional Capex"],
              ["haas", "Zync HaaS"],
            ] as const
          ).map(([key, label]) => (
            <button
              key={key}
              role="tab"
              aria-selected={model === key}
              onClick={() => setModel(key)}
              className="relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors sm:px-7"
            >
              {model === key && (
                <motion.span
                  layoutId="pill"
                  className={`absolute inset-0 rounded-full ${
                    key === "haas"
                      ? "bg-emerald-500 shadow-[0_0_24px_2px_rgba(16,185,129,0.5)]"
                      : "bg-zinc-700"
                  }`}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className={`relative ${model === key ? (key === "haas" ? "text-emerald-950" : "text-white") : "text-zinc-400"}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Product card */}
        <Reveal className="lg:col-span-2">
          <div className="glass flex h-full flex-col rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <ScanLine className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">GATE-S</p>
                <h3 className="text-xl font-bold text-white">Speed Gate Lane</h3>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">
              Bi-directional speed gate with UHF/NFC reader, Kerala-built controller and cloud dashboard, with anti-tailgating logic and offline mode.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-zinc-300">
              {["Bi-directional speed-gate lane", "UHF/NFC RFID reader", "Edge controller + OTA firmware", "Cloud dashboard & HMS / HR integrations"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <Check className="h-4 w-4 text-emerald-300" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-8">
              <label htmlFor="lanes" className="flex items-center justify-between text-sm font-medium text-zinc-300">
                Number of lanes
                <span className="rounded-md bg-white/5 px-2.5 py-1 font-bold text-white">{lanes}</span>
              </label>
              <input
                id="lanes"
                type="range"
                min={1}
                max={20}
                value={lanes}
                onChange={(e) => setLanes(Number(e.target.value))}
                className="mt-3 w-full accent-emerald-400"
              />
            </div>
          </div>
        </Reveal>

        {/* Math card */}
        <Reveal delay={0.1} className="lg:col-span-3">
          <div
            className={`relative h-full overflow-hidden rounded-3xl border p-7 transition-all duration-500 sm:p-9 ${
              model === "haas"
                ? "border-emerald-400/40 bg-linear-to-br from-emerald-400/10 to-cyan-400/5 shadow-[0_0_70px_-20px_rgba(16,185,129,0.55)]"
                : "border-white/10 bg-white/3"
            }`}
          >
            <AnimatePresence mode="wait">
              {model === "capex" ? (
                <motion.div
                  key="capex"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Traditional Capex</p>
                  <p className="mt-3 text-5xl font-extrabold text-white sm:text-6xl">
                    {usd(CAPEX_PRICE * lanes)}
                    <span className="ml-2 text-base font-medium text-zinc-500">upfront</span>
                  </p>
                  <dl className="mt-8 space-y-4 text-sm">
                    <Row label={`${lanes} × GATE-S @ ${usd(CAPEX_PRICE)}`} value={usd(CAPEX_PRICE * lanes)} />
                    <Row label="Maintenance & software contract" value="+ extra / year" muted />
                    <Row label="Integration & obsolescence risk" value="On you" muted />
                  </dl>
                  <p className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
                    <Minus className="h-4 w-4" /> Cash leaves your balance sheet on day one.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="haas"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-emerald-300">Zync HaaS</p>
                  <p className="mt-3 text-5xl font-extrabold text-white sm:text-6xl">
                    {usd(SETUP * lanes)}
                    <span className="ml-2 text-base font-medium text-zinc-400">setup</span>
                  </p>
                  <p className="mt-1 text-2xl font-bold text-gradient">
                    + {usd(MONTHLY * lanes)} / month
                  </p>
                  <dl className="mt-8 space-y-4 text-sm">
                    <Row label={`${lanes} × ${usd(SETUP)} setup`} value={usd(SETUP * lanes)} />
                    <Row label={`${lanes} × ${usd(MONTHLY)} / month`} value={`${usd(MONTHLY * lanes)} / mo`} />
                    <Row label={`${TERM}-month contract value`} value={usd(HAAS_TOTAL * lanes)} />
                  </dl>
                  <ul className="mt-8 grid gap-3 text-sm text-zinc-200 sm:grid-cols-3">
                    {["Hardware", "Cloud software", "Active SLA"].map((x) => (
                      <li key={x} className="flex items-center gap-2 rounded-lg bg-emerald-400/10 px-3 py-2">
                        <Check className="h-4 w-4 text-emerald-300" />
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

      <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-zinc-500">
        Indicative pricing per lane for a standard GATE-S configuration. HaaS shown over a {TERM}-month term. Final quotes depend on site, certification and local requirements.
      </p>
    </section>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3">
      <dt className="text-zinc-400">{label}</dt>
      <dd className={`font-semibold ${muted ? "text-zinc-500" : "text-white"}`}>{value}</dd>
    </div>
  );
}
