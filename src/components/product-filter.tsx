export function ProductFilter() {
  return (
    <form action="#" className="max-w-sm min-w-64 basis-0">
      <fieldset className="mb-6">
        <legend className="mb-6 text-sm font-medium">Precio</legend>
        <div className="flex gap-6">
          <div>
            <label htmlFor="minPrice" className="font-medium text-sm mb-2">
              Min
            </label>
            <input
              id="minPrice"
              type="number"
              className="w-full border-neutral-300 border rounded-xl h-10 px-3"
              name="minPrice"
            />
          </div>
          <div>
            <label htmlFor="maxPrice" className="font-medium text-sm mb-2">
              Max
            </label>
            <input
              id="maxPrice"
              type="number"
              className="w-full border-neutral-300 border rounded-xl h-10 px-3"
              name="maxPrice"
            />
          </div>
        </div>
      </fieldset>
      <button className="font-medium text-neutral-500 bg-neutral-100 py-3 px-8 rounded-lg w-full">
        Filtrar Productos
      </button>
    </form>
  );
}
