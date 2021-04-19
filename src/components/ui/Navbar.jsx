import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


export const Navbar = () => {

    const history = useHistory();

    const handleRoute = (ruta)=>{
        history.push(`/${ruta}`)
    }

    return (
        <div className="navbar">
            <div className="container-titulo">
                <p>Dashboard</p>
            </div>            
            <ul className="navbar-lista">
                <li onClick={()=>handleRoute('home')}>
                    <i className="fas fa-home nav-icon"></i><Link className="navbar-item" to="/">Home</Link>
                </li>
                <li onClick={()=>handleRoute('registros')}>
                    <i className="fas fa-book nav-icon"></i><Link className="navbar-item" to="/registros">Registros</Link>
                </li>
                <li onClick={()=>handleRoute('ajustes')}>
                    <i class="fas fa-sliders-h nav-icon"></i><Link className="navbar-item" to="/ajustes">Ajustes</Link>
                </li>
            </ul>

            <div className="navbar-logout">
                <p>Cerrar Sesión</p>
            </div>
        </div>
    )
}
