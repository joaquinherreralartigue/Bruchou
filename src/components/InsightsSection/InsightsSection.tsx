import { INSIGHTS } from "@/data/mock";

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M2 12L12 2M12 2H6M12 2V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function InsightsSection() {
  const [, ...rest] = INSIGHTS;
  if (rest.length === 0) return null;

  return (
    <section className="bg-[#fbfaf8] px-[var(--space-inline)] py-[var(--space-section)] lg:min-h-[800px] lg:flex lg:w-full lg:items-center" aria-labelledby="insights-heading">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-[clamp(2rem,4vw,4rem)]">
        <div className="min-w-0 lg:sticky lg:top-[var(--space-inline)] lg:self-start">
          <h2 id="insights-heading" className="max-w-[16ch] font-fraunces text-[56px] font-normal leading-[1.06] text-[#2a2a2a]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
            Conocimiento que conecta áreas, equipos y la agenda regulatoria.
          </h2>
        </div>

        <div className="grid min-w-0 gap-0">
          {rest.slice(0, 3).map((insight) => (
            <article key={insight.id} className="group grid gap-3 py-3 transition-colors duration-[200ms] hover:bg-[#f4efed]/60">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className="font-poppins text-[11px] font-medium uppercase tracking-[1.98px] text-[#ea3725]">New Deal</p>
                <p className="font-poppins text-[11px] tracking-[1.65px] text-[#5a6673]">{insight.display_type ?? insight.type}</p>
              </div>
              <h4 className="min-w-0 font-poppins text-[28px] font-medium leading-[1.2] tracking-[-0.02em] text-[#071227]">
                {insight.title}
              </h4>
              <div className="flex items-center justify-between gap-4">
                <p className="font-poppins text-[18px] leading-[1.2] text-[#8b8580]">{insight.display_date ?? insight.date}</p>
                <ArrowIcon className="text-[#5a6673] transition-transform duration-[200ms] ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[1px]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

