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
                        <button type="button" id="entrar-button" onClick={handleEntrar}>Entrar</button>
                    </div>

                    <div id="novo-inicio">
                            <Link to="/"><button type="button" id="pagina-inicial">Início</button></Link>
                            <Link to="/Novo-Usuario"><button type="button" id="novo-usuario">Novo</button></Link>
                    </div>

                </form >
            </div >
        </>
    )
}
export default Login