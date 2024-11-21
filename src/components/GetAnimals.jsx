// Importa los hooks useState, useEffect y useMemo de React
import { useState, useEffect, useMemo } from "react";
// Importa el archivo de estilos CSS
import "../styles/Cuadricula.css";
// Importa el componente Oferta desde el archivo Create
import Oferta from "./Create";
// Define el componente funcional SeleccionarAnimal
function SeleccionarAnimal() {
  // Define el estado web con un objeto que tiene una propiedad data como un array vacío
  const [web, setWeb] = useState({ data: [] });
  // Define el estado type como una cadena vacía
  const [type, setType] = useState("");
  // Define el estado age como una cadena vacía
  const [age, setAge] = useState("");
  // Define el estado gender como una cadena vacía
  const [gender, setGender] = useState("");
  // Define el estado currentWeb con un objeto que tiene una propiedad data como un array vacío
  const [currentWeb, setCurrentWeb] = useState({ data: [] });
  // Define el estado showForm como falso
  const [showForm, setShowForm] = useState(false);
  // Usa useEffect para realizar una petición fetch cuando el componente se monta
  useEffect(() => {
    // Realiza una petición fetch a la URL especificada
    fetch("https://huachitos.cl/api/animales")
      // Convierte la respuesta a JSON
      .then((response) => response.json())
      // Actualiza el estado web con los datos obtenidos
      .then((data) => {
        setWeb(data);
      })
      // Maneja cualquier error que ocurra durante la petición
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []); // El array vacío como segundo argumento asegura que esto solo se ejecute una vez
  // Crea un array de tipos de animales únicos a partir de los datos obtenidos
  const tiposAnimales = [...new Set(web.data.map((animal) => animal.tipo))];
  // Crea un array de edades de animales únicas a partir de los datos obtenidos
  const edadAnimales = [...new Set(web.data.map((animal) => animal.edad))];
  // Crea un array de géneros de animales únicos a partir de los datos obtenidos
  const generoanimales = [...new Set(web.data.map((animal) => animal.genero))];
  // Filtra los animales según los criterios seleccionados (tipo, edad, género)
  const filtroAnimales = web.data.filter((animal) => {
    return (
      (!type || (animal.tipo.includes(type))) &&
      (!age || (animal.edad.includes(age))) &&
      (!gender || (animal.genero.includes(gender)))
    );
  });
  // Maneja el evento de clic para mostrar el formulario
  const handleClick = () => {
    setShowForm(true);
  };
  // Mapea los animales filtrados a elementos de lista
  const ListAnimals = filtroAnimales.map((animal, index) => (
    // Cada animal se representa como un elemento de lista con una clase "tarjeta"
    <li className="tarjeta" key={index}>
      {/* La imagen del animal se muestra en la tarjeta */}
      <div className="card-content">
        <div className="card-header">{animal.nombre}</div>
        <div className="card-section">
        <img src={animal.imagen} />
          <p>Animal: {animal.tipo}</p>
          <p>Edad: {animal.edad}</p>
          <p>Estado: {animal.estado}</p>
          <p>Sexo: {animal.genero}</p>
          <p dangerouslySetInnerHTML={{ __html: animal.desc_fisica }}></p>
          <p dangerouslySetInnerHTML={{ __html: animal.desc_personalidad }}></p>
          <p dangerouslySetInnerHTML={{ __html: animal.desc_adicional }}></p>
          <p>
            Esterilizado:
            {animal.esterilizado ? "Si" : "No"}
          </p>
          <p>Vacunas: {animal.vacunas ? "Si" : "No"}</p>
        </div>
        <div className="footer">
          <a href={animal.url}>Más detalles</a>
        </div>
      </div>
    </li>
  ));
  // Renderiza el componente
  return (
    <div className="container">
      {showForm ? (
        // Si showForm es verdadero, muestra el componente Oferta
        <Oferta />
      ) : (
        <>
          <h1>Animales en adopción</h1>
          <button className="crear-oferta" onClick={handleClick}>Crea una oferta</button>
          <div className="marcadores">
            <label>Tipo de animal: </label>
            <select onChange={(e) => setType(e.target.value)}>
              <option value="">Todos</option>
              {tiposAnimales.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <label>Edad: </label>
            <select onChange={(e) => setAge(e.target.value)}>
              <option value="">Todos</option>
              {edadAnimales.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
            <label>Genero: </label>
            <select onChange={(e) => setGender(e.target.value)}>
              <option value="">Todos</option>
              {generoanimales.map((item, index) => (
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="galeria">{ListAnimals}</div>
        </>
      )}
    </div>
  );
}

// Exporta el componente SeleccionarAnimal como el valor por defecto
export default SeleccionarAnimal;