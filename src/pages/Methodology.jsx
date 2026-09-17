import React, { useEffect } from "react";
import ContactCTA from "@/components/site/ContactCTA";
import SectionWithLabel from "@/components/site/SectionWithLabel";
import MethodologyIntro from "@/components/site/MethodologyIntro";
import { methodology } from "@/data/methodology";

export default function Methodology() {
  useEffect(() => {
    document.title = "Methodology — Applied Computing";
  }, []);

  return (
    <>
      {/* Long-form intro: the case against the silo model */}
      <MethodologyIntro />

      {/* Hero */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Methodology
          </p>
          <h1 className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px]">
            The Metis Unified Model
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            {methodology.intro}
          </p>
        </div>
      </section>

      {/* Graph paradigm */}
      <SectionWithLabel label="The graph paradigm">
        <div className="border-t border-border py-8">
          <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground md:text-[22px]">
            {methodology.graphParadigm}
          </p>
        </div>
      </SectionWithLabel>

      {/* Seven nouns */}
      <SectionWithLabel label="Seven nouns">
        <div className="border-t border-border">
          {methodology.nouns.map((n, i) => (
            <div key={n.name} className="border-b border-border py-7 md:py-9">
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-10">
                <div className="flex items-baseline gap-4 md:w-[280px] md:shrink-0">
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-[26px] font-bold uppercase tracking-tighter text-foreground md:text-[34px]">
                    {n.name}
                  </h3>
                </div>
                <div className="max-w-2xl">
                  <p className="text-[17px] leading-[1.5] text-foreground md:text-[19px]">
                    {n.definition}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.6] text-muted-foreground md:text-[16px]">
                    {n.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      {/* Nine verbs */}
      <SectionWithLabel label="Nine verbs">
        <div className="border-t border-border">
          {methodology.verbs.map((v, i) => (
            <div key={v.name} className="flex flex-col gap-1 border-b border-border py-6 md:flex-row md:items-baseline md:gap-10">
              <div className="flex items-baseline gap-4 md:w-[280px] md:shrink-0">
                <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-[16px] font-medium uppercase tracking-[0.08em] text-foreground md:text-[18px]">
                  {v.name}
                </h3>
              </div>
              <p className="max-w-2xl text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                {v.definition}
              </p>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      {/* Principles */}
      <SectionWithLabel label="Principles">
        <div className="border-t border-border">
          {methodology.principles.map((p, i) => (
            <div key={i} className="flex gap-5 border-b border-border py-6 md:gap-10">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="max-w-2xl text-[17px] leading-[1.5] text-foreground md:text-[20px]">
                {p}
              </p>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      {/* Assessment engagement stages */}
      <SectionWithLabel label="The engagement">
        <div className="border-t border-border">
          {methodology.stages.map((s) => (
            <div key={s.step} className="flex gap-6 border-b border-border py-7 md:gap-10">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.step}
              </span>
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-foreground md:text-[26px]">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      <ContactCTA lines={["Map your", "estate."]} label="Discuss an engagement" />
    </>
  );
}