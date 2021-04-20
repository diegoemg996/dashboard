import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { Ajustes } from "../pages/Ajustes";
import { Home } from "../pages/Home";
import { Registros } from "../pages/Registros";

export const DashboardRoute = () => {
    return (
        <div className="router-container">
          <Navbar/>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/registros">
              <Registros />
            </Route>
            <Route path="/ajustes">
              <Ajustes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
    )
}
