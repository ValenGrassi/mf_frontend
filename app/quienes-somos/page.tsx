import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import { WhatsAppButton } from "@/components/whatsapp-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos - MF Logística | Distribuidores Especializados en Gastronomía Oriental",
  description:
    "Conoce a MF Logística, tu distribuidor de confianza con más de 8 años de experiencia en insumos para restaurantes de cocina oriental en Buenos Aires. Compromiso, calidad y servicio profesional.",
  keywords: [
    "sobre MF Logística",
    "distribución gastronomía oriental",
    "experiencia distribución",
    "empresa logística Buenos Aires",
    "proveedor restaurantes",
  ],
  openGraph: {
    title: "Quiénes Somos - MF Logística",
    description: "Más de 8 años distribuyendo insumos para restaurantes de cocina oriental en Buenos Aires",
    type: "website",
  },
}

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <About />
        <WhatsAppButton />
      </main>
    </>
  )
}
