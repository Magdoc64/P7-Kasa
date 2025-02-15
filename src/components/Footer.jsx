import logoKasaWhite from '../assets/logo-white.png'

const Footer = () => {
    const Copyright = () => {
        return (<p className='footer-copyright'>© 2020 Kasa. All rights reserved</p>)
    }

    return (
        <footer className='footer'>
            <img src={logoKasaWhite} alt = "logo Kasa" className='footer-logo'/>
            <Copyright/>
        </footer>
    )
}

export default Footer