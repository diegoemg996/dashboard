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


    return (
        <ProductosContext.Provider
            value={{
                productos: state.productos,
                obtenerProductos
            }}
        >
            {props.children}
        </ProductosContext.Provider>
    )
}

export default ProductosState;