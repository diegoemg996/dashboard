import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { FormErrors } from '../components/FormErrors';
import sesionContext from '../context/sesion/sesionContext';
import { Loading } from '../components/ui/Loading';


export const Signin = () => {

    const [values, handleInputChange] = useForm({
        nombre: "",
        correo: "",
        password: "",
    });

    const {nombre, correo, password} = values;

    const {registroUsuario, estaLoggeado, erroresForm, borrarErrores} = useContext(sesionContext)
    const [cargando, setCargando] = useState(false)

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


    const handleSubmit = async (e)=>{
        e.preventDefault();
        setCargando(true);
        registroUsuario(values)

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
                    <div className="login-titulo"><p>Registro</p></div>
                    <div className="login-container-input">
                        <i className="fas fa-user login-icon"></i>
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
                        <i className="fas fa-at login-icon"></i>
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
                        <i className="fas fa-key login-icon"></i>
                        <input 
                            className="login-input" 
                            type="text"
                            placeholder="Contraseña"
                            name="password"
                            value={password}
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

            }
        </div> 
    )
}
