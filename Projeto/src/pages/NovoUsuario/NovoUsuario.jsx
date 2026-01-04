import './NovoUsuario.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function NovoUsuario() {

    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const handleCadastrar = () => {

        // Lógica de cadastro:

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!")
            return
        };

        // 1. Tranformar os dados "inputados" em uma variável do tipo objeto JavaScript:
        let usuarioNovo = {
            nome: nome,
            dataNascimento: dataNascimento,
            telefone: telefone,
            email: email,
            senha: senha
        };

        // 2. Armazenar localmente o objeto JavaScript e converter-lo para JSON:
        localStorage.setItem('dadosUsuario', JSON.stringify(usuarioNovo));
    }

    return (
        <>
            <form id="usuario-container" action="#">
                <h1><spam id="new">Novo</spam> <spam id="user">Usuário</spam></h1>
                <div className='inline'>
                    <div>
                        <label>Nome:
                            <input
                                required
                                type="text"
                                name="nome"
                                id="nome-usuario"
                                placeholder="Nome de Usuário"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>Data de Nascimento:
                            <input
                                type="date"
                                name="dataNascimento"
                                id="usuario-nascimento"
                                placeholder='dd/mm/aaaa'
                                value={dataNascimento}
                                onChange={(e) => setDataNascimento(e.target.value)}
                            /></label>
                    </div>
                </div>

                <div className='inline'>
                    <div>
                        <label>Telefone:
                            <input
                                type="tel"
                                name="telefone"
                                id="usuario-telefone"
                                placeholder="(00) 0 0000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>E-mail:
                            <input
                                type="email"
                                name="email"
                                id="usuario-email"
                                placeholder='nome@exemplo.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            /></label>
                    </div>
                </div>

                <div className='inline'>
                    <div>
                        <label>Senha:
                            <input
                                required
                                type="password"
                                name="senha"
                                id="usuario-senha"
                                placeholder="Sua Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            /></label>
                    </div>

                    <div>
                        <label>Confirmar Senha:
                            <input
                                required
                                type="password"
                                name="confirmarSenha"
                                id="usuario-confirmar-senha"
                                placeholder="Confirmar Senha"
                                value={confirmarSenha}
                                onChange={(e) => setConfirmarSenha(e.target.value)}
                            /></label>
                    </div>
                </div>

                <div className='inline'>
                    <div>
                        <Link to="/"><button type="button" id="inicio-button">Início</button></Link>
                    </div>
                    <div>
                        <button type="button" onClick={handleCadastrar} id="cadastrar-button">Cadastrar</button>
                    </div>
                </div>

            </form>

        </>
    )
}
export default NovoUsuario