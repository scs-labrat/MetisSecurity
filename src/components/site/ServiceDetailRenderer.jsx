import React from "react";
import { Image } from "@/components/ui/image";

// Renders the composable content blocks for a service detail page.
// Supports text, list, statement, image, and pair blocks (see brief §7).
export default function ServiceDetailRenderer({ blocks }) {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }) {
  switch (block.type) {
    case "text":
      return (
        <section id={block.id} className="scroll-mt-24 px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl">
            {block.label && (
              <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                {block.label}
              </p>
            )}
            {block.heading && (
              <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-tighter text-foreground md:text-[44px]">
                {block.heading}
              </h2>
            )}
            {block.paragraphs?.map((p, i) => (
              <p key={i} className="mt-5 text-[17px] leading-[1.7] text-foreground/85 md:text-[19px]">
                {p}
              </p>
            ))}
          </div>
        </section>
      );
    case "list":
      return (
        <section className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-[30px] font-bold leading-[1.1] tracking-tighter text-foreground md:text-[44px]">
              {block.heading}
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {block.items.map((item, i) => (
                <li key={i} className="flex gap-5 py-5">
                  <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[17px] leading-[1.6] text-foreground/85 md:text-[19px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    case "statement":
      return (
        <section className="px-5 py-20 md:px-10 md:py-32">
          <p className="mx-auto max-w-4xl text-center font-display text-[28px] font-bold leading-[1.15] tracking-tighter text-foreground md:text-[44px]">
            {block.text}
          </p>
        </section>
      );
    case "image":
      return (
        <section className="py-12 md:py-16">
          <div className={block.width === "contained" ? "mx-auto max-w-4xl px-5 md:px-10" : "px-5 md:px-10"}>
            <Image
              src={block.asset.src}
              alt={block.asset.alt}
              fittingType="fill"
              className="block aspect-[16/9] w-full"
            />
          </div>
        </section>
      );
    case "pair":
      return (
        <section className="px-5 py-12 md:px-10 md:py-16">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {block.assets.map((a, i) => (
              <Image key={i} src={a.src} alt={a.alt} fittingType="fill" className="block aspect-[4/3] w-full" />
            ))}
          </div>
        </section>
      );
    default:
      return null;
  }
}