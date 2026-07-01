"use client";

import { useEffect, useRef, useState } from "react";
import { METHOD_STEPS } from "@/data/mock";

const N = METHOD_STEPS.length;

export default function MethodSection() {
  const outerRef = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [reduced, setReduced] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 64rem)");
    setIsLargeScreen(mq.matches);
    const cb = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  useEffect(() => {
    if (!isLargeScreen) return;
    let raf = 0;
    const update = () => {
      const el = outerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const nextProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
      setActiveIdx(Math.min(N - 1, Math.round(nextProgress * (N - 1))));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isLargeScreen]);

  const step = METHOD_STEPS[activeIdx] ?? METHOD_STEPS[0];
  const transition = reduced ? "none" : "opacity 0.45s ease, transform 0.45s ease";

  return (
    <section
      ref={outerRef}
      className="bg-[#fbfaf8]"
      style={isLargeScreen ? { height: `calc(${N} * 100dvh)` } : undefined}
    >
      <div className={isLargeScreen ? "sticky top-0 flex min-h-[100dvh] items-center px-[var(--space-inline)]" : "px-[var(--space-inline)] py-[120px]"}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-[80px]">
          <aside className="min-w-0 lg:flex-[1_0_0]">
            <div className="flex flex-col gap-6">
              <p className="font-poppins text-[13px] font-medium leading-[18.2px] tracking-[0.22px] text-[#848484]">
                Nuestro método
              </p>
              <h2 className="max-w-[11ch] font-fraunces text-[40px] font-normal leading-[1.05] text-[#16222f]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                Conocimiento estructurado <br /> en etapas.
              </h2>
              <p className="max-w-[31rem] font-poppins text-[20px] leading-[1.2] text-[#4e5862]">
                Integramos lectura jurídica, criterio sectorial y capacidad de ejecución para ordenar asuntos complejos.
              </p>
            </div>

            <nav aria-label="Etapas del método" className="mt-8">
              <ol className="flex flex-col">
                {METHOD_STEPS.map((item, idx) => {
                  const active = idx === activeIdx;
                  return (
                    <li key={item.number} className="flex items-center gap-4 py-4" aria-current={active ? "step" : undefined}>
                      <span className="h-0.5 w-6 shrink-0 rounded-full" style={{ backgroundColor: active ? "#233465" : "transparent", transition, animationDelay: `${idx * 55}ms` }} aria-hidden="true" />
                      <span className="flex items-baseline gap-3 whitespace-nowrap" style={{ color: active ? "#233465" : "#657ba2", transition }}>
                        <span className={active ? "font-fraunces text-[18px] font-bold leading-none" : "font-fraunces text-[18px] font-normal leading-none"} style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                          {item.number}
                        </span>
                        <span className={active ? "font-poppins text-[16px] font-semibold" : "font-poppins text-[16px] font-normal"}>
                          {item.title}
                        </span>
                      </span>
                    </li>
                  );
                })}
              </ol>
            </nav>
          </aside>

          <div className="min-w-0 lg:flex-[1_0_0]">
            <article className="rounded-[8px] bg-white p-10">
              <div className="flex flex-col gap-8">
                <div className="font-fraunces text-[80px] font-normal leading-none text-[#233465]">
                  {step.number}
                </div>
                <div className="grid gap-6">
                  <div className="grid gap-6">
                    <div className="font-fraunces text-[28px] font-normal leading-none text-[#233465]">
                      <h3 style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="max-w-[44rem] font-poppins text-[20px] leading-[1.2] text-[#233465]">
                      {step.summary}
                    </p>
                  </div>

                  <div className="flex flex-col gap-10 lg:flex-row lg:gap-[40px]">
                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                      <p className="font-poppins text-[11px] font-bold tracking-[0.3px] text-[#657ba2]">
                        ANALIZAMOS
                      </p>
                      <div className="flex flex-col gap-3">
                        {step.criteria.map((criterion) => (
                          <div key={criterion} className="flex items-center gap-2">
                            <span className="h-[1.5px] w-2 shrink-0 bg-[#233465]" aria-hidden="true" />
                            <p className="font-poppins text-[20px] leading-[1.2] text-[#3d3d3d]">{criterion}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex min-w-0 flex-1 flex-col gap-4">
                      <p className="font-poppins text-[11px] font-bold tracking-[0.3px] text-[#657ba2]">
                        ENTREGABLE
                      </p>
                      <p className="font-poppins text-[20px] font-medium leading-[1.2] text-[#3d3d3d]">
                        {step.output}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <p className="font-poppins text-[14px] font-bold tracking-[0.3px] text-[#233465]">
                      Capacidades vinculadas
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {step.capabilities.map((cap) => (
                        <span key={cap} className="inline-flex h-[30px] items-center rounded-sm bg-[#f7f5f2] px-2.5 font-poppins text-[12px] font-medium leading-[1.2] text-[#2a211d]">
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
