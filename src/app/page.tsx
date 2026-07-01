import type { Metadata } from "next";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import AssistedSearch from "@/components/AssistedSearch/AssistedSearch";
import MethodSectionSequential from "@/components/MethodSection/MethodSectionSequential";
import SectorsCapabilities from "@/components/SectorsCapabilities/SectorsCapabilities";
import RepresentativeMatters from "@/components/RepresentativeMatters/RepresentativeMatters";
import InsightsSection from "@/components/InsightsSection/InsightsSection";
import RecognitionsStrip from "@/components/RecognitionsStrip/RecognitionsStrip";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Liderazgo jurídico para escenarios de alta complejidad",
  description:
    "Bruchou & Funes de Rioja integra conocimiento jurídico, visión de negocios, tecnología y equipos multidisciplinarios para resolver los asuntos donde más se decide.",
  alternates: {
    canonical: "/",
    languages: { es: "/", en: "/en" },
  },
  openGraph: {
    title: "Bruchou & Funes de Rioja | Estudio jurídico de referencia",
    description:
      "Liderazgo jurídico para escenarios de alta complejidad. Sectores estratégicos, asuntos representativos y capacidades integradas.",
    url: "/",
    images: [{ url: "/og-home.png", width: 1200, height: 630, alt: "Bruchou & Funes de Rioja" }],
  },
};

export default function HomePage() {
  return (
    <div className="relative bg-[#111f3f]">
      <Header variant="dark" />
      <main id="main-content" tabIndex={-1}>
        <div data-header-theme="dark" data-header-surface="transparent">
          <Hero />
        </div>
        <div data-header-theme="dark" data-header-surface="solid">
          <AssistedSearch />
        </div>
        <div data-header-theme="dark" data-header-surface="solid">
          <MethodSectionSequential />
        </div>
        <div data-header-theme="light" data-header-surface="solid">
          <SectorsCapabilities />
        </div>
        <div data-header-theme="light" data-header-surface="solid">
          <RepresentativeMatters />
        </div>
        <div data-header-theme="light" data-header-surface="solid">
          <InsightsSection />
        </div>
        <div data-header-theme="light" data-header-surface="solid">
          <RecognitionsStrip />
        </div>
      </main>
      <div data-header-theme="dark" data-header-surface="solid">
        <Footer />
      </div>
    </div>
  );
}
