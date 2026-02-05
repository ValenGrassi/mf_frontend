"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Clients() {
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
      description: "Restaurante de comida china y japonesa en Santiago del Estero, Córdoba y Buenos Aires",
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
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nuestros Clientes</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
          Locales que confían en nuestra calidad y experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                className="grayscale transition-all duration-500 group-hover:grayscale-0 mb-4 object-contain"
              />
              <p className="text-sm font-semibold text-accent mb-3 text-center">{client.specialty}</p>
              <p className="text-muted-foreground text-center text-pretty leading-relaxed">{client.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}