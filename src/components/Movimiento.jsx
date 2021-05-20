import React, { useContext } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';
import { addCommas } from '../helpers/addCommas';
import { useHistory } from 'react-router';

export const Movimiento = ({producto}) => {

    const history = useHistory();

    const {movimientoProductos, borrarErroresAgregar} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange, reset] = useForm({
        movimiento: 0
    });

    const {movimiento} = values;
    const handleSuma = ()=>{
        movimientoProductos(usuarioLoggeado.token, producto._id, movimiento);
        Swal.fire(
            'Movimiento exitoso',
            `Se han agregado ${movimiento} kgs a ${producto.nombre}`,
            'success'
        )
        reset();
    }

    const handleResta = ()=>{
        movimientoProductos(usuarioLoggeado.token, producto._id, -movimiento);
        Swal.fire(
            'Movimiento exitoso',
            `Se han disminuido ${movimiento} kgs a ${producto.nombre}`,
            'success'
        )
        reset();
    }

    const handleEdit = (e)=>{
        borrarErroresAgregar();
        history.push(`/editar/${e.target.value}`, producto);  
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
                {addCommas(producto.cantidad)}
            </div>
            <div className="cell">
                <input 
                    type="number"
                    name="movimiento"
                    value={movimiento}
                    onChange={handleInputChange}
                />
                <button
                    className="movimientos-boton"
                    onClick={handleSuma}
                >+</button>
                <button
                    className="movimientos-boton-menos"
                    onClick={handleResta}
                >-</button>
            </div>
            <div className="cell">
                <button
                    onClick={handleEdit}
                    value={producto._id}
                    className="movimientos-editar"
                >Editar</button>
            </div>
        </div>

    )
}
