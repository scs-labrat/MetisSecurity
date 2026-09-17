import React, { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import ServiceFacts from "@/components/site/ServiceFacts";
import ServiceDetailRenderer from "@/components/site/ServiceDetailRenderer";
import RelatedServices from "@/components/site/RelatedServices";
import ContactCTA from "@/components/site/ContactCTA";
import { getServiceBySlug, getRelatedServices } from "@/data/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const service = getServiceBySlug(slug);

  useEffect(() => {
    if (service) document.title = `${service.title} — Applied Computing`;
  }, [service]);

  // Scroll to section anchor if present (e.g. #web-api).
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setTimeout(() => el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" }), 120);
    }
  }, [location.hash, location.pathname]);

  if (!service) {
    return (
      <section className="px-5 py-40 text-center md:px-10">
        <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">404</p>
        <h1 className="mt-4 font-display text-[32px] font-bold uppercase tracking-tighter">Service not found</h1>
      </section>
    );
  }

  const related = getRelatedServices(service);

  return (
    <>
      {/* Hero */}
      <section className="px-5 pb-16 pt-32 md:px-10 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            {service.title}
          </p>
          <h1 className="font-display text-[34px] font-bold uppercase leading-[0.98] tracking-tighter text-foreground sm:text-[48px] md:text-[64px]">
            {service.question}
          </h1>
          <p className="mt-8 max-w-2xl text-[17px] leading-[1.7] text-muted-foreground md:text-[19px]">
            {service.summary}
          </p>
        </div>
      </section>

      {/* Facts */}
      <section className="px-5 pb-8 md:px-10 md:pb-12">
        <div className="mx-auto max-w-4xl">
          <ServiceFacts facts={service.facts} />
        </div>
      </section>

      {/* Blocks */}
      <ServiceDetailRenderer blocks={service.blocks} />

      {/* Related */}
      {related.length > 0 && <RelatedServices services={related} />}

      <ContactCTA lines={["Let's scope", "this together."]} label={service.enquiryLabel} />
    </>
  );
}