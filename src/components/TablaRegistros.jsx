import React from 'react';
import { Registro } from './Registro';

export const TablaRegistros = ({registros}) => {
    return (
        <div className="registro-container">
            {
                registros.length > 0 
                ?
                <ul className="registro-lista">
                {registros.map(registro =>(
                    <Registro
                        registro={registro}
                    />
                ))}
                </ul>
                :
                <p>No hay registros</p>
            }    
        </div>
    )
}
