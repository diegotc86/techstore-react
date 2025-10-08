import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Home } from "./home";
import { Products } from "./products";
import { Route, Routes, useNavigate } from "react-router";
import type { Cart, Product, User } from "./types";
import { useEffect, useState } from "react";
import { getUser, login, signup } from "./services/auth";
import { Login } from "./login";
import { SignUp } from "./signup";
import { Cart as CartPage } from "./cart";
import { OrderConfirmation } from "./order-confirmation";

export function App() {
  const [cart, setCart] = useState<Cart>([]);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Opcion ideal, hacerlo con `reduce`
  let cartCount = 0;
  for (const item of cart) {
    cartCount += item.quantity;
  }

  useEffect(() => {
    const cartJson = localStorage.getItem("cart");
    if (!cartJson) {
      localStorage.setItem("cart", JSON.stringify([]));
    } else {
      const newCart = JSON.parse(cartJson);
      setCart(newCart);
    }
  }, []);

  function incrementCart(product: Product) {
    const cartItem = cart.find((item) => item.product.id === product.id);

    let newCart: Cart;
    if (cartItem) {
      newCart = cart.map((item) => {
        if (item === cartItem) {
          item.quantity += 1;
        }
        return item;
      });
    } else {
      newCart = [...cart, { product, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function decrementCart(product: Product) {
    const newCart: Cart = [];

    for (const item of cart) {
      if (item.product.id === product.id) {
        if (item.quantity > 1) {
          item.quantity -= 1;
          newCart.push(item);
        }
      } else {
        newCart.push(item);
      }
    }

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function deleteFromCart(product: Product) {
    const newCart = cart.filter((item) => item.product.id !== product.id);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  }

  function clearCart() {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  }

  useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      if (!token || user) {
        setLoading(false);
        return;
      }

      setLoading(true);
      const newUser = await getUser(token);
      if (!newUser) {
        localStorage.removeItem("token");
      } else {
        setUser(newUser);
      }
      setLoading(false);
    }

    fetchUser();
  }, [user]);

  async function loginUser(username: string, password: string) {
    const data = await login(username, password);

    if (data) {
      const { token, ...newUser } = data;
      setUser(newUser);
      localStorage.setItem("token", token);
    } else {
      return "Credenciales Inválidas";
    }
  }

  async function signupUser(username: string, email: string, password: string) {
    const data = await signup(username, email, password);

    if (typeof data === "string") {
      return data;
    } else {
      const { token, ...newUser } = data;
      setUser(newUser);
      localStorage.setItem("token", token);
    }
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <Header cartCount={cartCount} user={user} logoutUser={logoutUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              cart={cart}
              incrementCart={incrementCart}
              decrementCart={decrementCart}
              user={user}
              loading={loading}
            />
          }
        />
        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<SignUp signupUser={signupUser} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              incrementCart={incrementCart}
              decrementCart={decrementCart}
              deleteFromCart={deleteFromCart}
              clearCart={clearCart}
              user={user}
              cart={cart}
              loading={loading}
            />
          }
        />
        <Route path="orden/:orderId" element={<OrderConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}
