import { useNavigate } from "react-router";
import { useEffect } from "react";
import type { Cart, Product, User } from "./types";
import { CartItem } from "./components/cart-item";
import { createOrder } from "./services/order";

type Props = {
  cart: Cart;
  incrementCart: (product: Product) => void;
  decrementCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
  clearCart: () => void;
  user: User | null;
  loading: boolean;
};

export function Cart({
  cart,
  incrementCart,
  decrementCart,
  deleteFromCart,
  clearCart,
  user,
  loading,
}: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate, loading]);

  const total = cart.reduce(
    (acc, item) => acc + item.quantity * item.product.price,
    0
  );

  function handleSubmit() {
    if (!user) {
      navigate("/login");
      return;
    }
    createOrder().then((orderId) => {
      if (!orderId) {
        alert("Error creating order. Please try again.");
        return;
      }
      clearCart();
      navigate(`/orden/${orderId}`);
    });
  }

  if (!user) {
    return null;
  }

  return (
    <main className="py-16">
      <div className="px-4 max-w-7xl mx-auto md:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Carrito de Compras
        </h2>

        <div className="border border-neutral-100 rounded-xl divide-neutral-100 divide-y max-w-xl mx-auto">
          {cart.map((item) => (
            <CartItem
              key={item.product.id}
              item={item}
              incrementCart={incrementCart}
              decrementCart={decrementCart}
              deleteFromCart={deleteFromCart}
            />
          ))}
          <div className="p-6 flex justify-between items-center font-medium">
            <p>Total</p>
            <p>${total}</p>
          </div>
          <div className="p-6">
            <button
              className="inline-block px-8 py-3 bg-[#5B5BD6] rounded-lg font-medium w-full text-white"
              onClick={handleSubmit}
            >
              Confirmar Orden
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
