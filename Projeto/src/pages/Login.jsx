import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = async () => {

    }

    return (
        <>
            <div id="login-container">
                <form action="#" id="login">
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
                        <button type="button" className="botoes-agrupados" onClick={handleEntrar}>Entrar</button>
                    </div>

                    <div className="botoes-grupo">
                        <Link to="/" className="botoes-agrupados">Início</Link>
                        <Link to="/Novo-Usuario" className="botoes-agrupados">Novo</Link>
                    </div>
                </form >
            </div >
        </>
    )
}
export default Login