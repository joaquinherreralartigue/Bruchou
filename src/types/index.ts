// ── Entity types for Bruchou & Funes de Rioja ──────────────────────────────

export type Locale = "es" | "en";

export type ConfidentialityStatus = "public" | "partial" | "confidential";

export type InsightType =
  | "Análisis regulatorio"
  | "Novedades legislativas"
  | "Artículo de opinión"
  | "Nota técnica"
  | "Alerta jurídica";

export type PlatformType = "cross-sector" | "industry" | "alliance";

// ── Sector ─────────────────────────────────────────────────────────────────

export interface Sector {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description?: string;
  business_context: string;
  regulatory_tension: string;
  service_scope: string;
  image?: string;
  capability_chips: string[];
  // Relations (IDs resolved at query time)
  practice_area_ids: string[];
  matter_ids: string[];
  professional_ids: string[];
  insight_ids: string[];
}

// ── Practice Area ──────────────────────────────────────────────────────────

export interface PracticeArea {
  id: string;
  title: string;
  slug: string;
  summary: string;
  capabilities: string[];
  related_services: string[];
  // Relations
  sector_ids: string[];
  matter_ids: string[];
  professional_ids: string[];
  insight_ids: string[];
}

// ── Representative Matter ──────────────────────────────────────────────────

export interface RepresentativeMatter {
  id: string;
  title: string;
  slug: string;
  context: string;
  complexity: string;
  approach: string;
  impact: string;
  image?: string;
  metrics?: { label: string; value: string }[];
  year: number;
  confidentiality_status: ConfidentialityStatus;
  body?: string; // editorial paragraph for card
  // Relations
  sector_id: string;
  practice_area_ids: string[];
  professional_ids: string[];
  capability_chips: string[];
}

// ── Professional ───────────────────────────────────────────────────────────

export interface Professional {
  id: string;
  name: string;
  role: string;
  slug: string;
  bio_short: string;
  photo?: string;
  // Relations
  practice_area_ids: string[];
  sector_ids: string[];
  matter_ids: string[];
}

// ── Insight ────────────────────────────────────────────────────────────────

export interface Insight {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string; // ISO 8601
  author_id: string;
  type: InsightType;
  display_type?: string; // short label for UI (Figma)
  reading_time: number; // minutes
  // Relations
  sector_ids: string[];
  practice_area_ids: string[];
  professional_ids: string[];
  // i18n
  locale: Locale;
  alternate_slug?: string;
  // UI helpers (populated from CMS)
  tags?: string[];
  display_date?: string; // e.g. "Jun 2026"
}

// ── Recognition ────────────────────────────────────────────────────────────

export interface Recognition {
  id: string;
  name: string;
  logo_svg?: string;
  year: number;
  category: string;
  url?: string;
  // Optional relations
  practice_area_ids?: string[];
  sector_ids?: string[];
}

// ── Platform / Alliance ────────────────────────────────────────────────────

export interface Platform {
  id: string;
  name: string;
  slug: string;
  description: string;
  type: PlatformType;
  logo?: string;
  // Relations
  sector_ids: string[];
  practice_area_ids: string[];
  professional_ids: string[];
}

// ── Search ─────────────────────────────────────────────────────────────────

export interface SearchShortcut {
  id: string;
  label: string;
  query: string;
}

export type SearchResultType =
  | "professional"
  | "sector"
  | "practice_area"
  | "matter"
  | "insight";

export interface SearchResult {
  id: string;
  type: SearchResultType;
  title: string;
  subtitle?: string;
  slug: string;
}

export interface GroupedSearchResults {
  professionals: SearchResult[];
  sectors: SearchResult[];
  practice_areas: SearchResult[];
  matters: SearchResult[];
  insights: SearchResult[];
}

// ── Navigation ─────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
