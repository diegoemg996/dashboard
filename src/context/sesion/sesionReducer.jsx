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
        case types.logout:
            return{
                ...state,
                estaLoggeado: false
            }
        case types.login:
            return{
                ...state,
                estaLoggeado: true,
                usuarioLoggeado: action.payload
            }
        
        default:
            return state;
    }
}