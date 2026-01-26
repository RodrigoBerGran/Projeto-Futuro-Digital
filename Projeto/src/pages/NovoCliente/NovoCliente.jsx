import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ClientesAPI } from '../services/ClientesAPI';

function NovoCliente() {

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

    const handleCadastrar = async (e) => {
        e.preventDefault()

        if (!nome || !telefone) {
            alert('Preencha todos os campos obrigatórios')
            return
        }

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

        try {
            await ClientesAPI.create(clienteNovo)
            alert('Cliente cadastrado com sucesso!')

            //limpar formulário
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

        } catch (error) {
            alert(
                error.response?.data?.error ||
                'Erro ao cadastrar cliente'
            )
        }
    }

    return (
        <>
            <form id="NovoCliente" onSubmit={handleCadastrar}>
                <h1><span className="new">Novo</span><span className="person">Cliente</span></h1>
                <div>
                    <label>Nome:
                        <input
                            required
                            type="text"
                            name="nome"
                            placeholder="Nome Completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        /></label>

                    <label>Telefone:
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
                    <label>E-mail:
                        <input
                            type="email"
                            name="email"
                            placeholder="nome@exemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        /></label>

                    <label>Rua:
                        <input
                            type="text"
                            name="rua"
                            placeholder="Nome da Rua"
                            value={rua}
                            onChange={(e) => setRua(e.target.value)}
                        /></label>
                </div>

                <div>
                    <label>Número:
                        <input
                            type="text"
                            inputMode="numeric"
                            name="numero"
                            placeholder="1234"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        /></label>

                    <label>CEP:
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
                    <label>Bairro:
                        <input
                            type="text"
                            name="bairro"
                            placeholder="Nome do Bairro"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                        /></label>

                    <label>Cidade:
                        <input
                            type="text"
                            name="cidade"
                            placeholder="Nome da Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        /></label>
                </div>

                <div>
                    <label>Consumo Médio (kWh):
                        <input
                            type="number"
                            name="consumo"
                            placeholder="1234"
                            value={consumo}
                            onChange={(e) => setConsumo(e.target.value)}
                        /></label>

                    <label>Conta de Energia (R$):
                        <input
                            type="number"
                            name="conta"
                            placeholder="1234.56"
                            value={conta}
                            onChange={(e) => setConta(e.target.value)}
                        /></label>
                </div>

                <div className='botoes-grupo'>
                    <Link to="/" className="botoes-agrupados">Início</Link>
                    <button type="submit" className="botoes-agrupados">Cadastrar</button>
                </div>
            </form>
        </>
    )
}
export default NovoCliente