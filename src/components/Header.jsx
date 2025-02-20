import logoKasa from '../assets/LOGO.png'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
    <header className='header'>
        <img src = {logoKasa} alt = 'logo Kasa' className='header-logo'/>
        <nav className='header-nav'>
            <Link to="/" className='header-nav-item header-nav-item-active' id='accueil'>Accueil</Link>
            <Link to="/a-propos" className='header-nav-item' id='apropos'>A propos</Link>
        </nav>
    </header>)
}

export default Header