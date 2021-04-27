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

            dispatch({
                type: types.signin
            })

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

            borrarErrores();
            
            console.log(res)
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

    const logout = ()=>{
        dispatch({
            type: types.logout
        })
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
                iniciarSesion
            }}
        >
            {props.children}
        </SesionContext.Provider>
    )
}

export default SesionState;