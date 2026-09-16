import React, { useEffect } from "react";
import ContactForm from "@/components/site/ContactForm";
import SplitHeadline from "@/components/site/SplitHeadline";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
  useEffect(() => { document.title = "Contact — Asymmetric"; }, []);

  return (
    <>
      <section className="px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            Contact
          </p>
          <SplitHeadline
            as="h1"
            lines={["Start a", "conversation."]}
            className="font-display text-[40px] font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-[56px] md:text-[72px]"
          />
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            Tell us what you'd like assessed. A short note is enough — detailed scoping can follow.
            We'll come back to shape the engagement together.
          </p>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-10 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <ContactForm />
        </div>
      </section>

      {/* Contact details */}
      <section className="border-t border-border px-5 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Email</p>
            <a href={`mailto:${siteConfig.contact.email}`} className="mt-3 block break-all text-[15px] text-foreground hover:opacity-60">
              {siteConfig.contact.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Location</p>
            <p className="mt-3 text-[15px] text-foreground">{siteConfig.location}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Social</p>
            <ul className="mt-3 space-y-1.5">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className="text-[15px] text-foreground hover:opacity-60">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">Next step</p>
            <p className="mt-3 text-[15px] leading-[1.6] text-muted-foreground">
              We review every enquiry and reply to scope a conversation — usually within a few days.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}