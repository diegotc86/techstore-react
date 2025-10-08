import type { Product } from "../types";
import { ProductControl } from "./product-control";

type Props = {
  product: Product;
  quantity: number;
  incrementCart: (product: Product) => void;
  decrementCart: (product: Product) => void;
};

export function ProductCard({
  product,
  quantity,
  incrementCart,
  decrementCart,
}: Props) {
  return (
    <article className="border border-neutral-300 rounded-xl overflow-clip relative">
      {product.stock <= 0 && (
        <span className="absolute top-0 right-0 px-2 py-1 text-neutral-500 text-sm font-medium bg-neutral-200 border-l border-b border-neutral-300 rounded-es-xl">
          Agotado
        </span>
      )}
      <div className="aspect-[3/4] bg-neutral-50 flex justify-center items-center">
        <img
          src={product.imgSrc}
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-4 space-y-2">
        <p className="font-medium text-sm">{product.title}</p>
        <p className="font-medium">${product.price}</p>

        {product.stock > 0 && (
          <ProductControl
            product={product}
            incrementCart={incrementCart}
            decrementCart={decrementCart}
            quantity={quantity}
          />
        )}
      </div>
    </article>
  );
}
