import React from 'react'
import './App.css';
import Formulario from './components/container/Formulario'
import Estrellas from './components/container/Estrellas';
{/* import NOMBREdelCOMPONENTE from './components/UBICACIONdelCOMPONENTE'; */}

function App() {
  return (
    <div className="App">
      <h1>Hola chicas</h1>
      {/* aquí declaramos nuestro COMPONENTE propio */}
      {/* <Componente></Componente> */}
      <Formulario />
      <Estrellas />
    </div>
  );
}

export default App;
