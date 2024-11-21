import { useState, useEffect, useMemo } from "react";
import "../styles/Cuadricula.css";
import CreateOffer from "./Create";

function GetAnimals() {
  const [web, setWeb] = useState({ data: [] });
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [currentWeb, setCurrentWeb] = useState({ data: [] }); // Cuando selecciono 1
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetch("https://huachitos.cl/api/animales")
      .then((response) => response.json())
      .then((data) => {
        setWeb(data);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  const tiposAnimales = [...new Set(web.data.map((animal) => animal.tipo))];
  const edadAnimales = [...new Set(web.data.map((animal) => animal.edad))];
  const generoanimales = [...new Set(web.data.map((animal) => animal.genero))];

  const filtroAnimales = web.data.filter((animal) => {
    return (
      (!type || (animal.tipo.includes(type))) &&
      (!age || (animal.edad.includes(age))) &&
      (!gender || ( animal.genero.includes(gender)))
    )
  });

  const handleClick = () => {
    setShowForm(true); 
  };

  const ListAnimals = filtroAnimales.map((animal, index) => (
    <li className="tarjeta" key={index}>
      <img src={animal.imagen} />
      <div className="card-content">
        <div className="card-header">{animal.nombre}</div>
        <div className="card-section">
          <p>Tipo: {animal.tipo}</p>
          <p>Edad: {animal.edad}</p>
          <p>Estado: {animal.estado}</p>
          <p>Género: {animal.genero}</p>
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

  return (
    <div className="container">
      {showForm ? (
        <CreateOffer />
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

export default GetAnimals;
