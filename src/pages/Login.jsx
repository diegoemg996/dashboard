import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { FormErrors } from '../components/FormErrors';
import { Loading } from '../components/ui/Loading';
import sesionContext from '../context/sesion/sesionContext';
import { useForm } from '../hooks/useForm';

export const Login = () => {

    const [values, handleInputChange] = useForm({
        correo:"",
        password: ""
    });

    const {iniciarSesion, estaLoggeado, erroresForm, borrarErrores} = useContext(sesionContext);
    const [cargando, setCargando] = useState(false)
    const {correo, password} = values;
    const history = useHistory();

    useEffect(() => {
        if(estaLoggeado){
            setCargando(false)
            history.push('/')
        }
    }, [estaLoggeado])

    useEffect(() => {
        if(erroresForm.length > 0){
            setCargando(false)
        }
    }, [erroresForm])


    const handleSubmit = async(e)=>{
        e.preventDefault();
        iniciarSesion(values);
        setCargando(true);
    }

    const handleRouter = ()=>{
        history.push('/login')
        borrarErrores();
    }

    return (
        <div className="login-main">

            {
                cargando ?
                <Loading/>
                :

                <form 
                className="login-form"
                onSubmit={handleSubmit}
            >
                <div className="login-titulo"><p>Iniciar Sesión</p></div>
                <div className="login-container-input">
                    <i className="fas fa-at login-icon"></i>
                    <input 
                        className="login-input" 
                        type="text"
                        placeholder="Correo"
                        name="correo"
                        value={ correo }
                        onChange={ handleInputChange }
                    />
                </div>
                <div className="login-container-input">
                    <i className="fas fa-key login-icon"></i>
                    <input 
                        className="login-input" 
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        value={ password }
                        onChange={ handleInputChange }
                    />
                </div>
                {
                    erroresForm.length > 0 &&
                        <FormErrors
                            errores={erroresForm}
                        />
                }
                <button className="login-button" type="submit">Ingresar</button>
                <p>¿No tienes cuenta? <span className="login-redirect-signin" onClick={()=>{history.push('/signin')}}>Registrate</span></p>
            </form>
            }
        </div>
    )
}
