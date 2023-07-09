import { atom, computed, map } from 'nanostores'
import type { Product } from './services/lojinha/types';
import { intl } from './helpers/currency';

export const isCartOpen = atom(false);

export type CartProduct = Pick<Product, 'quantity' | 'id' | 'name' | 'description' | 'price'>
export type CartItem = CartProduct | undefined

export const cartItems = map<Record<string, CartItem>>({})

export const quantity = computed(cartItems, items => {
  return Object.keys(items).length
})

export const cartPrice = computed(cartItems, items => {
  const products = Object.values(items);

  const value = products.reduce((price, product) => {
    if (product?.price) {
      price += product.price * product.quantity
    }

    return price
  }, 0)

  return intl.format(value / 100);
})

export function addCartItem(product: CartProduct) {
  const exists = cartItems.get()[product.id]

  if (exists) {
    cartItems.setKey(product.id, {
      ...exists,
      quantity: exists.quantity + 1
    })

    return
  }

  cartItems.setKey(product.id, { ...product, quantity: 1 })
}

export function increase(product: CartProduct) {
  cartItems.setKey(product.id, {
    ...product,
    quantity: product.quantity + 1
  })
}

export function decrease(product: CartProduct) {
  if ((product.quantity - 1) < 1) {
    remove(product.id)
    return
  }

  cartItems.setKey(product.id, {
    ...product,
    quantity: product.quantity - 1
  })
}

export function remove(id: string) {
  cartItems.setKey(id, undefined);
}
