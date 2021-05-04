import React, { useReducer } from 'react';
import { types } from '../../types/types';
import apiDB from '../../api/apiDB';
import { ProductosReducer } from './productosReducer';
import ProductosContext from './productosContext';
import axios from 'axios';

const ProductosState = props => {
    const initialState = {
        productos: {}
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ProductosReducer, initialState);

    const obtenerProductos = async(tokenUsuario)=>{

        try {
            const productos = await apiDB.get('/productos', {
                headers:{
                    token: tokenUsuario
                }
            })
            dispatch({
                type: types.obtenerProductos,
                payload: productos.data.productos
            })
        } catch (error) {
        }

    }

    const movimientoProductos = async(tokenUsuario, id, cantidad)=>{

        const headers ={ 
            'Content-Type': 'application/json',
            'Authorization': `${tokenUsuario}`
        }

        try {
            const producto = await apiDB.post(`/movimientos/agregar/${id}`, {
                data:{
                    cantidad
                },
                headers
            })
            console.log(producto)
/*             dispatch({
                type: types.obtenerProductos,
                payload: productos.data.productos
            }) */
        } catch (error) {
            console.log(error.response)
        }

    }


    return (
        <ProductosContext.Provider
            value={{
                productos: state.productos,
                obtenerProductos,
                movimientoProductos
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;