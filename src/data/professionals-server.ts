import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { normalizeProfessionalEntry, type ProfessionalEntry } from "./professionals";

type RawData = {
  professionals: Array<{
    id: string;
    name: string;
    role: string | null;
    profilePathCandidate?: string;
    profileUrl: string | null;
    image: string | null;
    isPracticeLeader?: boolean;
    isConsejoAdministracion?: boolean;
    isDirectorio?: boolean;
  }>;
};

let cache: ProfessionalEntry[] | null = null;

export async function getProfessionalsDirectory(): Promise<ProfessionalEntry[]> {
  if (cache) return cache;
  const file = join(process.cwd(), "src", "data", "professionals-completo.json");
  const raw = await readFile(file, "utf8");
  const data = JSON.parse(raw) as RawData;
  cache = data.professionals.map(normalizeProfessionalEntry);
  return cache;
}

export async function getProfessionalBySlug(slug: string) {
  const list = await getProfessionalsDirectory();
  return list.find((professional) => professional.slug === slug);
}
