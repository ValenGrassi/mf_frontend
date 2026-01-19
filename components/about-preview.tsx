import { Button } from "@/components/ui/button"
import { Award, TrendingUp, Users } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="/modern-logistics-warehouse-with-oriental-food-supp.jpg"
              alt="Equipo de MF Logística"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Quiénes Somos</h2>
            <div className="w-24 h-1 bg-accent mb-8" />
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Somos <strong className="text-foreground">MF Logística</strong>, una empresa argentina especializada en la
              distribución mayorista de productos para restaurantes de sushi.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Con más de 9 años de experiencia en el mercado, nos hemos consolidado como el socio logístico de confianza
              para cientos de restaurantes en Buenos Aires.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="h-6 w-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">+9</p>
                <p className="text-sm text-muted-foreground">Años de experiencia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">200+</p>
                <p className="text-sm text-muted-foreground">Clientes activos</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <p className="text-3xl font-bold text-foreground mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Entregas a tiempo</p>
              </div>
            </div>

            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/quienes-somos">Conocer más</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}
