import './NovoCliente.css'
import { useState } from 'react'

function NovoCliente() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [consumo, setConsumo] = useState('')
    const [conta, setConta] = useState('')


    return (
        <>
            <form>
                <h1>Clientes</h1>
                <label>Nome:
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome Completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /></label>

                <label>Telefone:
                    <input
                        type="number"
                        name="telefone"
                        placeholder="(99)99999-9999"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    /></label>

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

                <label htmlFor="estado">Estado (UF):</label>
                <select
                    name="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                >
                    <option value="">Selecione o Estado</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                </select>

                <label htmlFor="consumo">Consumo Médio (kWh):</label>
                <select
                    name="consumo"
                    placeholder="1234"
                    value={consumo}
                    onChange={(e) => setConsumo(e.target.value)}
                >
                    <option value="">Selecione o Consumo</option>
                    <option value="basico">1-300 kWh</option>
                    <option value="premium">301-1000 kWh</option>
                    <option value="investor">1001-5000 kWh</option>
                </select>

                <label>Conta de Energia (R$):
                    <input
                        type="number"
                        name="conta"
                        placeholder="1234.56"
                        value={conta}
                        onChange={(e) => setConta(e.target.value)}
                    /></label>

                <button type="button">Cadastrar</button>
            </form>
        </>
    )
}
export default NovoCliente