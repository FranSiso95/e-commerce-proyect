function ProductCard({ producto, agregarAlCarrito, modo = "full" }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition">

      <img
        src={producto.imagen}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold">{producto.nombre}</h3>

        <p className="text-sm text-gray-300 mt-1">
          {producto.descripcion}
        </p>

        {/* SOLO EN PRODUCTOS */}
        {modo === "full" && (
          <>
            <p className="mt-2 font-semibold text-red-400">
              ${producto.precio}
            </p>

            <button
              onClick={() => agregarAlCarrito(producto)}
              className="mt-3 w-full bg-red-600 hover:bg-red-700 py-2 rounded"
            >
              Agregar al carrito
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;