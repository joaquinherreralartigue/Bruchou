// Content guard — enforced at build time and runtime

const BLOCKED_PHRASES = [
  "casos de éxito",
  "casos de exito",
  "success stories",
] as const;

const BLOCKED_GENERIC_CTAS = [
  "leer más",
  "leer mas",
  "ver más",
  "ver mas",
  "read more",
  "click aquí",
  "click here",
  "haga clic aquí",
] as const;

// Maximum character limits per component zone
export const CHAR_LIMITS = {
  heroTitle: 120,
  heroSubtitle: 200,
  sectionHeading: 160,
  cardTitle: 140,
  cardExcerpt: 300,
  chipLabel: 40,
  ctaLabel: 60,
  metaDescription: 160,
} as const;

export function validatePhrase(text: string): { ok: boolean; violation?: string } {
  const lower = text.toLowerCase();
  for (const phrase of BLOCKED_PHRASES) {
    if (lower.includes(phrase)) {
      return { ok: false, violation: `Frase bloqueada: "${phrase}"` };
    }
  }
  return { ok: true };
}

export function validateCTA(label: string): { ok: boolean; violation?: string } {
  const lower = label.toLowerCase().trim();
  for (const blocked of BLOCKED_GENERIC_CTAS) {
    if (lower === blocked || lower.startsWith(blocked)) {
      return { ok: false, violation: `CTA genérico bloqueado: "${label}"` };
    }
  }
  return { ok: true };
}

export function validateCharLimit(
  text: string,
  zone: keyof typeof CHAR_LIMITS,
): { ok: boolean; violation?: string } {
  const limit = CHAR_LIMITS[zone];
  if (text.length > limit) {
    return {
      ok: false,
      violation: `"${zone}" excede ${limit} caracteres (tiene ${text.length})`,
    };
  }
  return { ok: true };
}

// Centralized taxonomies — single source of truth
export const TAXONOMY = {
  sectors: [
    "Trabajo, talento y relaciones laborales",
    "Energía, recursos naturales e infraestructura",
    "Capital, inversión y mercados financieros",
    "Tecnología, datos e innovación",
    "Salud, farma y ciencias de la vida",
    "Agroindustria, alimentos y cadenas productivas",
    "Sector público, regulación e instituciones",
  ],
  insightTypes: [
    "Análisis regulatorio",
    "Novedades legislativas",
    "Artículo de opinión",
    "Nota técnica",
    "Alerta jurídica",
  ],
  locales: ["es", "en"] as const,
  confidentialityStatuses: ["public", "partial", "confidential"] as const,
} as const;
