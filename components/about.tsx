import { Package, Users, TrendingUp, Clock, Target, Award, History } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import Nosotros from "../public/quienes-somos.jpg"
import Image from "next/image"

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            {/* Left: Information */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Quiénes Somos</h1>
              <div className="w-24 h-1 bg-accent mb-8" />
              <p className="text-lg md:text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
              MF Logística es una empresa argentina de origen familiar, especializada en la distribución de insumos gastronómicos para restaurantes de sushi.

              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Desde 2016, brindamos un servicio personalizado y directo, acompañando a nuestros clientes en toda el Área Metropolitana de Buenos Aires, con compromiso, cercanía y atención permanente.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/nosotros.jpg"
                  alt="MF Logística - Distribución para restaurantes"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/5 rounded-lg -z-10" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">+9</div>
              <p className="text-xl text-foreground font-semibold mb-2">Años de experiencia</p>
              <p className="text-muted-foreground text-pretty">Desde 2016 trabajando con los mejores restaurantes</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">100%</div>
              <p className="text-xl text-foreground font-semibold mb-2">Productos de calidad</p>
              <p className="text-muted-foreground text-pretty">Garantizamos frescura y autenticidad en cada entrega</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">24h</div>
              <p className="text-xl text-foreground font-semibold mb-2">Tiempo de respuesta</p>
              <p className="text-muted-foreground text-pretty">Atención rápida a tus consultas y pedidos</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                <History className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Nuestra Historia</h2>
            </div>
            <div className="w-24 h-1 bg-accent mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p className="text-pretty">
              MF Logística nació en el año 2016 como un emprendimiento familiar, con el objetivo de abastecer de manera integral a restaurantes de sushi.

              </p>

              <p className="text-pretty">
              Con dedicación, constancia y trabajo diario, fuimos creciendo año tras año, impulsados por la confianza de nuestros clientes, quienes han sido parte fundamental de este camino.
              </p>

              <p className="text-pretty">
              Ese crecimiento nos motiva a seguir mejorando cada día, manteniendo nuestros valores y ofreciendo el servicio y la calidad que nuestros clientes se merecen.
              </p>

              <p className="text-pretty">
                Hoy, MF Logística se enorgullece de ser parte del éxito de decenas de restaurantes en CABA y AMBA. Cada
                plato que llega a las mesas de sus clientes lleva un poco de nuestro compromiso y dedicación. Seguimos
                creciendo, pero mantenemos la esencia que nos caracteriza desde el primer día: trato personalizado,
                servicio eficiente y productos de primera calidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-10 bg-card">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
              Brindar soluciones logísticas eficientes y confiables en la distribución de insumos gastronómicos para restaurantes de sushi, ofreciendo un servicio personalizado, ágil y de calidad, basado en la cercanía y el compromiso con cada cliente.
              </p>
            </Card>

            <Card className="p-10 bg-card">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
              Ser una empresa referente en la distribución de insumos gastronómicos para sushi en el Área Metropolitana de Buenos Aires, reconocida por la calidad de nuestros productos, la excelencia en el servicio y la relación de confianza construida con nuestros clientes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h2>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>

          {/* Main Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Trato Directo</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Relación personalizada con cada cliente para entender sus necesidades específicas
              </p>
            </Card>

            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Logística Eficiente</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Distribución rápida y confiable en CABA y AMBA
              </p>
            </Card>

            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Precios Mayoristas</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Tarifas competitivas para compras al por mayor
              </p>
            </Card>

            <Card className="text-center p-8 bg-card hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Experiencia</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Más de 8 años en el sector gastronómico oriental
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-card text-center border-2 border-border">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Listo para comenzar?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Contactanos hoy mismo para conocer nuestro catálogo completo, precios mayoristas y condiciones especiales
              para tu restaurante.
            </p>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6">
              <a href="https://wa.me/5491123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </Card>
        </div>
      </section>
    </>
  )
}
