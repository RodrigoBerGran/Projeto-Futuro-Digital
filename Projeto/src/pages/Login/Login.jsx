import './Login.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = () => {
        
    }

    return (
        <>
            <form action="#" id="login">
                <h1>Login</h1>
                <label>Usuário:
                    <input
                        type="text"
                        name="nome"
                        id="usuario"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    /></label>

                <label>Senha:
                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    /></label>

                <button type="button" onClick={handleEntrar}>Entrar</button>
            </form>
            <nav>
            <Link to="/Novo-Usuario">Novo Usuário</Link><br />
            <Link to="/Clientes">Clientes</Link><br />
            <Link to="/">Início</Link>
            </nav>
        </>
    )
}
export default Login