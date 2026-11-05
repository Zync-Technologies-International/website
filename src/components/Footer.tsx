import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, CircleAlert, LoaderCircle, MapPin, Send, Waypoints } from "lucide-react";
import Reveal from "./Reveal";

const facilityTypes = ["Airport", "Ground handler", "Hospital", "Corporate campus", "Other"];

type Errors = Partial<Record<"name" | "facility" | "email", string>>;
type Status = "idle" | "sending" | "sent";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass = (invalid: boolean) =>
  `min-h-12 w-full rounded-xl border bg-white/5 px-4 text-sm text-fg placeholder:text-muted outline-none transition-colors focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-soft ${
    invalid ? "border-danger" : "border-white/15 hover:border-white/30"
  }`;

export default function Footer() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const facility = String(data.get("facility") ?? "");
    const email = String(data.get("email") ?? "").trim();

    const next: Errors = {};
    if (!name) next.name = "Please enter your name.";
    if (!facility) next.facility = "Please choose a facility type.";
    if (!email) next.email = "Please enter your work email.";
    else if (!EMAIL_RE.test(email)) next.email = "Enter a valid email, like name@company.com.";

    setErrors(next);
    const firstInvalid = (["name", "facility", "email"] as const).find((k) => next[k]);
    if (firstInvalid) {
      const el = formRef.current?.elements.namedItem(firstInvalid);
      if (el instanceof HTMLElement) el.focus(); // move focus to the first error
      return;
    }

    // TODO: replace this simulated request with your backend / form service, e.g.
    // fetch("/api/contact", { method: "POST", body: data })
    setStatus("sending");
    window.setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <footer id="contact" className="relative border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-[-0.02em] text-fg sm:text-5xl">
              Ready to upgrade your <span className="text-gradient">facility's flow?</span>
            </h2>
            <p className="mt-5 max-w-md text-muted">
              Tell us about your airport, hospital or campus. We'll come back with a lane-by-lane HaaS proposal.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass rounded-3xl p-7 shadow-[0_0_70px_-25px_rgb(34_211_238/0.4)] sm:p-9">
              {status === "sent" ? (
                <div role="status" className="flex flex-col items-center py-10 text-center">
                  <CheckCircle2 aria-hidden="true" className="h-12 w-12 text-accent" />
                  <p className="mt-4 text-xl font-bold text-fg">Thanks, we'll be in touch.</p>
                  <p className="mt-1 text-sm text-muted">Our sales team will reply to your email shortly.</p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg-soft">Name</label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-err" : undefined}
                      className={fieldClass(!!errors.name)}
                    />
                    <FieldError id="name-err" message={errors.name} />
                  </div>

                  <div>
                    <label htmlFor="facility" className="mb-2 block text-sm font-medium text-fg-soft">Facility type</label>
                    <select
                      id="facility"
                      name="facility"
                      defaultValue=""
                      aria-invalid={!!errors.facility}
                      aria-describedby={errors.facility ? "facility-err" : undefined}
                      className={fieldClass(!!errors.facility)}
                    >
                      <option value="" disabled className="bg-bg-alt">Select a facility type</option>
                      {facilityTypes.map((f) => (
                        <option key={f} value={f} className="bg-bg-alt">{f}</option>
                      ))}
                    </select>
                    <FieldError id="facility-err" message={errors.facility} />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg-soft">Work email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-err" : undefined}
                      className={fieldClass(!!errors.email)}
                    />
                    <FieldError id="email-err" message={errors.email} />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 text-sm font-bold text-on-accent transition-all duration-300 hover:bg-accent-soft hover:shadow-[0_0_32px_5px_rgb(52_211_153/0.45)] disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
                  >
                    {status === "sending" ? (
                      <>
                        <LoaderCircle aria-hidden="true" className="h-4 w-4 animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        Contact Sales
                        <Send aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col gap-8 border-t border-line pt-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/30">
              <Waypoints className="h-4 w-4 text-primary-soft" />
            </span>
            <span className="font-bold text-fg">Zync Technologies</span>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 text-sm text-muted">
              {[
                ["Industries", "#industries"],
                ["Products", "#products"],
                ["How it Works", "#how-it-works"],
                ["Pricing", "#pricing"],
                ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="inline-flex min-h-11 items-center transition-colors hover:text-fg">{l}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="flex items-center gap-2 text-sm text-muted">
            <MapPin aria-hidden="true" className="h-4 w-4 text-accent" />
            Kerala, India
          </p>
        </div>

        <p className="mt-8 text-xs text-muted">
          © {new Date().getFullYear()} Zync Technologies International. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 flex items-center gap-1.5 text-sm text-danger">
      <CircleAlert aria-hidden="true" className="h-4 w-4 shrink-0" />
      {message}
    </p>
  );
}
