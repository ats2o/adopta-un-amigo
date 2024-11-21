import React from "react";
import { useState } from "react";

function  CreateOffer () {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')

    const handleClick = (event) => {
        event.preventDefault()
        
    }

    return (
        <>
        <div>
            <h1>Añadir un animal en adopcion</h1>
            <form onSubmit={handleClick}>
                <label>Nombre: </label>
                <input type="text"  onChange={(event) => setName(event.target.value)}/>
                <br />
                <label>Edad: </label>
                <input type="text"  onChange={(event) => setAge(event.target.value)}/>
                <br />
                <label>Genero</label>
                <select onChange={(event) => setGender(event.target.value)}>
                    <option>Macho</option>
                    <option>Hembra</option>
                </select>
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
        </>
    )
}

export default CreateOffer