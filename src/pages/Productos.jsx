import ProductList from "../components/ProductList";

function Productos({ agregarAlCarrito, busqueda }) {
  return (
    <ProductList 
      agregarAlCarrito={agregarAlCarrito} 
      busqueda={busqueda}
    />
  );
}

export default Productos;