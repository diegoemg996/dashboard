import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import apiDB from '../api/apiDB';
import { FormErrors } from '../components/FormErrors';
import { useForm } from '../hooks/useForm';

export const Login = () => {

    const [values, handleInputChange] = useForm({
        correo:"",
        password: ""
    });

    const [errores, setErrores] = useState([])

    const {correo, password} = values;
    const history = useHistory();

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try {
            const res =  await apiDB.post('/auth/login', {
                correo,
                password,
                rol: 'USER_ROLE'
            })         
        } catch (error) {
            setErrores(error.response.data.errors)
            console.log(errores)
        }


    }

    return (
        <div className="login-main">
            <form 
                className="login-form"
                onSubmit={handleSubmit}
            >
                <div className="login-titulo"><p>Login</p></div>
                <div className="login-container-input">
                    <i className="fas fa-user login-icon"></i>
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
                    errores.length > 0 &&
                    errores.map(error =>(
                        <FormErrors
                            error={error}
                        />
                    ))
                }
                <button className="login-button" type="submit">Ingresar</button>
                <p>¿No tienes cuenta? <span className="login-redirect-signin" onClick={()=>{history.push('/signin')}}>Registrate</span></p>
            </form>
        </div>
    )
}
