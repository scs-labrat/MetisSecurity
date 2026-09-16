import React from "react";
import { Link } from "react-router-dom";
import { primaryCta } from "@/lib/siteConfig";

// Shared closing enquiry section: large centered heading + outlined CTA.
export default function ContactCTA({
  lines = ["Let's find the", "paths that matter."],
  label = primaryCta.label,
  href = primaryCta.href,
}) {
  return (
    <section className="px-5 py-24 md:px-10 md:py-40">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h2 className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px] lg:text-[80px]">
          {lines.map((l, i) => (
            <span key={i} className="block">
              {l}
            </span>
          ))}
        </h2>
        <div className="mt-10 md:mt-14">
          <Link
            to={href}
            className="group inline-flex items-center justify-center rounded-full border border-foreground/30 px-7 py-3.5 text-[14px] font-medium uppercase tracking-[0.08em] text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground"
          >
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-300 ease-expo group-hover:-translate-y-full">
                <span className="inline-flex items-center gap-3 group-hover:text-background">
                  {label}
                  <Arrow />
                </span>
              </span>
              <span className="absolute inset-0 block translate-y-full text-background transition-transform duration-300 ease-expo group-hover:translate-y-0">
                <span className="inline-flex items-center gap-3">
                  {label}
                  <Arrow />
                </span>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}