import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import NovoUsuario from './pages/NovoUsuario/NovoUsuario.jsx'
import Clientes from './pages/Clientes/Clientes.jsx'
import NovoCliente from './pages/NovoCliente/NovoCliente.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/novo-usuario" element={<NovoUsuario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/novo-cliente" element={<NovoCliente />} />
      </Routes>
    </>
  )
}

export default App
