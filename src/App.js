import React from "react";
import AppRouter from "./router/AppRouter";
import  './styles/styles.css'
import SesionState from './context/sesion/sesionState'
import ProductosState from './context/productos/productosState'

export default function App() {
  return (
    <ProductosState>
      <SesionState>
        <AppRouter/>
      </SesionState>
    </ProductosState>

  );
}