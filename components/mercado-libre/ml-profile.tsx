import { Card } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"
import Image from "next/image"
import Logo from "../../public/logo.png"

const profileStats = [
  { label: "Ventas", value: "+500" },
  { label: "Calificaciones", value: "+50" },
  { label: "Reputación", value: "Excelente" },
]

export function MLProfile() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perfil oficial de la tienda</h2>
          <div className="w-20 h-1 bg-[oklch(0.78_0.15_80)] mx-auto" />
        </div>

        <div className="flex justify-center">
          <Card className="p-8 border-border/50 bg-card flex flex-col items-center text-center gap-6 w-full max-w-sm">
            <div className="w-20 h-20 rounded-2xl overflow-hidden bg-muted flex items-center justify-center shadow-md">
              <Image src={Logo} alt="MF Logística" className="w-full h-full object-contain p-1" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-1">MF Logística</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Distribuidora especializada en insumos para gastronomía oriental
              </p>
              <div className="inline-flex items-center gap-1.5 bg-[oklch(0.78_0.15_80)]/10 border border-[oklch(0.78_0.15_80)]/20 rounded-full px-3 py-1">
                <BadgeCheck className="h-3.5 w-3.5 text-[oklch(0.78_0.15_80)]" />
                <span className="text-xs font-semibold text-[oklch(0.78_0.15_80)]">MercadoLíder Oficial</span>
              </div>
            </div>

            <div className="w-full grid grid-cols-3 divide-x divide-border border-t border-border pt-5 mt-1">
              {profileStats.map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center px-2">
                  <span className="text-lg font-bold text-foreground">{value}</span>
                  <span className="text-[11px] text-muted-foreground mt-0.5">{label}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
