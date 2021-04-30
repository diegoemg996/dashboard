import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { Ajustes } from "../pages/Ajustes";
import { Movimientos } from "../pages/Movimientos";
import { Registros } from "../pages/Registros";

export const DashboardRoute = () => {
    return (
        <div className="router-container">
          <Navbar/>
          <Switch>
            <Route path="/movimientos">
              <Movimientos />
            </Route>
            <Route path="/registros">
              <Registros />
            </Route>
            <Route path="/ajustes">
              <Ajustes />
            </Route>
            <Redirect to="/movimientos"/>

          </Switch>
        </div>
    )
}
