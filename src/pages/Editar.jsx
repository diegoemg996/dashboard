import { useLocation } from 'react-router';
import React, { useContext } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';

export const Editar = () => {
    const {state} = useLocation();

    const {editarProducto} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange, reset] = useForm({
        nombre: state.nombre,
        bodega: state.bodega,
        cantidad: state.cantidad
    });

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(values, usuarioLoggeado.token, state._id);
        editarProducto(values, usuarioLoggeado.token, state._id);
        
    }

    return (
        <div className="pagina-container">
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
                        value="Editar"
                        className="agregar-input-boton"
                    />
                    <button
                        className="editar-borrar-boton"
                    >Borrar</button>
                </form>
                </div>
        </div>
    )
}
