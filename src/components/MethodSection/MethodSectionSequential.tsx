"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  { number: "01", title: "Diagnóstico jurídico y sectorial" },
  { number: "02", title: "Mapa de riesgos y contingencias" },
  { number: "03", title: "Estrategia legal y regulatoria" },
  { number: "04", title: "Equipos integrados por asunto" },
  { number: "05", title: "Ejecución con estándares institucionales" },
] as const;

export default function MethodSectionSequential() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.24,
      rootMargin: "0px 0px -12% 0px",
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const entranceStyle = (delay: number): React.CSSProperties | undefined => {
    if (reduced) return undefined;
    return {
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transitionDelay: `${delay}ms`,
      transitionDuration: "650ms",
      transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    };
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-[var(--space-inline)] py-[84px] text-[#fbfaf8] max-[1023px]:py-[clamp(4.5rem,8vw,6rem)]"
      aria-labelledby="method-seq-heading"
    >
      <div
        className="absolute inset-0 bg-[#0A1E37] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'linear-gradient(rgba(8, 14, 24, 0.58), rgba(8, 14, 24, 0.78)), url("/insights-timeline.png")',
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/55" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[41rem] w-full max-w-[1280px] flex-col justify-center gap-6 p-0">
        <div className="grid w-full max-w-[720px] gap-4 pt-0">
          <span
            className="inline-flex w-fit pb-px font-poppins text-[clamp(0.78rem,0.75rem+0.06vw,0.84rem)] font-medium leading-[1.35] tracking-[0.22px] text-[#d2c7ba]"
            style={entranceStyle(0)}
            data-scroll-reveal
          >
            Nuestro método
          </span>
          <h2
            id="method-seq-heading"
            className="w-full max-w-none font-fraunces text-[clamp(2.4rem,1.8rem+2.2vw,3.5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-[#fbfaf8]"
            style={entranceStyle(90)}
            data-scroll-reveal
          >
            Equipos diseñados por desafío, no por organigrama.
          </h2>
          <p
            className="max-w-[34rem] font-poppins text-[clamp(0.98rem,0.92rem+0.2vw,1.1rem)] font-normal leading-[1.35] text-[#ddd4c8]"
            style={entranceStyle(170)}
            data-scroll-reveal
          >
            Cada asunto requiere una combinación distinta de capacidades. El equipo se arma alrededor del problema del cliente.
          </p>
        </div>

        <div className="relative overflow-hidden border border-[rgba(232,226,217,0.24)] bg-[rgba(41,35,30,0.7)]">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage:
                'linear-gradient(90deg, rgba(20, 14, 10, 0.88) 0%, rgba(20, 14, 10, 0.82) 20%, rgba(20, 14, 10, 0.66) 48%, rgba(20, 14, 10, 0.76) 100%), url("/insights-timeline.png")',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),rgba(0,0,0,0.42))]" aria-hidden="true" />

          <ol className="relative grid gap-0 lg:grid-cols-5">
            {STEPS.map((step, idx) => (
              <li
                key={step.number}
                className="method-step min-h-[13rem] border-r border-[rgba(255,255,255,0.18)] px-5 py-6 text-[#f8f4ef] last:border-r-0 lg:min-h-[13rem] lg:px-6 lg:py-7"
                style={entranceStyle(250 + idx * 90)}
                data-scroll-reveal
                data-reveal-delay={250 + idx * 90}
              >
                <span className="font-poppins text-[clamp(2.1rem,1.9rem+0.7vw,2.7rem)] font-medium leading-none tracking-[-0.04em] text-[#f7f2ec]">
                  {step.number}
                </span>

                <h3 className="mt-6 max-w-[11ch] font-fraunces text-[clamp(1.25rem,1.05rem+0.55vw,1.8rem)] font-semibold leading-[1.04] tracking-[-0.02em] text-[#f7f2ec]">
                  {step.title}
                </h3>
              </li>
            ))}
          </ol>

        </div>

        <a
          href="#"
          className="inline-flex items-center gap-3 px-1 pt-1 font-poppins text-[0.95rem] font-medium text-[#f7f2ec] transition-colors hover:text-white"
        >
          Explorar nuestro método
          <span aria-hidden="true" className="text-[#ef7d4d]">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
