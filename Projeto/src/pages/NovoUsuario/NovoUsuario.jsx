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

        // 1. Tranformar os dados "inputados" em JSON:
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
        <div id="novo-usuario-container">
            <form action="#">
                <h1><span className="new">Novo</span><span className="person">Usuário</span></h1>

                <div className='novo-usuario-input'>
                    <label>Nome:
                        <input
                            required
                            type="text"
                            name="nome"
                            id="usuario-nome"
                            placeholder="Nome de Usuário"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        /></label>

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

                <div className='novo-usuario-input'>
                    <label>Telefone:
                        <input
                            type="tel"
                            name="telefone"
                            id="usuario-telefone"
                            placeholder="(00) 0 0000-0000"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                        /></label>

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

                <div className='novo-usuario-input'>
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

                <div className='botoes-grupo'>
                    <Link to="/" className="botoes-agrupados">Início</Link>
                    <button type="button" onClick={handleCadastrar} className="botoes-agrupados">Cadastrar</button>
                </div>
            </form>
            </div>
        </>
    )
}
export default NovoUsuario