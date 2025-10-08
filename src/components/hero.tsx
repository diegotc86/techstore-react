import { Link } from "react-router";

export function Hero() {
  return (
    <section
      className={`bg-[url(/images/hero.jpg)] bg-cover bg-center h-[calc(100vh-88px)] flex items-center bg-blend-overlay bg-neutral-700`}
    >
      <div className="px-4 max-w-7xl mx-auto md:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-bold text-4xl mb-4 md:text-6xl text-balance">
            Nuevos productos disponibles
          </h2>
          <p className="text-xl mb-8 text-balance">
            Un pequeño lote de increíbles productos acaba de llegar. Agrega tus
            favoritos al carrito antes que se agoten.
          </p>
          <Link
            className="inline-block px-8 py-3 bg-[#5B5BD6] rounded-lg font-medium"
            to="/products"
          >
            Compra ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
