import { Card } from "@/components/ui/card"
import { FileText, ListChecks, Truck, CreditCard, ArrowRight } from "lucide-react"
import Link from "next/link"

export function OrderProcess() {
  const steps = [
    {
      number: "01",
      title: "Solicite el listado",
      description: "Haga click y pida el catálogo actualizado vía WhatsApp para ver stock y precios.",
      icon: FileText,
      link:"https://wa.me/5491172667077?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20el%20cat%C3%A1logo%20de%20productos.%20Gracias!",
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
      description: "Consulte las opciones para realizar el pago.",
      icon: CreditCard,
    },
  ]

  return (
    <section className="py-24 bg-background" id="como-pedir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
            Cómo Hacer <span className="text-accent">Tu Pedido</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto" />
          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Un proceso ágil y profesional diseñado para tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
  {steps.map((step, index) => {
    // Definimos el contenido de la card una sola vez para no repetir código
    const CardInner = (
      <Card className="relative p-8 h-full bg-card border-none shadow-none hover:bg-muted/30 transition-all duration-500 rounded-3xl group">
        {/* Número de paso estilizado */}
        <div className="absolute top-6 right-8">
          <span className="text-6xl font-black text-accent/20 group-hover:text-accent/80 transition-colors">
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
    );

    return (
      <div key={step.number} className="group cursor-context-menu">
        {step.link ? (
          <Link href={step.link} target="_blank">
            {CardInner}
          </Link>
        ) : (
          CardInner
        )}
      </div>
    );
  })}
</div>
      </div>
    </section>
  )
}