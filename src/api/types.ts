export type Product = {
  id: string
  store: string
  name: string
  slug: string
  description: string
  price: number
  originalPrice: number
  quantity: number
  sku: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export type Products = {
  data: Product[]
  total: number
}

export type Collection = {
  id: string
  store: string
  name: string
  slug: string
  description: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

export type Collections = {
  data: Collection[]
  total: number
}
