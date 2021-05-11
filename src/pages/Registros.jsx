import React, { useContext } from 'react'
import sesionContext from '../context/sesion/sesionContext'

export const Registros = () => {

    const {estaLoggeado} = useContext(sesionContext);
    return (
        <div className="pagina-container">
            {estaLoggeado ? "hola" : "adios"}
        </div>
    )
}
