// Importar funções/dados/componentes
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UsuariosAPI } from '../services/UsuariosAPI';

// Definir o componente funcional da página "NovoUsuario"
function NovoUsuario() {

    //váriaveis de estado para armazenar os valores dos campos do formulário
    const [nome, setNome] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('') // estado inicial "vazio"

    //variáveis para armazenar as mensagens de sucesso e erro
    const [mensagemSucesso, setMensagemSucesso] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    // "limpar" as msgs de erro/sucesso após 3 segundos
    useEffect(() => {
        if (mensagemErro || mensagemSucesso) {
            const timer = setTimeout(() => {
                setMensagemErro('')
                setMensagemSucesso('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [mensagemErro, mensagemSucesso])


    //função assincrona para lidar com o envio do formulário de cadastro, e prevenir o comportamento padrão do navegador
    const handleCadastrar = async (e) => {
        e.preventDefault()

        //"limpar" as mensagens de erro/sucesso anteriores, antes de tentar novamente
        setMensagemSucesso('')
        setMensagemErro('')

        //validação simples dos campos obrigatórios, com delay de 1 segundo
        if (!nome || !telefone || !senha) {
            setTimeout(() => {
                setMensagemErro('Preencha os campos obrigatórios')
            }, 1000)
            return
        }

        if (senha !== confirmarSenha) {
            setTimeout(() => {
                setMensagemErro('As senhas não coincidem')
            }, 1000)
            return
        }

        //criar o objeto JSON com os dados do novo usuário a ser cadastrado
        const novoUsuario = {
            usuario: nome,
            dataNascimento,
            telefone,
            email,
            senha
        }

        //tentar enviar os dados do novo usuário para o back-end
        try {
            await UsuariosAPI.create(novoUsuario)

            //limpar os campos do formulário e exibir a mensagem de sucesso
            setNome('')
            setDataNascimento('')
            setTelefone('')
            setEmail('')
            setSenha('')
            setConfirmarSenha('')
            setMensagemErro('')
            setMensagemSucesso('Usuário cadastrado com sucesso!')

        } catch (error) { // capturar e exibir a mensagem de erro caso a requisição falhe
            setMensagemSucesso('')
            setMensagemErro(
                error.response?.data?.error ||
                'Erro ao cadastrar usuário'
            )
        }
    }

    // A página em si, o que será exibido para o usuário
    return (
        <>
            <div id="novo-usuario-container">
                <form onSubmit={handleCadastrar} noValidate>

                    <h1><span className="new">Novo</span><span className="person">Usuário</span></h1>

                    {/* função para exibir na tela a mensagem de sucesso */}
                    {mensagemSucesso && (
                        <p className="mensagem-sucesso">{mensagemSucesso}</p>

                    )}

                    {/* função para exibir na tela a mensagem de erro */}
                    {mensagemErro && (
                        <p className="mensagem-erro">{mensagemErro}</p>
                    )}

                    {/* campos do formulário, os "inuts" */}
                    <div className='novo-usuario-input'>
                        <label title="Campo Obrigatório">Nome*
                            <input
                                required
                                type="text"
                                name="nome"
                                id="usuario-nome"
                                placeholder="Nome de Usuário"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            /></label>

                        <label>Data de Nascimento
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
                        <label title="Campo Obrigatório">Telefone*
                            <input
                                required
                                type="tel"
                                name="telefone"
                                id="usuario-telefone"
                                placeholder="(00) 0 0000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            /></label>

                        <label>E-mail
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
                        <label title="Campo Obrigatório">Senha*
                            <input
                                required
                                type="password"
                                name="senha"
                                id="usuario-senha"
                                placeholder="Sua Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            /></label>

                        <label title="Campo Obrigatório">Confirmar Senha*
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

                    {/* botões de ação */}
                    <div className='botoes-grupo'>
                        <Link to="/Login" className="botoes-agrupados">Login</Link>
                        <button type="submit" className="botoes-agrupados">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

//exportar o componente para ser utilizado em outras partes da aplicação
export default NovoUsuario