// Importa el componente SeleccionarAnimal desde el archivo GetAnimals.jsx
import SeleccionarAnimal from './components/GetAnimals.jsx'
// Importa el archivo de estilos CSS para la aplicación
import './App.css'

// Define el componente principal de la aplicación llamado App
function App() {
  return(
    // Devuelve un contenedor div
    <div>
      // Renderiza el componente SeleccionarAnimal dentro del div
      <SeleccionarAnimal></SeleccionarAnimal>
    </div>
  )
}

// Exporta el componente App como el componente predeterminado del módulo
export default App