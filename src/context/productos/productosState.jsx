import React, { useReducer } from 'react';
import { types } from '../../types/types';
import apiDB from '../../api/apiDB';
import { ProductosReducer } from './productosReducer';
import ProductosContext from './productosContext';


const ProductosState = props => {
    const initialState = {
        productos: {}
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ProductosReducer, initialState);

    const obtenerProductos = async()=>{

        try {
            const productos = await apiDB.get('/productos')
            dispatch({
                type: types.obtenerProductos,
                payload: productos.data.productos
            })
        } catch (error) {
        }

    }

    const movimientoProductos = async(tokenUsuario, id, cantidad)=>{

        console.log(tokenUsuario, id, parseFloat(cantidad))
        const numeroCantidad = parseFloat(cantidad);

        try {
            const productos = await apiDB.post(`/movimientos/agregar/${id}`,{cantidad:numeroCantidad}, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            console.log(productos)
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }
    }

    const agregarProducto = async(valores, tokenUsuario)=>{

        try {
            const productos = await apiDB.post(`/productos`,valores, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            console.log(productos)
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }

    }

    const editarProducto = async(valores, tokenUsuario, id)=>{

        console.log(valores, tokenUsuario, id);

        try {
            const productos = await apiDB.put(`/productos/${id}`,valores, {
                headers:{
                    'Authorization' : tokenUsuario
                }
            })
            console.log(productos)
            obtenerProductos()
        } catch (error) {
            console.log(error.response);
        }

    }


    return (
        <ProductosContext.Provider
            value={{
                productos: state.productos,
                obtenerProductos,
                movimientoProductos,
                agregarProducto,
                editarProducto
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;