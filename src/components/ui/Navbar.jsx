import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import sesionContext from '../../context/sesion/sesionContext';


export const Navbar = () => {

    const history = useHistory();

    const {logout, usuarioLoggeado} = useContext(sesionContext);

    const {usuario} = usuarioLoggeado;

    const handleRoute = (ruta)=>{
        history.push(`/${ruta}`)
    }

    const handleLogout = (ruta)=>{
        history.push('/login')
        logout()
    }

    return (
        <div className="navbar">
            <div className="container-titulo">
                <p>Bienvenido, {!!usuario && usuario.nombre}</p>
            </div>            
            <ul className="navbar-lista">
                <li onClick={()=>handleRoute('home')}>
                    <NavLink 
                        exact 
                        className="navbar-item" 
                        to="/home" 
                        activeClassName="selected"
                    ><i className="fas fa-home nav-icon"></i> Home
                    </NavLink>
                </li>
                <li onClick={()=>handleRoute('registros')}>
                    <NavLink 
                        exact 
                        className="navbar-item" 
                        to="/registros" 
                        activeClassName="selected"
                    ><i className="fas fa-book nav-icon"></i> Registros
                    </NavLink>
                </li>
                <li onClick={()=>handleRoute('ajustes')}>
                    <NavLink 
                        exact 
                        className="navbar-item" 
                        to="/ajustes" 
                        activeClassName="selected"
                    > <i className="fas fa-sliders-h nav-icon"></i> Ajustes
                    </NavLink>
                </li>
            </ul>

            <div className="navbar-logout">
                <p onClick={handleLogout}>Cerrar Sesión</p>
            </div>
        </div>
    )
}
