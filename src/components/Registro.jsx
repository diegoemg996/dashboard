import React from 'react'
import moment from 'moment';
export const Registro = ({registro}) => {
    return (
        <li>
            {`Se han 
                ${registro.tipo === "entrada" ? "agregado" : "retirado"}
                ${registro.cantidad >= 0 ? registro.cantidad : registro.cantidad*-1 } kgs de 
                ${registro.producto.nombre} el dia
                ${moment(registro.fecha).format('LLL')}`
            }
        </li>
    )
}
