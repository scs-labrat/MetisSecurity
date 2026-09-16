import React from "react";
import { Link } from "react-router-dom";
import LocalClock from "./LocalClock";
import { siteConfig, primaryCta } from "@/lib/siteConfig";

// Three-region header: local time (left), four-dot menu control (center),
// outlined contact link (right). Sits in normal flow and scrolls away.
export default function SiteHeader({ onOpenMenu }) {
  return (
    <header className="relative z-40 flex items-center justify-between px-5 py-6 md:px-10 md:py-8">
      <div className="flex items-center">
        <LocalClock />
      </div>

      <button
        type="button"
        onClick={onOpenMenu}
        aria-label="Open navigation menu"
        className="group flex items-center gap-3"
      >
        <span className="grid grid-cols-2 gap-1.5">
          <span className="block h-1.5 w-1.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-125" />
          <span className="block h-1.5 w-1.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-125" />
          <span className="block h-1.5 w-1.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-125" />
          <span className="block h-1.5 w-1.5 rounded-full bg-foreground transition-transform duration-300 group-hover:scale-125" />
        </span>
        <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          Menu
        </span>
      </button>

      <Link
        to={primaryCta.href}
        className="hidden items-center justify-center rounded-full border border-foreground/30 px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.08em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background sm:inline-flex"
      >
        {primaryCta.label}
      </Link>
    </header>
  );
}