import { MessageCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function MasInfo (){
    return (
    <div className="text-center max-w-7xl m-auto pb-24">
      <Card className="p-12 bg-muted/30 border-2 border-border">
        <h2 className="text-3xl font-bold text-foreground mb-4">¿Necesitas más información?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Contáctanos por WhatsApp para consultar disponibilidad, precios mayoristas y condiciones especiales para
          tu restaurante.
        </p>
        <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
          <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2 h-5 w-5" />
            Consultar por WhatsApp
          </a>
        </Button>
      </Card>
    </div>
    )
}