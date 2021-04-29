import { useContext, useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import sesionContext from "../context/sesion/sesionContext";
import { Login } from "../pages/Login";
import { Signin } from "../pages/Signin";
import { DashboardRoute } from "./DashboardRoute";


  const AppRouter = () => {

    const {actualizarSesion} = useContext(sesionContext);
    
    useEffect(() => {
      const usuario = JSON.parse(localStorage.getItem('usuario'));
      
      !!usuario && actualizarSesion(usuario);
    }, [actualizarSesion])

    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signin" component={Signin}/>
          <Route  path="/" component={DashboardRoute}/>
        </Switch>
      </Router>
    )
  }
   
  export default AppRouter;