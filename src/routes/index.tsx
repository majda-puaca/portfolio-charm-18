import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const metrics = [
  { value: "+38%", label: "Avg. retention lift across 12 lifecycle programs" },
  { value: "9.2×", label: "ROI on a Klaviyo flow rebuild for a DTC skincare brand" },
  { value: "1.4M", label: "Subscribers segmented under predictive RFM model" },
  { value: "07", label: "Years building CRM systems end-to-end" },
];

const ticker = [
  "Klaviyo", "Braze", "Iterable", "HubSpot", "Customer.io", "Segment", "mParticle",
  "Salesforce Marketing Cloud", "Attentive", "Postscript", "dbt", "Looker",
];

function Index() {
  return (
    <main className="grain">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-12 md:px-10 md:py-24">
          <div className="reveal md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
              Vol. 07 — Portfolio · 2026
            </p>
            <h1 className="mt-6 font-display text-[14vw] leading-[0.92] tracking-[-0.03em] md:text-[8.5rem]">
              Lifecycle<br />
              <span className="italic text-accent">marketing,</span><br />
              made deliberate.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/80">
              I'm Maren — a CRM &amp; lifecycle manager building retention systems for
              consumer brands that refuse to rent their growth. Strategy, segmentation,
              and the unglamorous plumbing in between.
            </p>
            <div className="mt-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-[0.2em]">
              <Link to="/work" className="rounded-full bg-foreground px-6 py-3 text-background transition-transform hover:-translate-y-0.5">
                See the work →
              </Link>
              <Link to="/contact" className="rounded-full border border-foreground/30 px-6 py-3 transition-colors hover:border-accent hover:text-accent">
                Start a project
              </Link>
            </div>
          </div>

          <div className="reveal md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-3 -rotate-2 bg-accent/15" aria-hidden />
              <img
                src={portrait}
                alt="Portrait of Maren Holloway"
                width={1024}
                height={1280}
                className="relative aspect-[4/5] w-full object-cover grayscale-[10%]"
              />
              <div className="absolute -bottom-4 -left-4 bg-foreground px-4 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-background">
                Lisbon · 38.72°N
              </div>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-t border-border/60 bg-foreground py-4 text-background">
          <div className="marquee flex w-max gap-12 whitespace-nowrap font-mono text-xs uppercase tracking-[0.3em]">
            {[...ticker, ...ticker].map((t, i) => (
              <span key={i} className="flex items-center gap-12">
                {t} <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-5xl md:text-6xl">By the numbers.</h2>
          <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:inline">
            §01 — Receipts
          </span>
        </div>
        <div className="grid gap-px border border-border bg-border md:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-background p-8">
              <p className="font-display text-6xl text-accent">{m.value}</p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="border-t border-border/60 bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">§02 — Practice</span>
              <h2 className="mt-6 font-display text-5xl md:text-6xl">Three things,<br /> done well.</h2>
            </div>
            <div className="grid gap-12 md:col-span-8 md:grid-cols-3">
              {[
                { n: "01", t: "Lifecycle Strategy", b: "Audit, journey mapping, and a 90-day roadmap that connects acquisition to LTV — without 47 nested flows." },
                { n: "02", t: "CRM Engineering", b: "Klaviyo, Braze, Iterable. Segmentation models, deliverability triage, and pipelines that don't break on Black Friday." },
                { n: "03", t: "Retention Analytics", b: "Cohort dashboards, RFM scoring, and the exact incremental lift number your CFO will trust." },
              ].map((s) => (
                <div key={s.n} className="border-t border-background/20 pt-6">
                  <p className="font-mono text-xs text-accent">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-background/70">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="mx-auto max-w-[1100px] px-6 py-32 text-center md:px-10">
        <p className="font-display text-3xl italic leading-snug md:text-5xl">
          "Maren rebuilt our entire lifecycle from the segmentation up. Repeat
          purchase rate moved 22 points in a single quarter — and she made the
          team better while doing it."
        </p>
        <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Iris Calder · VP Growth, Atrium Skincare
        </p>
      </section>
    </main>
  );
}
