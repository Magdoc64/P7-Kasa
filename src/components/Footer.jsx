import logoKasaWhite from '../assets/logo-white.png'

const Footer = () => {
    
    return (
        <footer className='footer'>
            <img src={logoKasaWhite} alt = "logo Kasa" className='footer-logo'/>
            <p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer