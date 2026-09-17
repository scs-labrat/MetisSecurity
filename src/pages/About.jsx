import React, { useEffect } from "react";
import ContactCTA from "@/components/site/ContactCTA";
import SectionWithLabel from "@/components/site/SectionWithLabel";
import PlatformPanel from "@/components/site/PlatformPanel";
import { about } from "@/data/team";
import { platformComponents } from "@/data/platform";

export default function About() {
  useEffect(() => { document.title = "About — Applied Computing"; }, []);

  return (
    <>
      {/* Centered title */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            About
          </p>
          <h1 className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px]">
            The Metis Platform
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            {about.intro}
          </p>
        </div>
      </section>

      {/* Platform components — parallax panels */}
      <div className="flex flex-col">
        {platformComponents.map((c, i) => (
          <PlatformPanel key={c.slug} component={c} index={i} />
        ))}
      </div>

      {/* What you buy */}
      <SectionWithLabel label="What you buy">
        <div className="border-t border-border py-8">
          <p className="max-w-2xl text-[18px] leading-[1.6] text-foreground md:text-[22px]">
            {about.whatClientBuys}
          </p>
        </div>
      </SectionWithLabel>

      {/* Working principles */}
      <SectionWithLabel label="Principles">
        <div className="border-t border-border">
          {about.principles.map((p) => (
            <div key={p.title} className="border-b border-border py-7">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-foreground md:text-[26px]">
                  {p.title}
                </h3>
                <p className="max-w-xl text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      {/* Team */}
      <SectionWithLabel label="Team">
        {about.team.length === 0 ? (
          <p className="text-[16px] text-muted-foreground">
            Team profiles will appear here once supplied.
          </p>
        ) : (
          <div className="border-t border-border">
            {about.team.map((member) => (
              <div key={member.name} className="border-b border-border py-8">
                <h3 className="font-display text-[24px] font-bold tracking-tight text-foreground md:text-[32px]">
                  {member.name}
                </h3>
                <p className="mt-1 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                  {member.role}
                </p>
                <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-muted-foreground md:text-[18px]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        )}
      </SectionWithLabel>

      {/* Engagement process */}
      <SectionWithLabel label="Process">
        <div className="border-t border-border">
          {about.process.map((step) => (
            <div key={step.step} className="flex gap-6 border-b border-border py-7 md:gap-10">
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                {step.step}
              </span>
              <div>
                <h3 className="font-display text-[22px] font-semibold tracking-tight text-foreground md:text-[26px]">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWithLabel>

      {/* Company */}
      <SectionWithLabel label="Company">
        <div className="border-t border-border py-8">
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Registered name
              </dt>
              <dd className="mt-2 text-[16px] text-foreground md:text-[18px]">
                {about.company.registeredName}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Company number
              </dt>
              <dd className="mt-2 text-[16px] text-foreground md:text-[18px]">
                {about.company.companyNumber}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Registered office
              </dt>
              <dd className="mt-2 text-[16px] leading-[1.6] text-foreground md:text-[18px]">
                {about.company.address}
              </dd>
            </div>
          </dl>
        </div>
      </SectionWithLabel>

      <ContactCTA lines={["Meet", "Applied Computing."]} label="Discuss an engagement" />
    </>
  );
}