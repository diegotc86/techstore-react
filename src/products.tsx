import { useEffect, useState } from "react";
import { ProductCard } from "./components/product-card";
import { ProductFilter } from "./components/product-filter";
import { getProducts } from "./services/products";
import type { Cart, Product, User } from "./types";
import { useNavigate } from "react-router";

type Props = {
  cart: Cart;
  incrementCart: (product: Product) => void;
  decrementCart: (product: Product) => void;
  user: User | null;
  loading: boolean;
};

export function Products({
  cart,
  incrementCart,
  decrementCart,
  user,
  loading,
}: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
  }, [user, navigate, loading]);

  useEffect(() => {
    async function fetchProducts() {
      const token = localStorage.getItem("token");
      if (!token) return;

      const products = await getProducts(token);
      setProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <main>
      <section className="py-10">
        <div className="px-4 max-w-7xl mx-auto md:px-8 flex flex-col gap-8 md:flex-row">
          <ProductFilter />

          <section className="grid gap-8 grow grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
            {products.map((product) => {
              const cartItem = cart.find(
                (item) => item.product.id === product.id
              );

              const quantity = cartItem ? cartItem.quantity : 0;

              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  quantity={quantity}
                  incrementCart={incrementCart}
                  decrementCart={decrementCart}
                />
              );
            })}
          </section>
        </div>
      </section>
    </main>
  );
}
