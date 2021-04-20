import React, { useContext } from 'react'
import sesionContext from '../context/sesion/sesionContext'

export const Registros = () => {

    const {estaLoggeado} = useContext(sesionContext);
    console.log(estaLoggeado)

    return (
        <div>
            {estaLoggeado ? "hola" : "adios"}
        </div>
    )
}
