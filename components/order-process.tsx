import { Card } from "@/components/ui/card"
import { FileText, ListChecks, Truck, CreditCard, ArrowRight } from "lucide-react"

export function OrderProcess() {
  const steps = [
    {
      number: "01",
      title: "Solicite el listado",
      description: "Pida el catálogo actualizado vía WhatsApp para ver stock y precios.",
      icon: FileText,
    },
    {
      number: "02",
      title: "Arme su pedido",
      description: "Prepare su lista detallando cantidades y aclaraciones especiales.",
      icon: ListChecks,
    },
    {
      number: "03",
      title: "Logística",
      description: "Indique si prefiere retirar en local o envío a domicilio.",
      icon: Truck,
    },
    {
      number: "04",
      title: "Método de pago",
      description: "Aclare si abonará en efectivo o mediante transferencia.",
      icon: CreditCard,
    },
  ]

  return (
    <section className="py-24 bg-background overflow-hidden" id="como-pedir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header con el estilo del catálogo */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Cómo Hacer <span className="italic font-serif text-accent">Tu Pedido</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simplificamos el abastecimiento para que tu única preocupación sea el sabor de tus platos.
          </p>
        </div>

        <div className="relative">
          {/* Línea decorativa de conexión (Solo visible en desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-border -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group">
                <Card className="relative p-8 h-full bg-card border-none shadow-none hover:bg-muted/30 transition-all duration-500 rounded-3xl group">
                  
                  {/* Número de paso estilizado */}
                  <div className="absolute top-6 right-8">
                    <span className="text-6xl font-black text-foreground/[0.03] group-hover:text-accent/10 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Icono con contenedor moderno */}
                  <div className="relative mb-8">
                    <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center shadow-sm border border-border group-hover:border-accent group-hover:shadow-accent/10 transition-all duration-500">
                      <step.icon className="h-7 w-7 text-foreground group-hover:text-accent transition-colors" />
                    </div>
                    
                    {/* Flecha indicadora (Solo desktop, excepto el último) */}
                    {index !== steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-4 translate-x-full -translate-y-1/2 text-muted-foreground/30">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    )}
                  </div>

                  {/* Texto */}
                  <div className="relative">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Barra inferior decorativa */}
                  <div className="absolute bottom-0 left-8 right-8 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}