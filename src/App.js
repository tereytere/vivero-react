import React from 'react'
import './App.css';
import Formulario from './components/Formulario';
import Estrellas from './components/Estrellas';
import Cards from './components/Cards';
{/* import NOMBREdelCOMPONENTE from './components/UBICACIONdelCOMPONENTE'; */}

function App() {
  return (
    <div className="App">
      <h1>Hola chicas</h1>
      {/* aquí declaramos nuestro COMPONENTE propio */}
      {/* <Componente></Componente> */}
      <Formulario />
      <Cards />
    </div>
  );
}

export default App;
