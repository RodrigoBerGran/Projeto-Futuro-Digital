import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clientes() {

    const [clientes, setClientes] = useState([])
    const [busca, setBusca] = useState('')

    // Buscar clientes do mock
    useEffect(() => {
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data.clientes))
    }, [])

    // Função para normalizar texto (remover acentos e converter para minúsculas)
    const normalizar = (texto) =>
        texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()

    // Filtrar pelo campo "cliente"
    const clientesFiltrados = clientes.filter((c) =>
        normalizar(c.cliente).includes(normalizar(busca))
    )

    return (
        <>
            <h1>Clientes</h1>

            <div>
                <input
                    type="search"
                    placeholder="Buscar Cliente"
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                />

                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>


            <ul>
                {clientesFiltrados.map((c) => (
                    <li key={c.id}>
                        {c.cliente} - {c.telefone}
                    </li>
                ))}
            </ul>

            <nav>
                <Link to="/Novo-Cliente">Novo Cliente</Link><br />
                <Link to="/">Início</Link>
            </nav>
        </>
    )
}
export default Clientes