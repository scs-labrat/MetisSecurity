import React from "react";

// One semantic heading with controlled visual line breaks.
// `lines` is an array of strings, each rendered as its own visual line.
export default function SplitHeadline({ lines, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block">
          {line}
        </span>
      ))}
    </Tag>
  );
}