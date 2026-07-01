export type HighlightedMatter = {
  tag: string;
  category: string;
  title: string;
  date: string;
  href?: string;
};

export type ProfessionalDetail = {
  slug: string;
  role?: string; // overrides the role from the JSON directory when set
  email?: string;
  linkedin?: string;
  vcard?: string;
  quote?: { text: string; source: string };
  bio?: string[];
  distinctions?: string[];
  expertise?: string[];
  education?: string[];
  languages?: string[];
  highlightedMatters?: HighlightedMatter[];
};

const details: ProfessionalDetail[] = [
  {
    slug: "rey-daniela",
    role: "Socia",
    quote: {
      text: "Daniela Rey es una excelente profesional que responde de forma rápida y concreta a las urgencias. Siempre aporta valor a las diferentes ideas o cuestiones que le planteamos.",
      source: "Chambers & Partners.",
    },
    bio: [
      "La Dra. Daniela Rey es socia del Departamento de Impuestos y concentra su práctica en asuntos de tributación internacional. Posee más de 20 años de experiencia práctica en cuestiones tributarias.",
      "Se especializa en el asesoramiento a empresas argentinas y del exterior en sus transacciones internacionales, inversiones de compañías argentinas en el exterior e inversiones de compañías extranjeras en Argentina, incluyendo todas las cuestiones vinculadas con deberes de información y cumplimientos formales aplicables tanto a individuos como a sociedades. Frecuentemente asesora en estructuras corporativas y financieras complejas, así como en otras varias cuestiones vinculadas con tributación internacional.",
      "Es reconocida como líder en su capacidad por Chambers and Partners, The Legal 500 e ITR World Tax.",
      "En forma previa a su ingreso al Estudio, la Dra. Rey se desempeñó como abogada del Departamento de Impuestos de Negri & Teijeiro, principalmente brindando asesoramiento tributario en cuestiones transaccionales, con especial énfasis en tributación internacional.",
      "Desde el año 2017, lidera la Comisión de Tributación Internacional de la Unión Industrial Argentina. Durante los años 2020-2022 se desempeñó como Relatora Nacional del Taxes Committee de la International Bar Association. Es miembro de la Asociación Argentina de Estudios Fiscales y del Colegio Público de Abogados de la Capital Federal.",
      "Se graduó en la Facultad de Derecho de la Universidad de Buenos Aires en el año 2005 con orientación en Derecho Tributario. Resultó ganadora de una beca patrocinada por la Universidad de Buenos Aires para completar sus estudios en la Universidad de Texas en Austin, Estados Unidos. En el año 2009 obtuvo su diploma de Especialista en Derecho Tributario de la Universidad Austral, siendo premiada con la medalla de honor por su tesina sobre tratados para evitar la doble imposición. Daniela es frecuente disertante en conferencias y seminarios tributarios, participando asiduamente en actividades del Taxes Committee de la International Bar Association, y periódicamente escribe artículos en publicaciones especializadas.",
      "Antes de obtener su título de abogada, se recibió de Diseñadora Gráfica en la Facultad de Arquitectura, Diseño y Urbanismo de la Universidad de Buenos Aires (2000).",
    ],
    distinctions: [
      "The Legal 500 Latin America Guide 2026",
      "Chambers and Partners Latin American Guide 2026",
      "Chambers Global Guide 2026",
    ],
    expertise: [
      "Impuestos",
      "Derecho Aeronáutico, Aeroportuario & Espacial",
    ],
    education: [
      "Facultad de Derecho de la Universidad de Buenos Aires.",
      "Universidad de Texas en Austin (beca de intercambio concursada ante la Universidad de Buenos Aires, otoño 2005).",
      "Universidad Austral, Especialización en Derecho Tributario, 2009 (premio medalla a la mejor tesina).",
    ],
    languages: ["Español", "Inglés"],
    highlightedMatters: [
      {
        tag: "New Deal",
        category: "Derecho Bancario & Mercado de Capitales",
        title: "Asesoramos en la emisión de ONs de VALO por AR$90.084.353.132",
        date: "5 Mayo 2026",
      },
      {
        tag: "New Deal",
        category: "Derecho Bancario & Mercado de Capitales",
        title: "Emisión internacional de obligaciones negociables de Vista Energy por US$500.000.000",
        date: "23 Abril 2026",
      },
      {
        tag: "New Deal",
        category: "Emisión de Acciones",
        title: "Pampa Energía: emisión de ONs por US$200.000.000",
        date: "17 de Abril",
      },
    ],
  },
];

export function getProfessionalDetail(slug: string): ProfessionalDetail | undefined {
  return details.find((d) => d.slug === slug);
}
