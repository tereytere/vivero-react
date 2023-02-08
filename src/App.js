import { useState } from "react";
import './App.css';
import './styles-carrito/carritoList.css';
import { Header } from './components/container/carrito';
import { ProductList } from './components/container/productList';
/* import NOMBREdelCOMPONENTE from './components/UBICACIONdelCOMPONENTE'; */

function App() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

  return (
    <div className="App">
      {/* <h1>Hola chicas</h1> */}
      {/* aquí declaramos nuestro COMPONENTE propio */}
      {/* <Componente></Componente> */}

      <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />
      <ProductList
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        />

    </div>
  );
}

export default App;
