import { productos } from "../data/productos";

function Navbar({ busqueda, setBusqueda, setCarritoAbierto }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-white">Vassanella</h1>

      <div className="flex gap-6">
        <a href="/" className="hover:text-red-400">Inicio</a>
        <a href="/productos" className="hover:text-red-400">Productos</a>
        <a href="/nosotros" className="hover:text-red-400">Nosotros</a>
        <a href="/contacto" className="hover:text-red-400">Contacto</a>
      </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Buscar producto..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="bg-white text-black px-3 py-1 rounded"
            />

          {busqueda && (
            <div className="absolute bg-white text-black mt-1 rounded shadow w-60 z-50">
              {productos
                .filter((p) =>
                  p.nombre.toLowerCase().includes(busqueda.toLowerCase())
                )
                .slice(0, 5)
                .map((p) => (
                  <div
                    key={p.id}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {p.nombre}
                  </div>
                ))}
            </div>
          )}
        </div>

      <button onClick={() => setCarritoAbierto(true)}>
        🛒
      </button>
    </nav>
  );
}

export default Navbar;