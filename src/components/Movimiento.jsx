import React, { useContext } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';

export const Movimiento = ({producto}) => {

    const {movimientoProductos} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange] = useForm({
        movimiento: 0
    });

    const {movimiento} = values;
    const handleSuma = ()=>{
        movimientoProductos(usuarioLoggeado.token, producto._id, movimiento)
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
