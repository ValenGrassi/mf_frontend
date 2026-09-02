import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { MLHero } from "@/components/mercado-libre/ml-hero"
import { MLProfile } from "@/components/mercado-libre/ml-profile"
import { MLProducts } from "@/components/mercado-libre/ml-products"
import { MLAdvantages } from "@/components/mercado-libre/ml-advantages"
import { MLCTA } from "@/components/mercado-libre/ml-cta"
import { FloatingWhatsapp } from "@/components/floating-whatsapp"

export const metadata: Metadata = {
  title: "Mercado Libre | MF Logística",
  description:
    "Encontrá nuestros insumos gastronómicos en nuestra tienda oficial de Mercado Libre. Compra protegida, envíos a todo el país y múltiples medios de pago.",
}

export default function MercadoLibrePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <MLHero />
        <div className="border-t border-border/40" />
        <MLProfile />
        <div className="border-t border-border/40" />
        <MLProducts />
        <div className="border-t border-border/40" />
        <MLAdvantages />
        <div className="border-t border-border/40" />
        <MLCTA />
      </main>
      <FloatingWhatsapp />
    </>
  )
}
