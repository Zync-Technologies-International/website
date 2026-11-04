import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import NodeGrid from "./NodeGrid";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(103,232,249,0.8)]" />
            Hardware-as-a-Service · Engineered in Kerala
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Seamless Movement.
            <br />
            <span className="text-gradient">Zero Capex.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
            Enterprise-grade RFID Access Gates and Tracking Systems for Aviation and Healthcare,
            delivered purely as Hardware-as-a-Service.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#industries"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-400 to-emerald-400 px-6 py-3.5 text-sm font-bold text-zinc-950 transition-all duration-300 hover:shadow-[0_0_36px_6px_rgba(34,211,238,0.35)]"
            >
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-400/5 hover:shadow-[0_0_24px_2px_rgba(34,211,238,0.2)]"
            >
              <FileText className="h-4 w-4 text-cyan-300" />
              View Investor Deck
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6">
            {[
              ["R753", "Compliant tracking"],
              ["99%+", "RFID read rates"],
              ["36 mo", "All-inclusive term"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="text-xl font-bold text-white">{k}</dt>
                <dd className="mt-0.5 text-xs text-zinc-500">{v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <NodeGrid />
        </motion.div>
      </div>
    </section>
  );
}
