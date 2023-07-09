import { useStore } from '@nanostores/preact'
import { useEffect } from 'preact/hooks'
import { isCartOpen, quantity } from '../../cart'
import { getCart } from '../../services/lojinha/cart';

export default function CartButton() {
  const $isCartOpen = useStore(isCartOpen);
  const $quantity = useStore(quantity);

  useEffect(() => {
    (async () => {
      await getCart();
    })()
  }, [])

  return (
    <button className="relative" onClick={() => isCartOpen.set(!$isCartOpen)}>
      {$quantity > 0 ? (
        <span className="bg-red-400 text-xs font-semibold font-mono text-white rounded-full w-6 h-6 grid place-items-center absolute top-0 right-0 translate-x-3 -translate-y-3">{$quantity}</span>
      ) : null}
      <img src="assets/icons/cart.svg" class="w-6 h-6" />
    </button>
  )
}
