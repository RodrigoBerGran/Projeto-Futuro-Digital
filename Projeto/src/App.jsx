import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Leads from './pages/Leads.jsx'
import Dashboards from './pages/Dashboards.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Leads" element={<Leads />} />
        <Route path="/Dashboards" element={<Dashboards />} />
      </Routes>
    </>
  )
}

export default App
