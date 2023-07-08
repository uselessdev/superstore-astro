import { decrease, increase, remove } from "../cart";
import { intl } from "../helpers/currency";

type Props = {
  product: {
    image: string;
    id: string
    name: string;
    description: string;
    price: number;
    quantity: number;
  };
}

export default function ProductCart({ product }: Props) {
  return (
    <div class="py-2 flex gap-2">
      <img
        alt={product.name}
        src={product.image}
        class="aspect-square object-cover object-center w-20 h-20 rounded-md"
      />

      <div class="flex flex-col gap-2 w-full">
        <header>
          <h3 class="font-mono text-lg text-gray-600">{product.name}</h3>
          <div class="text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: product.description }} />
        </header>

        <div class="flex gap-2 items-center justify-between w-full">
          <div class="flex gap-2">
            <div
              class="flex focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-700 rounded-md"
            >
              <button
                onClick={() => decrease(product)}
                class="rounded-s-md w-6 h-6 grid place-items-center bg-gray-50 hover:bg-gray-100"
              >
                <img class="w-4 h-4" src="assets/icons/minus.svg" />
              </button>

              <input
                class="h-6 w-10 text-center bg-gray-50 text-sm text-gray-500 outline-none"
                value={product.quantity}
              />

              <button
                onClick={() => increase(product)}
                class="rounded-e-md w-6 h-6 grid place-items-center bg-gray-50 hover:bg-gray-100"
              >
                <img class="w-4 h-4" src="assets/icons/plus.svg" />
              </button>
            </div>

            <button onClick={() => remove(product.id)} class="w-8 h-6 grid place-items-center rounded-md hover:bg-red-50">
              <img class="w-4 h-4" src="assets/icons/trash.svg" />
            </button>
          </div>

          <section class="flex flex-col gap-1 items-end">
            <strong class="font-mono text-sm text-orange-600">
              {intl.format((product.price * product.quantity) / 100)}
            </strong>
          </section>
        </div>
      </div>
    </div>
  )
}
