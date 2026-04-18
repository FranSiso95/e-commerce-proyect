import { useState } from "react";
import { productos } from "../data/productos";
import ProductCard from "./ProductCard";

function ProductList({ agregarAlCarrito, busqueda, modo = "full" }) {
  const productosFiltrados = productos.filter((prod) =>
    prod.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [cantidad, setCantidad] = useState(1);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((prod) => (
            <ProductCard
              key={prod.id}
              producto={prod}
              agregarAlCarrito={agregarAlCarrito}
              onClick={() => {
                if (modo === "full") {
                  setProductoSeleccionado(prod);
                  setCantidad(1);
                }
              }}
            />
          ))
        ) : (
          <p>No se encontraron productos</p>
        )}
      </div>

      {productoSeleccionado && (
        <>
          {/* Fondo */}
          <div
            onClick={() => setProductoSeleccionado(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          ></div>

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-gray-900 text-white p-6 rounded-2xl w-80 relative animate-modal">

              <button
                onClick={() => setProductoSeleccionado(null)}
                className="absolute top-2 right-2"
              >
                ✖
              </button>

              <img
                src={productoSeleccionado.imagen}
                className="w-full h-40 object-cover rounded"
              />

              <h2 className="text-xl font-bold mt-4">
                {productoSeleccionado.nombre}
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                {productoSeleccionado.descripcion}
              </p>

              <p className="text-red-500 text-lg mt-2">
                ${productoSeleccionado.precio}
              </p>

              {/* cantidad */}
              <div className="flex items-center justify-center gap-6 mt-4">

                <button
                  onClick={() => setCantidad((prev) => Math.max(1, prev - 1))}
                  className="bg-red-600 hover:bg-red-700 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  -
                </button>

                <span className="text-xl font-bold">{cantidad}</span>

                <button
                  onClick={() => setCantidad((prev) => prev + 1)}
                  className="bg-green-600 hover:bg-green-700 w-8 h-8 rounded-full flex items-center justify-center"
                >
                  +
                </button>
              </div>

              {/* agregar al carrito */}
              <button
                onClick={() => {
                  agregarAlCarrito(productoSeleccionado, cantidad);
                  setCantidad(1);
                  setProductoSeleccionado(null);
                }}
                className="bg-green-600 w-full py-2 mt-4 rounded"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductList;