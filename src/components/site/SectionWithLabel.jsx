import React from "react";

// Narrow left section label + wide right content. Used on About.
export default function SectionWithLabel({ label, children, id }) {
  return (
    <section id={id} className="border-t border-border px-5 py-16 md:px-10 md:py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr] md:gap-16">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          {label}
        </p>
        <div>{children}</div>
      </div>
    </section>
  );
}