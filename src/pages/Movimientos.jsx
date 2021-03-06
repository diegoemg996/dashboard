import React, { useContext, useEffect, useState } from 'react'
import { AgregarProducto } from '../components/AgregarProducto';
import { TablaMovimientos } from '../components/TablaMovimientos'
import { Loading } from '../components/ui/Loading';
import productosContext from '../context/productos/productosContext'
import sesionContext from '../context/sesion/sesionContext';

export const Movimientos = () => {

    const {obtenerProductos, productos} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);
    const [cargando, setCargando] = useState(false);

    useEffect(()=>{
        productos.length > 0 && setCargando(false)
        console.log(productos)
    },[productos])

    useEffect(() => {
        obtenerProductos(usuarioLoggeado.token)
        setCargando(true)
        console.log(productos)
    }, [])


    return (
        <div className="pagina-container">

            <AgregarProducto/>
            
            {
                cargando 
                ?
                <Loading/>
                :
                <TablaMovimientos
                    producto={productos}
                />
            }

        </div>
    )
}
