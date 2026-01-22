import { useState } from 'react'
import { Link } from 'react-router-dom'

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

    const handleCadastrar = async () => {

        const clienteNovo = {
            nome: nome,
            telefone: telefone,
            email: email,
            rua: rua,
            numero: numero,
            cep: cep,
            bairro: bairro,
            cidade: cidade,
            consumo: consumo,
            conta: conta
        };

        try {

            const resposta = await fetch('/api/clientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(clienteNovo),
            });

            if (!resposta.ok) {
                throw new Error("Erro ao cadastrar cliente.");
            }

            alert("Cliente cadastrado com sucesso!");
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <form id="NovoCliente">
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
                            type="number"
                            name="numero"
                            placeholder="1234"
                            value={numero}
                            onChange={(e) => setNumero(e.target.value)}
                        /></label>

                    <label>CEP:
                        <input
                            type="number"
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
                    <button type="button" className="botoes-agrupados" onClick={handleCadastrar}>Cadastrar</button>
                </div>
            </form>
        </>
    )
}
export default NovoCliente