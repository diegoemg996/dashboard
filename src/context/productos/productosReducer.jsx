import { types } from "../../types/types";


export const ProductosReducer = (state, action) => {
    switch(action.type) {
        case types.obtenerProductos:
            return {
                ...state,
                productos: action.payload
            }
        case types.erroresAgregar:
            return{
                ...state,
                erroresAgregar: action.payload
            }
        case types.borrarErroresAgregar:
            return{
                ...state,
                erroresAgregar: {}
            }

        default:
            return state;
    }
}