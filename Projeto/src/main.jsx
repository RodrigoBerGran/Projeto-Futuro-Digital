import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { makeServer } from './mocks/server.js'
import './index.css'
import App from './App.jsx'

// Desenvolvimento
// if (import.meta.env.DEV) {makeServer()}

// Produção
makeServer()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
