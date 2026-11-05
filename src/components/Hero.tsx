import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import NodeGrid from "./NodeGrid";

const stats = [
  ["5", "R753 read points"],
  ["$0", "Hardware capex"],
  ["Kerala", "Firmware & cloud"],
] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass eyebrow inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-primary-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_rgb(34_211_238/0.8)]" />
            Hardware-as-a-Service
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.04] tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl">
            Seamless Movement.
            <br />
            <span className="text-gradient">Zero Capex.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Enterprise-grade RFID Access Gates and Tracking Systems for Aviation and Healthcare, delivered purely as
            Hardware-as-a-Service.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#industries"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-primary to-accent px-6 text-sm font-bold text-bg transition-all duration-300 hover:shadow-[0_0_36px_6px_rgb(34_211_238/0.35)]"
            >
              Explore Solutions
              <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/20 px-6 text-sm font-semibold text-fg transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:shadow-[0_0_24px_2px_rgb(34_211_238/0.2)]"
            >
              <FileText aria-hidden="true" className="h-4 w-4 text-primary-soft" />
              View Investor Deck
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            {stats.map(([k, v]) => (
              <div key={v}>
                <dt className="font-mono text-xl font-semibold text-fg">{k}</dt>
                <dd className="mt-1 text-xs text-muted">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <NodeGrid />
        </motion.div>
      </div>
    </section>
  );
}
