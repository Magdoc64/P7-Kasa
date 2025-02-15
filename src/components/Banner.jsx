import PropTypes from "prop-types"
import '../styles/banner.css'
    
const Banner = ({image, title, description}) => {
    return(
        <div className="titre-banner">
            <img src = {image} alt = {description} className='titre-banner-photo'/>
            {title && <h1 className='titre-banner-text'>{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Banner