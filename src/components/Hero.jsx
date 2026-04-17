function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white overflow-hidden">

      {/* Imagen de fondo */}
      <img
        src="/img/pastas.jpg"
        className="absolute w-full h-full object-cover scale-110 animate-zoomOut"
      />

      {/* Overlay */}
      <div className="absolute bg-black/60 w-full h-full"></div>

      {/* Contenido */}
      <div className="relative text-center animate-fadeIn max-w-2xl px-6">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          El sabor de la pasta casera de toda la vida
        </h2>

        <p className="mt-4 text-gray-200 text-sm md:text-base leading-relaxed">
          Ravioles, ñoquis y tallarines frescos elaborados todos los días con recetas tradicionales,
          ingredientes de calidad y el sabor que te hace sentir en casa.
        </p>

        <p className="mt-3 text-gray-300 text-sm">
          Hecho a mano · Fresco del día · Estilo de barrio 🍝
        </p>

        {/* Botón CTA */}
        <a
          href="/productos"
          className="inline-block mt-6 bg-red-600 hover:bg-red-700 transition px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Ver productos
        </a>

      </div>
    </section>
  );
}

export default Hero;