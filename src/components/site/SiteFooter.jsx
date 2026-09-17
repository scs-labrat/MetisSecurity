import React from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/siteConfig";

// Shared footer: social, location, contact, copyright, return-to-top.
export default function SiteFooter() {
  const scrollTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="px-5 pb-10 pt-16 md:px-10 md:pb-12 md:pt-24">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Social
          </p>
          <ul className="mt-4 space-y-2">
            {siteConfig.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[15px] text-foreground transition-opacity hover:opacity-60"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Location
          </p>
          <p className="mt-4 text-[15px] text-foreground">{siteConfig.location}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Email
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-4 block break-all text-[15px] text-foreground transition-opacity hover:opacity-60"
          >
            {siteConfig.contact.email}
          </a>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Index
          </p>
          <ul className="mt-4 space-y-2">
            <li><Link to="/" className="text-[15px] text-foreground hover:opacity-60">Home</Link></li>
            <li><Link to="/services" className="text-[15px] text-foreground hover:opacity-60">Services</Link></li>
            <li><Link to="/methodology" className="text-[15px] text-foreground hover:opacity-60">Methodology</Link></li>
            <li><Link to="/about" className="text-[15px] text-foreground hover:opacity-60">About</Link></li>
            <li><Link to="/contact" className="text-[15px] text-foreground hover:opacity-60">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="mt-16 flex items-center justify-between border-t border-border pt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          {siteConfig.footer.copyright}
        </p>
        <button
          type="button"
          onClick={scrollTop}
          className="group flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <span>Back to top</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
            <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </footer>
  );
}