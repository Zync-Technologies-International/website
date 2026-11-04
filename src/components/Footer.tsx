import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, MapPin, Send, Waypoints } from "lucide-react";
import Reveal from "./Reveal";

const facilityTypes = ["Airport", "Ground handler", "Hospital", "Corporate campus", "Other"];

export default function Footer() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire to your backend / form service (e.g. fetch("/api/contact", { method: "POST", body: new FormData(e.currentTarget) }))
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition focus:border-cyan-400/60 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.15)]";

  return (
    <footer id="contact" className="relative scroll-mt-20 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Ready to upgrade your <span className="text-gradient">facility's flow?</span>
            </h2>
            <p className="mt-5 max-w-md text-zinc-400">
              Tell us about your airport, hospital or campus. We'll come back with a lane-by-lane HaaS proposal.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-3xl p-7 shadow-[0_0_70px_-25px_rgba(34,211,238,0.4)] sm:p-9">
              {sent ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                  <p className="mt-4 text-xl font-bold text-white">Thanks, we'll be in touch.</p>
                  <p className="mt-1 text-sm text-zinc-400">Our sales team will reply to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-zinc-300">Name</label>
                    <input id="name" name="name" required autoComplete="name" placeholder="Your full name" className={input} />
                  </div>
                  <div>
                    <label htmlFor="facility" className="mb-2 block text-sm font-medium text-zinc-300">Facility type</label>
                    <select id="facility" name="facility" required defaultValue="" className={`${input} appearance-none`}>
                      <option value="" disabled className="bg-zinc-900">Select a facility type</option>
                      {facilityTypes.map((f) => (
                        <option key={f} value={f} className="bg-zinc-900">{f}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">Work email</label>
                    <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={input} />
                  </div>
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-emerald-950 transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_0_32px_5px_rgba(16,185,129,0.45)]"
                  >
                    Contact Sales
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-400/10 ring-1 ring-cyan-400/30">
              <Waypoints className="h-4 w-4 text-cyan-300" />
            </span>
            <span className="font-bold text-white">Zync Technologies</span>
          </div>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-400">
            {[
              ["Industries", "#industries"],
              ["How it Works", "#how-it-works"],
              ["Pricing", "#pricing"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={l}>
                <a href={h} className="transition-colors hover:text-white">{l}</a>
              </li>
            ))}
          </ul>

          <p className="flex items-center gap-2 text-sm text-zinc-500">
            <MapPin className="h-4 w-4 text-emerald-400" />
            Kerala, India
          </p>
        </div>

        <p className="mt-8 text-xs text-zinc-600">
          © {new Date().getFullYear()} Zync Technologies International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
