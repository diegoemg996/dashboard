
export const SesionReducer = (state, action) => {
    switch(action.type) {
        case "TAREAS_PROYECTO":
            return {
                ...state
            }
        
        default:
            return state;
    }
}