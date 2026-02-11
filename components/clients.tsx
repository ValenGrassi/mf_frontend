"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

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
      description: "Restaurante de comida china y japonesa en Capital Federal",
    },
    {
      name: "Orient Market Suppliers",
      image:"./jochito.jpg",
      specialty: "Jochito Sushi",
      description: "Restaurante de sushi omakese en Coghlan",
    },
  ]

  return (
    <section className="pt-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Algunos de Nuestros Clientes</h2>
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
                className="transition-all duration-500 mb-4 object-contain"
              />
              <p className="text-sm font-semibold text-accent mb-3 text-center">{client.specialty}</p>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
        <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/quienes-somos#clientes">Ver la Lista Completa</Link>
            </Button>
            </div>
      </div>
    </section>
  )
}