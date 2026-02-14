import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clientes() {

    // estado para armazenar clientes, texto digitado e busca
    const [clientes, setClientes] = useState([])
    const [textoDigitado, setTextoDigitado] = useState('')
    const [busca, setBusca] = useState('')


    // Buscar clientes do mock
    useEffect(() => {
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data.clientes))
    }, [])

    // Filtrar clientes apenas após clicar
    const clientesFiltrados = clientes.filter((c) =>
        c.cliente.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <>
            <div id="cliente-container">
                <div>
                    <input
                        id="cliente-busca"
                        type="search"
                        placeholder="Buscar Cliente"
                        value={textoDigitado}
                        onChange={(e) => setTextoDigitado(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                setBusca(textoDigitado)
                            }
                        }}
                    />

                    <button
                        onClick={() => setBusca(textoDigitado)}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div id="cliente-card">
                    <ul>
                        {busca !== '' && clientesFiltrados.length > 0 && (
                            clientesFiltrados.map((c) => (
                                <li key={c.id}>
                                    <strong>{c.cliente}</strong><br />
                                    {c.consumo} kWh <br />
                                    R$ {c.valor} <br />
                                    {c.telefone} <br />
                                    {c.email} <br />
                                </li>
                            ))
                        )}

                        {busca !== '' && clientesFiltrados.length === 0 && (
                            <p>Nenhum cliente encontrado.</p>
                        )}
                    </ul>
                </div>

                <nav className="botoes-nav">
                    <Link to="/" className="btn-nav">Início</Link>
                    <Link to="/Novo-Cliente" className="btn-nav">Novo</Link>
                </nav>

            </div>
        </>
    )
}
export default Clientes