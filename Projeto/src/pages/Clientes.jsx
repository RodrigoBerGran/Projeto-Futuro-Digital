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
            <div>
                <input
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

            <div className="botoes-grupo">
                <Link to="/Novo-Cliente" className="botoes-agrupados">Novo</Link><br />
                <Link to="/" className="botoes-agrupados">Início</Link>
            </div>
        </>
    )
}
export default Clientes