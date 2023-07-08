import type { Product } from "../api/types";
import { addCartItem } from "../cart";

export default function ButtonAddToCart({ product }: { product: Product }) {
  return (
    <button
      onClick={() => addCartItem(product)}
      class="w-full bg-gray-700 text-white text-xs rounded-md py-2 px-4 hover:bg-gray-600 font-semibold"
    >
      comprar
    </button>
  )
}
