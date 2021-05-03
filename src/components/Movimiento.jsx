import React from 'react'
import { useForm } from '../hooks/useForm';

export const Movimiento = ({producto}) => {

    const [values, handleInputChange] = useForm({
        movimiento: 0
    });

    const {movimiento} = values;
    const handleSuma = ()=>{

    }

    const handleResta = ()=>{
        
    }
    
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
            <div className="cell">
                <input 
                    type="text"
                    name="movimiento"
                    value={movimiento}
                    onChange={handleInputChange}
                />
                <button
                    onClick={handleSuma}
                >+</button>
                <button
                    onClick={handleResta}
                >-</button>
            </div>
        </div>

    )
}
