import type { Metadata } from "next";
import { Suspense } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProfessionalsPage from "@/components/ProfessionalsPage/ProfessionalsPage";
import { getProfessionalsDirectory } from "@/data/professionals-server";

export const metadata: Metadata = {
  title: "Profesionales | Bruchou & Funes de Rioja",
  description: "Equipo de profesionales, referentes, consejo de administración y directorio del estudio.",
  alternates: { canonical: "/profesionales" },
};

export default async function ProfesionalesRoute() {
  const professionals = await getProfessionalsDirectory();
  return (
    <div className="relative bg-[#f7f5f2]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Header variant="light" />
        </div>
      </div>
      <main id="main-content" tabIndex={-1}>
        <Suspense fallback={null}>
          <ProfessionalsPage professionals={professionals} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
