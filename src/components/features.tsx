import bulbSrc from "../assets/bulb.svg";
import ribbonSrc from "../assets/ribbon.svg";
import shirtSrc from "../assets/shirt.svg";
import truckSrc from "../assets/truck.svg";

export function Features() {
  return (
    <section className="py-12 bg-neutral-50">
      <div className="px-4 max-w-7xl mx-auto md:px-8 text-center">
        <h2 className="text-2xl font-bold mb-12">Nuestra Promesa de Calidad</h2>
        <ul className="flex flex-col gap-8 md:flex-row">
          <li className="text-sm">
            <img src={truckSrc} alt="" className="inline-block mb-6" />
            <p className="font-medium mb-2">Entrega rápida</p>
            <p className="text-neutral-500">
              Recibe tus productos en tiempo récord, directo a tu puerta, para
              que puedas disfrutar de ellos cuanto antes.
            </p>
          </li>
          <li className="text-sm">
            <img src={shirtSrc} alt="" className="inline-block mb-6" />
            <p className="font-medium mb-2">Satisfacción Garantizada</p>
            <p className="text-neutral-500">
              Tu felicidad es nuestra prioridad. Si no estás 100% satisfecho,
              estamos aquí para ayudarte con cambios o devoluciones.
            </p>
          </li>
          <li className="text-sm">
            <img src={ribbonSrc} alt="" className="inline-block mb-6" />
            <p className="font-medium mb-2">Materiales de Alta Calidad</p>
            <p className="text-neutral-500">
              Nos aseguramos de que todos nuestros productos estén hechos con
              materiales de la más alta calidad.
            </p>
          </li>
          <li className="text-sm">
            <img src={bulbSrc} alt="" className="inline-block mb-6" />
            <p className="font-medium mb-2">Diseños Exclusivos</p>
            <p className="text-neutral-500">
              Cada producto está diseñado pensando en los desarrolladores, con
              estilos únicos que no encontrarás en ningún otro lugar.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
