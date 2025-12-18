import './NovoUsuario.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    return (
        <>
            <form action="#">
                <h1>Novo Usuário</h1>
                <label>Nome:
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome de Usuário"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    /></label>

                <label>Data de Nascimento:
                    <input
                        type="date"
                        name="dataNascimento"
                        placeholder='dd/mm/aaaa'
                        value={dataNascimento}
                        onChange={(e) => setDataNascimento(e.target.value)}
                    /></label>

                <label>E-mail:
                    <input
                        type="email"
                        name="email"
                        placeholder='nome@exemplo.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /></label>

                <label>Senha:
                    <input
                        type="password"
                        name="senha"
                        placeholder="Sua Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    /></label>

                <label>Confirmar Senha:
                    <input
                        type="password"
                        name="confirmarSenha"
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChange={(e) => setConfirmarSenha(e.target.value)}
                    /></label>

                <button type="button" onClick={casdastrar}>Cadastar</button>
            </form>
            <Link to="/">Início</Link>
        </>
    )
}
export default NovoUsuario