"use client";

import { useState } from "react";

const practiceItems = [
  {
    id: "trabajo-talento-relaciones-laborales",
    number: "01",
    title: "Trabajo, talento y relaciones laborales",
    groupedTopics: [
      "relaciones laborales individuales y colectivas, negociación sindical, convenios colectivos y paritarias, reestructuraciones y reorganizaciones, procedimientos de crisis, litigios laborales complejos y masivos, auditorías laborales en operaciones corporativas, expatriados y movilidad internacional, seguridad social, cumplimiento laboral, políticas internas y gestión de riesgos, nuevas formas de trabajo y transformación organizacional.",
    ],
    panelText:
      "Acompañamos a empresas, cámaras empresarias, grupos económicos e inversores en decisiones laborales que impactan sobre la organización, la continuidad operativa, la reputación y la estrategia del negocio.",
    capabilities: ["Relaciones laborales", "Negociación colectiva", "Reestructuraciones", "Litigios laborales", "Movilidad internacional", "Cumplimiento laboral", "Expatriados"],
  },
  {
    id: "energia-recursos-naturales-infraestructura",
    number: "02",
    title: "Energía, recursos naturales e infraestructura",
    groupedTopics: ["energía", "petróleo y gas", "minería", "litio", "infraestructura", "proyectos", "concesiones", "financiamiento de obras", "permisos", "regulación", "ambiente"],
    panelText:
      "Acompañamos proyectos intensivos en capital, infraestructura crítica y recursos estratégicos, integrando regulación, financiamiento, contratos, permisos, operación y relacionamiento institucional.",
    capabilities: ["Energía", "Petróleo y gas", "Minería y litio", "Infraestructura", "Proyectos", "Ambiente"],
  },
  {
    id: "capital-inversion-mercados-financieros",
    number: "03",
    title: "Capital, inversión y mercados financieros",
    groupedTopics: ["bancos", "mercado de capitales", "fondos", "inversión extranjera", "compañías globales", "financiamiento", "deuda", "private equity", "operaciones cross-border"],
    panelText:
      "Asesoramos a compañías, entidades financieras, fondos e inversores locales e internacionales en operaciones de financiamiento, inversión, adquisición de activos y acceso a mercados.",
    capabilities: ["Servicios financieros", "Mercado de capitales", "Inversión extranjera", "Fondos", "Financiamiento", "Operaciones internacionales"],
  },
  {
    id: "tecnologia-datos-innovacion",
    number: "04",
    title: "Tecnología, datos e innovación",
    groupedTopics: ["tecnología", "IA", "datos", "privacidad", "telecomunicaciones", "fintech", "plataformas digitales", "propiedad intelectual", "startups"],
    panelText:
      "Acompañamos modelos de negocio digitales y proyectos de innovación donde tecnología, datos, regulación, propiedad intelectual e inversión avanzan de manera integrada.",
    capabilities: ["Tecnología", "Datos", "Inteligencia artificial", "Fintech", "Telecomunicaciones", "Propiedad intelectual", "Startups"],
  },
  {
    id: "salud-farma-ciencias-vida",
    number: "05",
    title: "Salud, farma y ciencias de la vida",
    groupedTopics: ["farma", "biotecnología", "salud", "tecnología médica", "regulación sanitaria", "datos sensibles", "ciencias de la vida", "innovación médica"],
    panelText: "Asesoramos a compañías farmacéuticas, biotecnológicas, de tecnología médica y salud en entornos regulados, sensibles e intensivos en innovación.",
    capabilities: ["Farma", "Biotecnología", "Salud", "Tecnología médica", "Regulación sanitaria", "Datos sensibles"],
  },
  {
    id: "agroindustria-alimentos-cadenas-productivas",
    number: "06",
    title: "Agroindustria, alimentos y cadenas productivas",
    groupedTopics: ["agro", "alimentos", "exportación", "cadenas de valor", "producción", "distribución", "comercio exterior", "financiamiento sectorial"],
    panelText:
      "Acompañamos a compañías agroindustriales, alimenticias, exportadores e inversores en operaciones, financiamiento, regulación, comercio exterior y desarrollo de cadenas de valor.",
    capabilities: ["Agroindustria", "Alimentos", "Comercio exterior", "Producción", "Distribución", "Financiamiento"],
  },
  {
    id: "sector-publico-regulacion-instituciones",
    number: "07",
    title: "Sector público, regulación e instituciones",
    groupedTopics: ["gobierno", "contratación pública", "regulación", "organismos", "concesiones", "deuda pública", "servicios públicos", "relación Estado-privados"],
    panelText:
      "Trabajamos junto a actores públicos y privados en asuntos donde regulación, financiamiento, contratación pública e institucionalidad definen decisiones críticas.",
    capabilities: ["Regulación", "Contratación pública", "Concesiones", "Servicios públicos", "Financiamiento público", "Relación con autoridades"],
  },
] as const;

const activeIdFallback = "energia-recursos-naturales-infraestructura";

export default function SectorsCapabilities() {
  const [activeId, setActiveId] = useState(activeIdFallback);
  const activeItem = practiceItems.find((item) => item.id === activeId) ?? practiceItems.find((item) => item.id === activeIdFallback) ?? practiceItems[1];

  return (
    <section className="bg-white px-5 py-[80px] md:px-10 xl:px-20" aria-labelledby="sectors-cap-heading">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10 text-left">
        <div className="flex w-full max-w-[760px] flex-col gap-6">
          <p className="font-poppins text-[13px] font-medium leading-[18.2px] text-[#848484]">Sectores y capacidades</p>
          <h2
            id="sectors-cap-heading"
            className="max-w-[760px] font-fraunces text-[50px] font-normal leading-[1.08] text-[#16222f]"
            style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}
          >
            La profundidad técnica de una firma integrada.
          </h2>
          <p className="max-w-[760px] font-poppins text-[18px] leading-[29px] text-[#4e5862]">
            Combinamos lectura sectorial, profundidad técnica y coordinación multidisciplinaria para acompañar asuntos de alta complejidad en múltiples dimensiones legales y regulatorias.
          </p>
        </div>

        <div className="flex w-full flex-col gap-6 pt-4 lg:flex-row lg:items-start lg:gap-0">
          <div className="min-w-0 lg:w-[440px] lg:flex-none" aria-label="Sectores y capacidades">
            {practiceItems.map((item, index) => (
              <div key={item.id} className={index < practiceItems.length - 1 ? "border-b border-[#e8ddd4]" : ""}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={[
                    "flex min-h-[46px] w-full items-center gap-4 rounded-none px-0 py-3 text-left transition-colors",
                    item.id === activeItem.id ? "bg-[#f1ece9] px-4 text-[#332b29]" : "text-[#d8c8c4] hover:bg-[#f1ece9] hover:px-4 hover:text-[#332b29]",
                  ].join(" ")}
                  aria-pressed={item.id === activeItem.id}
                >
                  <span className="shrink-0 w-7 font-poppins text-[12px] font-medium leading-none">{item.number}</span>
                  <span
                    className={[
                      "min-w-0 flex-1 whitespace-normal break-words",
                      item.id === activeItem.id ? "font-poppins text-[16px] font-semibold leading-none" : "font-poppins text-[16px] font-medium leading-none",
                    ].join(" ")}
                  >
                    {item.title}
                  </span>
                </button>
              </div>
            ))}
          </div>

          <div className="hidden lg:block bg-[#e8ddd4]" aria-hidden="true" />

          <div className="hidden lg:block bg-[#e8ddd4]" aria-hidden="true" />

          <div className="min-w-0 pt-0 lg:flex-1 lg:pl-12">
            <div className="flex min-w-0 max-w-[820px] flex-col gap-6">
              <h3 className="max-w-[20ch] font-fraunces text-[30px] font-normal leading-[1.08] tracking-[-0.02em] text-[#172334]" style={{ fontVariationSettings: '"SOFT" 0, "WONK" 1' }}>
                {activeItem.title}
              </h3>

              <div className="flex flex-col gap-4">
                <p className="font-poppins text-[16px] leading-[1.8] text-[#4e5862]">{activeItem.panelText}</p>
              </div>

              <div className="flex flex-col gap-3 pt-1">
                <p className="font-poppins text-[12px] font-medium uppercase tracking-[0.16em] text-[#8d8379]">Capacidades vinculadas</p>
                <div className="flex flex-wrap gap-2.5">
                  {activeItem.capabilities.map((capability) => (
                    <span key={capability} className="inline-flex h-[28px] items-center border border-[#d9cbc0] bg-white px-3 font-poppins text-[12px] leading-none text-[#463f39]">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>

              <a href={`/sectores-y-capacidades#${activeItem.id}`} className="inline-flex items-center gap-2 self-start font-poppins text-[13px] font-medium leading-none text-[#071227] transition-opacity hover:opacity-70">
                Ampliar <span aria-hidden="true" className="text-[16px] leading-[16px]">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
