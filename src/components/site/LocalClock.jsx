import React, { useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

// Live local-time display for the header. Updates every second but only
// re-renders when the displayed string changes.
export default function LocalClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let prev = "";
    const fmt = new Intl.DateTimeFormat("en-AU", {
      timeZone: siteConfig.timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => {
      const next = fmt.format(new Date());
      if (next !== prev) {
        prev = next;
        setTime(next);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="font-mono text-[13px] uppercase tracking-[0.12em] text-muted-foreground tabular-nums">
      {time} <span className="text-muted-foreground/60">{siteConfig.location}</span>
    </span>
  );
}