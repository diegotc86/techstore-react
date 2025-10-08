import type { CartItem, Product } from "../types";

import trashImg from "../assets/trash.svg";
import { ProductControl } from "./product-control";

type Props = {
  item: CartItem;
  incrementCart: (product: Product) => void;
  decrementCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
};

export function CartItem({
  item,
  incrementCart,
  decrementCart,
  deleteFromCart,
}: Props) {
  return (
    <div className="p-6 flex gap-6">
      <div className="w-32 aspect-[2/3] bg-neutral-50 rounded-xl overflow-hidden">
        <img
          src={item.product.imgSrc}
          alt={item.product.title}
          className="object-contain object-center w-full h-full"
        />
      </div>
      <div className="grow flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h3 className="text-sm">{item.product.title}</h3>
          <button
            className="p-1 border border-neutral-300 rounded-md"
            onClick={() => deleteFromCart(item.product)}
          >
            <img src={trashImg} alt="Remove item" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">
            ${item.quantity * item.product.price}
          </p>
          <ProductControl
            product={item.product}
            quantity={item.quantity}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
          />
        </div>
      </div>
    </div>
  );
}
