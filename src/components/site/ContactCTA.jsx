import React from "react";
import RollingLink from "./RollingLink";
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
          <span className="inline-flex items-center justify-center rounded-full border border-foreground/30 px-7 py-3.5 text-[14px] font-medium uppercase tracking-[0.08em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background">
            <RollingLink to={href} arrow>{label}</RollingLink>
          </span>
        </div>
      </div>
    </section>
  );
}