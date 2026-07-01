// ponytail: mock data — replace with CMS/API calls in next stage
import type {
  Sector,
  PracticeArea,
  RepresentativeMatter,
  Professional,
  Insight,
  Recognition,
  SearchShortcut,
} from "@/types";

export const SECTORS: Sector[] = [
  {
    id: "s2",
    title: "Energía, recursos naturales e infraestructura",
    slug: "energia-recursos-naturales-infraestructura",
    summary: "Capacidad jurídica para los proyectos más relevantes del sector energético.",
    description:
      "Asesoramos en sectores donde inversión, regulación, infraestructura crítica y recursos estratégicos exigen coordinación jurídica, financiera y operativa.",
    business_context:
      "Transición energética, infraestructura crítica y nuevos esquemas de inversión que exigen previsibilidad regulatoria y estructuración financiera sólida.",
    regulatory_tension:
      "Marcos tarifarios cambiantes, acceso a transporte, incentivos a renovables y litio, y coordinación entre Nación y provincias.",
    service_scope:
      "Estructuración y financiamiento de proyectos, regulación sectorial, contratos de suministro, M&A, permisos, ambiente y resolución de disputas.",
    capability_chips: ["Energía", "Petróleo y gas", "Minería y litio", "Infraestructura y proyectos", "Ambiente", "Financiamiento", "M&A", "Resolución de disputas"],
    practice_area_ids: ["pa3", "pa4"],
    matter_ids: ["m1"],
    professional_ids: ["p2"],
    insight_ids: ["i1"],
  },
  {
    id: "s1",
    title: "Trabajo, talento y relaciones laborales",
    slug: "trabajo-talento-relaciones-laborales",
    summary: "Asesoramiento integral en materia laboral.",
    business_context:
      "Las decisiones laborales inciden directamente en la continuidad operativa, la reputación corporativa y la valuación de la compañía.",
    regulatory_tension:
      "Negociación colectiva, conflictos sindicales y procedimientos preventivos de crisis que exigen anticipación y lectura fina del mapa gremial.",
    service_scope:
      "Estrategia laboral empresaria integral: reorganizaciones, litigios sistémicos, compliance y gestión de contingencias de alto impacto.",
    capability_chips: [
      "Negociación colectiva",
      "Conflictos sindicales",
      "Procedimientos de crisis",
      "Reorganizaciones",
      "Litigios sistémicos",
      "Compliance laboral",
    ],
    practice_area_ids: ["pa1", "pa2"],
    matter_ids: ["m1"],
    professional_ids: ["p1"],
    insight_ids: ["i1"],
  },
  {
    id: "s3",
    title: "Capital, inversión y mercados financieros",
    slug: "capital-inversion-mercados-financieros",
    summary: "Asesoramiento en operaciones de capital, M&A y mercados de capitales.",
    business_context:
      "El mercado de capitales argentino presenta oportunidades significativas para inversores que comprenden la dinámica regulatoria y el riesgo soberano.",
    regulatory_tension:
      "Las restricciones cambiarias y el marco regulatorio del BCRA generan complejidad en las estructuras de inversión y financiamiento.",
    service_scope: "M&A, mercado de capitales, fondos de inversión, deuda.",
    capability_chips: ["M&A", "Mercado de capitales", "Fondos", "Deuda", "Due diligence"],
    practice_area_ids: ["pa5"],
    matter_ids: [],
    professional_ids: ["p1", "p2"],
    insight_ids: ["i3"],
  },
  {
    id: "s4",
    title: "Tecnología, datos e innovación",
    slug: "tecnologia-datos-innovacion",
    summary: "Asesoramiento legal en el ecosistema tecnológico.",
    business_context:
      "Las empresas tecnológicas y los incumbentes que digitalizan sus operaciones necesitan marcos jurídicos que acompañen la velocidad de la innovación.",
    regulatory_tension:
      "La regulación de IA, la protección de datos personales y la ciberseguridad están en una fase de alta actividad legislativa a nivel local e internacional.",
    service_scope: "Privacidad, IA, ciberseguridad, contratos tech, PI.",
    capability_chips: [
      "Protección de datos",
      "Regulación IA",
      "Ciberseguridad",
      "Contratos tech",
      "Propiedad intelectual",
    ],
    practice_area_ids: ["pa6"],
    matter_ids: [],
    professional_ids: ["p1"],
    insight_ids: ["i2"],
  },
  {
    id: "s5",
    title: "Salud, farma y ciencias de la vida",
    slug: "salud-farma-ciencias-vida",
    summary: "Asesoramiento regulatorio, de compliance y de litigio para el sector salud.",
    business_context:
      "El sector farmacéutico y de dispositivos médicos opera en un entorno de regulación intensa por parte de la ANMAT y las regulaciones internacionales.",
    regulatory_tension:
      "La aprobación de medicamentos, patentes farmacéuticas y el marco de precios regulados generan tensiones constantes.",
    service_scope: "Registro sanitario, patentes, defensa de la competencia, contratos con prestadores.",
    capability_chips: ["Registro ANMAT", "Patentes farma", "Defensa competencia", "Compliance"],
    practice_area_ids: ["pa3"],
    matter_ids: [],
    professional_ids: ["p2"],
    insight_ids: [],
  },
  {
    id: "s6",
    title: "Agroindustria, alimentos y cadenas productivas",
    slug: "agroindustria-alimentos-cadenas-productivas",
    summary: "Asesoramiento integral para el sector agropecuario y agroindustrial.",
    business_context:
      "Argentina es un actor global en el agro y sus operadores necesitan marcos jurídicos que integren la regulación doméstica con el comercio internacional.",
    regulatory_tension:
      "Los derechos de exportación, las regulaciones de sanidad vegetal y animal y los tratados de libre comercio generan un entorno de alta complejidad normativa.",
    service_scope: "Exportaciones, contratos agrarios, trazabilidad, disputas comerciales internacionales.",
    capability_chips: ["Comercio exterior", "Contratos agrarios", "Disputas OMC", "Trazabilidad"],
    practice_area_ids: ["pa4"],
    matter_ids: [],
    professional_ids: [],
    insight_ids: [],
  },
  {
    id: "s7",
    title: "Sector público, regulación e instituciones",
    slug: "sector-publico-regulacion-instituciones",
    summary: "Asesoramiento a organismos públicos, empresas estatales y privados.",
    business_context:
      "El Estado es un actor económico central en Argentina y la capacidad de navegar los procedimientos administrativos y las relaciones con entes reguladores es crítica.",
    regulatory_tension:
      "Las reformas del Estado, la transparencia en la contratación pública y el control de convencionalidad generan tensiones permanentes.",
    service_scope: "Contratación pública, derecho administrativo, entes reguladores, transparencia.",
    capability_chips: [
      "Contratación pública",
      "Derecho administrativo",
      "Transparencia",
      "Entes reguladores",
    ],
    practice_area_ids: ["pa2"],
    matter_ids: [],
    professional_ids: [],
    insight_ids: [],
  },
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "pa1",
    title: "Derecho laboral y empleo",
    slug: "derecho-laboral-empleo",
    summary: "Asesoramiento preventivo y contencioso en todas las dimensiones de la relación laboral.",
    capabilities: ["Negociación colectiva", "Litigios laborales", "Reestructuraciones", "Compliance laboral"],
    related_services: ["Due diligence laboral", "Auditorías de cumplimiento"],
    sector_ids: ["s1"],
    matter_ids: ["m1"],
    professional_ids: ["p1"],
    insight_ids: [],
  },
  {
    id: "pa2",
    title: "Derecho administrativo y regulatorio",
    slug: "derecho-administrativo-regulatorio",
    summary: "Navegación experta en el entorno regulatorio argentino.",
    capabilities: ["Procedimiento administrativo", "Contratación pública", "Recursos y amparos"],
    related_services: ["Compliance regulatorio"],
    sector_ids: ["s1", "s7"],
    matter_ids: [],
    professional_ids: [],
    insight_ids: [],
  },
  {
    id: "pa3",
    title: "Medio ambiente y sostenibilidad",
    slug: "medio-ambiente-sostenibilidad",
    summary: "Gestión jurídica del riesgo ambiental y transición hacia modelos sostenibles.",
    capabilities: ["EIA", "Compliance ambiental", "Litigios ambientales", "ESG"],
    related_services: ["Due diligence ambiental"],
    sector_ids: ["s2", "s5"],
    matter_ids: [],
    professional_ids: ["p2"],
    insight_ids: [],
  },
  {
    id: "pa4",
    title: "Comercio exterior y aduanas",
    slug: "comercio-exterior-aduanas",
    summary: "Operaciones de comercio internacional y gestión de procedimientos aduaneros.",
    capabilities: ["Importaciones y exportaciones", "Clasificación arancelaria", "Disputas OMC"],
    related_services: ["Optimización arancelaria"],
    sector_ids: ["s2", "s6"],
    matter_ids: [],
    professional_ids: [],
    insight_ids: [],
  },
  {
    id: "pa5",
    title: "Fusiones, adquisiciones y mercado de capitales",
    slug: "fusiones-adquisiciones-mercado-capitales",
    summary: "Estructuración y ejecución de transacciones corporativas complejas.",
    capabilities: ["M&A", "Due diligence", "Mercado de capitales", "Financiamiento"],
    related_services: ["Valoración de activos", "Reestructuración societaria"],
    sector_ids: ["s3"],
    matter_ids: [],
    professional_ids: ["p1", "p2"],
    insight_ids: ["i3"],
  },
  {
    id: "pa6",
    title: "Privacidad, datos y tecnología",
    slug: "privacidad-datos-tecnologia",
    summary: "Marco jurídico para la economía digital y la protección de datos personales.",
    capabilities: ["PDPA compliance", "Contratos tech", "Regulación IA", "Ciberseguridad"],
    related_services: ["Auditorías de privacidad"],
    sector_ids: ["s4"],
    matter_ids: [],
    professional_ids: ["p1"],
    insight_ids: ["i2"],
  },
];

// Exact content from Figma
export const REPRESENTATIVE_MATTERS: RepresentativeMatter[] = [
  {
    id: "m1",
    title: "Vaca Muerta: infraestructura para el futuro exportador argentino.",
    slug: "vaca-muerta-infraestructura-futuro-exportador",
    context:
      "Proyecto Vaca Muerta Sur, infraestructura energética estratégica y oleoducto de gran escala.",
    complexity:
      "Coordinación societaria, regulatoria, ambiental, contractual, financiera e institucional entre múltiples actores.",
    approach:
      "Equipos integrados de O&G, Project Finance, M&A, Derecho Corporativo, Impuestos, Aduanas, Litigios y Regulación.",
    impact:
      "Desbloqueo de infraestructura crítica, fortalecimiento del potencial exportador energético y operación de escala nacional.",
    year: 2024,
    confidentiality_status: "public",
    sector_id: "s2",
    practice_area_ids: ["pa3", "pa4"],
    professional_ids: ["p2"],
    capability_chips: [
      "Energía",
      "Petróleo y gas",
      "Minería",
      "Litio",
      "Infraestructura",
      "Proyectos",
      "Concesiones",
      "Financiamiento de obras",
    ],
    body: "Bruchou asesoró a VMOS en el lanzamiento del Proyecto Vaca Muerta Sur, una inversión de aproximadamente US$3.000 millones para desarrollar un oleoducto de 437 km entre Allen y Punta Colorada, orientado a ampliar la capacidad de exportación de petróleo crudo desde Vaca Muerta. La operación integró petróleo y gas, financiamiento, derecho corporativo, fusiones y adquisiciones, impuestos y coordinación institucional.",
    metrics: [
      { label: "Sector", value: "Energía, recursos naturales e infraestructura" },
      { label: "Inversión", value: "≈ US$3.000 millones" },
      { label: "Infraestructura", value: "Oleoducto · 437 km" },
      { label: "Ruta", value: "Allen — Punta Colorada, Río Negro" },
    ],
  },
];

export const PROFESSIONALS: Professional[] = [
  {
    id: "p1",
    name: "Marcela Rodríguez",
    role: "Socia",
    slug: "marcela-rodriguez",
    bio_short:
      "Especialista en derecho laboral y fusiones y adquisiciones con más de veinte años de trayectoria.",
    practice_area_ids: ["pa1", "pa5", "pa6"],
    sector_ids: ["s1", "s3", "s4"],
    matter_ids: [],
  },
  {
    id: "p2",
    name: "Ignacio Vidal",
    role: "Socio",
    slug: "ignacio-vidal",
    bio_short:
      "Experto en derecho energético, ambiental y de infraestructura con experiencia en proyectos de financiamiento multilateral.",
    practice_area_ids: ["pa3", "pa4", "pa5"],
    sector_ids: ["s2", "s3", "s5"],
    matter_ids: ["m1"],
  },
];

// Exact content from Figma
export const INSIGHTS: Insight[] = [
  {
    id: "i1",
    title: "La Corte Suprema de Justicia de la Nación se expide en materia de protección de datos personales",
    slug: "corte-suprema-proteccion-datos-personales",
    excerpt: "",
    date: "2026-04-07",
    author_id: "p1",
    type: "Novedades legislativas",
    display_type: "Emisión de acciones",
    reading_time: 4,
    sector_ids: ["s4"],
    practice_area_ids: ["pa6"],
    professional_ids: ["p1"],
    locale: "es",
    tags: [],
    display_date: "7 Abril 2026",
  },
  {
    id: "i2",
    title: "Asesoramos en la emisión de ONs de VALO por AR$90.084.353.132",
    slug: "emision-ons-valo-ar903-shard",
    excerpt: "",
    date: "2026-05-05",
    author_id: "p1",
    type: "Novedades legislativas",
    display_type: "Derecho Bancario & Mercado de Capitales",
    reading_time: 4,
    sector_ids: ["s3"],
    practice_area_ids: ["pa5"],
    professional_ids: ["p1"],
    locale: "es",
    tags: [],
    display_date: "5 Mayo 2026",
  },
  {
    id: "i3",
    title: "Asesoramos a Vista Energy en la emisión internacional de ONs por US$500.000.000",
    slug: "vista-energy-emision-internacional-ons",
    excerpt: "",
    date: "2026-04-23",
    author_id: "p2",
    type: "Novedades legislativas",
    display_type: "Derecho Bancario & Mercado de Capitales",
    reading_time: 4,
    sector_ids: ["s3"],
    practice_area_ids: ["pa5"],
    professional_ids: ["p2"],
    locale: "es",
    tags: [],
    display_date: "23 Abril 2026",
  },
  {
    id: "i4",
    title: "Asesoramos a los agentes colocadores en la emisión de ONs de Pampa Energía por US$200.000.000",
    slug: "pampa-energia-ons-agentes-colocadores",
    excerpt: "",
    date: "2026-04-17",
    author_id: "p2",
    type: "Novedades legislativas",
    display_type: "Emisión de Acciones",
    reading_time: 4,
    sector_ids: ["s3"],
    practice_area_ids: ["pa5"],
    professional_ids: ["p2"],
    locale: "es",
    tags: [],
    display_date: "17 de Abril",
  },
];

// Exact from Figma
export const RECOGNITIONS: Recognition[] = [
  { id: "r1", name: "Chambers Latin America", year: 2026, category: "Banda 1" },
  { id: "r2", name: "The Legal 500", year: 2026, category: "Tier 1" },
  { id: "r3", name: "IFLR1000", year: 2025, category: "Destacado" },
  { id: "r4", name: "Leaders League", year: 2025, category: "Excelente" },
  { id: "r5", name: "Latin Lawyer 250", year: 2025, category: "Top Firm" },
  { id: "r6", name: "Chambers Global Guide", year: 2026, category: "Líder" },
];

// 4 shortcuts — exact from Figma
export const SEARCH_SHORTCUTS: SearchShortcut[] = [
  { id: "sc1", label: "Sectores estratégicos", query: "sectores" },
  { id: "sc2", label: "Capacidades", query: "capacidades" },
  { id: "sc3", label: "Asuntos representativos", query: "asuntos" },
  { id: "sc4", label: "Profesionales", query: "profesionales" },
];

export const METHOD_STEPS = [
  {
    number: "01",
    title: "Diagnóstico jurídico y sectorial",
    summary:
      "Leemos el asunto desde el negocio, la regulación y el contexto institucional antes de definir un curso de acción.",
    criteria: ["Marco normativo", "Actores críticos", "Exposición legal"],
    output: "Mapa inicial de situación y prioridades.",
    capabilities: ["Regulatorio", "Corporativo", "Sector público", "Industria"],
  },
  {
    number: "02",
    title: "Mapa de riesgos",
    summary:
      "Ordenamos la complejidad para distinguir lo urgente, lo sensible y lo estructural.",
    criteria: ["Riesgo regulatorio", "Riesgo reputacional", "Riesgo operativo"],
    output: "Matriz de escenarios, dependencias y puntos críticos.",
    capabilities: ["Compliance", "Litigios", "Laboral", "Competencia"],
  },
  {
    number: "03",
    title: "Estrategia legal y regulatoria",
    summary:
      "Definimos cursos de acción posibles, sus costos, tiempos y consecuencias.",
    criteria: ["Alternativas jurídicas", "Ventanas regulatorias", "Estrategia de negociación"],
    output: "Hoja de ruta legal y regulatoria.",
    capabilities: ["M&A", "Mercado de capitales", "Energía", "Infraestructura"],
  },
  {
    number: "04",
    title: "Equipos integrados",
    summary: "Armamos equipos por desafío, no por organigrama interno.",
    criteria: ["Prácticas necesarias", "Especialistas sectoriales", "Liderazgo del asunto"],
    output: "Equipo coordinado, responsables claros y plan de ejecución.",
    capabilities: [
      "Capacidades",
      "Sectores",
      "Profesionales",
      "Knowledge management",
    ],
  },
  {
    number: "05",
    title: "Ejecución institucional",
    summary:
      "Acompañamos la implementación con precisión documental, seguimiento y capacidad de respuesta.",
    criteria: ["Hitos", "Documentación", "Coordinación externa"],
    output: "Ejecución sostenida hasta el cierre del asunto.",
    capabilities: ["Negociación", "Documentación", "Cierre", "Seguimiento"],
  },
] as const;

// Exact from Figma
export const PRACTICE_AREA_MODES = [
  {
    numeral: "01",
    title: "Estructurar operaciones.",
    description: "Lectura jurídica, regulatoria y sectorial para decisiones empresarias de alto impacto.",
  },
  {
    numeral: "02",
    title: "Anticipar riesgos regulatorios.",
    description:
      "Coordinación técnica para operaciones que requieren precisión, velocidad y gestión multidisciplinaria.",
  },
  {
    numeral: "03",
    title: "Sostener decisiones críticas.",
    description: "Diseño de estrategias para anticipar, contener y resolver escenarios críticos.",
  },
];
