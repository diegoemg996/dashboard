import React from 'react'
import { useHistory } from 'react-router';

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
                <input className="login-input" type="text"/>
                <input className="login-input" type="text"/>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
