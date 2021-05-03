import React from 'react'
import { Movimiento } from './Movimiento'


export const TablaMovimientos = ({producto}) => {


    return (
        <div className="wrapper">
  
            <div className="table">
                <div className="row header">
                    <div className="cell">
                        Nombre
                    </div>
                    <div className="cell">
                        Bodega
                    </div>
                    <div className="cell">
                        Cantidad
                    </div>
                    <div className="cell">
                        Movimientos
                    </div>
                </div>
                
                     {
                        producto.length>0 &&
                        producto.map(item =>(
                            <Movimiento
                                producto={item}
                                key={item._id}
                            />
                        ))
                    }                 
            </div>
        </div>
    )
}
