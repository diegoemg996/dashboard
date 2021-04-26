import React, { useReducer } from 'react';
import { types } from '../../types/types';
import SesionContext from './sesionContext';
import {SesionReducer} from './sesionReducer';
import apiDB from '../../api/apiDB';

const SesionState = props => {
    const initialState = {
        estaLoggeado: false,
        erroresForm: []
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

    const borrarErrores = ()=>{
        dispatch({
            type: types.quitarErrores
        })
    }

    return (
        <SesionContext.Provider
            value={{
                estaLoggeado: state.estaLoggeado,
                erroresForm: state.erroresForm,
                registroUsuario,
                borrarErrores
            }}
        >
            {props.children}
        </SesionContext.Provider>
    )
}

export default SesionState;