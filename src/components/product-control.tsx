import minuSrc from "../assets/minus.svg";
import plusSrc from "../assets/plus.svg";
import type { Product } from "../types";

type Props = {
  product: Product;
  quantity: number;
  incrementCart: (product: Product) => void;
  decrementCart: (product: Product) => void;
};

export function ProductControl({
  product,
  quantity,
  incrementCart,
  decrementCart,
}: Props) {
  return (
    <div className="flex justify-end gap-4">
      <button
        className="p-1 border border-neutral-300 rounded-md"
        onClick={() => decrementCart(product)}
      >
        <img src={minuSrc} alt="" />
      </button>
      <input
        type="text"
        className="border border-neutral-300 w-8 h-8 text-center rounded-md"
        value={quantity}
        readOnly
      />
      <button
        className="p-1 border border-neutral-300 rounded-md"
        onClick={() => incrementCart(product)}
      >
        <img src={plusSrc} alt="" />
      </button>
    </div>
  );
}
