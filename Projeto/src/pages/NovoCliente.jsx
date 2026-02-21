// imports
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClientesAPI } from '../services/ClientesAPI';

// componente funcional
function NovoCliente() {

    // variáveis de estado para armazenar os valores dos campos do formulário
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [consumo, setConsumo] = useState('')
    const [conta, setConta] = useState('')
    const [mensagemSucesso, setMensagemSucesso] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    // fazer as mensgens de erro/sucesso sumirem depois de 3 segundos
    useEffect(() => {
        if (mensagemErro || mensagemSucesso) {
            const timer = setTimeout(() => {
                setMensagemErro('')
                setMensagemSucesso('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [mensagemErro, mensagemSucesso])

    // verificar se os campos obrigatórias estão preenchidos
    const handleCadastrar = async (e) => {
        e.preventDefault()

        setMensagemSucesso('')
        setMensagemErro('')

        // se não estão, exiba essa msg após 1 segundo
        if (!nome || !telefone) {
            setTimeout(() => {
                setMensagemErro('Preencha todos os campos obrigatórios')
            }, 1000)
            return
        }

        // criar o objeto JSON com os dados do novo cliente a ser cadastrado
        const clienteNovo = {
            nome,
            telefone,
            email,
            rua,
            numero,
            cep,
            bairro,
            cidade,
            consumo,
            conta
        }

        // tentar cadastrar o cliente usando a API, e exibir a mensagem de sucesso ou erro
        try {
            await ClientesAPI.create(clienteNovo)
            setMensagemSucesso('Cliente Cadastrado com Sucesso!')

            setNome('')
            setTelefone('')
            setEmail('')
            setRua('')
            setNumero('')
            setCep('')
            setBairro('')
            setCidade('')
            setConsumo('')
            setConta('')

        } catch (error) { // deu ruim? exiba essa msg
            setMensagemSucesso('')
            setMensagemErro(
                error.response?.data?.error ||
                'Erro ao cadastrar cliente'
            )
        }
    }

    // a página
    return (
        <>
            {/* formulário */}
            <div>
                <form id="NovoCliente" onSubmit={handleCadastrar} noValidate>
                    <h1><span className="new">Novo</span><span className="person">Cliente</span></h1>

                    {/* define onde as msgs de sucesso/erro aparecem */}
                    {mensagemSucesso && (
                        <p className="mensagem-sucesso">{mensagemSucesso}</p>
                    )}

                    {mensagemErro && (
                        <p className="mensagem-erro">{mensagemErro}</p>
                    )}

                    {/* "caixa" com os "inputs" */}
                    <div>
                        <label title="Campo Obrigatório">Nome*
                            <input
                                required
                                type="text"
                                name="nome"
                                placeholder="Nome Completo"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            /></label>

                        <label title="Campo Obrigatório">Telefone*
                            <input
                                required
                                type="tel"
                                inputMode="numeric"
                                name="telefone"
                                placeholder="(00) 0 0000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>E-mail
                            <input
                                type="email"
                                name="email"
                                placeholder="nome@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /></label>

                        <label>Rua
                            <input
                                type="text"
                                name="rua"
                                placeholder="Nome da Rua"
                                value={rua}
                                onChange={(e) => setRua(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>Número
                            <input
                                type="text"
                                inputMode="numeric"
                                name="numero"
                                placeholder="1234"
                                value={numero}
                                onChange={(e) => setNumero(e.target.value)}
                            /></label>

                        <label>CEP
                            <input
                                type="text"
                                inputMode="numeric"
                                name="cep"
                                placeholder="99999-999"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>Bairro
                            <input
                                type="text"
                                name="bairro"
                                placeholder="Nome do Bairro"
                                value={bairro}
                                onChange={(e) => setBairro(e.target.value)}
                            /></label>

                        <label>Cidade
                            <input
                                type="text"
                                name="cidade"
                                placeholder="Nome da Cidade"
                                value={cidade}
                                onChange={(e) => setCidade(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>Consumo Médio (kWh)
                            <input
                                type="number"
                                name="consumo"
                                placeholder="1234"
                                value={consumo}
                                onChange={(e) => setConsumo(e.target.value)}
                            /></label>

                        <label>Conta de Energia (R$)
                            <input
                                type="number"
                                name="conta"
                                placeholder="1234.56"
                                value={conta}
                                onChange={(e) => setConta(e.target.value)}
                            /></label>
                    </div>

                    {/* botões de ação */}
                    <div className='botoes-grupo'>
                        <Link to="/Clientes" className="botoes-agrupados">Buscar</Link>
                        <button type="submit" className="botoes-agrupados">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

// exportar o componente
export default NovoCliente