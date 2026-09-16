import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/siteConfig";

// Full-screen navigation overlay. Modal behavior: focus containment,
// Escape handling, scroll lock, focus restoration, close on route change.
export default function NavigationOverlay({ open, onClose }) {
  const location = useLocation();
  const containerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const previouslyFocused = useRef(null);

  // Close on route change.
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Scroll lock + focus management while open.
  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Focus first link after entrance.
    const t = setTimeout(() => firstLinkRef.current?.focus(), 60);

    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && containerRef.current) {
        const focusables = containerRef.current.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", onKey);
      clearTimeout(t);
      previouslyFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={containerRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col bg-background px-5 py-6 md:px-10 md:py-8"
        >
          {/* Top utility row */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              Index
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="group flex items-center gap-3"
            >
              <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
                Close
              </span>
              <span className="relative block h-4 w-4">
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground" />
                <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-foreground" />
              </span>
            </button>
          </div>

          {/* Centered links */}
          <nav className="flex flex-1 flex-col items-center justify-center">
            <ul className="flex flex-col items-center gap-1 md:gap-2">
              {navLinks.map((link, i) => {
                const active = location.pathname === link.href;
                return (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.08 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-5"
                  >
                    <span
                      className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Link
                      ref={i === 0 ? firstLinkRef : undefined}
                      to={link.href}
                      className="group relative font-display text-[44px] font-bold uppercase leading-[0.9] tracking-tighter text-foreground sm:text-[64px] md:text-[88px] lg:text-[120px]"
                    >
                      <span className="relative inline-block overflow-hidden">
                        <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                          {link.label}
                        </span>
                        <span className="absolute inset-0 block translate-y-full text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
                          {link.label}
                        </span>
                      </span>
                      {active && (
                        <span
                          className="ml-3 inline-block h-2 w-2 translate-y-[-0.3em] rounded-full bg-foreground align-middle md:ml-5"
                          aria-label="Current page"
                        />
                      )}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom social/legal row */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-wrap items-center gap-5">
              {siteConfig.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] text-muted-foreground">
              {siteConfig.footer.copyright}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}