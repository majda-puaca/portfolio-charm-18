import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Maren Holloway" },
      { name: "description", content: "Start a CRM or lifecycle marketing engagement with Maren Holloway." },
      { property: "og:title", content: "Contact — Maren Holloway" },
      { property: "og:description", content: "Two project spots open for Q3. Get in touch." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <main className="grain">
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">§ Contact</p>
            <h1 className="mt-6 font-display text-7xl leading-[0.95] md:text-[8rem]">
              Tell me<br /><span className="italic">what hurts.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              I take on a small number of engagements each quarter — usually as
              an embedded lifecycle lead for 3 to 6 months. Two spots are open
              starting in Q3.
            </p>

            <dl className="mt-12 space-y-6 font-mono text-xs uppercase tracking-[0.2em]">
              <div>
                <dt className="text-muted-foreground">Email</dt>
                <dd className="mt-1 font-display text-2xl normal-case tracking-normal">
                  <a href="mailto:hello@marenholloway.com" className="hover:text-accent">hello@marenholloway.com</a>
                </dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Calendar</dt>
                <dd className="mt-1 font-display text-2xl normal-case tracking-normal">
                  <a href="#" className="hover:text-accent">cal.com/maren — 30 min intro ↗</a>
                </dd>
              </div>
            </dl>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="md:col-span-5 space-y-6 border border-border bg-card p-8"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">Project Brief</p>

            <Field label="Your name" id="name" />
            <Field label="Email" id="email" type="email" />
            <Field label="Company" id="company" />

            <div>
              <label htmlFor="stack" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Current ESP / CRM
              </label>
              <select id="stack" className="w-full border-b border-foreground/30 bg-transparent py-2 text-base focus:border-accent focus:outline-none">
                <option>Klaviyo</option><option>Braze</option><option>Iterable</option>
                <option>Customer.io</option><option>HubSpot</option><option>Other / not sure</option>
              </select>
            </div>

            <div>
              <label htmlFor="brief" className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                What's the situation?
              </label>
              <textarea id="brief" rows={4} className="w-full resize-none border-b border-foreground/30 bg-transparent py-2 text-base focus:border-accent focus:outline-none" />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-foreground px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-background transition-colors hover:bg-accent"
            >
              {sent ? "Received — talk soon ✦" : "Send brief →"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </label>
      <input id={id} type={type} className="w-full border-b border-foreground/30 bg-transparent py-2 text-base focus:border-accent focus:outline-none" />
    </div>
  );
}
