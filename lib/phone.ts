export function onlyDigits(phone: string): string {
  return phone.replace(/\D/g, "")
}

/** Número en formato wa.me (549 + dígitos, Argentina/celular). */
export function toWhatsappNumber(phone: string): string {
  return `549${onlyDigits(phone)}`
}

/** Número en formato tel: (+54 + dígitos). */
export function toTelHref(phone: string): string {
  return `+54${onlyDigits(phone)}`
}

export function buildWhatsappLink(
  phone: string,
  message: string
): string {
  return `https://wa.me/${toWhatsappNumber(phone)}?text=${encodeURIComponent(message)}`
}
