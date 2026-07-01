"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PRACTICES, PRACTICE_GROUPS, type Practice, type PracticeServiceType } from "@/data/practices";

const AI_ICON = "https://www.figma.com/api/mcp/asset/bff69586-ac6a-466e-8647-e7570eda26d7";
const HERO_IMAGE = "https://www.figma.com/api/mcp/asset/11a920cd-0674-4d96-8bc8-21e997112888";

export default function PracticeAreasPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [pinnedPracticeId, setPinnedPracticeId] = useState<string | null>(PRACTICES[0]?.id ?? null);
  const [hoveredPracticeId, setHoveredPracticeId] = useState<string | null>(null);
  const activePracticeId = hoveredPracticeId ?? pinnedPracticeId;
  const [activeFilter, setActiveFilter] = useState<PracticeServiceType | "todos">("todos");

  // ── Aside sticky/pinned ────────────────────────────────────────────────────
  // ponytail: position:fixed via JS instead of CSS sticky — overflow:hidden on the
  // collapse-animation wrapper clips sticky children; fixed elements escape that clip.
  const [isAsidePinned, setIsAsidePinned] = useState(false);
  const asidePinnedRef = useRef(false);
  const asideWrapperRef = useRef<HTMLDivElement>(null);
  const asideRef = useRef<HTMLElement>(null);
  const dirSectionRef = useRef<HTMLDivElement>(null);
  const updateAsideRef = useRef<() => void>(() => {});

  const ASIDE_TOP = 108; // header (~76px) + gap

  const toggleAsidePin = () => {
    const next = !asidePinnedRef.current;
    asidePinnedRef.current = next;
    setIsAsidePinned(next);
    updateAsideRef.current();
  };

  // Manages sticky-via-JS + pinned. Runs on scroll/resize once page is expanded.
  useEffect(() => {
    if (!isExpanded) return;
    const update = () => {
      const wrapper = asideWrapperRef.current;
      const aside = asideRef.current;
      const section = dirSectionRef.current;
      if (!wrapper || !aside || !section) return;

      // Desktop only
      if (window.innerWidth < 1024) {
        aside.style.cssText = "";
        wrapper.style.minHeight = "";
        return;
      }

      const wrapperRect = wrapper.getBoundingClientRect();
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (asidePinnedRef.current || wrapperRect.top <= ASIDE_TOP) {
        // Apply maxHeight first so offsetHeight reflects clamped size
        aside.style.maxHeight = `${window.innerHeight - ASIDE_TOP - 24}px`;
        aside.style.overflowY = "auto";
        const asideH = aside.offsetHeight;
        const top = Math.min(ASIDE_TOP, Math.max(0, sectionBottom - asideH - 24));
        aside.style.position = "fixed";
        aside.style.left = `${wrapperRect.left}px`;
        aside.style.width = `${wrapperRect.width}px`;
        aside.style.top = `${top}px`;
        aside.style.maxHeight = `${window.innerHeight - top - 24}px`;
        aside.style.zIndex = "40";
        wrapper.style.minHeight = `${asideH}px`;
      } else {
        aside.style.cssText = "";
        wrapper.style.minHeight = "";
      }
    };

    updateAsideRef.current = update;
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      updateAsideRef.current = () => {};
    };
  }, [isExpanded]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return void setIsExpanded(true);
    const timer = window.setTimeout(() => setIsExpanded(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  const practicesById = useMemo(() => Object.fromEntries(PRACTICES.map((practice) => [practice.id, practice])), []);
  const activePractice = activePracticeId ? practicesById[activePracticeId] : null;
  const filteredGroups = useMemo(() => {
    const groupIds = new Set<string>();
    return PRACTICE_GROUPS.map((group) => {
      const items = group.practiceIds
        .map((practiceId) => practicesById[practiceId])
        .filter((practice): practice is Practice => Boolean(practice))
        .filter((practice) => activeFilter === "todos" || practice.serviceTypes.includes(activeFilter));
      for (const practice of items) {
        if (groupIds.has(practice.id) && process.env.NODE_ENV !== "production") throw new Error(`Duplicate practice render: ${practice.id}`);
        groupIds.add(practice.id);
      }
      return { ...group, items };
    }).filter((group) => group.items.length > 0);
  }, [activeFilter, practicesById]);
  const ease = "cubic-bezier(0.22,1,0.36,1)";

  return (
    <section className="areas relative" data-state={isExpanded ? "expanded" : "intro"}>
      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden text-[#f7f5f2]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(7,18,39,.35) 0%, rgba(7,18,39,.62) 100%), url("${HERO_IMAGE}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: isExpanded ? 336 : 746,
          transition: `min-height 800ms ${ease}`,
        }}
      >
        <div className="absolute inset-0 bg-[#231c1c]/30 mix-blend-luminosity" aria-hidden="true" />

        {/* ── Initial state: eyebrow + claim ─────────────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-[var(--space-inline)]"
          style={{
            paddingTop: 76,
            opacity: isExpanded ? 0 : 1,
            transform: isExpanded ? "translateY(-10px)" : "translateY(0)",
            transition: `opacity 400ms ${ease}, transform 400ms ${ease}`,
            pointerEvents: isExpanded ? "none" : "auto",
          }}
          aria-hidden={isExpanded}
        >
          <div className="mx-auto w-full max-w-[1280px] grid gap-6 px-4">
            <p className="font-poppins text-[13px] font-medium leading-[18.2px] text-[#d7d7d7]">
              Capacidades
            </p>
            <h1 className="font-fraunces text-[clamp(2.4rem,1.8rem+2.2vw,3.5rem)] font-normal leading-none text-[#f4efed]">
              La profundidad técnica<br className="hidden sm:block" /> de una firma integrada.
            </h1>
          </div>
        </div>

        {/* ── Expanded state: title + search + chips ──────────────────────────── */}
        <div
          className="absolute inset-0 flex flex-col justify-center px-[var(--space-inline)]"
          style={{
            paddingTop: 76,
            opacity: isExpanded ? 1 : 0,
            transform: isExpanded ? "translateY(0)" : "translateY(14px)",
            transition: `opacity 700ms ${ease} 200ms, transform 700ms ${ease} 200ms`,
            pointerEvents: isExpanded ? "auto" : "none",
          }}
        >
          <div className="mx-auto w-full max-w-[1280px] grid gap-5 px-4">
            <h1 className="font-fraunces text-[clamp(1.75rem,1.4rem+1.4vw,2.25rem)] font-normal leading-none text-[#f4efed]">
              Capacidades
            </h1>

            <div className="max-w-[434px]">
              <div className="flex items-center gap-2 border-b border-[#d7d7d7]/70 px-1 py-2">
                <img src={AI_ICON} alt="" aria-hidden="true" className="size-5 shrink-0" />
                <input
                  type="search"
                  placeholder="Contanos qué estás buscando."
                  className="min-w-0 flex-1 bg-transparent font-poppins text-[11px] tracking-[0.22px] text-[#fbfaf8] outline-none placeholder:text-[#d7d7d7]"
                  aria-label="Contanos qué estás buscando."
                  tabIndex={isExpanded ? 0 : -1}
                />
              </div>
              <div
                className="mt-5 flex flex-wrap gap-2"
                style={{
                  opacity: isExpanded ? 1 : 0,
                  transform: isExpanded ? "translateY(0)" : "translateY(6px)",
                  transition: `opacity 600ms ${ease} 400ms, transform 600ms ${ease} 400ms`,
                }}
              >
                {[
                  ["todos", "Capacidades"],
                  ["sectores", "Sectores estratégicos"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    className="chip-dark flex items-center gap-2 transition-colors hover:bg-white/10"
                    tabIndex={isExpanded ? 0 : -1}
                  >
                    {label}
                    <span aria-hidden="true" className="text-white/50">×</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DIRECTORY — collapses to 0-height until expanded ─────────────────── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isExpanded ? "1fr" : "0fr",
          transition: `grid-template-rows 750ms ${ease} 250ms`,
        }}
      >
        <div style={{ overflow: "clip" }}>
          <div
            ref={dirSectionRef}
            className="bg-[#f7f5f2] px-[var(--space-inline)] py-[var(--space-section)]"
            style={{
              opacity: isExpanded ? 1 : 0,
              transition: `opacity 700ms ${ease} 350ms`,
            }}
          >
            <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,50%)] lg:gap-8">
              <div className="grid gap-6">
                {filteredGroups.map((group, groupIndex) => (
                  <div
                    key={group.id}
                    className="grid gap-3 border-b border-[#ece4dc] pb-6 last:border-b-0"
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? "translateY(0)" : "translateY(10px)",
                      transition: `opacity 600ms ${ease} ${400 + groupIndex * 60}ms, transform 600ms ${ease} ${400 + groupIndex * 60}ms`,
                    }}
                  >
                    <div className="grid grid-cols-[120px_minmax(0,1fr)] gap-4">
                      <p className="font-poppins text-[16px] font-semibold text-[#8c847a]">{group.label}</p>
                      <div className="grid gap-2">
                        {group.items.map((practice) => {
                          const isActive = activePracticeId === practice.id;
                          const isPinned = pinnedPracticeId === practice.id;
                          return (
                            <button
                              key={practice.id}
                              type="button"
                              onMouseEnter={() => setHoveredPracticeId(practice.id)}
                              onFocus={() => setHoveredPracticeId(practice.id)}
                              onMouseLeave={() => setHoveredPracticeId(null)}
                              onBlur={() => setHoveredPracticeId(null)}
                              onClick={() => setPinnedPracticeId((current) => (current === practice.id ? null : practice.id))}
                              className="group flex items-start gap-3 text-left"
                              aria-pressed={isPinned}
                            >
                              <span className={`mt-3 h-px transition-all duration-200 ease-out ${isActive ? "w-6 bg-[#3b352f] opacity-80" : "w-0 bg-[#3b352f] opacity-0 group-hover:w-6 group-focus-visible:w-6"}`} aria-hidden="true" />
                              <span className={`font-fraunces text-[clamp(1.05rem,0.95rem+0.35vw,1.25rem)] leading-[1.22] text-[#b4a39c] transition-colors duration-200 ${isActive ? "text-[#8f8278]" : "group-hover:text-[#8f8278] group-focus-visible:text-[#8f8278]"}`}>
                                {practice.title}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Wrapper holds grid column space; JS sets minHeight when aside goes fixed */}
              <div ref={asideWrapperRef} className="self-start">
              <aside
                ref={asideRef}
                role="button"
                aria-label="Contexto relacional — hacer clic para fijar"
                tabIndex={0}
                aria-pressed={isAsidePinned}
                data-pinned={isAsidePinned || undefined}
                onClick={(e) => {
                  if ((e.target as HTMLElement).closest("a, button, input")) return;
                  toggleAsidePin();
                }}
                onKeyDown={(e) => {
                  if (e.target !== e.currentTarget) return;
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleAsidePin(); }
                }}
                className="w-full rounded-[8px] bg-white p-6 sm:p-10 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#233465] focus-visible:outline-offset-2"
              >
                <p className="font-poppins text-[10px] font-semibold tracking-[0.12em] text-[#98a2ad]">CONTEXTO RELACIONAL</p>
                {activePractice ? (
                  <div className="mt-8 grid gap-8">
                    <p className="max-w-[30ch] font-poppins text-[16px] leading-[1.4] text-[#4c5564] sm:text-[18px]">
                      {activePractice.summary}
                    </p>
                    <a href={activePractice.sourceUrl ?? `https://bruchoufunes.com${activePractice.href}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-poppins text-[14px] font-bold text-[#2e426b]">
                      Ver detalle
                      <img src="https://www.figma.com/api/mcp/asset/4dba16c3-1fb9-4dda-906b-146bb601ba19" alt="" aria-hidden="true" className="size-4" />
                    </a>
                    {activePractice.professionals.length > 0 ? (
                      <div className="grid gap-3">
                        <p className="font-poppins text-[14px] font-bold text-[#233465]">Profesionales</p>
                        <ul className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                          {activePractice.professionals.map((professional) => (
                            <li key={professional.id} className="flex items-end gap-4 rounded-[4px] py-2">
                              <img src="https://www.figma.com/api/mcp/asset/44cba543-51b3-43ec-b881-6942ea426900" alt="" aria-hidden="true" className="size-12 shrink-0 rounded-[4px] object-cover" />
                              <div className="grid gap-1">
                                {professional.href ? <a href={professional.href} className="font-fraunces text-[16px] leading-[1.15] text-[#111f3f]">{professional.name}</a> : <span className="font-fraunces text-[16px] leading-[1.15] text-[#111f3f]">{professional.name}</span>}
                                <span className="font-poppins text-[12px] leading-[1.35] tracking-[0.14px] text-[#8d9dbb]">{professional.role ?? "Profesional"}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    {activePractice.relatedAreas.length > 0 ? (
                      <div className="grid gap-4">
                        <p className="font-poppins text-[14px] font-bold text-[#233465]">Capacidades relacionadas</p>
                        <ul className="flex flex-wrap gap-3">
                          {activePractice.relatedAreas.map((area) => (
                            <li key={area.id} className="rounded-[2px] bg-[#d7d7d7] px-3 py-2 font-fraunces text-[12px] leading-[1.2] text-[#2a211d]">
                              {area.href ? <a href={area.href}>{area.title}</a> : area.title}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  <p className="mt-3 font-poppins text-[14px] leading-[1.65] text-[#4d463f]">Seleccioná un área para ver sus profesionales y áreas relacionadas.</p>
                )}
              </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
