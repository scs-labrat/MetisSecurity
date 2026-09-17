import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import CapabilityPanel from "@/components/site/CapabilityPanel";
import ContactCTA from "@/components/site/ContactCTA";
import SplitHeadline from "@/components/site/SplitHeadline";
import { useCursor } from "@/components/site/CustomCursor";
import { capabilities } from "@/data/capabilities";
import { portraitCover } from "@/data/services";
import { siteConfig } from "@/lib/siteConfig";

export default function Home() {
  useEffect(() => { document.title = "Applied Computing — Metis Practice"; }, []);
  const setCursor = useCursor();
  const portraitRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: portraitRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88vh] flex-col items-center justify-center px-5 md:px-10">
        <SplitHeadline
          as="h1"
          lines={["We find the attack", "paths that matter."]}
          className="text-center font-display text-[44px] font-bold uppercase leading-[0.92] tracking-tighter text-foreground sm:text-[64px] md:text-[80px] lg:text-[96px]"
        />
        <p className="mt-7 max-w-xl text-center text-[14px] uppercase tracking-[0.14em] text-muted-foreground md:text-[18px]">
          The Metis practice — one map of how access becomes consequence.
        </p>
        <div className="absolute bottom-6 left-5 right-5 flex items-end justify-between md:bottom-10 md:left-10 md:right-10">
          <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
            {siteConfig.location}
          </span>
          <Link
            to="/about"
            onMouseEnter={() => setCursor({ variant: "hover" })}
            onMouseLeave={() => setCursor(null)}
            className="font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-opacity hover:opacity-60"
          >
            About Applied Computing →
          </Link>
        </div>
      </section>

      {/* Capability panels */}
      <div className="flex flex-col">
        {capabilities.map((cap, i) => (
          <CapabilityPanel key={cap.id} capability={cap} index={i} />
        ))}
      </div>

      {/* Portrait + bio (homepage closing variant) */}
      <section className="px-5 py-24 md:px-10 md:py-36">
        <div className="flex flex-col items-center">
          <Link
            to="/about"
            ref={portraitRef}
            onMouseEnter={() => setCursor({ variant: "pill", label: "Meet the team" })}
            onMouseLeave={() => setCursor(null)}
            className="block h-[420px] w-[300px] max-w-full overflow-hidden rounded-full sm:h-[487px] sm:w-[325px]"
          >
            <motion.div style={{ y }} className="h-[120%] w-full">
              <Image src={portraitCover} alt="Applied Computing" fittingType="fill" className="block h-full w-full" />
            </motion.div>
          </Link>
          <p className="mt-10 max-w-md text-center text-[16px] leading-[1.7] text-muted-foreground md:text-[18px]">
            Applied Computing is the Metis practice. We assess whether a realistic starting identity can
            reach a business consequence — and help you cut the cheapest edge.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {siteConfig.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer noopener"
                className="font-mono text-[12px] uppercase tracking-[0.14em] text-foreground transition-opacity hover:opacity-60"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}