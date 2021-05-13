import React, { useContext, useState } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';

export const AgregarProducto = () => {

    const [showForm, setShowForm] = useState(false);
    const {agregarProducto} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange, reset] = useForm({
        nombre: "",
        bodega: "",
        cantidad: 0
    });

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        agregarProducto(values, usuarioLoggeado.token);
        reset();
    }

    return (
        <div className="agregar-container">
            <button
                className="agregar-boton"
                onClick={()=>{setShowForm(!showForm)}}
            >+</button>

            {
                showForm 
                    &&
                <div className="agregar-form-container">
                                    <form
                    onSubmit={handleSubmit}
                    className="agregar-form"
                >
                    <input 
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={handleInputChange}
                        name="nombre"
                        className="agregar-input"
                    />
                    <input 
                        type="text"
                        placeholder="Bodega"
                        value={bodega}
                        onChange={handleInputChange}
                        name="bodega"
                        className="agregar-input"
                    />
                    <input 
                        type="number"
                        placeholder="Cantidad"
                        value={cantidad}
                        onChange={handleInputChange}
                        name="cantidad"
                        className="agregar-input" 
                    />
                    <input 
                        type="submit" 
                        value="Agregar"
                        className="agregar-input-boton"
                    />
                </form>
                </div>
            } 
        </div>
    )
}
