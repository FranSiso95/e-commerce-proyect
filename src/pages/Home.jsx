import Hero from "../components/Hero";
import ProductList from "../components/ProductList";

function Home({ agregarAlCarrito, busqueda }) {
  return (
    <>
      <Hero />
      <ProductList 
        agregarAlCarrito={agregarAlCarrito} 
        busqueda={busqueda}
      />
    </>
  );
}

export default Home;