import { useStore } from "@nanostores/preact";
import { useState } from 'preact/hooks'
import { cartItems, cartPrice, isCartOpen } from "../../cart";
import ProductCart from "./product";
import { createCart } from "../../services/lojinha/cart";

export default function CartFlyOut() {
  const $isCartOpen = useStore(isCartOpen)
  const $cartItems = useStore(cartItems)
  const $cartPrice = useStore(cartPrice)

  const [loading, setLoading] = useState(false);

  const handleCreateCart = async () => {
    setLoading(true);

    const products = Object.values($cartItems).map(product => ({
      id: product?.id as string,
      quantity: product?.quantity as number,
    }))

    try {
      await createCart({ products })
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }

  }

  if (!$isCartOpen) {
    return null
  }

  const products = Object.values($cartItems);

  return (
    <aside class="w-full md:max-w-sm bg-white fixed right-0 top-0 shadow-lg h-screen animate-in slide-in-from-right-6">
      <header class="py-10 px-4 flex justify-between items-center">
        <h2 class="font-semibold text-2xl text-gray-700 font-mono">Carrinho</h2>
        <button onClick={() => isCartOpen.set(false)} class="fill-gray-600 hover:bg-gray-50 p-1 rounded-md">
          <img src="assets/icons/close.svg" role="presentation" class="w-6 h-6" />
        </button>
      </header>

      <section class="px-4 h-[calc(100vh-212px)] overflow-y-auto">
        {!products.length ? (
          <p class="w-full text-xs text-gray-500 font-mono">Carrinho Vazio!</p>
        ) : null}

        {products.map(product => (
          // @ts-expect-error product
          <ProductCart product={{...product, image: `assets/images/${product?.id}.jpg` }} />
        ))}
      </section>

      <section class="py-2 px-4 flex items-end flex-col">
        <h4 class="font-mono text-xs text-gray-500">Valor Total</h4>
        <h3 class="font-mono text-xl text-gray-700 font-semibold">{$cartPrice}</h3>
      </section>

      <footer>
        <button
          disabled={products.length <= 0}
          onClick={handleCreateCart}
          class={`w-full py-2 bg-gray-800 text-white font-mono hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed ${loading ? 'opacity-20' : ''}`}
        >
          {loading ? 'Criando...' : 'Salvar Carrinho'}
        </button>
      </footer>
    </aside>
  )
}

