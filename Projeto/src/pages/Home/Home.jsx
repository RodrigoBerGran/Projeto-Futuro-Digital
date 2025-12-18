import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <h1>SolarTech</h1>
            <nav>
                <Link to="/Login">Login</Link>
            </nav>
        </>
    )
}
export default Home