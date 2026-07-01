import Link from "next/link";
import { REPRESENTATIVE_MATTERS } from "@/data/mock";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

function ArrowNE() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="shrink-0 transition-transform duration-[200ms] ease-out group-hover/cta:translate-x-[3px] group-hover/cta:-translate-y-[2px]">
      <path d="M3 13L13 3M13 3H7M13 3V9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RepresentativeMatters() {
  const matter = REPRESENTATIVE_MATTERS[0];
  if (!matter) return null;

  return (
    <section className="overflow-clip bg-white px-[var(--space-inline)] py-[var(--space-section)] lg:flex lg:w-full lg:min-h-[800px] lg:items-center" aria-labelledby="matters-heading">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7">
        <div className="grid gap-4 lg:gap-5">
          <ScrollReveal variant="reveal-chip" className="font-poppins text-[clamp(0.78rem,0.75rem+0.06vw,0.84rem)] font-medium leading-[1.35] tracking-[0.22px] text-[#848484]">
            Asuntos representativos
          </ScrollReveal>
          <h2 id="matters-heading" className="max-w-[13ch] font-fraunces text-[clamp(2.4rem,1.8rem+2.2vw,3.5rem)] font-normal leading-none tracking-[-0.02em] text-[#2a2a2a]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
            Capacidad probada en escenarios críticos.
          </h2>
          <ScrollReveal variant="reveal-up" delay={120} className="max-w-[50rem] font-poppins text-[clamp(1.05rem,0.98rem+0.35vw,1.4rem)] leading-[1.24] text-[#5a5a5a]">
            Una selección de operaciones, proyectos y situaciones complejas donde combinamos conocimiento sectorial, coordinación multidisciplinaria y criterio estratégico para acompañar decisiones de alto impacto.
          </ScrollReveal>
        </div>

        <ScrollReveal variant="reveal-card" as="article" className="group mt-2 rounded-[8px] bg-[#f4efed] px-[clamp(1rem,0.9rem+1vw,1.85rem)] py-[clamp(1.15rem,1rem+1vw,2rem)] transition-transform duration-[300ms] ease-out hover:-translate-y-[2px] lg:mt-5">
          <div className="border-b border-[#cdbdb5]">
            <div className="flex items-center justify-between gap-4 px-1.5 pb-2 text-[12px] leading-[15px] text-[#5b4d47]">
              <p className="font-poppins">Ficha del asunto</p>
              <p className="font-fraunces font-normal" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                Nº 01
              </p>
            </div>
          </div>

          <div className="grid gap-8 pt-5 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] lg:gap-[clamp(2rem,4vw,4.5rem)]">
            <div className="grid gap-5 min-w-0">
              <h3 className="max-w-[20ch] font-fraunces text-[32px] font-normal leading-[1.02] tracking-[-0.02em] text-[#2a2a2a]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                {matter.title}
              </h3>
              <p className="max-w-[33rem] font-poppins text-[clamp(0.98rem,0.92rem+0.25vw,1.15rem)] leading-[1.35] text-[#4a4a4a]">
                {matter.body}
              </p>
              <Link href={`/asuntos/${matter.slug}`} prefetch={false} className="group/cta inline-flex w-fit items-center gap-2 pt-2 text-[13px] font-bold text-[#2e426b] transition-opacity hover:opacity-80">
                Leer la historia completa
                <ArrowNE />
              </Link>
            </div>

            <div className="grid gap-7 min-w-0 pt-1 lg:pt-0">
              <div className="grid gap-4">
                {(matter.metrics ?? []).map(({ label, value }) => (
                  <div key={label} className="grid gap-1.5 xs:grid-cols-[minmax(5.5rem,8.5rem)_minmax(0,1fr)] xs:items-start">
                    <p className="font-poppins text-[11px] text-[#b4a39c]">{label}</p>
                    <p className="min-w-0 font-poppins text-[clamp(0.98rem,0.94rem+0.24vw,1.12rem)] leading-[1.35] text-[#1b1b1b]">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                <p className="font-poppins text-[11px] text-[#b4a39c]">Capacidades</p>
                <div className="flex flex-wrap gap-2">
                  {matter.capability_chips.map((chip) => (
                    <span key={chip} className="inline-flex min-h-10 max-w-full items-center rounded-sm bg-[#f7f5f2] px-3 py-1.5 font-fraunces text-[clamp(0.7rem,0.68rem+0.08vw,0.78rem)] font-normal leading-[1.2] text-[#2a211d]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
