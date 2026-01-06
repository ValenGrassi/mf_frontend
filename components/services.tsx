import { Card } from "@/components/ui/card"
import { Truck, Handshake, DollarSign, ChefHat } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Distribución logística eficiente",
      description: "Entregas puntuales y seguras en toda el área metropolitana",
    },
    {
      icon: Handshake,
      title: "Trato directo con clientes",
      description: "Comunicación fluida y atención personalizada",
    },
    {
      icon: DollarSign,
      title: "Precios mayoristas",
      description: "Las mejores tarifas del mercado para tu negocio",
    },
    {
      icon: ChefHat,
      title: "Abastecimiento para restaurantes orientales",
      description: "Especialistas en sushi, japonés, chino y cocina asiática",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300 bg-card cursor-context-menu">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-pretty leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
