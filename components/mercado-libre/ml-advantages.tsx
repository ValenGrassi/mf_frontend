import { Card } from "@/components/ui/card"
import { ShieldCheck, Truck, BadgeCheck, Headphones, CreditCard, Package } from "lucide-react"

const advantages = [
  {
    icon: ShieldCheck,
    title: "Compra protegida",
    description: "Tus pagos están respaldados por Mercado Pago. Comprá sin riesgos.",
  },
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description: "Despachamos a cualquier provincia con seguimiento en tiempo real.",
  },
  {
    icon: BadgeCheck,
    title: "Publicaciones verificadas",
    description: "Todos nuestros productos son auténticos y de origen controlado.",
  },
  {
    icon: Headphones,
    title: "Atención rápida",
    description: "Respondemos consultas antes de las 24 hs con atención personalizada.",
  },
  {
    icon: CreditCard,
    title: "Múltiples medios de pago",
    description: "Tarjetas de crédito, débito, transferencia y Mercado Pago.",
  },
  {
    icon: Package,
    title: "Stock mayorista disponible",
    description: "Embalaje profesional y presentaciones acordes al rubro gastronómico.",
  },
]

export function MLAdvantages() {
  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Por qué comprar en nuestra tienda</h2>
          <div className="w-20 h-1 bg-[oklch(0.78_0.15_80)] mx-auto mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            La experiencia y confianza de MF Logística, con la seguridad y comodidad de Mercado Libre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="group p-6 border-border/40 bg-card hover:border-[oklch(0.78_0.15_80)]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[oklch(0.78_0.15_80)]/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6 text-[oklch(0.78_0.15_80)]" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
