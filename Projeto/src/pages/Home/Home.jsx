import './Home.css'
import { Link } from 'react-router-dom'
import SolarTech_Logo from '../../assets/SolarTech_Logo.png'

function Home() {
    return (
        <>
            <div className="home-container">
                <img className="logo" src={SolarTech_Logo} alt="SolarTech Logo" />
                <nav>
                    <Link to="/Login"><button type="button" className="login-button">Login</button></Link>
                </nav>
            </div>
        </>
    )
}
export default Home