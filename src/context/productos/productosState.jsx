import React, { useReducer } from 'react';
import { types } from '../../types/types';
import SesionContext from './sesionContext';
import {SesionReducer} from './sesionReducer';
import apiDB from '../../api/apiDB';
import { ProductosReducer } from './productosReducer';
import ProductosContext from './productosContext';

const ProductoState = props => {
    const initialState = {
        productos: {}
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(ProductosReducer, initialState);

    const obtenerProductos = ()=>{
        dispatch({
            type: types.obtenerProductos
        })
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

export default SesionState;