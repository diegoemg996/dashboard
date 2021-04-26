import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { FormErrors } from '../components/FormErrors';
import sesionContext from '../context/sesion/sesionContext';


export const Signin = () => {

    const [values, handleInputChange] = useForm({
        nombre: "",
        correo: "",
        password: "",
        repitePassword: ""
    });

    const {nombre, correo, password, repitePassword} = values;

    const {registroUsuario, estaLoggeado, erroresForm, borrarErrores} = useContext(sesionContext)

    const history = useHistory();

    useEffect(() => {
        if(estaLoggeado){
            history.push('/')
        }
    }, [estaLoggeado])


    const handleSubmit = async (e)=>{
        e.preventDefault();
        registroUsuario({nombre,correo, password})

    }

    const handleRouter = ()=>{
        history.push('/login')
        borrarErrores();
    }

    return (
        <div className="login-main">
            <form 
                className="login-form"
                onSubmit={handleSubmit}
            >
                <div className="login-titulo"><p>Registro</p></div>
                <div className="login-container-input">
                    <input 
                        className="login-input" 
                        type="text"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="login-container-input">
                    <input 
                        className="login-input" 
                        type="text"
                        placeholder="Correo"
                        name="correo"
                        value={correo}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="login-container-input">
                    <input 
                        className="login-input" 
                        type="text"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="login-container-input">
                    <input 
                        className="login-input"
                        type="text"
                        placeholder="Repite Contraseña"
                        name="repitePassword"
                        value={repitePassword}
                        onChange={handleInputChange}
                    />
                </div>
                {
                    erroresForm.length > 0 &&
                        <FormErrors
                            errores={erroresForm}
                        />
                }
                <button className="login-button" type="submit">Registrate</button>
                <p>¿Ya tienes cuenta? <span className="login-redirect-signin" onClick={handleRouter}>Inicia Sesión</span></p>
            </form>
        </div>
    )
}
