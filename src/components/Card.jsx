import { useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import PropTypes from "prop-types"
//import { Link } from 'react-router-dom'

const Card = ({id, title, picture}) => {
    let idCard = id;

    const [lodges,setLodges] = useState([]);

    const page = useNavigate();

    useEffect(() => {
        fetch("../src/data/location.json")
            .then (response => response.json())
            .then (lodges => setLodges(lodges))
            .catch(error=>console.log(error))
        }, [])

    const handleClick = () => {
        
        const currentLodge = lodges.filter(lodge => lodge.id === idCard);
            
        currentLodge.map(lodge => {

            if(typeof(idCard) === 'string' || (typeof(idCard) === 'string' && lodge.id === idCard)){
                page(`/logement/${idCard}`)
            }else{
                page('/Error')
            }
        })
    };

    return (
        <button onClick={handleClick}>
            <article className="location-card">
                <img src = {picture} alt={title} className="location-card-image"/>
                <h2 className="location-card-titre">{title}</h2>
            </article>
        </button>
    )
}



Card.propTypes ={
    id: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string
}

export default Card