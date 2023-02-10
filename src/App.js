import React from 'react';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import WeatherPanel from './components/Tiempo/WeatherPanel';
import { FooterContainer } from './components/Footer/footer';
import Products from './components/Carrito/Products';
import Navbar from './components/Navbar/Navbar';
import Viveros from './components/Viveros/Viveros';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="socorro">
        <h2 className= "about-us">
          <strong>¡Te damos la Bienvenida a Ogilvy!</strong></h2>
          <br />
          <img className="logo" src="./LOGO.svg" alt="Ogilvy" />
          <br />
          <br />
          <br />
          <p>En nuestro vivero online el verde nos hace felices, es sinónimo de bienestar y salud, y cuando hablamos de plantas todavía más porque limpian, purifican el aire, absorben los malos olores, mejoran el estado de ánimo y ayudan a dormir mejor. ¡Ródeate de verde!</p>
      </div>
      <Viveros />
      <WeatherPanel />
      <Products />
      <Formulario />
      <FooterContainer />
    </div>
  );
}

export default App;
