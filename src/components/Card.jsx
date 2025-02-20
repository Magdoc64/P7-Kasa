import {useNavigate} from 'react-router-dom'
import PropTypes from "prop-types"
//import ErrorPage from '../pages/Error/Error.jsx'

const Card = ({lodge}) => {
    let idCard = lodge.id;
    const page = useNavigate();

    const handleClick = () => {
        if(typeof(idCard) === 'string' || (typeof(idCard) === 'string' && lodge.id === idCard)){
            page(`/logement/${idCard}`)
        }else{
            page('*')
        }
    };

    return (
        <button onClick={handleClick}>
            <article className="location-card">
                <img src = {lodge.cover} alt={lodge.title} className="location-card-image"/>
                <h2 className="location-card-titre">{lodge.title}</h2>
            </article>
        </button>
    )
}

Card.propTypes ={
    lodge: PropTypes.array,
}

export default Card