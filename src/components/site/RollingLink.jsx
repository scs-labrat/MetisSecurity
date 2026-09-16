import React from "react";
import { Link } from "react-router-dom";

// Masked text/arrow hover: two stacked copies translate vertically within
// their masks on hover. One accessible name (the duplicate is aria-hidden).
export default function RollingLink({ to, children, className = "", arrow = true }) {
  const inner = (
    <span className="relative block overflow-hidden">
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
        <span className="inline-flex items-center gap-3">
          {children}
          {arrow && <Arrow />}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full text-muted-foreground transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
      >
        <span className="inline-flex items-center gap-3">
          {children}
          {arrow && <Arrow />}
        </span>
      </span>
    </span>
  );

  return (
    <Link to={to} className={`group inline-block ${className}`}>
      {inner}
    </Link>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}