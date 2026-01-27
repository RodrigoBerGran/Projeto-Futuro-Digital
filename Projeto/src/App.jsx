import { Routes, Route } from 'react-router-dom'
import { UsuariosAPI } from './services/UsuariosAPI.js'
import { ClientesAPI } from './services/ClientesAPI.js'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Usuarios from './pages/Usuarios.jsx'
import NovoUsuario from './pages/NovoUsuario.jsx'
import Clientes from './pages/Clientes.jsx'
import NovoCliente from './pages/NovoCliente.jsx'

ClientesAPI.getAll();
UsuariosAPI.getAll();

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/novo-usuario" element={<NovoUsuario />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/novo-cliente" element={<NovoCliente />} />
      </Routes>
    </>
  )
}

export default App
