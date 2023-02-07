import './App.css';
import './components/container/Tiempo.css'
import Formulario from './components/container/Formulario';
import WeatherPanel from './components/container/WeatherPanel';
{/* import NOMBREdelCOMPONENTE from './components/UBICACIONdelCOMPONENTE'; */}

function App() {
  return (
    <div className="App">
      <h1>Hola chicas</h1>
      {/* aquí declaramos nuestro COMPONENTE propio */}
      {/* <Componente></Componente> */}
      <WeatherPanel />
      <Formulario></Formulario>
    </div>
  );
}

export default App;
