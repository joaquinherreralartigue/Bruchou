"use client";
import { useEffect, useId, useRef, useState } from "react";
import { SEARCH_SHORTCUTS } from "@/data/mock";
import FadeIn from "@/components/FadeIn/FadeIn";

const AI_ICON = "https://www.figma.com/api/mcp/asset/bff69586-ac6a-466e-8647-e7570eda26d7";

const TYPEWRITER_EXAMPLES = [
  "operaciones de M&A en energía...",
  "financiamiento de proyectos de infraestructura...",
  "litigios arbitrales internacionales...",
  "regulación ambiental y permisos...",
];

function ArrowNE() {
  return (
    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true">
      <path d="M1 8L8 1M8 1H3M8 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M12 2L2 7l4 2.5L8.5 12 12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function AssistedSearch() {
  const [query, setQuery] = useState("");
  const [placeholder, setPlaceholder] = useState("Contanos qué estás buscando.");
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query) {
      setPlaceholder("Contanos qué estás buscando.");
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let exIdx = 0;
    let charIdx = 0;
    let typing = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = TYPEWRITER_EXAMPLES[exIdx];
      if (typing) {
        charIdx += 1;
        setPlaceholder(current.slice(0, charIdx));
        if (charIdx >= current.length) {
          typing = false;
          timer = setTimeout(tick, 1800);
          return;
        }
        timer = setTimeout(tick, 55);
      } else {
        charIdx -= 1;
        setPlaceholder(current.slice(0, charIdx));
        if (charIdx <= 0) {
          typing = true;
          exIdx = (exIdx + 1) % TYPEWRITER_EXAMPLES.length;
        }
        timer = setTimeout(tick, 28);
      }
    };

    timer = setTimeout(tick, 1500);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <section className="bg-[#071227] px-[var(--space-inline)] py-[var(--space-section)] lg:min-h-[800px] lg:flex lg:w-full lg:items-center" aria-label="Búsqueda asistida">
      <div className="mx-auto w-full max-w-[1280px]">
        <FadeIn direction="up" delay={0}>
          <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-[minmax(0,34rem)_minmax(0,1fr)] lg:items-start lg:gap-[clamp(2rem,4vw,5rem)]">
            <div className="flex min-w-0 flex-col gap-3">
              <div className="flex items-center gap-3">
                <img src={AI_ICON} alt="" aria-hidden="true" className="size-4 shrink-0" />
                <span className="font-poppins text-[clamp(0.8125rem,0.78rem+0.08vw,0.875rem)] font-medium tracking-[0.22px] text-[#f7f5f2]">
                  Búsqueda asistida
                </span>
              </div>

              <h2 className="font-fraunces text-[40px] font-normal leading-[1.06] text-[#f7f5f2]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                Una capa de navegación inteligente sobre el conocimiento del estudio.
              </h2>

              <p className="max-w-[42rem] font-poppins text-[clamp(0.9375rem,0.9rem+0.18vw,1rem)] leading-[1.7] text-[#f7f5f2]">
                No es un simple chatbot. Devuelve resultados estructurados: área, profesionales, áreas relacionadas e insights vinculados.
              </p>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-5">
              <label htmlFor={inputId} className="sr-only">
                Contanos qué estás buscando.
              </label>
              <div className="flex items-center gap-2 border-b border-[#d4dae2] px-1 py-2">
                <img src={AI_ICON} alt="" aria-hidden="true" className="size-4 shrink-0" />
                <input
                  ref={inputRef}
                  id={inputId}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={placeholder}
                  className="min-w-0 flex-1 bg-transparent font-poppins text-[clamp(0.75rem,0.72rem+0.1vw,0.8125rem)] tracking-[0.22px] text-[#e8ecf4] outline-none placeholder:text-[#e8ecf4]/60"
                />
                <button type="button" className="shrink-0 text-[#e8ecf4] transition-colors hover:text-white" aria-label="Buscar">
                  <SendIcon />
                </button>
              </div>

              <div className="grid gap-3 [grid-template-columns:repeat(auto-fit,minmax(min(100%,11rem),1fr))]" role="group" aria-label="Accesos rápidos">
                {SEARCH_SHORTCUTS.filter((sc) => sc.label !== "Capacidades").map((sc) => (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => {
                      setQuery(sc.label);
                      inputRef.current?.focus();
                    }}
                    className="flex min-h-11 min-w-0 items-center justify-between gap-3 rounded-[2px] border border-white px-3 py-2 text-left font-poppins text-[clamp(0.75rem,0.72rem+0.1vw,0.8125rem)] font-medium text-white transition-[colors,transform] duration-[200ms] ease-out hover:-translate-y-[2px] hover:bg-white/10"
                  >
                    <span className="min-w-0 flex-1 break-words leading-5">{sc.label}</span>
                    <span className="flex size-6 shrink-0 items-center justify-center">
                      <ArrowNE />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
