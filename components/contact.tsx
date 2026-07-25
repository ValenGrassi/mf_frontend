"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {

  const handleWhatsApp = () => {
    window.open("https://wa.me/5491172667077?text=Hola!%20Vengo%20de%20la%20p%C3%A1gina%20web%20y%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n.%20Gracias!", "_blank")
  }

  const handleMail = () => {
    const subject = encodeURIComponent("Consulta desde la web")
    const body = encodeURIComponent(
      "Hola! Quisiera recibir información sobre sus servicios.\n\nNombre:\nEmpresa:\nTeléfono:"
    )

    window.location.href = `mailto:ventas@mflogistica.com.ar?subject=${subject}&body=${body}`
  }

  return (
    <section className="pt-20 pb-10 bg-neutral-900 text-white" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* INFO */}
          <div className="space-y-8">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Horarios</h3>
                <p className="text-neutral-300">Lunes a Sábados</p>
                <p className="text-neutral-300">8:00hs a 15:30hs</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Zona de Cobertura</h3>
                <p className="text-neutral-300 text-pretty">
                  CABA y Área Metropolitana de Buenos Aires (consultar otras localidades)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Teléfono</h3>
                <a href="tel:+541172667077" className="text-neutral-300">
                  +54 11 7266-7077
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <a
                  href="mailto:ventas@mflogistica.com.ar"
                  className="text-neutral-300"
                >
                  ventas@mflogistica.com.ar
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-neutral-800 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold mb-4">
              Empezá a trabajar con nosotros
            </h3>
            <p className="text-neutral-300 mb-8 text-pretty leading-relaxed">
              Productos de calidad, trato directo, entregas puntuales y los mejores precios mayoristas del mercado.
            </p>

            <Button
              size="lg"
              onClick={handleWhatsApp}
              className="w-full bg-green-700 text-accent-foreground hover:bg-green-700/90 text-lg py-6 cursor-pointer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contactar por WhatsApp
            </Button>
            <Button
              size="lg"
              onClick={handleMail}
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 text-lg py-6 cursor-pointer mt-4"
            >
              <Mail className="mr-2 h-5 w-5" />
              Enviar Email
            </Button>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-neutral-700 text-center">
          <p className="text-neutral-400">
            © 2026 MF Logística · Desarrollado por{" "}
            <a
              href="https://allworks.com.ar"
              target="_blank"
              className="hover:underline"
            >
              All Works Pages
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}