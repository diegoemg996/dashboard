import { useHistory, useLocation } from 'react-router';
import React, { useContext } from 'react'
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

export const Editar = () => {
    const {state} = useLocation();
    const history = useHistory();

    const {editarProducto, borrarProducto} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);

    const [values, handleInputChange, reset] = useForm({
        nombre: state.nombre,
        bodega: state.bodega,
        cantidad: state.cantidad
    });

    const {nombre, bodega, cantidad} = values;

    const handleSubmit = (e) =>{
        e.preventDefault();
        editarProducto(values, usuarioLoggeado.token, state._id);
        Swal.fire(
            'Movimiento exitoso',
            `Se ha modificado ${state.nombre}`,
            'success'
        )
        history.push('/');   
    }

    const handleDelete = (e)=>{
        e.preventDefault();
        Swal.fire({
            title: `¿Seguro qué quieres eliminar ${state.nombre}`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Eliminar`,
            denyButtonText: `No Eliminar`,
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Eliminado Correctamente', '', 'success')
              borrarProducto(state._id, usuarioLoggeado.token)
              history.push('/');
            } else if (result.isDenied) {
              Swal.fire('No se ha eliminado', '', 'error')
            }
          })
    }

    return (
        <div className="pagina-container">
            <div className="form-edit">
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
                        onClick={handleDelete}
                    >Borrar</button>
                </form>
                </div>
        </div>
    )
}
