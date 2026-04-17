function ProductCard({ producto, agregarAlCarrito, onClick }) {
  return (
    <div 
    onClick={onClick}
    className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 animate-fadeUp">
      
      {/* Imagen */}
      <div className="relative">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-44 object-cover"
        />

        {/* Badge */}
        {producto.etiqueta && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
            {producto.etiqueta}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{producto.nombre}</h3>

        <p className="text-red-500 font-bold text-lg mt-1">
          ${producto.precio}
        </p>

        <button
          onClick={(e) => {e.stopPropagation(); agregarAlCarrito(producto);}}
          className="bg-green-600 hover:bg-green-700 text-white w-full mt-4 py-2 rounded-lg transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;