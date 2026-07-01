"use client";
import { useState } from "react";

export function BioParagraphs({ paragraphs }: { paragraphs: string[] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col gap-1">
      <div
        className={`overflow-hidden transition-[height] duration-300 ${expanded ? "" : "h-[73px]"}`}
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="mb-3 font-poppins text-[16px] leading-[1.45] text-[#535353] last:mb-0"
          >
            {p}
          </p>
        ))}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 font-poppins text-[12px] font-semibold tracking-[0.18px] text-[#233465]"
        aria-expanded={expanded}
      >
        {expanded ? "Contraer" : "Expandir"}
        {expanded ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 12h12" stroke="#233465" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 6v12M6 12h12" stroke="#233465" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
