import logoSrc from "../assets/logo.svg";
import cartSrc from "../assets/cart.svg";
import { Link } from "react-router";
import type { User } from "../types";

type Props = {
  cartCount: number;
  user: User | null;
  logoutUser: () => void;
};

export function Header({ cartCount, user, logoutUser }: Props) {
  return (
    <header className="border-b border-neutral-300 sticky top-0 bg-white z-10">
      <nav className="bg-black py-2.5" aria-label="Menú de autenticación">
        <div className="px-4 max-w-7xl mx-auto md:px-8">
          <div className="space-x-4 text-white text-right text-sm font-medium">
            {!user ? (
              <>
                <Link to="/login">Iniciar sesión</Link>
                <Link to="/signup">Crear una cuenta</Link>
              </>
            ) : (
              <>
                <span>{user.username}</span>
                <button onClick={() => logoutUser()}>Logout</button>
              </>
            )}
          </div>
        </div>
      </nav>
      <nav className="py-1 bg-white" aria-label="Menú principal">
        <div className="px-4 max-w-7xl mx-auto md:px-8 flex justify-between items-center">
          <Link to="/">
            <h1 className="sr-only">Tech Store - Tu tienda de confianza</h1>
            <img src={logoSrc} alt="Ir al inicio" />
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/cart" className="p-2 relative">
              <img src={cartSrc} alt="Ir al carrito" />
              {cartCount > 0 && (
                <span className="absolute text-xs/none w-5 h-5 grid place-items-center bg-[#5B5BD6] text-white rounded-full -bottom-1 -right-1">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
