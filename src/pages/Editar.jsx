import React from 'react'
import { useLocation } from 'react-router';

export const Editar = () => {
    const {state} = useLocation();

    console.log(state)
    return (
        <div className="pagina-container">
            <p>{state.nombre}</p>
        </div>
    )
}
