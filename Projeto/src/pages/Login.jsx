import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [tipoMensagem, setTipoMensagem] = useState('')

    //redirecionar após logar
    const navigate = useNavigate()

    const mostrarMensagem = (texto, tipo) => {
        setMensagem(texto)
        setTipoMensagem(tipo)

        setTimeout(() => {
            setMensagem('')
        }, 3000)
    }

    //função assíncrona entrar, e impedir comportamento padrão do navegador
    const handleEntrar = async (e) => {
        e.preventDefault()

        //validação, verifica se usuario e senha foram inputados
        if (!usuario || !senha) {
            mostrarMensagem('Informe usuário e senha', 'erro')
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

            //verifica se a resposta do back, se usuário/senha são válidos
            if (!response.ok) {
                throw new Error('Usuário ou senha inválidos')
            }


            const data = await response.json()

            mostrarMensagem(`Bem-vindo, ${data.usuario.usuario}`, 'sucesso')

            setTimeout(() => {
                navigate('/Clientes')
            }, 1500)


            //se der erro exiba a msg de erro
        } catch (error) {
            mostrarMensagem(error.message, 'erro')
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

                    {mensagem && (
                        <div className={`mensagem ${tipoMensagem}`}>
                            {mensagem}
                        </div>
                    )}


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