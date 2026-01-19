import { Card } from "@/components/ui/card"
import { Truck, Handshake, DollarSign, ChefHat } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Distribución logística eficiente",
      description: "Entregas puntuales y seguras en toda el área metropolitana.",
      className: "md:col-span-8", // Ocupa 2/3 (8 de 12 columnas)
    },
    {
      icon: Handshake,
      title: "Trato directo",
      description: "Atención personalizada.",
      className: "md:col-span-4", // Ocupa 1/3 (4 de 12 columnas)
    },
    {
      icon: DollarSign,
      title: "Precios mayoristas",
      description: "Las mejores tarifas del mercado para tu negocio.",
      className: "md:col-span-4", // Ocupa 1/3
    },
    {
      icon: ChefHat,
      title: "Abastecimiento especializado",
      description: "Expertos en logística para restaurantes orientales y especialistas en sushi.",
      className: "md:col-span-8", // Ocupa 2/3
    },
  ]

  return (
    <section className="py-24 bg-background" id="nuestros-servicios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
        </div>

        {/* Grid de 12 columnas para manejar los tercios (4 y 8) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index} 
                className={`group p-8 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border-muted/40 flex flex-col justify-between overflow-hidden relative ${service.className} cursor-context-menu`}
              >
                {/* Decoración sutil de fondo */}
                <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                   <Icon size={120} />
                </div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-pretty text-lg leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>

              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}