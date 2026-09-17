import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

// Long-form intro to the Metis Unified Model: the case against the silo model.
// Each panel is a full-width parallax background with white bold text on top.
const panels = [
  {
    cover:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80",
    index: "01",
    heading: "Sold by silo.",
    body: "Offensive security is sold and delivered by technology silo. A client buys an internal network test, a web application test, a cloud review, an identity assessment, an AI evaluation, an endpoint review. Each arrives with its own vocabulary, its own report, its own severity scale, and its own idea of what counts as proof. The industry treats these as separate disciplines practised by separate specialists.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f232?auto=format&fit=crop&w=2000&q=80",
    index: "02",
    heading: "Findings do not add up.",
    body: "That framing has three costs, and every experienced practitioner has paid all three. Six reports in six vocabularies do not compose into one picture of exposure. A client cannot compare a cloud \u201chigh\u201d to a web \u201chigh,\u201d cannot see that two medium findings in different reports are the same path, and cannot tell whether the whole is worse than the sum.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=2000&q=80",
    index: "03",
    heading: "The worst paths cross silos.",
    body: "Real compromise rarely stays inside one technology. A contractor\u2019s repository access becomes a deployment identity becomes a production secret. A managed laptop becomes an overlay-network route becomes an internal service. Content pasted into an assistant becomes an action in a connected business system. A test scoped to one silo cannot see a path that leaves it, so the most consequential findings are precisely the ones that fall between engagements.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1504384308090-c894fdcab4c0?auto=format&fit=crop&w=2000&q=80",
    index: "04",
    heading: "A new language each time.",
    body: "The client learns a different language every time. Each methodology asks them to reason about network access rules, or cloud permission policies, or delegated authorisation scopes, or prompt injection, as if these were unrelated problems. They are not. They are the same problem wearing different clothes.",
  },
  {
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=2000&q=80",
    index: "05",
    heading: "The earlier practice already knew.",
    body: "The earlier Metis practice already knew this. Its methodology opened by promising to assess \u201cwhether realistic access to your environment can lead to a business consequence, and which changes would prevent it,\u201d and elsewhere observed that \u201ca local weakness becomes more consequential when another system accepts its identity, data, or output without an effective boundary.\u201d Those two sentences are the entire paradigm. What was missing was a single model precise enough to make them literally true across every domain, and a shared language precise enough that a path in one technology and a path in another are written the same way. This set supplies both.",
  },
];

function ParallaxTextPanel({ panel }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section
      ref={ref}
      className="relative block h-[78vh] min-h-[520px] w-full overflow-hidden md:h-[640px]"
    >
      {/* Parallax background layer */}
      <motion.div style={{ y }} className="absolute inset-x-0 -top-[20%] h-[140%]">
        <Image
          src={panel.cover}
          alt=""
          fittingType="fill"
          className="block h-full w-full"
        />
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/55" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-center px-5 py-16 md:px-16">
        <div className="mx-auto w-full max-w-4xl">
          <span className="mb-5 block font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">
            {panel.index} — The cost of silos
          </span>
          <h2 className="max-w-[18ch] font-display text-[40px] font-bold uppercase leading-[0.92] tracking-tighter text-white sm:text-[56px] md:text-[68px]">
            {panel.heading}
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] font-medium leading-[1.6] text-white/90 md:text-[20px]">
            {panel.body}
          </p>
        </div>
      </div>
    </section>
  );
}

export default function MethodologyIntro() {
  return (
    <div className="border-t border-border">
      {panels.map((panel) => (
        <ParallaxTextPanel key={panel.index} panel={panel} />
      ))}
    </div>
  );
}