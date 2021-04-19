import React, { useContext } from 'react'
import sesionContext from '../context/sesion/sesionContext'

export const Registros = () => {

    const context = useContext(sesionContext);

    return (
        <div>
           <p>{estaLoggeado}</p> 
        </div>
    )
}
