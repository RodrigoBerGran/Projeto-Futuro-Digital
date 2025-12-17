import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import NovoUsuario from './pages/NovoUsuario/NovoUsuario.jsx'
import Cards from './pages/Cards/Cards.jsx'
import NovoCliente from './pages/NovoCliente/NovoCliente.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Novo-Usuario" element={<NovoUsuario />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/Novo-Cliente" element={<NovoCliente />} />
      </Routes>
    </>
  )
}

export default App
