import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Maren Holloway" },
      { name: "description", content: "About Maren Holloway, an independent CRM and lifecycle marketing manager based in Lisbon." },
      { property: "og:title", content: "About — Maren Holloway" },
      { property: "og:description", content: "Operator-turned-consultant. Lifecycle systems for consumer brands." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2024 — now", r: "Independent · CRM Lead", w: "Embedded operator for consumer brands. Currently Atrium Skincare, Folio Bank." },
  { y: "2021 — 2024", r: "Head of Lifecycle, Hearth & Cedar", w: "Built the CRM team from scratch. 0 → $14M attributable email/SMS revenue." },
  { y: "2019 — 2021", r: "CRM Manager, Northbound Coffee", w: "Migrated from Mailchimp to Klaviyo, designed the entire flow architecture." },
  { y: "2017 — 2019", r: "Lifecycle Analyst, Studio &Co.", w: "Cohort modeling and reporting for a portfolio of seven DTC brands." },
];

function AboutPage() {
  return (
    <main className="grain">
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">§ About</p>
            <h1 className="mt-6 font-display text-6xl leading-[0.95] md:text-[7rem]">
              I think in <span className="italic">cohorts,</span> not campaigns.
            </h1>
            <div className="mt-12 max-w-2xl space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                I started in growth analytics at a small DTC studio and ended up
                doing the part nobody else wanted: the segmentation, the
                deliverability audit, the messy export from a legacy ESP at 2am
                before a launch. It turned out to be the part I love.
              </p>
              <p>
                Today I work with five or six consumer brands a year — usually as
                an embedded fractional lead — building the lifecycle systems that
                turn first purchases into a category habit. I'm opinionated about
                tooling, allergic to vanity metrics, and quietly obsessed with
                onboarding sequences.
              </p>
              <p className="font-display text-2xl italic text-foreground">
                Outside of work: long walks in Alfama, a slowly improving sourdough
                starter, and a bookshelf weighted heavily toward 20th-century essays.
              </p>
            </div>
          </div>
          <aside className="md:col-span-5">
            <img
              src={portrait}
              alt="Maren Holloway"
              loading="lazy"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            <dl className="mt-6 grid grid-cols-2 gap-px border border-border bg-border font-mono text-xs">
              {[
                ["Based", "Lisbon, PT"],
                ["Working", "Globally"],
                ["Capacity", "2 spots · Q3"],
                ["Languages", "EN · PT · ES"],
              ].map(([k, v]) => (
                <div key={k} className="bg-background p-4">
                  <dt className="uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="font-display text-5xl md:text-6xl">A short résumé.</h2>
          <span className="hidden font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground md:inline">
            §02 — Trajectory
          </span>
        </div>
        <ol className="divide-y divide-border border-y border-border">
          {timeline.map((t) => (
            <li key={t.y} className="grid grid-cols-12 gap-6 py-8">
              <span className="col-span-12 font-mono text-xs uppercase tracking-[0.25em] text-accent md:col-span-3">
                {t.y}
              </span>
              <span className="col-span-12 font-display text-2xl md:col-span-4">{t.r}</span>
              <p className="col-span-12 text-foreground/75 md:col-span-5">{t.w}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
