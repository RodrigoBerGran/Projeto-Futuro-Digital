import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Clientes() {

    // estado para armazenar clientes, texto digitado e busca
    const [clientes, setClientes] = useState([])
    const [textoDigitado, setTextoDigitado] = useState('')
    const [busca, setBusca] = useState('')

    // estado para armazenar o cliente que está sendo editado (null se nenhum)
    const [clienteEditando, setClienteEditando] = useState(null)

    // estado para controlar a exibição da modal de confirmação
    const [confirmacao, setConfirmacao] = useState(null)
    // null | { tipo: 'salvar' } | { tipo: 'excluir', id: number }

    // Buscar clientes do mock
    useEffect(() => {
        fetch('/api/clientes')
            .then(response => response.json())
            .then(data => setClientes(data.clientes))
    }, [])

    // função para determinar a etiqueta com base no consumo
    function getEtiqueta(consumo) {
        const valor = Number(consumo)

        if (valor <= 299) {
            return { texto: "Baixo", classe: "baixo" }
        } else if (valor <= 999) {
            return { texto: "Médio", classe: "medio" }
        } else if (valor >= 1000) {
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

                    {/* Modal de confirmação de alterações */}
                    {confirmacao && (
                        <div className="modal-overlay">
                            <div className="modal">

                                <p>
                                    {confirmacao.tipo === 'salvar'
                                        ? 'Tem certeza que deseja salvar as alterações?'
                                        : 'Tem certeza que deseja excluir este cliente?'}
                                </p>

                                <div className="modal-botoes">

                                    <button
                                        onClick={() => {

                                            if (confirmacao.tipo === 'salvar') {

                                                fetch(`/api/clientes/${clienteEditando.id}`, {
                                                    method: 'PUT',
                                                    headers: { 'Content-Type': 'application/json' },
                                                    body: JSON.stringify(clienteEditando)
                                                })

                                                setClientes(clientes.map(cli =>
                                                    cli.id === clienteEditando.id
                                                        ? clienteEditando
                                                        : cli
                                                ))

                                                setClienteEditando(null)

                                            } else if (confirmacao.tipo === 'excluir') {

                                                fetch(`/api/clientes/${confirmacao.id}`, {
                                                    method: 'DELETE'
                                                })

                                                setClientes(clientes.filter(
                                                    cli => cli.id !== confirmacao.id
                                                ))
                                            }

                                            setConfirmacao(null)
                                        }}
                                    >
                                        Confirmar
                                    </button>

                                    <button onClick={() => setConfirmacao(null)}>
                                        Cancelar
                                    </button>

                                </div>
                            </div>
                        </div>
                    )}

                    {busca !== '' && clientesFiltrados.length > 0 &&
                        clientesFiltrados.map(c => {

                            const etiqueta = getEtiqueta(c.consumo)
                            const estaEditando = clienteEditando?.id === c.id

                            return (
                                <div key={c.id} className="cliente-item">

                                    {estaEditando && !confirmacao ? (

                                        // Modo editar
                                        <div id="cliente-editar">
                                            <input
                                                title='Nome'
                                                placeholder='Nome'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.cliente}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        cliente: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Consumo'
                                                placeholder='Consumo'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.consumo}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        consumo: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Valor'
                                                placeholder='Valor'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.valor}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        valor: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Telefone'
                                                placeholder='Telefone'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.telefone}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        telefone: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='E-mail'
                                                placeholder='E-mail'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.email}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        email: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Rua'
                                                placeholder='Rua'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.rua}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        rua: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Número'
                                                placeholder='Número'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.numero}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        numero: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='CEP'
                                                placeholder='CEP'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.cep}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        cep: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Bairro'
                                                placeholder='Bairro'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.bairro}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        bairro: e.target.value
                                                    })
                                                }
                                            />

                                            <input
                                                title='Cidade'
                                                placeholder='Cidade'
                                                className='inputs-modo-editar'
                                                value={clienteEditando.cidade}
                                                onChange={(e) =>
                                                    setClienteEditando({
                                                        ...clienteEditando,
                                                        cidade: e.target.value
                                                    })
                                                }
                                            />

                                            <button
                                                onClick={() => setConfirmacao({ tipo: 'salvar' })}
                                            >
                                                Salvar
                                            </button>

                                            <button onClick={() => setClienteEditando(null)}>
                                                Cancelar
                                            </button>
                                        </div>

                                    ) : !confirmacao && (

                                        // Modo exibir dados
                                        <>
                                            <div className="cliente-cabecalho">
                                                <h3>{c.cliente}</h3>
                                                <div className="cliente-acoes">
                                                    <button
                                                        id="btn-editar"
                                                        title="Editar"
                                                        onClick={() => setClienteEditando(c)}
                                                    >
                                                        <i class="fa-solid fa-pen-to-square"></i>
                                                    </button>

                                                    <button
                                                        id="btn-excluir"
                                                        title="Excluir"
                                                        onClick={() => setConfirmacao({ tipo: 'excluir', id: c.id })}
                                                    >
                                                        <i class="fa-regular fa-trash-can"></i>
                                                    </button>
                                                </div>
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