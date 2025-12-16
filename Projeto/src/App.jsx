import { useState, useEffect } from 'react'
import { Routes, Route, Links } from 'react-router-dom'
import './App.css'
import Dashboards from './pages/Dashboards.jsx'
import Leads from './pages/Leads.jsx'
import Login from './pages/Login.jsx'

function App() {

  return (
    <>
    <Leads />
      <Routes>
        <Route path="/Dashboards" element={<Dashboards />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
