"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/5491123456789", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsApp}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-2xl bg-[#25D366] hover:bg-[#20BA59] text-white p-0"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  )
}
