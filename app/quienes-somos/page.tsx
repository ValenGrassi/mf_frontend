import { Navbar } from "@/components/navbar"
import { About } from "@/components/about"
import type { Metadata } from "next"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Quiénes Somos - MF Logística | Distribuidores Especializados en Gastronomía Oriental",
  description:
    "Conoce a MF Logística, tu distribuidor de confianza con más de 8 años de experiencia en insumos para restaurantes de cocina oriental en Buenos Aires. Compromiso, calidad y servicio profesional.",
  keywords: [
    "sobre MF Logística",
    "distribución gastronomía oriental",
    "experiencia distribución",
    "empresa logística Buenos Aires",
    "proveedor restaurantes",
  ],
  openGraph: {
    title: "Quiénes Somos - MF Logística",
    description: "Más de 8 años distribuyendo insumos para restaurantes de cocina oriental en Buenos Aires",
    type: "website",
  },
}

export default function QuienesSomosPage() {
  const clients = [
    {
      name: "Golden Dragon Trading",
      image:"./mein.jpeg",
      specialty: "Mein Sushi",
      description: "Restaurante de sushi en Flores y Villa Crespo",
    },
    {
      name: "Asian Foods Import",
      specialty: "Obasan Sushi",
      image:"./obasan.jpeg",
      description: "Restaurante de sushi en Villa Adelina",
    },
    {
      name: "Thai Express Wholesale",
      image:"./sushi-world.jpeg",
      specialty: "Sushi World",
      description: "Restaurante de comida china y japonesa en Capital Federal",
    },
    {
      name: "Orient Market Suppliers",
      image:"./jochito.jpg",
      specialty: "Jochito Sushi",
      description: "Restaurante de sushi omakese en Coghlan",
    },
    {
      name: "Thai Express Wholesale",
      image:"./sushi-lives.jpg",
      specialty: "Sushi Lives",
      description: "Restaurante de sushi en Colegiales, Recoleta, Villa Urquiza y Caballito",
    },
    {
      name: "Orient Market Suppliers",
      image:"./zhao.jpg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./bakokuri.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./tsunami.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./sato-sushi.png",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./delsushi.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./elfuego.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./fukui.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./golden.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./hamaita.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./kandai.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./kazoku.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./leandro.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./namida.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./pedisushi.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./sushifox.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./toosushi.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./wasabi.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./sushico.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./sushisake.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./emunah.jpeg",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
    {
      name: "Orient Market Suppliers",
      image:"./sirelogo.png",
      specialty: "Zhao",
      description: "Restaurante de sushi en Pilar, Tigre, San Sebastián y Escobar",
    },
  ]
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <About />
        <section id="clientes" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Lista de Clientes</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          ¿Querés sumarte a la lista? ¡Hablanos al Whatsapp!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            /* Añadimos la clase 'group' a la Card */
            <Card 
              key={index} 
              className="group p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center"
            >
              <Image 
                width={200} 
                height={200} 
                src={client.image} 
                alt={client.name}
                /* Aplicamos grayscale por defecto y grayscale-0 cuando el 'group' tiene hover */
                className="transition-all duration-500 mb-4 object-contain"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
      </main>
    </>
  )
}
