import React from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import apiDB from '../api/apiDB';


export const Signin = () => {

    const [values, handleInputChange] = useForm({
        nombre: "",
        correo: "",
        password: "",
        repitePassword: ""
    });

    const {nombre, correo, password, repitePassword} = values;

    const history = useHistory();

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            const res =  await apiDB.post('/usuarios', {
                nombre,
                correo,
                password,
                rol: 'USER_ROLE'
            })
            console.log(res);            
        } catch (error) {
            console.log(error)
        }

        history.push('/')
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
                <button className="login-button" type="submit">Registrate</button>
                <p>¿Ya tienes cuenta? <span className="login-redirect-signin" onClick={()=>{history.push('/login')}}>Inicia Sesión</span></p>
            </form>
        </div>
    )
}
