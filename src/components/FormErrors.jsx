import React from 'react'

export const FormErrors = ({errores, tipo}) => {
    return (
        <>
            <div className={tipo === "agregar" ? "container-errores-agregar" : "container-errores"}>
                <ul>
                    {
                        errores.map(error =>(
                            <li key={error.msg}>{error.msg}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
