import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <section className='erreur'>
            <h1 className='erreur-titre'>404</h1>
            <p className='erreur-text'>Oups! La page que vous demandez n&apos;existe pas</p>
            <Link to="/" className='erreur-lien'>Retourner sur la page d&apos;accueil</Link>
        </section>
    )
}
export default ErrorPage