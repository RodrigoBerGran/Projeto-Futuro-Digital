import './Leads.css'
import { useState } from 'react'

function Leads() {

    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('') 
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')

    return (
        <>
            <h1>Clientes</h1>
            <label>Nome: 
                <input
                type="text"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                /></label>

            <label>Telefone: 
                <input
                type="number"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                /></label>

            <label>E-mail: 
                <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                /></label>

            <label>Rua: 
                <input
                type="text"
                name="rua"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                /></label>

            <label>Número: 
                <input
                type="number"
                name="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                /></label>

            <label>CEP: 
                <input
                type="number"
                name="cep"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                /></label>

            <label>Bairro: 
                <input
                type="text"
                name="bairro"
                value={bairro}
                onChange={(e) => setBairro(e.target.value)}
                /></label>

            <label>Cidade: 
                <input
                type="text"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                /></label>

            <label>Estado: 
                <input
                type="text"
                name="estado"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                /></label>

            <button type="button">Cadastrar</button>
        </>
    )
}
export default Leads