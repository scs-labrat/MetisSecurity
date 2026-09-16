import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

// Cursor state shared across the app. Components call setCursor({ variant, label })
// on hover to change the desktop cursor treatment. setCursor(null) resets to default.
const CursorContext = createContext(null);

export function useCursor() {
  const ctx = useContext(CursorContext);
  return ctx?.setCursor ?? (() => {});
}

export function CursorProvider({ children }) {
  const [state, setState] = useState({ variant: "default", label: "" });
  const setCursor = useCallback((next) => {
    if (next === null) {
      setState({ variant: "default", label: "" });
    } else {
      setState((prev) => ({ ...prev, ...next }));
    }
  }, []);
  return (
    <CursorContext.Provider value={{ setCursor }}>
      {children}
      <CursorLayer variant={state.variant} label={state.label} />
    </CursorContext.Provider>
  );
}

function CursorLayer({ variant, label }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(pointer: fine) and (hover: hover) and (prefers-reduced-motion: no-preference)"
    );
    const update = () => {
      const ok = mq.matches;
      setEnabled(ok);
      document.body.classList.toggle("custom-cursor-active", ok);
    };
    update();
    mq.addEventListener?.("change", update);
    return () => {
      mq.removeEventListener?.("change", update);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let raf;
    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      const dotScale = variant === "pill" ? 0 : 1;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }
      if (ringRef.current) {
        const ringScale = variant === "hover" ? 1 : variant === "pill" ? 1 : 0;
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled, variant]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
    >
      <div
        ref={dotRef}
        className="absolute left-0 top-0 h-2 w-2 rounded-full bg-foreground transition-opacity duration-200"
        style={{ opacity: variant === "pill" ? 0 : 1 }}
      />
      <div
        ref={ringRef}
        className="absolute left-0 top-0 h-9 w-9 rounded-full border border-foreground/40"
        style={{ opacity: variant === "hover" ? 1 : 0 }}
      />
      {variant === "pill" && (
        <CursorPill label={label} ringRef={ringRef} />
      )}
    </div>
  );
}

// The pill follows the lerped ring position for a smoother feel.
function CursorPill({ label, ringRef }) {
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const loop = () => {
      if (ref.current && ringRef.current) {
        const t = ringRef.current.style.transform;
        // reuse the ring's translate position
        const match = t.match(/translate3d\(([-\d.]+)px,\s*([-\d.]+)px/);
        if (match) {
          ref.current.style.transform = `translate3d(${match[1]}px, ${match[2]}px, 0) translate(-50%, -50%)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [ringRef]);
  return (
    <div
      ref={ref}
      className="absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap rounded-full bg-foreground px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.08em] text-background"
    >
      <span>{label || "View"}</span>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M3 11L11 3M11 3H5M11 3V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}