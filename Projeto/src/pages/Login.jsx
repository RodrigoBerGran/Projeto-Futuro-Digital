import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const handleEntrar = async (e) => {
        e.preventDefault()

        if (!usuario || !senha) {
            alert('Informe usuário e senha')
            return
        }

        try {
            // chamada para API mock (Mirage)
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    usuario,
                    senha
                })
            })

            if (!response.ok) {
                throw new Error('Erro: Usuário ou senha inválidos')
            }


            const data = await response.json()

            alert(`Bem-vindo, ${data.usuario.nome}`)

        } catch (error) {
            alert(error.message)
        }
    }



    return (
        <>
            <div id="login-container">
                <form id="login" onSubmit={handleEntrar}>
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
                        <button type="submit" className="botoes-agrupados">Entrar</button>
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