import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Index" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Maren Holloway</span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:inline">
            CRM&nbsp;/&nbsp;Lifecycle
          </span>
        </Link>
        <nav className="flex items-center gap-1 font-mono text-xs uppercase tracking-[0.18em]">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              className="rounded px-3 py-2 text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl leading-tight">Let's build a lifecycle that compounds.</p>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <p className="mb-2 text-foreground">Elsewhere</p>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-accent">LinkedIn ↗</a></li>
            <li><a href="#" className="hover:text-accent">Read.cv ↗</a></li>
            <li><a href="#" className="hover:text-accent">Substack ↗</a></li>
          </ul>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <p className="mb-2 text-foreground">Contact</p>
          <a href="mailto:hello@marenholloway.com" className="block hover:text-accent">hello@marenholloway.com</a>
          <p className="mt-4">Based in Lisbon · Working globally</p>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground md:px-10">
          <span>© 2026 Maren Holloway</span>
          <span>Vol. 07 · Portfolio Edition</span>
        </div>
      </div>
    </footer>
  );
}
