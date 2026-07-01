import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Sectores y capacidades | Bruchou & Funes de Rioja",
  description: "Sectores y capacidades con lectura editorial, sectorial y de negocio.",
  alternates: { canonical: "/sectores-y-capacidades" },
};

export default function AreasRoute() {
  redirect("/sectores-y-capacidades");
}
