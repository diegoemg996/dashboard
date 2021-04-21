import React from 'react'
import { useHistory } from 'react-router-dom';

export const Login = () => {
    const history = useHistory();

    const handleSubmit = ()=>{
        history.push('/')
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
                        placeholder="Usuario"
                    />
                </div>
                <div className="login-container-input">
                    <i className="fas fa-key login-icon"></i>
                    <input 
                        className="login-input" 
                        type="text"
                        placeholder="Contraseña"
                    />
                </div>
                <button className="login-button" type="submit">Ingresar</button>
                <p>¿No tienes cuenta? <span>Registrate</span></p>
            </form>
        </div>
    )
}
