import './Clientes.css'
import { Link } from 'react-router-dom'

function Clientes() {
    return (
        <>
            <h1>Clientes</h1>
            <nav>
                <Link to="/Novo-Cliente">Novo Cliente</Link><br />
                <Link to="/">Início</Link>
            </nav>
        </>
    )
}
export default Clientes