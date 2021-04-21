import React, { useReducer } from 'react';
import SesionContext from './sesionContext';
import {SesionReducer} from './sesionReducer';

const SesionState = props => {
    const initialState = {
        estaLoggeado: false
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(SesionReducer, initialState);

    return (
        <SesionContext.Provider
            value={{
                estaLoggeado: state.estaLoggeado
            }}
        >
            {props.children}
        </SesionContext.Provider>
    )
}

export default SesionState;