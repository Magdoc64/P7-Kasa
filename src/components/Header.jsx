import logoKasa from '../assets/LOGO.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <img src = {logoKasa} alt = 'logo Kasa' className='header-logo'/>
            <nav className='header-nav'>
                <NavLink to="/" className='header-nav-item' id='accueil'>Accueil</NavLink>
                <NavLink to="/a-propos" className='header-nav-item' id='apropos'>A propos</NavLink>
            </nav>
        </header>)
}

export default Header