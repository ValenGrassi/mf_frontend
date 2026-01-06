import { Package, Users, TrendingUp, Clock, Target, Award } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">Quiénes Somos</h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              MF Logística es una empresa argentina especializada en la distribución de insumos gastronómicos para
              restaurantes de cocina oriental. Operamos desde 2016 ofreciendo un servicio personalizado y directo a
              nuestros clientes en todo el área metropolitana de Buenos Aires.
            </p>
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
                Proveer a los restaurantes de cocina oriental con los mejores insumos del mercado, garantizando calidad,
                frescura y puntualidad en cada entrega. Nos comprometemos a ser el socio logístico confiable que permite
                a nuestros clientes enfocarse en lo que mejor hacen: crear experiencias gastronómicas excepcionales.
              </p>
            </Card>

            <Card className="p-10 bg-card">
              <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground text-pretty leading-relaxed text-lg">
                Ser la empresa líder en distribución de insumos para gastronomía oriental en Argentina, reconocidos por
                nuestra excelencia en servicio, calidad de productos y relaciones duraderas con nuestros clientes.
                Aspiramos a expandir nuestra cobertura manteniendo siempre el trato personalizado que nos caracteriza.
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-5xl font-bold text-accent mb-2">+8</div>
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
