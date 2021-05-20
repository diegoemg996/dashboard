import React, { useContext, useState } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';
import { FormErrors } from './FormErrors';

export const AgregarProducto = () => {

    const [showForm, setShowForm] = useState(false);
    const {agregarProducto,  erroresAgregar, borrarErroresAgregar} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange, reset] = useForm({
        nombre: "",
        bodega: "",
        cantidad: 0
    });

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        borrarErroresAgregar();
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

            {
                erroresAgregar.length > 0 
                    &&
                <FormErrors
                    errores ={ erroresAgregar}
                    tipo={"agregar"}
                />
            }

        </div>
    )
}
