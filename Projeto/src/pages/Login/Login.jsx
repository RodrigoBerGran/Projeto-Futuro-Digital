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
            <div id="container-login">
                <form action="#" id="login">

                    <div>
                        <h1>Login</h1>
                    </div>
                    <hr />
                    <div>
                        <input
                            type="text"
                            name="nome"
                            id="usuario"
                            placeholder="Usuário"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            name="senha"
                            id="senha"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <div>
                        <button type="button" onClick={handleEntrar}>Entrar</button>
                    </div>

                    <nav>
                        <Link to="/Novo-Usuario">Novo Usuário</Link>
                        <Link to="/">Início</Link>
                    </nav>
                </form>
            </div>
        </>
    )
}
export default Login