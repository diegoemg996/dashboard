import { types } from "../../types/types";


export const SesionReducer = (state, action) => {
    switch(action.type) {
        case types.signin:
            return {
                ...state,
                estaLoggeado: true
            }
        case types.errores:
            return{
                ...state,
                estaLoggeado: false,
                erroresForm: action.payload
            }
        case types.quitarErrores:
            return{
                ...state,
                erroresForm: []
            }
        
        default:
            return state;
    }
}