import React from "react";
import LocalClock from "./LocalClock";

// Two-region header: menu control (left), Melbourne & London clocks (right).
// Sits in normal flow and scrolls away.
export default function SiteHeader({ onOpenMenu }) {
  return (
    <header className="relative z-40 flex items-center justify-between px-5 py-6 md:px-10 md:py-8">
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

      <div className="flex items-center gap-4 md:gap-7">
        <LocalClock timeZone="Australia/Melbourne" label="Melbourne" />
        <span className="h-3 w-px bg-foreground/20" aria-hidden="true" />
        <LocalClock timeZone="Europe/London" label="London" />
      </div>
    </header>
  );
}