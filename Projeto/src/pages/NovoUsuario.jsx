// Importar o 'hook' "useState" e "useEffect" da biblioteca "react"
import { useState, useEffect } from 'react'

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
    // estes sáo iguais ao explicado acima, poiis tambem são "inputs" do formulário

    //variáveis para armazenar as mensagens de sucesso e erro
    const [mensagemSucesso, setMensagemSucesso] = useState('')
    const [mensagemErro, setMensagemErro] = useState('')
    //neste caso faz com que as mensagens de erro/sucesso não apareçam inicialmente, pois estão vazias

    //explicações pendentes
    useEffect(() => {
        if (mensagemErro || mensagemSucesso) {
            const timer = setTimeout(() => {
                setMensagemErro('')
                setMensagemSucesso('')
            }, 3000)

            return () => clearTimeout(timer)
        }
    }, [mensagemErro, mensagemSucesso])


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
        if (!nome || !telefone || !senha) {
            setTimeout(() => { //delay para exibir a mensagem de erro
                setMensagemErro('Erro: Preencha todos os campos obrigatórios')
            }, 1000)
            return
            //"if": estrutura condicional (ex: "se (tal, coisa, acontece) {faça isso}")"}
            //"!": operador lógico "não" (negação)
            //"||": operador lógico "ou" (disjunção)
            //"return": encerra execução da função atual
        }

        if (senha !== confirmarSenha) {
            setTimeout(() => {
                setMensagemErro('As senhas não coincidem')
            }, 1000)
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

            //limpar os campos do formulário e exibir a mensagem de sucesso
            setNome('')
            setDataNascimento('')
            setTelefone('')
            setEmail('')
            setSenha('')
            setConfirmarSenha('')
            setMensagemErro('')
            setMensagemSucesso('Usuário cadastrado com sucesso!') //define (set) a mensagem de sucesso após o cadastro

        } catch (error) { //"catch": capturar erros que possam ocorrer durante o processo de cadastro
            setMensagemSucesso('')
            setMensagemErro(
                error.response?.data?.error || //define a mensagem de erro recebida do back-end, se houver
                'Erro ao cadastrar usuário'
            ) //define a mensagem de erro caso ocorra algum problema no cadastro
            //"error": objeto nativo do JS que contém informações sobre o erro ocorrido
        }
    }

    //"return": retorna o JSX que define a estrutura visual da página
    return (
        <> {/* "<>": abertura do 'fragmento', permite agrupar múltiplos elementos JSX sem criar um elemento HTML extra */}

            <div id="novo-usuario-container"> {/* "div": cria uma "caixa" para os elementos */}
                { /* "elemento": estrutura básica de um documento, ex: <TagDeAbertura>Conteúdo do Elemento</TagDeFechamento>. É a estrutura básica do HTML */}

                <form onSubmit={handleCadastrar} noValidate>
                    {/* "<form>": abertura da tag do formulário */}
                    {/* "onSubmit={}": ativa o evento de enviar o formulário */}
                    {/* "handleCadastrar": nome da função criada lá em cima  */}
                    {/* "noValidate": desativa a validação padrão do navegador, permitindo a validação personalizada */}

                    <h1><span className="new">Novo</span><span className="person">Usuário</span></h1>
                    {/* "<h1>": tag do título principal, pode ir até o 'h6" */}
                    {/* "<span>": tag genérica para agrupar elementos dentro de outros elementos HTML sem quebrar a linha */}
                    {/* "className=": define a qual classe CSS o elemento pertence  */}

                    {/* função para exibir na tela a mensagem de sucesso */}
                    {mensagemSucesso && (
                        // "mensagemSucesso": nome da variável criada lá no inicio que armazenará a mensagem (exibição condicional da mensagem) de sucesso "setada" logo acima
                        // "&&": operador lógico "e/and" (conjunção)
                        // se for colocado/setado um valor diferente do estado inicial da variável "mensagemSucesso" (que é vazio), a mensagem de sucesso definida no 'useState' logo acima será exibida

                        <p className="mensagem-sucesso">{mensagemSucesso}</p>
                        // "<p>": tag que define um parágrafo
                        // transforma a mensagem de erro definida logo acima em um paragráfo

                    )}

                    {/* função para exibir na tela a mensagem de erro */}
                    {mensagemErro && (
                        <p className="mensagem-erro">{mensagemErro}</p>
                    )}

                    <div className='novo-usuario-input'>
                        <label title="Campo Obrigatório">Nome* {/* "<label>": dá o >nome< ao input, e deixa o conteúdo inteiro 'clicável', também auxilia na acessibilidade */}
                            <input // "<input">: on de o usuário insere dados
                                required // "required": atributo que tona o campo obrigatório
                                type="text" // "type=": define o tipo de dado que deve ser inserido no input, neste caso, texto (string)
                                name="nome" // "name=: define o nome do "input", usado para identificar o campo no envio do formulário
                                id="usuario-nome" // "id=": define o identificado único do campo
                                placeholder="Nome de Usuário" // "placeholder=": define o texto de exemplo que aparece dentro do campo
                                value={nome} // "value={}": vincula o valor deste input à váriavel de estado "nome" criado lá no ínicio
                                onChange={(e) => setNome(e.target.value)} // "onChange={}": evento que é disparado quando o valor do input muda
                            // "(e)=>{}": função arrow que recebe o evento "e" como parâmetro
                            // "setNome(e.target.value)": chama a função "setNome" para atualizar o estado da variável "nome" com o novo valor digitado no input
                            /></label>

                        <label>Data de Nascimento
                            <input
                                type="date" // tipo de dado: data
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
                                type="tel" //tipo de dado: telefone
                                name="telefone"
                                id="usuario-telefone"
                                placeholder="(00) 0 0000-0000"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            /></label>

                        <label>E-mail
                            <input
                                type="email"
                                name="email" //tipo de dado: e-mail
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
                                type="password" //tipo de dado: senha (oculta os caracteres digitados)
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

                    <div className='botoes-grupo'>
                        <Link to="/" className="botoes-agrupados">Início</Link> {/* Componente "Link" que redireciona para a página inicial ("/") */}
                        <button type="submit" className="botoes-agrupados">Cadastrar</button>
                        {/* "<button>": cria um botão clicável */}
                        {/* "type="submit"": define o tipo do botão como "submit", que envia o formulário */}
                    </div>
                </form>
            </div>
        </> /* "</>": fechamento do 'fragmento' */
    )
}
export default NovoUsuario //exportar o componente "NovoUsuario" que pode ser utilizado em outras partes do aplicativo