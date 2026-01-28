// Importar o 'hook' "useState" da biblioteca "react"
import { useState } from 'react'

// importar o componente "Link" da biblioteca "react-router-dom"
import { Link } from 'react-router-dom'

// importar o seerviço "UsuariosAPI" do arquivo "../services/UsuariosAPI" (Mock-end)
import { UsuariosAPI } from '../services/UsuariosAPI';

// Definir o componente funcional "NovoUsuario" (página de cadastro de novo usuário)
function NovoUsuario() {

    //váriaveis "const" paradefinir os estados atuais dos campos do formulário e suas 'funções' de alteração
    const [nome, setNome] = useState('')
    //"nome": nome da váriavel que armazenará o estado "inputado" no campo "Nome:"
    //"setNome": função que altera o estado da variável "nome"
    //"useState('')": define o estado inicial da variável "nome" como vazio

    const [dataNascimento, setDataNascimento] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [mensagemSucesso, setMensagemSucesso] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')

    //função assincrona colocada dentro da constante "handleCadastrar" para lidar com o evento de cadastro do novo usuário (Clicar no botão "cadastrar")
    const handleCadastrar = async (e) => {
        e.preventDefault()
        //"handleCadastrar": nome da constante que armazena a função
        //"async": define a função como assíncrona, permitindo o uso de "await" dentro dela, para aguardar a resposta do servidor (Back-end)
        //"e": parâmetro que representa o evento de submissão do formulário
        //"()=>{}": sintaxe simplificada de atribuição de função JavaScript (arrow function)
        //"e.preventDefault()": método que previne o comportamento padrão do navegador, que é recarregar a página quando o formulário é submetido

        //"limpar" as mensagens de erro/sucesso anteriores, antes de tentar novamente
        setMensagemSucesso('')
        setMensagemErro('')

        //validação simples dos campos obrigatórios
        if (!nome || !email || !senha) {
            return
            //"if": estrutura condicional (ex: "se (tal, coisa, acontece) {faça isso}")"}
            //"!": operador lógico "não" (negação)
            //"||": operador lógico "ou" (disjunção)
            //"return": encerra execução da função atual
        }

        if (senha !== confirmarSenha) {
            return
            //"==": operador de igualdade ampla (compara valores, ignorando tipos de dado)
        }

        //criar o objeto JSON "novoUsuario" com os dados do formulário, para serem enviados para o back-end
        const novoUsuario = {
            nome,
            dataNascimento,
            telefone,
            email,
            senha
        }

        //tentar enviar os dados do novo usuário para o back-end
        try {
            await UsuariosAPI.create(novoUsuario)
            //"try": bloco de código que tenta executar uma ação que pode falhar
            //"await": palavra-chave utilizada para pausar a execução de uma função async até que uma Promise seja resolvida (ou rejeitada), retornando o valor final dela
            //".create": método do serviço "UsuariosAPI" que envia uma requisição para criar um novo usuário no back-end, utilizando os dados do objeto "novoUsuario"

            //limpar o formulário e exibir a mensagem de sucesso
            setNome('')
            setDataNascimento('')
            setTelefone('')
            setEmail('')
            setSenha('')
            setConfirmarSenha('')
            setMensagemErro('')
            setMensagemSucesso('Usuário cadastrado com sucesso!') //define a mensagem de sucesso após o cadastro

        } catch (error) { //"catch": capturar erros que possam ocorrer durante o processo de cadastro
            setMensagemSucesso('')
            setMensagemErro(
                error.response?.data?.error || //define a mensagem de erro recebida do back-end, se houver
                'Erro ao cadastrar usuário'
            ) //define a mensagem de erro caso ocorra algum problema no cadastro
            //"error": 
        }
    }

    return (
        <>
            <div id="novo-usuario-container">
                <form onSubmit={handleCadastrar}>

                    <h1><span className="new">Novo</span><span className="person">Usuário</span></h1>

                    {mensagemSucesso && (
                        <p className="mensagem-sucesso">{mensagemSucesso}</p>
                    )}

                    {mensagemErro && (
                        <p className="mensagem-erro">{mensagemErro}</p>
                    )}

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
                        <button type="submit" onClick={handleCadastrar} className="botoes-agrupados">Cadastrar</button>
                    </div>
                </form>
            </div>
        </>
    )
}
export default NovoUsuario