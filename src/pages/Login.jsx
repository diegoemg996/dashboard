import React from 'react'
import { useHistory } from 'react-router-dom';
import apiDB from '../api/apiDB';
import { useForm } from '../hooks/useForm';

export const Login = () => {

    const [values, handleInputChange] = useForm({
        correo:"",
        password: ""
    });

    const {correo, password} = values;
    const history = useHistory();

    const handleSubmit = async(e)=>{

        e.preventDefault();

        try {
            const res = await fetch('https://vyana-db.herokuapp.com/api/auth/login', {
                method: "post",
                body: JSON.stringify({
                    correo,
                    password
                })
            })
            console.log(res)
        } catch (error) {
            console.log(error)
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
                <button className="login-button" type="submit">Ingresar</button>
                <p>¿No tienes cuenta? <span className="login-redirect-signin" onClick={()=>{history.push('/signin')}}>Registrate</span></p>
            </form>
        </div>
    )
}
