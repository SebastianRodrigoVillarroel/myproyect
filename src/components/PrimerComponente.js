import React, { useState } from 'react';

export const PrimerComponente = () => {

    let web = "victorroblesweb.es";
    const [nombre, setNombre] = useState("Victor");

    let cursos = [
        "Master en JavaScript",
        "Master en PHP",
        "Master en React",
        "Master en CSS"
    ];

    const cambiarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
    }

    return (
        <div>
            <h1>Mi primer componente</h1>
            <p>Este es un texto en mi componente</p>
            <p>Mi nombre es: 
                <strong className={nombre.length >= 4 ? 'verde' : 'rojo'}>
                    {nombre}
                </strong>
            </p>
            <p>Mi web es: {web}</p>
            <input 
                type="text" 
                onChange={e => cambiarNombre(e.target.value)} 
                placeholder="Escribe un nuevo nombre" 
            />
            
            <button type="button" onClick={() => cambiarNombre("VICTOR ROBLES WEB")}>
                Cambiar Nombre
            </button>
        
            <button type="button" onClick={() => {
                console.log("El valor guardado en tu estado es:", nombre);
            }}>
                Mostrar nombre en consola
            </button>

            <h2>Cursos:</h2>
            <ul>
                {
                    cursos.map((curso, indice) => {
                        return (
                            <li key={indice}>
                                {curso}
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}
