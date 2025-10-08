export function Footer() {
  return (
    <footer className="border-t border-neutral-300">
      <div className="px-4 max-w-7xl mx-auto md:px-8">
        <div className="py-8 flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-wrap gap-x-4 gap-y-8 grow">
            <nav className="text-sm basis-40 grow">
              <h2 className="font-medium mb-6">Tienda</h2>
              <div className="text-neutral-500 flex flex-col gap-6 items-start">
                <a href="#">Polos</a>
                <a href="#">Tazas</a>
                <a href="#">Stickers</a>
              </div>
            </nav>
            <nav className="text-sm basis-40 grow">
              <h2 className="font-medium mb-6">Compañía</h2>
              <div className="text-neutral-500 flex flex-col gap-6 items-start">
                <a href="#">Quienes somos</a>
                <a href="#">Términos y condiciones</a>
                <a href="#">Privacidad</a>
              </div>
            </nav>
            <nav className="text-sm basis-40 grow">
              <h2 className="font-medium mb-6">Conecta</h2>
              <div className="text-neutral-500 flex flex-col gap-6 items-start">
                <a href="#">Contáctanos</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
            </nav>
          </div>
          <div className="text-sm max-w-md lg:basis-96">
            <h2 className="font-medium mb-6">Suscríbete a nuestro boletín</h2>
            <p className="text-neutral-500 mb-2">
              Recibe las últimas ofertas y descuentos en tu correo semanalmente.
            </p>
            <form action="/" className="flex gap-2">
              <label htmlFor="email" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email"
                className="w-full border-neutral-300 border rounded-xl h-10 px-3"
                name="email"
                type="email"
                aria-label="Correo electrónico"
                autoComplete="email"
                required
              />
              <button className="text-sm font-medium text-neutral-500 bg-neutral-100 py-2.5 px-3.5 rounded-lg">
                Suscribirse
              </button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t border-neutral-300 text-center">
          <small className="text-sm text-neutral-500">
            Todos los derechos reservados © Tech Store
          </small>
        </div>
      </div>
    </footer>
  );
}
