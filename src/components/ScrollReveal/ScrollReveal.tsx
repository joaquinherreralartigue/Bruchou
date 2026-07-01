"use client";

import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Variant = "reveal-up" | "reveal-soft-scale" | "reveal-mask" | "reveal-line" | "reveal-stagger" | "reveal-chip" | "reveal-card" | "reveal-metric";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  variant?: Variant;
  as?: "div" | "section" | "article" | "span" | "p";
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  stagger = 0,
  variant = "reveal-up",
  as: Tag = "div",
  threshold,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal(threshold ? { threshold } : undefined);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    setReady(true);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const active = reduced || isVisible;
  const transition =
    "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1), clip-path 650ms cubic-bezier(0.22, 1, 0.36, 1)";
  const baseDelay = reduced ? 0 : delay;

  let style: React.CSSProperties | undefined;
  if (!reduced && ready) {
    const transform =
      variant === "reveal-stagger" || variant === "reveal-line"
        ? "none"
        : variant === "reveal-soft-scale"
          ? active
            ? "none"
            : "translateY(16px) scale(0.985)"
          : variant === "reveal-card"
            ? active
              ? "none"
              : "translateY(18px) scale(0.992)"
            : variant === "reveal-metric"
              ? active
                ? "none"
                : "translateY(10px)"
              : variant === "reveal-chip"
                ? active
                  ? "none"
                  : "translateY(8px)"
                : "translateY(22px)";

    style = {
      opacity: active ? 1 : 0,
      transform,
      clipPath: variant === "reveal-mask" ? (active ? "inset(0 0 0 0)" : "inset(0 0 100% 0)") : undefined,
      transitionDelay: `${baseDelay}ms`,
      transitionDuration: variant === "reveal-mask" ? "650ms" : variant === "reveal-card" || variant === "reveal-metric" ? "600ms" : "500ms",
      transition,
      ["--reveal-stagger-delay" as never]: `${stagger}ms`,
    };
  }

  return (
    <Tag
      ref={ref as never}
      className={[
        className,
        "reveal-base",
        `reveal-${variant}`,
        active ? "reveal-active" : "reveal-inactive",
      ].join(" ")}
      data-reveal={variant}
      data-visible={active ? "true" : "false"}
      style={style}
    >
      {children}
    </Tag>
  );
}
