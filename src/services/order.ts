import type { Cart } from "../types";
import { baseUrl } from "./config";

export async function createOrder() {
  const token = window.localStorage.getItem("token");
  const cartJson = window.localStorage.getItem("cart");
  if (!token || !cartJson) return null;

  const cart = JSON.parse(cartJson) as Cart;

  const body = {
    detalles: cart.map((item) => ({
      productoId: item.product.id,
      cantidad: item.quantity,
    })),
  };

  const response = await fetch(`${baseUrl}/ordenes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    return null;
  }

  const order = await response.json();
  const orderId = order.id as number;
  return orderId;
}
