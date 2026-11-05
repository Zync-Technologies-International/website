import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "What is included in the monthly fee?",
    a: "The hardware, the cloud software and an active SLA. You pay a one-time setup fee per lane, then a flat monthly fee per lane.",
  },
  {
    q: "Which standards do you support for baggage tracking?",
    a: "BAG-KIT is designed for IATA Resolution 753 baggage reconciliation, with five read points from check-in to arrival.",
  },
  {
    q: "How does it connect to our existing systems?",
    a: "Through the Zync cloud dashboard. We integrate with your hospital management system (HMS) or your airline messaging systems, so you don't build middleware yourself.",
  },
  {
    q: "Where is the hardware made and engineered?",
    a: "Mechanical hardware is sourced from trusted OEMs in Coimbatore and China. Firmware, edge-controller integration, QA and the cloud platform are built in Kerala, India.",
  },
  {
    q: "What happens when hardware ages or fails?",
    a: "Hardware stays on Zync's books and is replaced as part of your subscription, so you never carry obsolescence risk.",
  },
];

export default function Faq() {
  return (
    <section aria-labelledby="faq-heading" className="relative mx-auto max-w-3xl px-5 pb-20 sm:px-8 sm:pb-28">
      <Reveal className="text-center">
        <p className="eyebrow text-primary-soft">FAQ</p>
        <h2 id="faq-heading" className="mt-3 text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-4xl">
          Questions procurement will ask
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
