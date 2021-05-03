import React from 'react'

export const Movimiento = ({producto}) => {

    
    return (
        <div className="row">
            <div className="cell">
                {producto.nombre}
            </div>
            <div className="cell">
                {producto.bodega}
            </div>
            <div className="cell">
                {producto.cantidad}
            </div>
        </div>

    )
}
