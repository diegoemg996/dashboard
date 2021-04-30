import React, { useContext, useEffect } from 'react'
import { TablaMovimientos } from '../components/TablaMovimientos'
import productosContext from '../context/productos/productosContext'
import sesionContext from '../context/sesion/sesionContext';

export const Movimientos = () => {

    const {obtenerProductos, productos} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);


    useEffect(() => {
        obtenerProductos(usuarioLoggeado.token)
    }, [])

    return (
        <div>
            <TablaMovimientos/>
            <p>{usuarioLoggeado.token}</p>

            {
                productos.map(producto =>(
                    <li>{producto.nombre}</li>
                ))
            }
        </div>
    )
}
