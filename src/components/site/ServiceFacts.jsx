import React from "react";

// Horizontal label/value fact rows for service detail pages. Stacks on mobile.
export default function ServiceFacts({ facts }) {
  return (
    <dl className="border-t border-border">
      {facts.map((f) => (
        <div
          key={f.label}
          className="grid grid-cols-1 gap-1 border-b border-border py-4 sm:grid-cols-[200px_1fr] sm:gap-8"
        >
          <dt className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            {f.label}
          </dt>
          <dd className="text-[16px] text-foreground md:text-[18px]">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}