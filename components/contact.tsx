"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491123456789", "_blank")
  }

  return (
    <section className="py-24 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contactanos</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg md:text-xl text-neutral-200 max-w-3xl mx-auto text-pretty">
            Estamos listos para atender tu negocio. Escribinos y te respondemos a la brevedad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Horarios</h3>
                  <p className="text-neutral-300">Lunes a Sábados</p>
                  <p className="text-neutral-300">8:00hs a 14:30hs</p>
                </div>
              </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zona de Cobertura</h3>
                <p className="text-neutral-300 text-pretty">CABA y Área Metropolitana de Buenos Aires (AMBA)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <p className="text-neutral-300">+54 9 11 2345-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-neutral-300">info@mflogistica.com.ar</p>
              </div>
            </div>
            
          </div>

          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">Empezá a trabajar con nosotros</h3>
            <p className="text-neutral-300 mb-8 text-pretty leading-relaxed">
              Más de 8 años de experiencia nos respaldan. Somos especialistas en distribución para restaurantes de
              cocina oriental en Buenos Aires.
            </p>
            <p className="text-neutral-300 mb-8 text-pretty leading-relaxed">
              Trato directo, entregas puntuales y los mejores precios mayoristas del mercado.
            </p>
            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-neutral-700 text-center">
          <p className="text-neutral-400">© 2026 MF Logística. Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  )
}
