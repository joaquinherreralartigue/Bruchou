export type PracticeServiceType = "asesoria" | "transaccional" | "litigios";

export type PracticeProfessional = {
  id: string;
  name: string;
  role?: string;
  href?: string;
};

export type PracticeRelatedArea = {
  id: string;
  title: string;
  href?: string;
};

export type Practice = {
  id: string;
  slug: string;
  title: string;
  groupId: string;
  serviceTypes: PracticeServiceType[];
  href: string;
  summary: string;
  professionals: PracticeProfessional[];
  relatedAreas: PracticeRelatedArea[];
  sourceUrl?: string;
  contentStatus?: "complete" | "partial" | "pending";
};

export type PracticeGroup = {
  id: string;
  label: string;
  practiceIds: string[];
};

function assertUniqueBy<T>(items: T[], getKey: (item: T) => string, label: string) {
  const seen = new Set<string>();
  for (const item of items) {
    const key = getKey(item).trim().toLowerCase();
    if (seen.has(key)) throw new Error(`Duplicate ${label}: ${key}`);
    seen.add(key);
  }
}

export const PRACTICE_GROUPS: PracticeGroup[] = [
  { id: "corporativo", label: "Corporativo", practiceIds: ["derecho-societario", "fusiones-adquisiciones", "venture-capital", "conflictos-societarios", "derecho-corporativo"] },
  { id: "finanzas", label: "Finanzas", practiceIds: ["derecho-cambiario", "impuestos", "derecho-bancario-capitales"] },
  { id: "regulacion", label: "Regulación", practiceIds: ["defensa-competencia", "aduanero-comercio-exterior", "derecho-administrativo-regulatorio", "defensa-del-consumidor"] },
  { id: "riesgo-empresario", label: "Riesgo Empresario", practiceIds: ["gestion-de-riesgos", "planificacion-patrimonial"] },
  { id: "litigios", label: "Litigios", practiceIds: ["compliance-investigaciones-penal-empresario", "litigios-arbitraje-internacional-concursos-quiebras"] },
  { id: "laboral", label: "Laboral", practiceIds: ["derecho-migratorio", "derecho-laboral-empresario"] },
  { id: "industrias", label: "Industrias", practiceIds: ["energia-electricidad", "mineria", "derecho-inmobiliario", "derecho-maritimo", "derecho-aeronautico", "agronegocios", "petroleo-gas-transicion", "life-sciences-healthcare"] },
  { id: "tecnologia-ip", label: "Tecnología IP", practiceIds: ["telecomunicaciones-medios-tecnologia", "propiedad-intelectual-privacidad-tecnologias-publicidad"] },
  { id: "sustentabilidad", label: "Sustentabilidad", practiceIds: ["esg-accion-climatica", "ambiental"] },
];

export const PRACTICES: Practice[] = [
  {
    id: "derecho-societario",
    slug: "derecho-societario-gobierno-corporativo",
    title: "Derecho Societario & Gobierno Corporativo",
    groupId: "corporativo",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/derecho-societario-gobierno-corporativo/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "florencia-angelico", name: "Florencia Angélico", role: "Socia de contacto" },
      { id: "maria-lucila-winschel", name: "María Lucila Winschel", role: "Socia de contacto" },
    ],
    relatedAreas: [{ id: "conflictos-societarios", title: "Conflictos Societarios", href: "/areas-de-practica/conflictos-societarios/" }],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-societario-gobierno-corporativo/",
    contentStatus: "complete",
  },
  {
    id: "fusiones-adquisiciones",
    slug: "asesoria-en-fusiones-adquisiciones",
    title: "Asesoría en Fusiones & Adquisiciones",
    groupId: "corporativo",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/asesoria-en-fusiones-adquisiciones/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "exequiel-h-buenaventura", name: "Exequiel H. Buenaventura", role: "Socio de contacto" },
      { id: "nicolas-dulce", name: "Nicolás Dulce", role: "Socio de contacto" },
      { id: "gabriel-lozano", name: "Gabriel Lozano", role: "Socio de contacto" },
      { id: "mariano-l-luchetti", name: "Mariano L. Luchetti", role: "Socio de contacto" },
      { id: "estanislao-h-olmos", name: "Estanislao H. Olmos", role: "Socio de contacto" },
      { id: "javier-s-rodriguez-galli", name: "Javier S. Rodríguez Galli", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/fusiones-adquisiciones/",
    contentStatus: "complete",
  },
  {
    id: "venture-capital",
    slug: "venture-capital",
    title: "Venture Capital / Startups",
    groupId: "corporativo",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/venture-capital/",
    summary: "Plataforma Wheel para startups y venture capital: estructuración, financiamiento, crecimiento, M&A, IPO y coordinación legal multidisciplinaria.",
    professionals: [],
    relatedAreas: [{ id: "fusiones-adquisiciones", title: "Asesoría en Fusiones & Adquisiciones", href: "/areas-de-practica/asesoria-en-fusiones-adquisiciones/" }],
    sourceUrl: "https://wheel.bruchou.com/wheel-spa/",
    contentStatus: "pending",
  },
  {
    id: "conflictos-societarios",
    slug: "conflictos-societarios",
    title: "Conflictos Societarios",
    groupId: "corporativo",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/conflictos-societarios/",
    summary: "Resolución de disputas entre accionistas, herederos, directores y empresas mediante enfoque societario, litigioso, tributario, laboral y de compliance.",
    professionals: [
      { id: "florencia-angelico", name: "Florencia Angélico", role: "Socia de contacto" },
      { id: "francisco-camauer", name: "Francisco Camauer", role: "Socio de contacto" },
    ],
    relatedAreas: [{ id: "derecho-societario", title: "Derecho Societario & Gobierno Corporativo", href: "/areas-de-practica/derecho-societario-gobierno-corporativo/" }],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/conflictos-societarios/",
    contentStatus: "complete",
  },
  {
    id: "derecho-corporativo",
    slug: "derecho-corporativo",
    title: "Derecho Corporativo",
    groupId: "corporativo",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/derecho-corporativo/",
    summary: "Asesoramiento corporativo integral en joint ventures, contratos comerciales, operaciones internacionales, accionistas y transacciones de alta complejidad.",
    professionals: [
      { id: "santiago-pedro-balbi", name: "Santiago Pedro Balbi", role: "Socio de contacto" },
      { id: "exequiel-h-buenaventura", name: "Exequiel H. Buenaventura", role: "Socio de contacto" },
      { id: "nicolas-dulce", name: "Nicolás Dulce", role: "Socio de contacto" },
      { id: "gabriel-lozano", name: "Gabriel Lozano", role: "Socio de contacto" },
      { id: "mariano-l-luchetti", name: "Mariano L. Luchetti", role: "Socio de contacto" },
      { id: "estanislao-h-olmos", name: "Estanislao H. Olmos", role: "Socio de contacto" },
      { id: "javier-s-rodriguez-galli", name: "Javier S. Rodríguez Galli", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-corporativo/",
    contentStatus: "complete",
  },
  {
    id: "derecho-cambiario",
    slug: "derecho-cambiario",
    title: "Derecho Cambiario",
    groupId: "finanzas",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/derecho-cambiario/",
    summary: "Asesoramiento preventivo, estructuras cross-border, productos eficientes en contextos regulatorios complejos y defensa en sumarios penales cambiarios.",
    professionals: [
      { id: "hugo-n-l-bruzone", name: "Hugo N. L. Bruzone", role: "Socio de contacto" },
      { id: "matias-lopez-figueroa", name: "Matías López Figueroa", role: "Socio de contacto" },
    ],
    relatedAreas: [], 
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-cambiario/",
    contentStatus: "complete",
  },
  {
    id: "impuestos",
    slug: "impuestos",
    title: "Impuestos",
    groupId: "finanzas",
    serviceTypes: ["asesoria", "transaccional", "litigios"],
    href: "/areas-de-practica/impuestos/",
    summary: "Estructuras impositivas para operaciones complejas, litigios tributarios, asesoramiento fiscal nacional e internacional y coordinación con áreas corporativas.",
    professionals: [
      { id: "liban-a-kusa", name: "Liban A. Kusa", role: "Socio de contacto" },
      { id: "ezequiel-lipovetzky", name: "Ezequiel Lipovetzky", role: "Socio de contacto" },
      { id: "pablo-muir", name: "Pablo Muir", role: "Socio de contacto" },
      { id: "nicolas-nogueira-castellini", name: "Nicolás Nogueira Castellini", role: "Socio de contacto" },
      { id: "daniela-rey", name: "Daniela Rey", role: "Socia de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/impuestos/",
    contentStatus: "complete",
  },
  {
    id: "derecho-bancario-capitales",
    slug: "derecho-bancario-mercado-de-capitales",
    title: "Derecho Bancario & Mercado de Capitales",
    groupId: "finanzas",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/derecho-bancario-mercado-de-capitales/",
    summary: "Asesoramiento en financiamientos, emisiones, fintech, cripto, securitización y operaciones bancarias y de mercado de capitales de alta complejidad.",
    professionals: [
      { id: "analia-r-battaglia", name: "Analía R. Battaglia", role: "Socia de contacto" },
      { id: "jose-maria-bazan", name: "José María Bazán", role: "Socio de contacto" },
      { id: "leandro-exequiel-belusci", name: "Leandro Exequiel Belusci", role: "Socio de contacto" },
      { id: "hugo-n-l-bruzone", name: "Hugo N. L. Bruzone", role: "Socio de contacto" },
      { id: "carlos-e-lombardi", name: "Carlos E. Lombardi", role: "Socio de contacto" },
      { id: "matias-lopez-figueroa", name: "Matías López Figueroa", role: "Socio de contacto" },
      { id: "alejandro-perelsztein", name: "Alejandro Perelsztein", role: "Socio de contacto" },
    ],
    relatedAreas: [
      { id: "concursos-reestructuraciones", title: "Concursos y Reestructuraciones" },
      { id: "securitizacion", title: "Securitización" },
      { id: "fondos-inversion", title: "Fondos de Inversión" },
      { id: "emision-deuda", title: "Emisión de Deuda por Oferta Pública" },
      { id: "financiacion-proyectos", title: "Financiación de Proyectos" },
      { id: "prestamos-sindicados", title: "Préstamos Sindicados & Otros Financiamientos Bancarios" },
    ],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-bancario-mercado-de-capitales/",
    contentStatus: "complete",
  },
  {
    id: "defensa-competencia",
    slug: "derecho-defensa-de-la-competencia",
    title: "Derecho de Defensa de la Competencia",
    groupId: "regulacion",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/derecho-defensa-de-la-competencia/",
    summary: "Control de fusiones, investigaciones antimonopolio, conductas, carteles, opiniones consultivas y asesoramiento preventivo en competencia.",
    professionals: [
      { id: "gabriel-lozano", name: "Gabriel Lozano", role: "Socio de contacto" },
      { id: "estanislao-h-olmos", name: "Estanislao H. Olmos", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-de-defensa-de-la-competencia/",
    contentStatus: "complete",
  },
  {
    id: "aduanero-comercio-exterior",
    slug: "aduanero-comercio-exterior",
    title: "Aduanero & Comercio Exterior",
    groupId: "regulacion",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/aduanero-comercio-exterior/",
    summary: "Consultoría en importaciones, exportaciones, clasificación arancelaria, valoración aduanera, origen, permisos, restricciones y defensa en procedimientos.",
    professionals: [
      { id: "maria-laura-bacigalupo", name: "María Laura Bacigalupo", role: "Socia de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/aduanero-comercio-exterior/",
    contentStatus: "complete",
  },
  {
    id: "derecho-administrativo-regulatorio",
    slug: "derecho-administrativo-regulatorio",
    title: "Derecho Administrativo & Regulatorio",
    groupId: "regulacion",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/derecho-administrativo-regulatorio/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "ignacio-j-minorini-lima", name: "Ignacio J. Minorini Lima", role: "Socio de contacto" },
      { id: "juan-antonio-zocca", name: "Juan Antonio Zocca", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-administrativo-regulatorio/",
    contentStatus: "complete",
  },
  {
    id: "defensa-del-consumidor",
    slug: "defensa-del-consumidor",
    title: "Defensa del consumidor",
    groupId: "regulacion",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/defensa-del-consumidor/",
    summary: "Gestión de reclamos, litigios, acciones colectivas y asesoramiento preventivo en derecho del consumidor para bancos, retail y compañías reguladas.",
    professionals: [
      { id: "martin-beretervide", name: "Martín Beretervide", role: "Socio de contacto" },
      { id: "carlos-m-rotman", name: "Carlos M. Rotman", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/defensa-del-consumidor/",
    contentStatus: "complete",
  },
  {
    id: "compliance-investigaciones-penal-empresario",
    slug: "compliance-investigaciones-y-derecho-penal-empresario",
    title: "Compliance, Investigaciones & Derecho Penal Empresario",
    groupId: "litigios",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/compliance-investigaciones-y-derecho-penal-empresario/",
    summary: "Prevención de riesgos penales, investigaciones internas, programas de compliance, anticorrupción, lavado de activos, sanciones, ESG y responsabilidad corporativa.",
    professionals: [
      { id: "guillermo-jorge", name: "Guillermo Jorge", role: "Socio de contacto" },
      { id: "fernando-basch", name: "Fernando Basch", role: "Socio de contacto" },
    ],
    relatedAreas: [
      { id: "derecho-laboral", title: "Derecho Laboral" },
      { id: "privacidad-nuevas-tecnologias", title: "Privacidad & Nuevas Tecnologías" },
      { id: "derecho-aduanero-comercio-exterior", title: "Derecho Aduanero & Comercio Exterior" },
      { id: "derecho-bancario-mercado-capitales", title: "Derecho Bancario & Mercado de Capitales" },
      { id: "energia", title: "Energía" },
      { id: "mineria", title: "Minería" },
    ],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/compliance-investigaciones-y-derecho-penal-empresario/",
    contentStatus: "complete",
  },
  {
    id: "litigios-arbitraje-internacional-concursos-quiebras",
    slug: "litigios-arbitraje-internacional-concursos-y-quiebras",
    title: "Litigios, Arbitraje Internacional & Concursos y Quiebras",
    groupId: "litigios",
    serviceTypes: ["litigios"],
    href: "/areas-de-practica/litigios-arbitraje-internacional-concursos-y-quiebras/",
    summary: "Resolución de conflictos administrativos, judiciales y arbitrales, litigios complejos, concursos, quiebras y estrategias contenciosas de alto impacto.",
    professionals: [
      { id: "martin-beretervide", name: "Martín Beretervide", role: "Socio de contacto" },
      { id: "francisco-camauer", name: "Francisco Camauer", role: "Socio de contacto" },
      { id: "ignacio-j-minorini-lima", name: "Ignacio J. Minorini Lima", role: "Socio de contacto" },
      { id: "carlos-m-rotman", name: "Carlos M. Rotman", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/litigios-arbitraje-internacional-concursos-y-quiebras/",
    contentStatus: "complete",
  },
  {
    id: "gestion-de-riesgos",
    slug: "gestion-de-riesgos",
    title: "Gestión de Riesgos",
    groupId: "riesgo-empresario",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/gestion-de-riesgos/",
    summary: "Respuesta legal estratégica ante crisis empresariales, reputacionales, regulatorias, ambientales, tecnológicas, penales, operativas y de alto impacto.",
    professionals: [
      { id: "exequiel-h-buenaventura", name: "Exequiel H. Buenaventura", role: "Socio de contacto" },
      { id: "ignacio-funes-de-rioja", name: "Ignacio Funes de Rioja", role: "Socio de contacto" },
      { id: "guillermo-jorge", name: "Guillermo Jorge", role: "Socio de contacto" },
      { id: "javier-lozada", name: "Javier Lozada", role: "Socio de contacto" },
      { id: "carlos-m-rotman", name: "Carlos M. Rotman", role: "Socio de contacto" },
      { id: "sebastian-p-vedoya", name: "Sebastián P. Vedoya", role: "Socio de contacto" },
    ],
    relatedAreas: [{ id: "planificacion-patrimonial", title: "Planificación Patrimonial", href: "/areas-de-practica/planificacion-patrimonial/" }],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/gestion-de-riesgos/",
    contentStatus: "complete",
  },
  {
    id: "planificacion-patrimonial",
    slug: "planificacion-patrimonial",
    title: "Planificación Patrimonial",
    groupId: "riesgo-empresario",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/planificacion-patrimonial/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "ezequiel-lipovetzky", name: "Ezequiel Lipovetzky", role: "Socio de contacto" },
      { id: "pablo-muir", name: "Pablo Muir", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/planificacion-patrimonial/",
    contentStatus: "complete",
  },
  {
    id: "derecho-migratorio",
    slug: "derecho-migratorio",
    title: "Derecho Migratorio",
    groupId: "laboral",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/derecho-migratorio/",
    summary: "Asesoramiento migratorio para empresas locales e internacionales: residencias, visados, auditorías, antecedentes, CUIL, DNI y documentación.",
    professionals: [
      { id: "german-capoulat", name: "Germán Capoulat", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/practica-migratoria/",
    contentStatus: "complete",
  },
  {
    id: "derecho-laboral-empresario",
    slug: "derecho-laboral-empresario",
    title: "Derecho Laboral Empresario",
    groupId: "laboral",
    serviceTypes: ["asesoria", "transaccional", "litigios"],
    href: "/areas-de-practica/derecho-laboral-empresario/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "ignacio-funes-de-rioja", name: "Ignacio Funes de Rioja", role: "Socio de contacto" },
      { id: "eduardo-juan-vinales", name: "Eduardo Juan Viñales", role: "Socio de contacto" },
      { id: "guillermo-fernando-perego", name: "Guillermo Fernando Perego", role: "Socio de contacto" },
      { id: "florencia-funes-de-rioja", name: "Florencia Funes de Rioja", role: "Socia de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-laboral-seguridad-social/",
    contentStatus: "complete",
  },
  {
    id: "energia-electricidad",
    slug: "energia-electricidad",
    title: "Energía (Electricidad)",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/energia-electricidad/",
    summary: "Asesoramiento regulatorio y transaccional para generación, transmisión, distribución, energías renovables, proyectos eléctricos y contratos del sector.",
    professionals: [
      { id: "nicolas-dulce", name: "Nicolás Dulce", role: "Socio de contacto" },
      { id: "mariano-l-luchetti", name: "Mariano L. Luchetti", role: "Socio de contacto" },
      { id: "ignacio-j-minorini-lima", name: "Ignacio J. Minorini Lima", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/energia-electricidad/",
    contentStatus: "complete",
  },
  {
    id: "mineria",
    slug: "mineria",
    title: "Minería",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/mineria/",
    summary: "Asesoramiento para proyectos mineros: recursos naturales, regulación, ambiente, financiamiento, comercio exterior, impuestos y litigios.",
    professionals: [
      { id: "sergio-arbeleche", name: "Sergio Arbeleche", role: "Socio de contacto" },
      { id: "sebastian-p-vedoya", name: "Sebastián P. Vedoya", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/mineria/",
    contentStatus: "complete",
  },
  {
    id: "derecho-inmobiliario",
    slug: "derecho-inmobiliario",
    title: "Derecho Inmobiliario",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/derecho-inmobiliario/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "exequiel-h-buenaventura", name: "Exequiel H. Buenaventura", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/negocios-inmobiliarios-hoteleros/",
    contentStatus: "complete",
  },
  {
    id: "derecho-maritimo",
    slug: "derecho-maritimo",
    title: "Derecho Marítimo",
    groupId: "industrias",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/derecho-maritimo/",
    summary: "Asesoramiento en derecho marítimo, fluvial, portuario, transporte internacional, fletamentos, carga, buques, seguros, logística y reclamos.",
    professionals: [
      { id: "maria-laura-bacigalupo", name: "María Laura Bacigalupo", role: "Socia de contacto" },
      { id: "fernando-basch", name: "Fernando Basch", role: "Socio de contacto" },
      { id: "mariana-neustadt", name: "Mariana Neustadt", role: "Socia de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-maritimo/",
    contentStatus: "complete",
  },
  {
    id: "derecho-aeronautico",
    slug: "derecho-aeronautico-aeroportuario-espacial",
    title: "Derecho Aeronáutico, Aeroportuario & Espacial",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/derecho-aeronautico-aeroportuario-espacial/",
    summary: "Asesoramiento en operaciones aeronáuticas, aeroportuarias y espaciales: habilitaciones, compraventa, financiamiento, registros, contratos y responsabilidad.",
    professionals: [
      { id: "juan-antonio-zocca", name: "Juan Antonio Zocca", role: "Socio de contacto" },
      { id: "sebastian-p-vedoya", name: "Sebastián P. Vedoya", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/derecho-aeronautico-aeroportuario-espacial/",
    contentStatus: "complete",
  },
  {
    id: "agronegocios",
    slug: "agronegocios",
    title: "Agronegocios",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/agronegocios/",
    summary: "Asesoramiento integral para la cadena agroindustrial: acuerdos comerciales, financiamiento, M&A, comercio exterior, regulación e impuestos.",
    professionals: [
      { id: "maria-laura-bacigalupo", name: "María Laura Bacigalupo", role: "Socia de contacto" },
      { id: "gabriel-lozano", name: "Gabriel Lozano", role: "Socio de contacto" },
      { id: "estanislao-h-olmos", name: "Estanislao H. Olmos", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/agronegocios/",
    contentStatus: "complete",
  },
  {
    id: "petroleo-gas-transicion",
    slug: "petroleo-y-gas-transicion-energetica",
    title: "Petróleo y Gas / Transición Energética",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/petroleo-y-gas-transicion-energetica/",
    summary: "Asesoramiento legal y regulatorio para upstream, midstream, downstream, LNG, Vaca Muerta, contratos, inversiones y transición energética.",
    professionals: [
      { id: "nicolas-dulce", name: "Nicolás Dulce", role: "Socio de contacto" },
      { id: "javier-s-rodriguez-galli", name: "Javier S. Rodríguez Galli", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/petroleo-y-gas/",
    contentStatus: "complete",
  },
  {
    id: "life-sciences-healthcare",
    slug: "life-sciences-healthcare",
    title: "Life Sciences & Healthcare",
    groupId: "industrias",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/life-sciences-healthcare/",
    summary: "Asesoramiento para salud, farmacéutica, biotecnología, tecnología médica, cosmética, agroquímicos, alimentos, regulación, PI, compliance y litigios.",
    professionals: [
      { id: "alejandro-barrientos", name: "Alejandro Barrientos", role: "Socio de contacto" },
      { id: "francisco-camauer", name: "Francisco Camauer", role: "Socio de contacto" },
      { id: "gabriel-lozano", name: "Gabriel Lozano", role: "Socio de contacto" },
      { id: "estanislao-h-olmos", name: "Estanislao H. Olmos", role: "Socio de contacto" },
      { id: "damaso-a-pardo", name: "Dámaso A. Pardo", role: "Socio de contacto" },
      { id: "juan-antonio-zocca", name: "Juan Antonio Zocca", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/life-science/",
    contentStatus: "complete",
  },
  {
    id: "telecomunicaciones-medios-tecnologia",
    slug: "telecomunicaciones-medios-tecnologia",
    title: "Telecomunicaciones, Medios & Tecnología",
    groupId: "tecnologia-ip",
    serviceTypes: ["asesoria", "transaccional", "litigios"],
    href: "/areas-de-practica/telecomunicaciones-medios-tecnologia/",
    summary: "Estructuración, negociación e implementación de operaciones de M&A, acuerdos societarios, asignación de riesgos y transacciones cross-border",
    professionals: [
      { id: "santiago-pedro-balbi", name: "Santiago Pedro Balbi", role: "Socio de contacto" },
      { id: "alejandro-barrientos", name: "Alejandro Barrientos", role: "Socio de contacto" },
      { id: "damaso-a-pardo", name: "Dámaso A. Pardo", role: "Socio de contacto" },
      { id: "juan-antonio-zocca", name: "Juan Antonio Zocca", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/telecomunicaciones-medios-tecnologia/",
    contentStatus: "complete",
  },
  {
    id: "propiedad-intelectual-privacidad-tecnologias-publicidad",
    slug: "propiedad-intelectual-privacidad-nuevas-tecnologias-publicidad",
    title: "Propiedad Intelectual, Privacidad, Nuevas Tecnologías y Publicidad legal",
    groupId: "tecnologia-ip",
    serviceTypes: ["asesoria", "litigios"],
    href: "/areas-de-practica/propiedad-intelectual-privacidad-nuevas-tecnologias-publicidad/",
    summary: "Asesoramiento en propiedad intelectual, privacidad, datos personales, comercio electrónico, software, marcas, patentes, publicidad y litigios.",
    professionals: [
      { id: "alejandro-barrientos", name: "Alejandro Barrientos", role: "Socio de contacto" },
      { id: "damaso-a-pardo", name: "Dámaso A. Pardo", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/propiedad-intelectual-privacidad-nuevas-tecnologias-publicidad/",
    contentStatus: "complete",
  },
  {
    id: "esg-accion-climatica",
    slug: "esg-accion-climatica-negocios-sustentables",
    title: "ESG: Acción Climática & Negocios Sustentables",
    groupId: "sustentabilidad",
    serviceTypes: ["asesoria", "transaccional"],
    href: "/areas-de-practica/esg-accion-climatica-negocios-sustentables/",
    summary: "Plataforma multidisciplinaria para acción climática, negocios sustentables, criterios ESG, bonos verdes, financiamiento y transición energética.",
    professionals: [
      { id: "pablo-crimer", name: "Pablo Crimer", role: "Coordinador general" },
      { id: "sergio-arbeleche", name: "Sergio Arbeleche", role: "Profesional del equipo" },
      { id: "santiago-pedro-balbi", name: "Santiago Pedro Balbi", role: "Profesional del equipo" },
      { id: "fernando-basch", name: "Fernando Basch", role: "Profesional del equipo" },
      { id: "jose-maria-bazan", name: "José María Bazán", role: "Profesional del equipo" },
      { id: "exequiel-h-buenaventura", name: "Exequiel H. Buenaventura", role: "Profesional del equipo" },
      { id: "guillermo-jorge", name: "Guillermo Jorge", role: "Profesional del equipo" },
      { id: "javier-lozada", name: "Javier Lozada", role: "Profesional del equipo" },
      { id: "mariano-l-luchetti", name: "Mariano L. Luchetti", role: "Profesional del equipo" },
      { id: "ignacio-j-minorini-lima", name: "Ignacio J. Minorini Lima", role: "Profesional del equipo" },
      { id: "alejandro-perelsztein", name: "Alejandro Perelsztein", role: "Profesional del equipo" },
      { id: "javier-s-rodriguez-galli", name: "Javier S. Rodríguez Galli", role: "Socio de contacto" },
      { id: "sebastian-p-vedoya", name: "Sebastián P. Vedoya", role: "Profesional del equipo" },
      { id: "maria-lucila-winschel", name: "María Lucila Winschel", role: "Socia de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/esg-accion-climatica-negocios-sustentables/",
    contentStatus: "complete",
  },
  {
    id: "ambiental",
    slug: "ambiental",
    title: "Ambiental",
    groupId: "sustentabilidad",
    serviceTypes: ["asesoria"],
    href: "/areas-de-practica/ambiental/",
    summary: "Estrategias ambientales para cumplimiento, prevención de contingencias, auditorías, litigios, transición energética y permisos de proyectos productivos.",
    professionals: [
      { id: "pablo-crimer", name: "Pablo Crimer", role: "Socio de contacto" },
    ],
    relatedAreas: [],
    sourceUrl: "https://bruchoufunes.com/areas-de-practica/ambiental/",
    contentStatus: "complete",
  },
];

if (process.env.NODE_ENV !== "production") {
  assertUniqueBy(PRACTICES, (practice) => practice.id, "practice id");
  assertUniqueBy(PRACTICES, (practice) => practice.slug, "practice slug");
  assertUniqueBy(PRACTICES, (practice) => practice.title, "practice title");
  assertUniqueBy(PRACTICE_GROUPS, (group) => group.id, "practice group id");
  assertUniqueBy(PRACTICE_GROUPS, (group) => group.label, "practice group label");
  for (const practice of PRACTICES) {
    if (!PRACTICE_GROUPS.some((group) => group.id === practice.groupId)) throw new Error(`Unknown practice group: ${practice.groupId}`);
    if (!practice.href.endsWith("/")) throw new Error(`Practice href must end with /: ${practice.id}`);
    if (!practice.href.includes(practice.slug)) throw new Error(`Practice href must contain slug: ${practice.id}`);
  }
  for (const group of PRACTICE_GROUPS) {
    for (const practiceId of group.practiceIds) {
      if (!PRACTICES.some((practice) => practice.id === practiceId)) throw new Error(`Unknown practice in group ${group.id}: ${practiceId}`);
    }
  }
}

