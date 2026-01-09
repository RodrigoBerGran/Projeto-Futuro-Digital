import { Link } from 'react-router-dom'

function Clientes() {

    let usuarioArmazenado = localStorage.getItem('dadosUsuario');
    let objetoRecuperado = JSON.parse(usuarioArmazenado);
    console.log(objetoRecuperado.nome);

    return (
        <>
            <h1>Clients</h1>
            <input type="search" placeholder="Buscar Cliente" />
            <nav>
                <Link to="/Novo-Cliente">Novo Cliente</Link><br />
                <Link to="/">Início</Link>
            </nav>
        </>
    )
}
export default Clientes