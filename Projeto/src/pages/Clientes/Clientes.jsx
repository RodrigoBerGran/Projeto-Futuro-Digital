import { Link } from 'react-router-dom'
import { useState } from 'react'

function Clientes() {
  const [clientes, setClientes] = useState([])

    return (
        <>
            <h1>Clientes</h1>
            <input type="search" placeholder="Buscar Cliente" />



            <nav>
                <Link to="/Novo-Cliente">Novo Cliente</Link><br />
                <Link to="/">Início</Link>
            </nav>
        </>
    )
}
export default Clientes