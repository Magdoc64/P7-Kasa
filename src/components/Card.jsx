import {useNavigate, Link} from 'react-router-dom'
import PropTypes from "prop-types"

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
        <Link to={`/logement/${idCard}`} onClick={handleClick}>
            <article className="location-card">
                <img src = {lodge.cover} alt={lodge.title} className="location-card-image"/>
                <h2 className="location-card-titre">{lodge.title}</h2>
            </article>
        </Link>
    )
}

Card.propTypes ={
    lodge: PropTypes.array,
}

export default Card