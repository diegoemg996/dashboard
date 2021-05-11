

export const addCommas = (numero) => {
    const nuevoNumero = numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return nuevoNumero;
}
