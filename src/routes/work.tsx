import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Maren Holloway" },
      { name: "description", content: "Selected CRM and lifecycle marketing case studies across DTC, fintech, and subscription brands." },
      { property: "og:title", content: "Selected Work — Maren Holloway" },
      { property: "og:description", content: "Lifecycle case studies for ambitious consumer brands." },
    ],
  }),
  component: WorkPage,
});

const cases = [
  {
    year: "2025",
    client: "Atrium Skincare",
    title: "Rebuilding a 1.4M-subscriber lifecycle from the segmentation up.",
    tags: ["Klaviyo", "RFM", "Deliverability"],
    metric: "+22pt repeat rate",
    tone: "bg-accent text-accent-foreground",
  },
  {
    year: "2024",
    client: "Folio Bank",
    title: "A behavioral onboarding series that doubled funded-account rate.",
    tags: ["Braze", "Onboarding", "Fintech"],
    metric: "2.1× activation",
    tone: "bg-foreground text-background",
  },
  {
    year: "2024",
    client: "Hearth & Cedar",
    title: "Winback program that recovered $1.8M in dormant subscriber revenue.",
    tags: ["Iterable", "Winback", "Subscription"],
    metric: "$1.8M recovered",
    tone: "bg-secondary text-foreground",
  },
  {
    year: "2023",
    client: "Mira Wellness",
    title: "Predictive churn model wired into a four-stage save flow.",
    tags: ["Customer.io", "Churn", "Modeling"],
    metric: "−31% involuntary churn",
    tone: "bg-foreground text-background",
  },
  {
    year: "2023",
    client: "Northbound Coffee",
    title: "From batch-and-blast to a triggered ecosystem in 60 days.",
    tags: ["Klaviyo", "Migration", "DTC"],
    metric: "9.2× flow ROI",
    tone: "bg-accent text-accent-foreground",
  },
];

function WorkPage() {
  return (
    <main className="grain">
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">§ Selected Work</p>
            <h1 className="mt-6 font-display text-7xl leading-[0.95] md:text-[9rem]">
              Five years,<br /><span className="italic">five</span> programs.
            </h1>
          </div>
          <div className="md:col-span-4 md:pt-32">
            <p className="text-base leading-relaxed text-foreground/75">
              A condensed selection — under NDA work and ongoing retainers omitted.
              Each engagement spanned 3 to 14 months as embedded operator or fractional lead.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10">
        <ul>
          {cases.map((c, i) => (
            <li key={c.client} className="group border-b border-border/60">
              <Link
                to="/work"
                className="grid grid-cols-12 items-center gap-6 py-10 transition-colors hover:bg-foreground hover:text-background md:py-14"
              >
                <span className="col-span-2 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground group-hover:text-background/60 md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-3 font-mono text-xs uppercase tracking-[0.25em] md:col-span-2">
                  {c.year} · {c.client}
                </span>
                <h3 className="col-span-12 font-display text-3xl leading-tight md:col-span-6 md:text-5xl">
                  {c.title}
                </h3>
                <div className="col-span-12 flex flex-wrap items-center justify-between gap-4 md:col-span-3 md:justify-end">
                  <span className={`px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] ${c.tone}`}>
                    {c.metric}
                  </span>
                  <span className="font-display text-3xl">→</span>
                </div>
                <div className="col-span-12 col-start-1 flex flex-wrap gap-2 md:col-span-9 md:col-start-4">
                  {c.tags.map((t) => (
                    <span key={t} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-background/50">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
