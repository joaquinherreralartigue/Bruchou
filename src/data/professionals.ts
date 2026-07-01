export type ProfessionalEntry = {
  id: string;
  name: string;
  role: string;
  slug: string;
  image?: string;
  isPracticeLeader?: boolean;
  isBoardMember?: boolean;
  isDirectoryMember?: boolean;
  profileUrl?: string;
  bio_short?: string;
  practice_area_ids?: string[];
  sector_ids?: string[];
  matter_ids?: string[];
  email?: string;
  linkedin?: string;
  vcard?: string;
};

export function normalizeProfessionalEntry(professional: {
  id: string;
  name: string;
  role: string | null;
  profilePathCandidate?: string;
  profileUrl: string | null;
  image: string | null;
  isPracticeLeader?: boolean;
  isConsejoAdministracion?: boolean;
  isDirectorio?: boolean;
}): ProfessionalEntry {
  return {
    id: professional.id,
    name: professional.name,
    role: professional.role ?? "",
    slug: professional.profilePathCandidate?.replace(/^\/profesionales\/|\/$/g, "") ?? professional.id,
    image: professional.image ?? undefined,
    isPracticeLeader: Boolean(professional.isPracticeLeader),
    isBoardMember: Boolean(professional.isConsejoAdministracion),
    isDirectoryMember: Boolean(professional.isDirectorio),
    profileUrl: professional.profileUrl ?? professional.profilePathCandidate ?? undefined,
  };
}

export function getProfessionalBySlug(list: ProfessionalEntry[], slug: string) {
  return list.find((professional) => professional.slug === slug);
}
