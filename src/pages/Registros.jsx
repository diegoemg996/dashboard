import React, { useContext, useEffect, useState } from 'react'
import { TablaMovimientos } from '../components/TablaMovimientos';
import { TablaRegistros } from '../components/TablaRegistros';
import { Loading } from '../components/ui/Loading';
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext'

export const Registros = () => {

    const {obtenerMovimientos, movimientosProducto} = useContext(productosContext);
    const [cargando, setCargando] = useState(false);

    useEffect(()=>{
        movimientosProducto.length > 0 && setCargando(false)
        console.log(1,movimientosProducto)
    },[movimientosProducto]) 


    useEffect(() => {
        obtenerMovimientos();
        setCargando(true);
        console.log(2,movimientosProducto)
    },[]);


    return (
        <div className="pagina-container">
            {
                cargando
                ?
                <Loading/>
                :
                <TablaRegistros
                    registros={movimientosProducto}
                />

            }
            
        </div>
    )
}
