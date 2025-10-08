import { useParams } from "react-router";

export function OrderConfirmation() {
  const { orderId } = useParams();

  return (
    <main className="py-16">
      <div className="px-4 max-w-7xl mx-auto md:px-8">
        <p className="font-semibold text-[#5B5BD6] mb-2">
          ¡Muchas gracias por tu compra!
        </p>
        <h2 className="text-4xl font-bold mb-2">Tu orden ha sido confirmada</h2>
        <p className="text-neutral-500 mb-12">
          Nos comunicaremos contigo para realizar el envío
        </p>
        <p className="text-sm font-medium mb-2">Código de orden</p>
        <p className="text-sm font-medium text-[#5B5BD6]">{orderId}</p>
      </div>
    </main>
  );
}
