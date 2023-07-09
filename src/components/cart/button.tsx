import type { Product } from "../../services/types";
import { addCartItem } from "../../cart";

export default function ButtonAddToCart({ product }: { product: Product }) {
  return (
    <button
      onClick={() => addCartItem(product)}
      class="w-full bg-gray-700 text-white text-xs rounded-md p-4 hover:bg-gray-600 font-semibold"
    >
      Adicionar ao Carrinho
    </button>
  )
}
