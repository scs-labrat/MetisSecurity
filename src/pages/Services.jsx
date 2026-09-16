import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CapabilityPanel from "@/components/site/CapabilityPanel";
import ContactCTA from "@/components/site/ContactCTA";
import { useCursor } from "@/components/site/CustomCursor";
import { capabilities } from "@/data/capabilities";
import { services } from "@/data/services";

const faqs = [
  {
    q: "How is an engagement scoped?",
    a: "It starts with a short conversation about your systems, the risk you're worried about, and the decisions you need to support. Detailed scoping follows — you don't need a complete brief to start.",
  },
  {
    q: "What do we receive at the end?",
    a: "A prioritised set of findings, each with the evidence to reproduce it and concrete remediation guidance, plus a debrief with your team. We remain available for follow-up while you fix.",
  },
  {
    q: "Do you test the way a real attacker would?",
    a: "Yes. We chase the routes an attacker would actually take and chain them into the paths that reach something worth protecting — not a checklist of isolated weaknesses.",
  },
  {
    q: "Can you work with our existing environment?",
    a: "We test the real attack surface, including cloud, identity, internal networks, and managed endpoints. Where your environment includes specific platforms, we test them in context.",
  },
  {
    q: "How do we start?",
    a: "Send a short note through the contact page. Tell us what you'd like assessed — technical detail can follow later.",
  },
];

export default function Services() {
  useEffect(() => { document.title = "Services — Asymmetric"; }, []);
  const setCursor = useCursor();

  return (
    <>
      {/* Intro */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Services
          </p>
          <h1 className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px]">
            Which assessment fits your risk?
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            We organise our work around the questions you're actually asking — and the outcomes an
            assessment should support. Every engagement is scoped to your environment and the
            decisions you need to make.
          </p>
        </div>
      </section>

      {/* Six capability panels */}
      <div className="flex flex-col">
        {capabilities.map((cap, i) => (
          <CapabilityPanel key={cap.id} capability={cap} index={i} />
        ))}
      </div>

      {/* Three service families */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
          Service families
        </p>
        <div className="mt-8 border-t border-border">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={s.route}
              onMouseEnter={() => setCursor({ variant: "pill", label: "View service" })}
              onMouseLeave={() => setCursor(null)}
              className="group flex flex-col gap-3 border-b border-border py-8 md:flex-row md:items-start md:justify-between md:gap-10 md:py-12"
            >
              <div className="max-w-2xl">
                <h2 className="font-display text-[28px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground md:text-[44px]">
                  {s.title}
                </h2>
                <p className="mt-3 text-[16px] leading-[1.6] text-muted-foreground md:text-[18px]">
                  {s.summary}
                </p>
              </div>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true" className="mt-1 shrink-0 transition-transform duration-300 group-hover:translate-x-1 md:mt-3">
                <path d="M5 17L17 5M17 5H9M17 5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Scoping & deliverables
          </p>
          <h2 className="mt-6 font-display text-[32px] font-bold uppercase leading-[1] tracking-tighter text-foreground md:text-[48px]">
            Frequently asked
          </h2>
          <dl className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((f) => (
              <div key={f.q} className="py-6">
                <dt className="font-display text-[19px] font-semibold tracking-tight text-foreground md:text-[22px]">
                  {f.q}
                </dt>
                <dd className="mt-3 text-[16px] leading-[1.7] text-muted-foreground md:text-[18px]">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ContactCTA lines={["Scope an", "assessment."]} label="Discuss an engagement" />
    </>
  );
}