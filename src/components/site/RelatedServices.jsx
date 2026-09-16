import React from "react";
import { Link } from "react-router-dom";
import { getCapabilityHref } from "@/data/capabilities";
import { useCursor } from "./CustomCursor";

// Related-service cards at the foot of a service detail page.
export default function RelatedServices({ services }) {
  return (
    <section className="px-5 py-20 md:px-10 md:py-28">
      <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
        Related services
      </p>
      <div className="mt-8 grid grid-cols-1 gap-px border-t border-border sm:grid-cols-2">
        {services.map((s) => (
          <RelatedCard key={s.slug} service={s} />
        ))}
      </div>
    </section>
  );
}

function RelatedCard({ service }) {
  const setCursor = useCursor();
  return (
    <Link
      to={service.route}
      onMouseEnter={() => setCursor({ variant: "hover" })}
      onMouseLeave={() => setCursor(null)}
      className="group flex items-center justify-between border-b border-border py-8 transition-colors sm:py-10"
    >
      <div>
        <h3 className="font-display text-[28px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground md:text-[40px]">
          {service.title}
        </h3>
        <p className="mt-2 max-w-[42ch] text-[15px] text-muted-foreground">
          {service.summary}
        </p>
      </div>
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        aria-hidden="true"
        className="ml-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
      >
        <path d="M5 17L17 5M17 5H9M17 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}