"use client"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Suppliers() {
  const suppliers = [
    {
      name: "La Serenísima",
      image:"./serenisima.png",
      specialty: "Lácteos y Quesos",
    },
    {
      name: "Chango",
      specialty: "Azucar, Endulzantes y Repostería",
      image:"./chango.jpg",
    },
    {
      name: "Menoyo",
      image:"./menoyo.webp",
      specialty: "Aderezos, Vinagres, Aceites y Especias",
      description: "Especialistas en productos tailandeses y del sudeste asiático",
    },
    {
      name: "Bandex",
      image:"./bandex.jpg",
      specialty: "Bandejas y Packaging",
      description: "Amplio catálogo de productos de toda Asia",
    },
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Nuestros Proveedores</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Trabajamos con los mejores proveedores del mercado para garantizar productos de primera calidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {suppliers.map((supplier, index) => (
            /* Añadimos la clase 'group' a la Card */
            <Card 
              key={index} 
              className="group p-8 bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-center items-center"
            >
              <Image 
                width={200} 
                height={200} 
                src={supplier.image} 
                alt={supplier.name}
                /* Aplicamos grayscale por defecto y grayscale-0 cuando el 'group' tiene hover */
                className="transition-all duration-500 mb-4 object-contain"
              />
              <p className="text-sm font-semibold text-foreground mb-3 text-center">{supplier.specialty}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}