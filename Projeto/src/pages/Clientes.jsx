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

    function getEtiqueta(consumo) {
        const valor = Number(consumo)

        if (valor <= 300) {
            return { texto: "Baixo", classe: "baixo" }
        } else if (valor <= 1000) {
            return { texto: "Médio", classe: "medio" }
        } else if (valor >= 1001) {
            return { texto: "Alto", classe: "alto" }
        } 
    }

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
                                setTextoDigitado('') // limpar o input
                            }
                        }}
                    />

                    <button
                        className="btn-busca"
                        onClick={() => {
                            setBusca(textoDigitado)
                            setTextoDigitado('')
                        }}
                    >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                <div id="cliente-card">

                    {busca !== '' && clientesFiltrados.length > 0 &&
                        clientesFiltrados.map((c) => {

                            const etiqueta = getEtiqueta(c.consumo)

                            return (
                                <div key={c.id} className="cliente-item">
                                    <h3>{c.cliente}</h3>

                                    <span className={`etiqueta ${etiqueta.classe}`}>
                                        {etiqueta.texto}
                                    </span>

                                    <div className="cliente-info">
                                        <span><strong>Consumo:</strong> {c.consumo} kWh</span>
                                        <span><strong>Valor:</strong> R$ {c.valor}</span>
                                        <span><strong>Telefone:</strong> {c.telefone}</span>
                                        <span><strong>Email:</strong> {c.email}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {busca !== '' && clientesFiltrados.length === 0 && (
                        <p>Nenhum cliente encontrado.</p>
                    )}

                </div>

                <nav className="botoes-nav">
                    <Link to="/" className="btn-nav">Início</Link>
                    <Link to="/Novo-Cliente" className="btn-nav">Novo</Link>
                </nav>

            </div >
        </>
    )
}
export default Clientes