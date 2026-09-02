import type {
  Product,
  Category,
} from "@/lib/lista-de-precios-data"

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"

function getToken() {
  if (typeof window === "undefined") return null

  return localStorage.getItem("token")
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getToken()

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : {}),
      ...(options.headers || {}),
    },
  })

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.error || "Error en la API")
  }

  return data
}

export function getProducts() {
  return request<Product[]>("/api/products")
}

export function getCategories() {
  return request<Category[]>("/api/categories")
}

export function createProduct(product: unknown) {
  return request<Product>("/api/products", {
    method: "POST",
    body: JSON.stringify(product),
  })
}

export function updateProduct(
  id: string,
  product: unknown
) {
  return request<Product>(`/api/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
  })
}

export function updateProductStatus(
  id: string,
  status: "publicado" | "oculto"
) {
  return request<Product>(`/api/products/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({
      status,
    }),
  })
}

export function deleteProduct(id: string) {
  return request(`/api/products/${id}`, {
    method: "DELETE",
  })
}

export function createCategory(category: {
  name: string
  description?: string
  status?: "publicado" | "oculto"
}) {
  return request<Category>("/api/categories", {
    method: "POST",
    body: JSON.stringify(category),
  })
}

export function updateCategory(
  id: string,
  category: {
    name: string
    description?: string
    status?: "publicado" | "oculto"
  }
) {
  return request<Category>(`/api/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(category),
  })
}

export function deleteCategory(id: string) {
  return request(`/api/categories/${id}`, {
    method: "DELETE",
  })
}

export async function uploadImage(
  file: File
): Promise<{ url: string }> {
  const token = getToken()

  const formData = new FormData()
  formData.append("image", file)

  const response = await fetch(
    `${API_URL}/api/upload`,
    {
      method: "POST",
      headers: {
        ...(token
          ? { Authorization: `Bearer ${token}` }
          : {}),
      },
      body: formData,
    }
  )

  const data = await response.json()

  if (!response.ok) {
    throw new Error(
      data.error || "No se pudo subir la imagen"
    )
  }

  return data
}

export interface Me {
  id: number
  username: string
  phone: string | null
}

export function getMe() {
  return request<Me>("/api/me")
}

export function updateMyPhone(phone: string) {
  return request<Me>("/api/me", {
    method: "PUT",
    body: JSON.stringify({ phone }),
  })
}

export interface PublicAdmin {
  username: string
  phone: string | null
}

export function getPublicAdmins() {
  return request<{ username: string }[]>(
    "/api/public/admins"
  )
}

export function getPublicAdmin(username: string) {
  return request<PublicAdmin>(
    `/api/public/admins/${encodeURIComponent(username)}`
  )
}

export async function downloadPriceListPdf(
  adminUsername?: string
) {
  const query = adminUsername
    ? `?admin=${encodeURIComponent(adminUsername)}`
    : ""

  const response = await fetch(
    `${API_URL}/api/price-list/pdf${query}`
  )

  if (!response.ok) {
    throw new Error(
      "No se pudo generar el PDF de la lista de precios"
    )
  }

  const blob = await response.blob()
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "lista-de-precios-mf-logistica.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  URL.revokeObjectURL(url)
}

export function login(
  username: string,
  password: string
) {
  return request("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
  })
}