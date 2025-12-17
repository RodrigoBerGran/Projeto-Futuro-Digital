import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import NovoUsuario from './pages/NovoUsuario/NovoUsuario.jsx'
import Leads from './pages/Leads/Leads.jsx'
import Dashboards from './pages/Dashboards/Dashboards.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/NovoUsuario" element={<NovoUsuario />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Dashboards" element={<Dashboards />} />
      </Routes>
    </>
  )
}

export default App
