import './Login.css'
import { useState } from 'react'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <>
            <form action="#">
                <h1>Login</h1>
                <label>Usuário:
                    <input
                        type="text"
                        name="nome"
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    /></label>

                <label>Senha:
                    <input
                        type="password"
                        name="senha"
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    /></label>

                <button type="button">Entrar</button>
            </form>
        </>
    )
}
export default Login