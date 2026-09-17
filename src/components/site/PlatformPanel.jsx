import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";
import { useCursor } from "./CustomCursor";

// Full-width platform panel, same parallax/hover style as CapabilityPanel,
// but links to a /platform/<slug> detail page.
export default function PlatformPanel({ component, index }) {
  const ref = useRef(null);
  const setCursor = useCursor();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);

  return (
    <Link
      to={`/platform/${component.slug}`}
      ref={ref}
      onMouseEnter={() => setCursor({ variant: "pill", label: "View component" })}
      onMouseLeave={() => setCursor(null)}
      className="group relative block h-[80vh] min-h-[480px] w-full overflow-hidden md:h-[600px] lg:h-[640px]"
    >
      {/* Scroll-translation layer */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 -top-[25%] h-[150%]"
      >
        {/* Hover-scale layer */}
        <div className="h-full w-full transition-transform duration-1000 ease-expo group-hover:scale-[1.04]">
          <Image
            src={component.cover}
            alt={component.name}
            fittingType="fill"
            className="block h-full w-full"
          />
        </div>
      </motion.div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/45 transition-colors duration-500 group-hover:bg-foreground/30" />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end px-6 pb-10 md:px-16 md:pb-16">
        <span className="mb-3 font-mono text-[12px] uppercase tracking-[0.14em] text-white/70">
          {String(index + 1).padStart(2, "0")} — {component.role}
        </span>
        <h3 className="max-w-[16ch] font-display text-[40px] font-bold uppercase leading-[0.92] tracking-tighter text-white sm:text-[56px] md:text-[72px] lg:text-[92px]">
          {component.name}
        </h3>
        <p className="mt-4 max-w-[390px] text-[17px] font-medium leading-[1.5] tracking-[-0.01em] text-white/90 md:text-[22px]">
          {component.tagline}
        </p>
      </div>
    </Link>
  );
}