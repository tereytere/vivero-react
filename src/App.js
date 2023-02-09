import React from 'react';
import './App.css';
import './components/container/Tiempo.css'
import Products from './components/container/Products';
import './styles-carrito/carritoList.css';
import Formulario from './components/container/Formulario';
import Navbar from './components/container/Navbar';
import WeatherPanel from './components/container/WeatherPanel';
import { FooterContainer } from './containers/footer';
{/* import NOMBREdelCOMPONENTE from './components/UBICACIONdelCOMPONENTE'; */}

function App() {
  return (
    <div className="App">
      {/* <h1>Hola chicas</h1> */}
      {/* aquí declaramos nuestro COMPONENTE propio */}
      {/* <Componente></Componente> */}
      <Navbar></Navbar>
      <WeatherPanel />
      <Products />
      <Formulario></Formulario>
      <FooterContainer />
    </div>
  );
}

export default App;
