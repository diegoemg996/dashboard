import React from 'react'

export const FormErrors = ({errores}) => {
    return (
        <>
            <div className="container-errores">
                <ul>
                    {
                        errores.map(error =>(
                            <li>{error.msg}</li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}
