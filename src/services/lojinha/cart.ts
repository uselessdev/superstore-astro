import { addCartItem } from "../../cart"
import { request } from "./request"
import type { Product, Products } from "./types"

type CartPayload = {
  products: Array<{ id: string, quantity: number }>
}

type CartResponse = {
  data: {
    id: string
    price: number
    products: Products
  }
}

export const createCart = async (cart: CartPayload) => {
  const result = await request({ path: `carts`, method: 'POST', body: JSON.stringify(cart) }) as CartResponse
  localStorage.setItem('book-store-carts', JSON.stringify(result.data.id));
}

type CartResponseProducts = {
  id: string
  products: Array<{ product: Product }>
}

export const getCart = async () => {
  const id = localStorage.getItem('book-store-carts');

  if (id) {
    const cartId = JSON.parse(id)

    const cart = await request({ path: `carts?cart=${cartId}` }) as CartResponseProducts;

    cart.products.forEach(({ product }) => addCartItem(product))
  }
}
