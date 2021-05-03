import React, { useReducer } from 'react';
import { types } from '../../types/types';
import SesionContext from './sesionContext';
import {SesionReducer} from './sesionReducer';
import apiDB from '../../api/apiDB';

const SesionState = props => {
    const initialState = {
        estaLoggeado: false,
        erroresForm: [],
        usuarioLoggeado: {}
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(SesionReducer, initialState);

    const registroUsuario = async (datos) =>{

        try {
            const res =  await apiDB.post('/usuarios', {
                ...datos,
                rol: 'USER_ROLE'
            })

            const usuario = {...res.data}

            dispatch({
                type: types.signin,
                payload: usuario

            })

            localStorage.setItem('usuario', JSON.stringify(usuario));

            borrarErrores();

        } catch (error) {
            dispatch({
                type: types.errores,
                payload: error.response.data.errors
            })
        } 
    }

    const iniciarSesion = async(datos) =>{
        try {
            const res =  await apiDB.post('/auth/login', {
                ...datos
            })

            const usuario = {...res.data}

            dispatch({
                type: types.login,
                payload: usuario
            })

            localStorage.setItem('usuario', JSON.stringify(usuario));

            borrarErrores();
        } catch (error) {

             dispatch({
                type: types.errores,
                payload: error.response.data.errors
            })
        }

    }

    const borrarErrores = ()=>{
        dispatch({
            type: types.quitarErrores
        })
    }

    const actualizarSesion = (usuario)=>{
        dispatch({
            type: types.login,
            payload: usuario
        })
    }

    const logout = ()=>{
        dispatch({
            type: types.logout
        })
        localStorage.removeItem('usuario')
    }

    return (
        <SesionContext.Provider
            value={{
                estaLoggeado: state.estaLoggeado,
                erroresForm: state.erroresForm,
                usuarioLoggeado: state.usuarioLoggeado,
                registroUsuario,
                borrarErrores,
                logout,
                iniciarSesion,
                actualizarSesion
            }}
        >
            {props.children}
        </SesionContext.Provider>
    )
}

export default SesionState;