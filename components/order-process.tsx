import { Card } from "@/components/ui/card"
import { FileText, ListChecks, Truck, CreditCard, Clock, MessageCircle } from "lucide-react"
import { Button } from "./ui/button"

export function OrderProcess() {
  const steps = [
    {
      number: 1,
      title: "Solicite el listado actualizado al whatsapp",
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      link:"#contacto"
    },
    {
      number: 2,
      title: "Arme su pedido",
      subtitle: "(No olvide las aclaraciones*)",
      icon: ListChecks,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      number: 3,
      title: "Indique si lo retira o lo enviamos",
      icon: Truck,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      number: 4,
      title: "Aclare su método de pago",
      subtitle: "(Efectivo o transferencia)",
      icon: CreditCard,
      color: "text-yellow-600",
      bgColor: "bg-yellow-600/10",
    },
  ]

  return (
    <section className="py-24 bg-background" id="como-pedir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Cómo Hacer su Pedido</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Proceso simple y rápido en <b>4 pasos</b>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 cursor-context-menu mx-8 md:mx-0">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
              
            >
              <div className={`w-20 h-20 ${step.bgColor} rounded-lg flex items-center justify-center mx-auto mb-6`}>
                <step.icon className={`h-10 w-10 ${step.color}`} />
              </div>
              <div className="text-center mb-4">
                <div className="text-5xl font-bold text-muted-foreground/20 mb-2">{step.number}</div>
                <h3 className="text-lg font-medium text-muted-foreground mb-2 text-balance leading-snug">{step.title}</h3>
                {step.subtitle && <p className="text-sm font-semibold text-muted-foreground">{step.subtitle}</p>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
