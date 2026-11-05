import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is included in the monthly fee?",
    a: "The hardware, the cloud software and an active SLA. You pay a one-time setup fee per lane, then a monthly fee per lane.",
  },
  {
    q: "Which baggage tracking standard do you support?",
    a: "BAG-KIT supports IATA Resolution 753, with five read points from check-in to arrival.",
  },
  {
    q: "How does it connect to our existing systems?",
    a: "Through the Zync cloud dashboard, which connects to your hospital management system (HMS) or your airline messaging systems.",
  },
  {
    q: "Where is the hardware made?",
    a: "Zync buys the mechanical hardware from OEMs in Coimbatore and China. Firmware flashing, edge-controller PCB integration and QA happen at our Kerala hub, where we also build the cloud dashboard.",
  },
  {
    q: "What happens when hardware ages or fails?",
    a: "Zync owns the hardware and replaces it under your subscription.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="relative mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="text-center">
        <p className="eyebrow text-primary-soft">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-4xl">
          Common questions
        </h2>
      </Reveal>

      <Reveal delay={0.06} className="mt-10 space-y-3">
        {faqs.map(({ q, a }) => (
          <details key={q} className="glass group rounded-2xl open:border-primary/30">
            <summary className="flex min-h-14 list-none items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left font-semibold text-fg [&::-webkit-details-marker]:hidden">
              {q}
              <ChevronDown
                aria-hidden="true"
                className="h-5 w-5 shrink-0 text-primary-soft transition-transform duration-300 group-open:rotate-180"
              />
            </summary>
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
