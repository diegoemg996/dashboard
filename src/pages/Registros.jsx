import React, { useContext, useEffect, useState } from 'react'
import { Loading } from '../components/ui/Loading';
import productosContext from '../context/productos/productosContext';
import sesionContext from '../context/sesion/sesionContext'

export const Registros = () => {

    const {obtenerMovimientos, movimientosProducto} = useContext(productosContext);
    const {usuarioLoggeado} = useContext(sesionContext);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        obtenerMovimientos()
        setCargando(true)
    },[]);

    useEffect(()=>{
        movimientosProducto.length > 0 && setCargando(false)
    },[movimientosProducto]) 


    return (
        <div className="pagina-container">
{/*               {
                cargando && movimientosProducto > 0
                ?
                <Loading/>
                :
                movimientosProducto.map(producto =>(
                    <p>{` Se han retirado  kgs de `}</p>
                ))
            }   */}
            
        </div>
    )
}
