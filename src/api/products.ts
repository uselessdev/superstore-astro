import { request } from './request'
import type { Products } from './types'

export const products: Products = await request({ path: `/products` })

export const productsFromCollection = async ({ slug }: { slug?: string }): Promise<Products> => await request({ path: `/products?collection=${slug}` })

export type { Product, Products } from './types'
