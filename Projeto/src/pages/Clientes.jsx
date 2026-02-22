import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clientes() {

    // estado para armazenar clientes, texto digitado e busca
    const [clientes, setClientes] = useState([])
    const [textoDigitado, setTextoDigitado] = useState('')
    const [busca, setBusca] = useState('')

    // estado para armazenar o cliente que está sendo editado (null se nenhum)
    const [clienteEditando, setClienteEditando] = useState(null)

    // Buscar clientes do mock
    useEffect(() => {
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data.clientes))
    }, [])

    // função para determinar a etiqueta com base no consumo
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
                            const estaEditando = clienteEditando?.id === c.id

                            return (
                                <div key={c.id} className="cliente-item">

                                    {estaEditando ? (

                                        // Modo editar dados
                                        <>
                                            <input
                                                value={clienteEditando.cliente}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        cliente: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                value={clienteEditando.consumo}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        consumo: e.target.value
                                                    })
                                                }
                                            />

                                            <button
                                                onClick={() => {
                                                    // Atualizar no mock
                                                    fetch(`/api/clientes/${c.id}`, {
                                                        method: 'PUT',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify(clienteEditando)
                                                    })

                                                    // Atualizar na tela
                                                    setClientes(clientes.map(cli =>
                                                        cli.id === c.id ? clienteEditando : cli
                                                    ))

                                                    setClienteEditando(null)
                                                }}
                                            >
                                                Salvar
                                            </button>

                                            <button onClick={() => setClienteEditando(null)}>
                                                Cancelar
                                            </button>
                                        </>

                                    ) : (

                                        // Modo exibir dados
                                        <>
                                            <div className="cliente-cabecalho">
                                                <h3>{c.cliente}</h3>

                                                <button
                                                    id="btn-editar"
                                                    title="Editar/Excluir"
                                                    onClick={() => setClienteEditando(c)}
                                                >
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                            </div>

                                            <div>
                                                <h4>Consumo Médio:<span className={`etiqueta ${etiqueta.classe}`}>
                                                    {etiqueta.texto}
                                                </span></h4>
                                                <div className='info-consumo'>• {c.consumo} kWh • R$ {c.valor}</div>
                                            </div>

                                            <div>
                                                <h4 className='info-titulo'>Contatos:</h4>
                                                <div className='info-contato'>• Fone: {c.telefone} • E-mail: {c.email}</div>
                                            </div>

                                            <div>
                                                <h4 className='info-titulo'>Endereço:</h4>
                                                <div className='info-endereco'>• {c.rua} • Nº: {c.numero} • CEP: {c.cep}</div>
                                                <div>• Bairro: {c.bairro} • Cidade: {c.cidade}</div>
                                            </div>
                                        </>
                                    )}
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