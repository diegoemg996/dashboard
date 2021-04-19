import React from "react";
import AppRouter from "./router/AppRouter";
import  './styles/styles.css'
import SesionState from './context/sesion/sesionState'

export default function App() {
  return (
    <SesionState>
      <AppRouter/>
    </SesionState>
  );
}