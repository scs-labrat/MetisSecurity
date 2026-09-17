import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ContactCTA from "@/components/site/ContactCTA";
import { useCursor } from "@/components/site/CustomCursor";
import {
  getPlatformComponentBySlug,
  getPlatformSiblings,
} from "@/data/platform";

export default function PlatformDetail() {
  const { slug } = useParams();
  const component = getPlatformComponentBySlug(slug);
  const setCursor = useCursor();

  useEffect(() => {
    if (component) document.title = `${component.name} — Applied Computing`;
  }, [component]);

  if (!component) {
    return (
      <section className="px-5 py-40 text-center md:px-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 font-display text-[32px] font-bold uppercase tracking-tighter">
          Component not found
        </h1>
      </section>
    );
  }

  const siblings = getPlatformSiblings(slug);

  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            {component.role}
          </p>
          <h1 className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px]">
            {component.name}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            {component.summary}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="px-5 pb-16 md:px-10 md:pb-24">
        <div className="mx-auto max-w-3xl">
          {component.paragraphs.map((p, i) => (
            <p
              key={i}
              className="mb-6 text-[17px] leading-[1.7] text-foreground/85 md:text-[20px]"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Siblings */}
      {siblings.length > 0 && (
        <section className="px-5 pb-8 md:px-10 md:pb-12">
          <div className="mx-auto max-w-4xl">
            <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              The platform
            </p>
            <div className="border-t border-border">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  to={`/platform/${s.slug}`}
                  onMouseEnter={() => setCursor({ variant: "hover" })}
                  onMouseLeave={() => setCursor(null)}
                  className="group flex items-baseline justify-between gap-6 border-b border-border py-6"
                >
                  <div>
                    <h3 className="font-display text-[24px] font-bold uppercase tracking-tighter text-foreground md:text-[32px]">
                      {s.name}
                    </h3>
                    <p className="mt-1 max-w-xl text-[15px] leading-[1.5] text-muted-foreground md:text-[17px]">
                      {s.tagline}
                    </p>
                  </div>
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:text-foreground">
                    View →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA lines={["Map your", "estate."]} label="Discuss an engagement" />
    </>
  );
}