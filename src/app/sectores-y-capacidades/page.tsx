import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import SectoresCapacidadesPageClient from "./SectoresCapacidadesPageClient";

export const metadata: Metadata = {
  title: "Sectores y capacidades | Bruchou & Funes de Rioja",
  description: "Una mirada integrada sobre los negocios, la regulación y los sectores estratégicos.",
  alternates: { canonical: "/sectores-y-capacidades" },
};

export default function SectoresYCapacidadesPage() {
  return (
    <div className="sectores-capacidades-page relative bg-[#f4efed] text-[#071227]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-50">
        <div className="pointer-events-auto">
          <Header variant="dark" />
        </div>
      </div>

      <main id="main-content" tabIndex={-1} className="overflow-x-clip">
        <SectoresCapacidadesPageClient />
      </main>

      <Footer />
    </div>
  );
}
