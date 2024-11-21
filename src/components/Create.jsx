// Importa la librería React
import React from "react";
// Importa el hook useState de React
import { useState } from "react";

// Define un componente funcional llamado Oferta
function Oferta() {
    // Declara un estado llamado nombre y una función para actualizarlo llamada setNombre, inicializado como una cadena vacía
    const [nombre, setNombre] = useState('');
    // Declara un estado llamado edad y una función para actualizarlo llamada setEdad, inicializado como una cadena vacía
    const [edad, setEdad] = useState('');
    // Declara un estado llamado genero y una función para actualizarlo llamada setGenero, inicializado como una cadena vacía
    const [genero, setGenero] = useState('');
    
    // Define una función llamada handleClick que previene el comportamiento por defecto del evento
    const handleClick = (event) => {
        event.preventDefault();
    };
    // Retorna el JSX que define la estructura del componente
    return (
        <>
            {/* Contenedor principal */}
            <div>
                {/* Título de la sección */}
                <h1>Añadir un animal en adopcion</h1>
                {/* Formulario con un manejador de envío */}
                <form onSubmit={handleClick}>
                    {/* Etiqueta y campo de entrada para el nombre */}
                    <label>Nombre: </label>
                    <input type="text" onChange={(event) => setNombre(event.target.value)} />
                    <br />
                    {/* Etiqueta y campo de entrada para la edad */}
                    <label>Edad: </label>
                    <input type="text" onChange={(event) => setEdad(event.target.value)} />
                    <br />
                    {/* Etiqueta y campo de selección para el género */}
                    <label>Genero</label>
                    <select onChange={(event) => setGenero(event.target.value)}>
                        <option>Macho</option>
                        <option>Hembra</option>
                    </select>
                    <br />
                    {/* Botón para enviar el formulario */}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    );
}

// Exporta el componente Oferta para que pueda ser utilizado en otros archivos
export default Oferta;