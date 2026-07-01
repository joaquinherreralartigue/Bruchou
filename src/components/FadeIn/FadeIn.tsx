"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  threshold?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  threshold = 0.15,
}: FadeInProps) {
  const { ref, inView } = useInView({ threshold });
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  const translate = {
    up: "translateY(28px)",
    left: "translateX(-20px)",
    right: "translateX(20px)",
    none: "none",
  }[direction];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={
        reduced
          ? {}
          : {
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : translate,
              transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  );
}
